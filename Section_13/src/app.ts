const form = document.querySelector("form") as HTMLFormElement;
const addresInput = document.getElementById("address") as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addresInput.value;

  // add google api
}

form.addEventListener("submit", searchAddressHandler);
