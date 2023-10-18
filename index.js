const Fighter = require("./src/Fighter.js");

const Heracles = new Fighter("🧔", "20", "6");
const NemeanLion = new Fighter("🦁", "11", "13");

console.log("🚀 ~ file: index.js:4 ~ Heracles:", Heracles);
console.log("🚀 ~ file: index.js:6 ~ NemeanLion:", NemeanLion);
let round = 1;
while (Heracles.life > 0 && NemeanLion.life > 0) {
  console.log("round " + round);
  Heracles.fight(NemeanLion);
  console.log(
    `${Heracles.name} attack ${NemeanLion.name}, NemanLion's life: ${NemeanLion.life}`
  );

  NemeanLion.fight(Heracles);
  console.log(
    `${NemeanLion.name} attack ${Heracles.name}, Heracles's life: ${Heracles.life}`
  );
  console.log("------------------------------");
  if (NemeanLion.life === 0) {
    console.log(` ${Heracles.name} is winner `);
    console.log(` ${NemeanLion.name} is Dead `);
    break;
  }
  if (Heracles.life === 0) {
    console.log(` ${NemeanLion.name} is Winner`);
    console.log(`${Heracles.name} is Dead `);
    break;
  }
  round++;
}
