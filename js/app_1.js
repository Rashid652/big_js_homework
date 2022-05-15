let enterNum = +prompt('Введите число!');
let enterSqrt = +prompt('Введите степень!');

!isNaN(enterNum) && !isNaN(enterSqrt)  ? MyMathSqrt() : alert('Error!!!');

console.log(MyMathSqrt());

function MyMathSqrt() {
    let res = 0;
    for (let i = 0; i <= enterSqrt; i++) {
        res = enterNum ** i;
    }
    return res;
}