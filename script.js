const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector("#img-container");


randomCatPhoto = (json) => {
  let photo = json[0].url;
  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;

  image.style.objectFit = "contain";
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.display = "block";
  image.style.margin = "0 auto";

  document.getElementById("link-text").textContent = photo;
  
  const linkElement = document.getElementById("link");
  if (linkElement) {
    linkElement.setAttribute("href", photo);
  }

  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    return randomCatPhoto(json);
  } catch (e) {
    console.log(e);
    console.log("error")
  };
}

document.addEventListener("DOMContentLoaded", () => {
  getRandomCats();
});