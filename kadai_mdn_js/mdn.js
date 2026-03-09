const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1します
const day = today.getDate();

console.log(`${year}年${month}月${day}日`);