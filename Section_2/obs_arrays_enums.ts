enum Role {
  ADMIN,
  READONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies?: [string, string, number];
  role: number;
} = {
  name: "Maximillian",
  age: 30,
  hobbies: ["soccer", "games", 200],
  role: Role.ADMIN,
};

let favouriteActivites: (string | number)[];
favouriteActivites = ["sport", "fitness", 22];

// console.log(person.name); Commented out for Github issue

if (person.hobbies)
  for (let hobby of person.hobbies) {
    console.log(hobby);
  }
