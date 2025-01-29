
// Set the canvas width and height

// Define the data for the events
export const events = [
    {
        category: 'work',
        name: 'Meeting with John',
        notes: 'Discussed project XYZ',
        tags: ['project'],
        time: new Date('2022-01-01T12:00:00')
    }, {
        category: 'work',
        name: 'Meeting with Bob',
        notes: 'Discussed project XYZ',
        tags: ['project'],
        time: new Date('2022-01-04T12:00:00')
    },
    {
        category: 'work',
        name: 'Meeting with Jane',
        notes: 'Discussed project XYZ',
        tags: ['project'],
        time: new Date('2022-01-09T13:00:00')
    },
    {
        category: 'personal',
        name: 'Birthday party',
        notes: 'Celebrating my birthday',
        tags: ['party'],
        time: new Date('2022-01-12T17:00:00')
    },
    {
        category: 'personal',
        name: 'Birthday party',
        notes: 'Celebrating my birthday',
        tags: ['party'],
        time: new Date('2022-01-11T17:00:00')
    },
    {
        category: 'other',
        name: 'Something Other',
        notes: 'Notes',
        tags: ['something'],
        time: new Date('2022-01-03T13:00:00')
    }
    // ... more events here
];


// Define the colors for each category
const categories = {
    'work': '#3498db',
    'personal': '#e74c3c',
    'other': '#2ecc71'
};

// Get the canvas element
export class Timeline {
    canvas: HTMLCanvasElement | null = null;
    ctx: CanvasRenderingContext2D | null = null;

    constructor(private container: HTMLElement, private events: Array<{}>) {
        this.init()
        if (this.events) this.drawTimeline();
    }

    init() {
        if (!this.container) throw new Error("No container for timeline.");
        this.canvas = document.createElement("canvas");
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        // Set the canvas width and height to match the container
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;

        console.log(`container`, this.container.offsetWidth, this.container.offsetHeight)

        // Set the canvas background color to black
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.bindEvents();
    }


    bindEvents() {
        // Add event listeners for zooming and hovering over events
        this.canvas.addEventListener('wheel', (event) => {
            const delta = event.deltaY * -1;

            // Scale the canvas by a factor of 0.9 or 1.1 depending on the direction of the scroll
            if (delta > 0) {
                this.ctx.scale(0.9, 0.9);
            } else {
                this.ctx.scale(1.1, 1.1);
            }

            // Redraw the timeline with the new scale
            this.drawTimeline();
        });

        this.canvas.addEventListener('mousemove', (event) => {
            const x = event.clientX - this.canvas.offsetLeft;
            const y = event.clientY - this.canvas.offsetTop;

            // Check if the mouse is over an event circle
            events.forEach((event) => {
                const eventX = Math.floor((event.time - new Date('2022-01-01T00:00:00')) / (365 * 24 * 60 * 60 * 1000));
                const eventY = Math.floor(event.category);

                if (x >= eventX - 10 && x <= eventX + 10 && y >= eventY - 10 && y <= eventY + 10) {
                    // Show the hover popup with the event details
                    const popup = document.createElement('div');
                    popup.textContent = `${event.name}: ${event.notes}`;
                    popup.style.position = 'absolute';
                    popup.style.left = `${x + 10}px`;
                    popup.style.top = `${y - 20}px`;
                    this.canvas.appendChild(popup);
                }
            });
        });
    }

    // Define a function to calculate the x position for an event based on its time
    getXPosition(event) {
        return Math.floor((event.time - new Date('2022-01-01T00:00:00')) / (365 * 24 * 60 * 60 * 1000)) + 10;
    }

    // Draw the timeline
    drawTimeline() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Loop through each event and draw it on the canvas
        this.events.forEach((event) => {
            const x = this.getXPosition(event);
            const y = Math.floor(event.category);

            // Draw the circle for the event
            this.ctx.beginPath();
            this.ctx.arc(x, y, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = categories[event.category];
            this.ctx.fill();

            // Add a label for the event
            const label = document.createElement('span');
            label.textContent = event.name;
            label.style.position = 'absolute';
            label.style.left = `${x}px`;
            label.style.top = `${y - 10}px`;
            this.canvas.appendChild(label);
        });
    }
}
