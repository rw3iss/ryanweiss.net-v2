type ResizeOptions = {
    handles?: ('top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right')[];
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    onResize?: (width: number, height: number) => void;
};

export function makeResizable(container: HTMLElement, options: ResizeOptions = {}) {
    // Remove existing handles
    container.querySelectorAll('.resize-handle').forEach(handle => handle.remove());

    // Default options
    const {
        handles = ['right', 'bottom', 'bottom-right'],
        maxWidth = Infinity,
        maxHeight = Infinity,
        minWidth = 100,
        minHeight = 100,
        onResize = () => { }
    } = options;

    let resizing = false;
    let resizeDirection: string | null = null;
    let startX = 0, startY = 0;
    let startWidth = 0, startHeight = 0;

    function createHandle(position: string) {
        const handle = document.createElement('div');
        handle.classList.add('resize-handle', `resize-${position}`);
        handle.addEventListener('mousedown', (e) => startResizing(e, position));
        container.appendChild(handle);
    }

    function startResizing(event: MouseEvent, direction: string) {
        resizing = true;
        resizeDirection = direction;
        startX = event.clientX;
        startY = event.clientY;

        // Capture initial dimensions to prevent sudden jumps
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;

        event.preventDefault();
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResizing);
    }

    function resize(event: MouseEvent) {
        if (!resizing || !resizeDirection) return;

        let newWidth = startWidth;
        let newHeight = startHeight;

        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        if (resizeDirection.includes('right')) {
            newWidth = Math.min(Math.max(startWidth + deltaX, minWidth), maxWidth);
        }
        if (resizeDirection.includes('left')) {
            newWidth = Math.min(Math.max(startWidth - deltaX, minWidth), maxWidth);
        }
        if (resizeDirection.includes('bottom')) {
            newHeight = Math.min(Math.max(startHeight + deltaY, minHeight), maxHeight);
        }
        if (resizeDirection.includes('top')) {
            newHeight = Math.min(Math.max(startHeight - deltaY, minHeight), maxHeight);
        }

        container.style.width = `${newWidth}px`;
        container.style.height = `${newHeight}px`;

        onResize(newWidth, newHeight);
    }

    function stopResizing() {
        resizing = false;
        resizeDirection = null;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
    }

    // Add handles based on config
    handles.forEach(handle => createHandle(handle));
}

export function getWindowSize(): { width: number; height: number } {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return { width, height };
}
