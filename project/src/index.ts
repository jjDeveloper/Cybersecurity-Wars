// Define TypeScript classes for game entities
class Player {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor() {
        this.x = 50;
        this.y = 50;
        this.width = 20;
        this.height = 20;
        this.speed = 5;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}

class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private player: Player;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
        this.player = new Player();

        window.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    update() {
        // Implement game logic and update player
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render player
        this.context.fillStyle = 'blue';
        this.context.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    handleKeyPress(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp':
                this.player.moveUp();
                break;
            case 'ArrowDown':
                this.player.moveDown();
                break;
            case 'ArrowLeft':
                this.player.moveLeft();
                break;
            case 'ArrowRight':
                this.player.moveRight();
                break;
        }
    }

    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }

    start() {
        this.gameLoop();
    }
}