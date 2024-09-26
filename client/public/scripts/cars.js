const renderGifts = async () => {
  const response = await fetch("/cars");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((car) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${car.image})`;

      const name = document.createElement("h3");
      name.textContent = car.year + " " + car.make + " " + car.model;
      bottomContainer.appendChild(name);

      const pricePoint = document.createElement("p");

      pricePoint.textContent = "MSRP: " + car.msrp;
      bottomContainer.appendChild(pricePoint);

      const audience = document.createElement("p");
      audience.textContent = "Great For: " + car.audience;
      bottomContainer.appendChild(audience);
      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/cars/${car.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Cars Available 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderGifts();
}
