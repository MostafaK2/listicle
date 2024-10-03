const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/cars");
  const data = await response.json();
  const giftContent = document.getElementById("gift-content");
  let car;

  if (data) {
    car = data.find((car) => car.id === requestedID);
    document.getElementById("image").src = car.image;
    document.getElementById("name").textContent =
      car.year + " " + car.make + " " + car.model;

    document.getElementById("pricePoint").textContent = "MSRP: " + car.msrp;
    document.getElementById("audience").textContent =
      "Great For: " + car.audience;
    document.getElementById("description").textContent = car.description;
    document.title = `Car - ${car.make + " " + car.model}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Cars Available 😞";
    giftContent.appendChild(message);
  }
};

renderGift();
