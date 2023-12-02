const str: string = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
let obj: any = {};
const num_arr = [];

const result = str
  .split("\n")
  .map((val) => fn1(val))
  .reduce((a, c) => a + c, 0);
console.log(result);

function fn1(s: string) {
  let [one, two] = s.split(":");
  const id: number = parseInt(one.split(" ")[1]);
  two = two.trim();

  let arr = two.split(";").map((e) => e.trim());
  let arr_new = arr.map((val) => {
    return val.split(",").map((e) => e.trim());
  });

  for (let i = 0; i < arr_new.length; i++) {
    let o: any = {};
    for (let j = 0; j < arr_new[i].length; j++) {
      const [num, color] = arr_new[i][j].split(" ");
      o[color] = num;
    }
    if (o["red"] > 12 || o["green"] > 13 || o["blue"] > 14) {
      return 0;
    }
  }
  return id;
}
