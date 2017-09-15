
import { power, square } from '../maths/lib';

export class Triangle {

    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    calculateDiagonal() {
        console.info('Triangle calculateDiagonal called', this.x, this.y, this.angle);

        let result = Promise.all([power(this.x, 2), power(this.y, 2), this.angle.cosine()])
            .then(values => square(values[0] + values[1] - 2 * this.x * this.y * value[2]));
        return result;
    }
}