const names: Array<string> = ["Max", "Manuel"]; // string[]
names[0].replace("", "-");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The promise has been resolved!");
  }, 2000);
});

promise.then(data => {
    data.slice()
})
