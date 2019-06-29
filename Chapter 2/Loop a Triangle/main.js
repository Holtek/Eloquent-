// My shit Code
function looping() {
  let triangle = ['#', '##', '###', '####', '#####', '######', '#######'];
  for (let i = 0; i < triangle.length; i++) {
    const boo = triangle[i];
    console.log(boo);

  }
}
looping();


//Good code

for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}