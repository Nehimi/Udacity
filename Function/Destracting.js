// 👉 Object ወይም Array ውስጥ ያሉ ነገሮችን በቀጥታ መውሰድ ነው
// (ሳይፈልግ obj.name እያልክ)


//❌ ያልተጠቀምን
// Destructuring Assignment is a convenient way of extracting values from objects and arrays. 
// It allows you to unpack values from arrays or properties from objects into distinct variables.
const user1 = {
  name: "Nehimi",
  age: 20,
  country: "Ethiopia"
};

const name1 = user1.name;
const age2 = user1.age;
console.log(name1); // Nehimi
console.log(age2);  // 20


//✅ የተጠቀምን
const user2 = {
  name: "Nehimi",
  age: 20,
  country: "Ethiopia"
};

const { name, age } = user2;

console.log(name); // Nehimi
console.log(age);  // 20