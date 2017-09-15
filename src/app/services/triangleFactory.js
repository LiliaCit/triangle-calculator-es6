
import { Angle, AngleUnitEnum } from '../geometry/angle';
import { Triangle } from '../geometry/triangle';
import { RightTriangle } from '../geometry/rightTriangle';

export class TriangleFactory {

    constructor() { }

    createRight(x, y) {
        return new RightTriangle(x, y);
    }

    create(x, y, angleSize, useRadians) {
        if ((useRadians && angleSize === 0.5) || angleSize === 90) {
            return this.createRight(x, y);
        }
        let angle = new Angle(angle, useRadians ? AngleUnitEnum.Radians : AngleUnitEnum.Degrees);
        return new Triangle(x, y, angle);
    }
}