
import { power, square } from '../maths/lib';
import { Triangle } from './triangle'
import { Angle, AngleUnitEnum } from './angle';

export class RightTriangle extends Triangle {

    constructor(x, y) {
        super(x, y, new Angle(0.5, AngleUnitEnum.Radians))
    }

    calculateDiagonal() {
        console.info('RightTriangle calculateDiagonal called', this.x, this.y);

        let result = Promise.all([power(this.x, 2), power(this.y, 2)])
            .then(values => square(values[0] + values[1]));
        return result;
    }
}