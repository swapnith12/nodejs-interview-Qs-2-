// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

testCase1.sort((a, b) => {
  if (a.biology + a.chemistry !== b.biology + b.chemistry) {
    return b.biology + b.chemistry - (a.biology + a.chemistry);
  }
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }
  const dateA = new Date(a.dob.split('-').reverse().join('-'));
  const dateB = new Date(b.dob.split('-').reverse().join('-'));
  return dateA - dateB;
});
console.log(testCase1);
let ans = [];
for (let item of testCase1) {
  console.log(item.name);
  ans.push(item.name);
}
console.log(ans);

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

testCase2.sort((a, b) => {
  if (a.biology + a.chemistry !== b.biology + b.chemistry) {
    return b.biology + b.chemistry - (a.biology + a.chemistry);
  }
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }
  const dateA = new Date(a.dob.split('-').reverse().join('-'));
  const dateB = new Date(b.dob.split('-').reverse().join('-'));
  return dateA - dateB;
});
console.log(testCase2);
let ans1 = [];
for (let item of testCase2) {
  console.log(item.name);
  ans1.push(item.name);
}
console.log(ans1);
