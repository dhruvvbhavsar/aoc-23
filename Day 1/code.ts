const input: string = ``;

const numberMap: any = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

let array: number = input
  .split(`\n`)
  .map((val) => getNumber(val))
  .reduce((a, c) => a + c, 0);
console.log(array);

function getNumber(str: string) {
  let arr = str.split("");
  let num_str: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(Number(arr[i]))) {
      num_str.push(arr[i]);
      continue;
    }

    for (let j = i + 1; j <= arr.length; j++) {
      let curr = arr.slice(i, j).join("");
      if (Object.keys(numberMap).includes(curr)) {
        num_str.push(numberMap[curr]);
        break;
      }
    }
  }
  return Number(num_str[0] + num_str[num_str.length - 1]);
}
