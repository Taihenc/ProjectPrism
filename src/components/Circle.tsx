import * as PIXI from 'pixi.js';
import React, { useCallback } from 'react';
import { Graphics } from '@pixi/react';
import { Graphics as PixiGraphics } from '@pixi/graphics'


interface CircleNodeProps {
    x: number;
    y: number;
    radius: number;
    color: number;
}

const CircleNodeComponent: React.FC<CircleNodeProps> = (CircleNodeProps) => {
    const draw = useCallback((g: PixiGraphics) => {
        g.clear();
        g.beginFill(CircleNodeProps.color);
        g.drawCircle(CircleNodeProps.x, CircleNodeProps.y, CircleNodeProps.radius);
        g.endFill();
    }, []);

    return <Graphics draw={draw} />;
};

export default CircleNodeComponent;