var a,
    h,
    triangleArea = getTriangleArea(10, 15),
    triangleAreaSecond = getTriangleArea(2, 2),
    triangleAreaThird = getTriangleArea(2,-1);

function getTriangleArea (a , h) {

    if ((a >= 0) && (h >= 0)) {
        return a*h/2;
    } else {
        return 'Nieprawidłowe dane!';
    }
}
console.log(triangleArea);
console.log(triangleAreaSecond);
console.log(triangleAreaThird);


