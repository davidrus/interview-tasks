// https://codesandbox.io/s/interesting-allen-h7fgr?file=/src/index.js


const arr = [{
    name: "Nyota",
    surname: "Uhura",
    isActive: true
  },
  {
    name: "Leonard",
    surname: "McCoy",
    isActive: false
  },
  {
    name: "Montgomery",
    surname: "Scott",
    isActive: true
  }
];

/// Write code which return array of firstNames ["Nyota", "Leonard", "Montgomery"]
const result = [];
console.log("Result array:", result);

/// Write code which returns this object:
const returnObjectShouldBe = {
  person1: {
    name: "Nyota"
  },
  person2: {
    name: "Leonard"
  },
  person3: {
    name: "Montgomery"
  }
};

const resultObject = {};
console.log("Result Object", resultObject);








































































// Answer 1:

const result = arr.map(item => {
  return item.name;
});
console.log("Result array:", result);





// Answer 2:

const resultObject = arr.reduce((acc, item, index) => {
  return {
    ...acc,
    ["person" + index]: item.name
  };
}, {});
console.log("Result Object", resultObject);





















ORIGINAL:

  const arr = [{
      name: "Nyota",
      surname: "Uhura",
      isActive: true
    },
    {
      name: "Leonard",
      surname: "McCoy",
      isActive: false
    },
    {
      name: "Montgomery",
      surname: "Scott",
      isActive: true
    }
  ];

/// Write code which return array of firstNames ["Nyota", "Leonard", "Montgomery"]
const result = [];
console.log("Result array:", result);

/// Write code which returns this object:
const returnObjectShouldBe = {
  person1: {
    name: "Nyota"
  },
  person2: {
    name: "Leonard"
  },
  person3: {
    name: "Montgomery"
  }
};

const resultObject = {};
console.log("Result Object", resultObject);