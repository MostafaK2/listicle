const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const headerLogo = document.createElement("img");
headerLogo.src = "/logo.png";

headerLogo.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

const headerTitle = document.createElement("h1");
headerTitle.textContent = "New Cars";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerButton = document.createElement("button");
headerButton.textContent = "Home";

headerButton.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);
