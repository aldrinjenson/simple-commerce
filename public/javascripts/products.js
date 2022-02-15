const desc1 = document.querySelector(".description1");
const readMore1 = document.querySelector(".readMore1");

readMore1.addEventListener("click", () => {
  if (readMore1.classList.contains("hide1")) {
    desc1.style.display = "none";
    readMore1.innerHTML = "Show More";
    readMore1.classList.remove("hide1");
  } else {
    desc1.style.display = "block";
    readMore1.innerHTML = "Hide";
    readMore1.classList.add("hide1");
  }
});

const desc2 = document.querySelector(".description2");
const readMore2 = document.querySelector(".readMore2");

readMore2.addEventListener("click", () => {
  if (readMore2.classList.contains("hide2")) {
    desc2.style.display = "none";
    readMore2.innerHTML = "Show More";
    readMore2.classList.remove("hide2");
  } else {
    desc2.style.display = "block";
    readMore2.innerHTML = "Hide";
    readMore2.classList.add("hide2");
  }
});
