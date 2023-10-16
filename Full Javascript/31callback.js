const multiply = (a, b) =>  a * b;
const sqrt = (a) => multiply(a,a);
const isRightTriangle = (a, b, c) => {
    return sqrt(square(a) + square(b) + square(c));
}
isRightTriangle(1, 2, 3);