fetch("http://localhost:3000/kids")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

  const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click",() => {
    searchBarContainerEl.classList.toggle("active");
});