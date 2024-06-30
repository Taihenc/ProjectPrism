import * as PIXI from 'pixi.js';

export default abstract class Node {
    protected sprite: PIXI.Graphics;
    protected x: number;
    protected y: number;
    protected id: string;

    constructor(x: number, y: number, id: string = crypto.randomUUID()) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.sprite = new PIXI.Graphics();
    }

    public setPos(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.sprite.position.set(x, y);
    }

    public getPos() {
        return { x: this.x, y: this.y };
    }

    public getId() {
        return this.id;
    }
}
