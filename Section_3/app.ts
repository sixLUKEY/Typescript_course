const userName = "Kane";

console.log(userName);

import { data } from "./server";

const button = document.querySelector("button")!;
button?.addEventListener("click", (): void => {
  console.log('clicked!')
});
