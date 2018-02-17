var a,
    h,
    triangleArea = getTriangleArea(10, 15),
    triangleArea1 = getTriangleArea(2, 2),
    triangleArea2 = getTriangleArea(2,-1);

function getTriangleArea (a , h) {

    if ((a >= 0) && (h >= 0)) {
        return a*h/2;
    } else {
        console.log('Nieprawidłowe dane!');
    }
}
console.log(triangleArea);
console.log(triangleArea1);
console.log(triangleArea2);


