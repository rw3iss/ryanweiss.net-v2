export function hexToRgba(hex: string): string | null {
    let r = 0, g = 0, b = 0, a = 1;

    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7 || hex.length === 9) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
        if (hex.length === 9) {
            a = parseInt(hex.slice(7, 9), 16) / 255;
        }
    } else {
        return null;
    }

    return `rgba(${r},${g},${b},${a.toFixed(2)})`;
}

export function isValidColor(color: string): boolean {
    // Helper function to check if a string is a number within a range
    const isNumberInRange = (num: string, min: number, max: number): boolean => {
        const n = Number(num);
        return !isNaN(n) && n >= min && n <= max;
    };

    // Check for hex color
    if (color.startsWith('#')) {
        const hexChars = color.slice(1);
        return /^[0-9A-Fa-f]+$/.test(hexChars) && [3, 6, 8].includes(hexChars.length);
    }

    // Check for RGB or RGBA
    const rgbPattern = /^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)$/;
    const match = color.match(rgbPattern);
    if (match) {
        const [, r, g, b, a] = match;
        if (!isNumberInRange(r, 0, 255) || !isNumberInRange(g, 0, 255) || !isNumberInRange(b, 0, 255)) {
            return false;
        }
        if (a !== undefined) {
            const alpha = parseFloat(a);
            return !isNaN(alpha) && alpha >= 0 && alpha <= 1;
        }
        return true;
    }

    return false;
}

export function normalizeColor(color: string): string | null {
    if (color.startsWith('#')) {
        return hexToRgba(color);
    } else {
        const match = color.match(/^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)$/);
        if (match) {
            const [, r, g, b, a] = match;
            return `rgba(${r},${g},${b},${a ? parseFloat(a).toFixed(2) : '1.00'})`;
        }
    }
    return null;
}

export function parseColors(text: string): { color: string; modifiedColor: string }[] {
    const colors: { color: string; modifiedColor: string }[] = [];

    // Regex to match hex colors, RGB, and RGBA
    const colorRegex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})|rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)/gi;

    // Extract all matches
    let match;
    while ((match = colorRegex.exec(text)) !== null) {
        const color = match[0];
        if (isValidColor(color)) {
            const normalized = normalizeColor(color);
            if (normalized && !colors.some(c => c.modifiedColor.toLowerCase() === normalized.toLowerCase())) {
                colors.push({ color: color, modifiedColor: normalized });
            }
        }
    }

    return colors;
}

interface ColorWithPosition {
    color: string;
    modifiedColor: string;
    line: number;
    start: number;
    end: number;
}

export function parseColorsWithPosition(text: string): ColorWithPosition[] {
    const lines = text.split('\n');
    const colorsWithPosition: ColorWithPosition[] = [];
    const regex = /(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})|rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\))/gi;

    lines.forEach((line, lineIndex) => {
        let match;
        while ((match = regex.exec(line)) !== null) {
            const color = match[0];
            if (isValidColor(color)) {
                const start = match.index;
                const end = start + color.length;
                const normalized = normalizeColor(color) || color; // Use original if normalization fails
                colorsWithPosition.push({
                    color: color,
                    modifiedColor: normalized,
                    line: lineIndex,
                    start: start,
                    end: end
                });
            }
        }
    });

    // Sort by line number, then by character position, in reverse order for replacement
    return colorsWithPosition.sort((a, b) => {
        if (a.line !== b.line) return b.line - a.line;
        return b.start - a.start;
    });
}

export function replaceColors(text: string, colors: ColorWithPosition[]): string {
    const lines = text.split('\n');

    colors.forEach(color => {
        const line = lines[color.line];
        if (line) {
            lines[color.line] = line.slice(0, color.start) +
                formatColor(color.color, color.modifiedColor) +
                line.slice(color.end);
        }
    });

    return lines.join('\n');
}


export function formatColor(color: string, modifiedColor: string): string {
    // Determine the original format and convert modifiedColor accordingly
    if (color.startsWith('#')) {
        return modifiedColor; // Assuming modifiedColor is in hex format
    } else if (color.startsWith('rgb')) {
        // Convert rgba to rgb if necessary
        if (modifiedColor.startsWith('rgba')) {
            return modifiedColor.replace(/rgba\((.+?),[\d.]+\)/, 'rgb($1)');
        }
        return modifiedColor;
    } else if (color.startsWith('rgba')) {
        return modifiedColor; // Already in rgba format
    }
    return modifiedColor; // Fallback
}

export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve(e.target!.result as string);
            };
            reader.readAsText(file);
        } catch (e) {
            reject(e)
        }
    });
}

export const readFileFromEvent = async (event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files[0]) {
        const file = target.files[0];
        return await readFile(file);
    }
    return null;
}