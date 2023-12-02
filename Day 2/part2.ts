const strr: string = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const resultt: number = strr
  .split("\n")
  .map((val) => fn2(val))
  .reduce((a, c) => a + c, 0);
console.log(resultt);

function fn2(s: string) {
  let o: any = {};
  let [one, two] = s.split(":");
  const id: number = parseInt(one.split(" ")[1]);
  two = two.trim();

  let arr = two.split(";").map((e) => e.trim());
  let arr_new = arr.map((val) => {
    return val.split(",").map((e) => e.trim());
  });

  const result = arr_new.reduce(
    (accumulator, value) => accumulator.concat(value),
    []
  );
  for (let i = 0; i < result.length; i++) {
    let [count, color] = result[i].split(" ");
    if (o[color]) {
      o[color].push(parseInt(count));
    } else {
      o[color] = [parseInt(count)];
    }
  }
  return (
    Math.max(...o["red"]) * Math.max(...o["green"]) * Math.max(...o["blue"])
  );
}
