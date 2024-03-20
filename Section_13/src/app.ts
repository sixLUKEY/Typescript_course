import axios from "axios";

const form = document.querySelector("form") as HTMLFormElement;
const addresInput = document.getElementById("address") as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCxpgUgi5d9teV1c36kwfB8AjlU6ZLLKsU";

type GeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addresInput.value;

  // add google api
  axios
    .get<GeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      console.log(coordinates);
    })
    .catch((err: Error) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
