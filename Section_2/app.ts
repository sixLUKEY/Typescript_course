const person: {
  name: string;
  age: number;
  hobbies?: string[];
  role: [number, string];
} = {
  name: "Maximillian",
  age: 30,
  hobbies: ["soccer", "games", "food"],
  role: [2, "author"],
};

let favouriteActivites: (string | number)[];
favouriteActivites = ["sport", "fitness", 22];

console.log(person.name);

if (person.hobbies)
  for (let hobby of person.hobbies) {
    console.log(hobby.length);
  }
