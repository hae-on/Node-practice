// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from("Hi");
console.log(buf); //유니코드
console.log(buf.length);
console.log(buf[0]); //아스키코드
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); //<Buffer 00 00>
const buf3 = Buffer.allocUnsafe(2); //fast
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
