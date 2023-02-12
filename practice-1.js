const bird = {
  type: "sparrow",
  "can fly": true,
  "number-of-claws": 5
};

bird["can fly"] = false;
bird["number-of-claws"] = 3;

console.log(bird);