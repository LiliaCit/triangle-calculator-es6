
import { TriangleFactory } from "./services/TriangleFactory";

var factory = new TriangleFactory();

//1.
let right = factory.createRight(3, 4);
var size = right.calculateDiagonal()
    .then(result => console.log(result));

//2.
let triangle1 = factory.create(4, 4, 1 / 3, true);
var size = triangle1.calculateDiagonal()
    .then(result => console.log(result));

//3.
let triangle2 = factory.create(3, 3, 60, false);
var size = triangle2.calculateDiagonal()
    .then(result => console.log(result));