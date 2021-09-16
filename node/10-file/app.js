const fs = require("fs");

// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { } //사용하지 않는 걸 추천
// promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error(error);
}
console.log("hello");

// try catch를 사용하지 않고 잘못된 파일명 전송 시 에러가 나면서 node가 죽음
// 따라서 뒤의 console.log('hello')이 출력되지 않음

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("Done!"))
  .catch(console.error);
