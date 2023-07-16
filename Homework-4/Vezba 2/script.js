// Multiplication Tables

for(let i = 0; i <= 10; i++) {
  let result = i * 9;
  console.log(`${i} * 9 = ${result}`);
}

console.log("\n");
console.log("\n");

// Bonus

for(let j = 0; j <= 10; j++) {
  for(let x = 1; x <= 10; x++) {
    let nested_result = j * x;
    console.log(`${j} * ${x} = ${nested_result}`);
  }
  console.log("\n");
}