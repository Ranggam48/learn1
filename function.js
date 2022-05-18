/**
 * 1. Buatlah sebuah function dengan nama countToTen
 *  parameter
 *    - start
 *  output
 *    - urutan angka string mulai dari start sampai dengan 10 (dipisahkan dengan spasi)
 * 
 * CONTOH:
 *  input = 5
 *  output = 5 6 7 8 9 10
 */


let countToTen = (start) => {
    const arr =  [];
    let index = 0;
    for(let i = start ; i <= 10 ; i++){
      arr[index] = i;  
      index++;
    }
    return arr;
};

console.log(countToTen(7));
console.log(countToTen(6));
console.log(countToTen(5));