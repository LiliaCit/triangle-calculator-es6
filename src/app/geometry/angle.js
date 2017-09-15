
import { pi, cosine } from '../maths/lib';

export const AngleUnitEnum = {
    Degrees: 0,
    Radians: 1
};

export class Angle {
    constructor(amount, angleUnit) {
        this.amount = amount;
        this.angleUnit = angleUnit;
    }

    cosine() {
        console.info('Angle cosine called');
        let radians;
        switch (this.angleUnit) {
            case AngleUnitEnum.Radians:
                radians = this.amount;
                break;
            case AngleUnitEnum.Degrees:
                let radians = (this.amount * pi) / 180;
                break;
        }
        let result = cosine(radians);
        return Promise.resolve(result);
    }

    get isRight() {
        switch (this.angleUnit) {
            case AngleUnitEnum.Degrees:
                return this.amount === 90;
            case AngleUnitEnum.Radians:
                return this.amount === 0.5;
        }
    }
}