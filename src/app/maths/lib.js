
import { MATH } from './math';

const sqrt = MATH.sqrt;
const pow = MATH.pow;
const cos = MATH.cos;

export const pi = MATH.PI;

export function square(x) {
    console.info('square called', x);
    return Promise.resolve(sqrt(x));
}

export function power(x, p) {
    console.info('power called', x, p);
    return Promise.resolve(pow(x, p));
}

export function cosine(radians) {
    console.info('cosine called', radians);
    return Promise.resolve(cos(radians));
}