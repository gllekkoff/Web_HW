// Part 1
function round(number) {
  return parseFloat(number.toFixed(2));
}

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

function onlyEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

function isPalindrome(number) {
  return number.toString() === number.toString().split("").reverse().join("");
}

function fizzBuzz(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  arr.forEach((num, index, arr) => {
    if (num % 15 === 0) {
      arr[index] = "FizzBuzz";
    } else if (num % 5 === 0) {
      arr[index] = "Buzz";
    } else if (num % 3 === 0) {
      arr[index] = "Fizz";
    } else {
      arr[index] = num.toString();
    }
  });
  return arr;
}

// Part 2
const users = [
  { name: "John", age: 34, city: "Chicago" },

  { name: "Amy", age: 20, city: "New York" },

  { name: "Camila", age: 24, city: "Los Angeles" },

  { name: "Tom", age: 33, city: "Chicago" },
];

function usersByCity(users, city) {
  return users.filter((user) => user.city === city);
}

function averageAge(users, city) {
  if (arguments.length == 1) {
    let ages = users.map((user) => user.age);
    return ages.reduce((acc, value) => acc + value, 0) / ages.length;
  }
  let ages = users.filter((user) => user.city === city).map((user) => user.age);
  return ages.reduce((acc, value) => acc + value, 0) / ages.length;
}

function splitByAge(users, age) {
  let lower = [];
  let higher = [];
  for (let user of users) {
    if (user.age > age) {
      higher.push(user);
    } else {
      lower.push(user);
    }
  }
  return [lower, higher];
}

function oldestUser(users, city) {
  let oldest = 0;
  let oldestUser;
  for (let user of users) {
    if (arguments.length == 1) {
      if (user.age > oldest) {
        oldest = user.age;
        oldestUser = user;
      }
    } else {
      if (user.age > oldest && user.city === city) {
        oldest = user.age;
        oldestUser = user;
      }
    }
  }
  return oldestUser;
}

function findCity(users, name) {
  for (let user of users) {
    if (user.name === name) {
      return user.city;
    }
  }
  throw new Error("User not found");
}

function unique(users, key, value) {
  if (key in users[0]) {
    let arr = new Set();
    for (let user of users) {
      if (arguments.length == 2) {
        arr.add(user[key]);
      } else if (Object.values(user).includes(value)) {
        arr.add(user[key]);
      }
    }
    return Array.from(arr);
  } else {
    throw new Error("Property not found");
  }
}
