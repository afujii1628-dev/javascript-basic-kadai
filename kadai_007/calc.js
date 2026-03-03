
let num = 20;

//３と５の倍数のとき
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//３の倍数のとき
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//５の倍数のとき
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外の場合
else {
  console.log(num);
}