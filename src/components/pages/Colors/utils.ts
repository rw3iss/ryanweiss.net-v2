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

        // Check if all characters are valid hex digits and length is correct
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
            return `rgba(${r},${g},${b},${(a ? parseFloat(a).toFixed(2) : '1.00')})`;
        }
    }
    return null;
}
export function parseColors(text: string, combineSimilar: boolean = false): { color: string; modifiedColor: string }[] {
    const hexRegexes = [
        /#(?:[0-9a-fA-F]{8})(?=[,\s;]|$)/gi, // 8 characters
        /#(?:[0-9a-fA-F]{6})(?=[,\s;]|$)/gi, // 6 characters
        /#(?:[0-9a-fA-F]{3})(?=[,\s;]|$)/gi  // 3 characters
    ];
    const rgbRegex = /rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)(?=[,\s;]|$)/gi;
    const colors: { color: string; modifiedColor: string }[] = [];

    // Process hex colors from longest to shortest
    for (const regex of hexRegexes) {
        let match;
        while ((match = regex.exec(text)) !== null) {
            const hexColor = match[0];
            if (isValidColor(hexColor)) {
                const normalized = normalizeColor(hexColor);
                if (normalized && !colors.some(c => c.color.toLowerCase() === hexColor.toLowerCase())) {
                    colors.push({ color: hexColor, modifiedColor: normalized });
                }
            }
        }
    }

    // Process RGB/RGBA colors
    let match;
    while ((match = rgbRegex.exec(text)) !== null) {
        const rgbColor = match[0];
        if (isValidColor(rgbColor)) {
            const normalized = normalizeColor(rgbColor);

            // Check uniqueness based on the original color string or modified color based on combineSimilar setting
            const uniquenessCheck = combineSimilar
                ? !colors.some(c => c.modifiedColor.toLowerCase() === normalized!.toLowerCase())
                : !colors.some(c => c.color.toLowerCase() === rgbColor.toLowerCase());

            if (normalized && uniquenessCheck) {
                colors.push({ color: rgbColor, modifiedColor: normalized });
            }
        }
    }

    return colors;
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