/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((i) => {
    if (i.profession === "developer") {
      console.log(
        `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
      );
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((i) => {
    if (i.profession === "developer") {
      console.log(
        `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
      );
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let temp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(temp);
  arr.map((i) =>
    console.log(
      `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
    )
  );
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((i) => i.profession !== "admin");
  arr.map((i) =>
    console.log(
      `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
    )
  );
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 7, name: "dance", age: "28", profession: "developer" },
    { id: 5, name: "rock", age: "24", profession: "admin" },
    { id: 6, name: "jazz", age: "23", profession: "boss" },
  ];
  arr = arr.concat(arr1);
  arr.map((i) =>
    console.log(
      `id : ${i.id}, Name : ${i.name}, Age : ${i.age}, Profession : ${i.profession}`
    )
  );
}
