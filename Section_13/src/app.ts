import axios from "axios";

const form = document.querySelector("form") as HTMLFormElement;
const addresInput = document.getElementById("address") as HTMLInputElement;


// declare let google: any;

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
      )}&key=${process.env.GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );

      new google.maps.Marker({ position: coordinates, map });
      console.log(coordinates);
    })
    .catch((err: Error) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
