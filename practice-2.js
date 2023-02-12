const bird = {
  type: "sparrow",
  canFly: true,
  "number-of-claws": 5
};

bird.canFly = false;
bird["number-of-claws"] = 3;

console.log(bird);