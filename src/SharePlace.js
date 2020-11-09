class PlaceFinder {
  // btns & forms
  constructor() {
    const adressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    adressForm.addEventListener("submit", this.findAdressHandler);
  }

  // get user location
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature is not supported by your browser!");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (success) => {
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        };
        console.log(coordinates);
      },
      (fail) => {
        alert("Could not locate you!");
      }
    );
  }

  // find adress
  findAdressHandler() {}
}

new PlaceFinder();
