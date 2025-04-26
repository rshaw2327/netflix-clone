window.addEventListener("load", function () {
  getData();

  function getData() {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => {
        showDataKids(data.kids);
        showDataMindBlown(data.mindblown);
        showDataData(data.data);
      });
  }
  // Kids data
  function showDataKids(kids) {
    console.log(kids);
    let kidsHTML = "";
    kids.forEach((kid) => {
      kidsHTML += `<div class="swiper-slide">
        <div class="card">
          <img src="${kid.img}" alt="" width="100%">
             <div class="card-body ">
                <p>"${kid.title}"</p>
                <div class="action-btns">
                  <i class="fa-solid fa-plus"></i>
                  <p class="add_mylist">Add To My List</p>
                </div>
                <div class="moreinfo" data-title="${kid.title}" data-subtitle="${kid.subtitle}" data-img="${kid.img}">
                     <i class="fa-solid fa-angle-down" data-title="${kid.title}" data-subtitle="${kid.subtitle}" data-img="${kid.img}"></i>
                </div>
              </div>
        </div>    
      </div>
              `;
    });

    document.querySelector(".swiper1 .swiper-wrapper").innerHTML = kidsHTML;

    let moreinfos = document.querySelectorAll(".swiper .moreinfo");
    moreinfos.forEach((moreinfo) => {
      moreinfo.addEventListener("click", function (e) {
        console.log("click")
        openModal(e);
      });
    });

    const swiper1 = new Swiper(".swiper1", {
      // Optional parameters
      loop: true,
      slidesPerView: 6,
      slidesPerGroup: 5,
      spaceBetween: 40,
      speed: 900,

      // // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // mindblown swiper
  function showDataMindBlown(mindblown) {
    console.log(mindblown);
    let mindblownHTML = "";
    mindblown.forEach((mindblown) => {
      mindblownHTML += `<div class="swiper-slide">
        <div class="card">
          <img src="${mindblown.img}" alt="" width="100%">
             <div class="card-body ">
                <p>"${mindblown.title}"</p>
                <div class="action-btns">
                <i class="fa-solid fa-plus"></i>
                <p class="add_mylist">Add To My List</p>
                </div>
                <div class="moreinfo" data-title="${mindblown.title}" data-subtitle="${mindblown.subtitle}" data-img="${mindblown.img}">
                     <i class="fa-solid fa-angle-down" data-title="${mindblown.title}" data-subtitle="${mindblown.subtitle}" data-img="${mindblown.img}"></i>
                </div>
                </div>
            </div>       
          </div>`;
    });

    document.querySelector(".swiper2 .swiper-wrapper").innerHTML =
      mindblownHTML;

      let moreinfos = document.querySelectorAll(".swiper .moreinfo");
      moreinfos.forEach((moreinfo) => {
        moreinfo.addEventListener("click", function (e) {
          console.log("click")
          openModal(e);
        });
      });

    const swiper2 = new Swiper(".swiper2", {
      // Optional parameters
      loop: true,
      slidesPerView: 6,
      slidesPerGroup: 5,
      spaceBetween: 40,
      speed: 900,

      // // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      //   autoplay: {
      //     delay: 4500,
      //     disableOnInteraction: false,
      // },

      keyboard: {
        enabled: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  //data swiper
  function showDataData(data) {
    // console.log(data);

    let dataHTML = "";
    data.forEach((data) => {
      dataHTML += `<div class="swiper-slide">
        <div class="card">
          <img src="${data.img}" alt="" width="100%">
             <div class="card-body ">
                <p>"${data.title}"</p>
                <div class="action-btns">
                <i class="fa-solid fa-plus"></i>
                <p class="add_mylist">Add To My List</p>
                </div>
                 <div class="moreinfo" data-title="${data.title}" data-subtitle="${data.subtitle}" data-img="${data.img}">
                     <i class="fa-solid fa-angle-down" data-title="${data.title}" data-subtitle="${data.subtitle}" data-img="${data.img}"></i>
                </div>
                </div>
            </div>
          </div>`;
    });

    document.querySelector(".swiper3 .swiper-wrapper").innerHTML = dataHTML;
    let moreinfos = document.querySelectorAll(".swiper .moreinfo");
    moreinfos.forEach((moreinfo) => {
      moreinfo.addEventListener("click", function (e) {
        console.log("click")
        openModal(e);
      });
    });

    const swiper3 = new Swiper(".swiper3", {
      // Optional parameters
      loop: true,
      slidesPerView: 6,
      slidesPerGroup: 5,
      spaceBetween: 40,
      speed: 900,

      // // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Search bar container
  const searchBarContainerEl = document.querySelector(".search-bar-container");

  const magnifierEl = document.querySelector(".magnifier");

  magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
  });

  const viewMoreBtn = document.querySelector(".infoBtn");
  viewMoreBtn.addEventListener("click", () => {
    viewMoreBtn.classList.active;
  });

  // add to my list
  // const addMyListBtn = document.querySelector(".faplus");

  // addMyListBtn.addEventListener("click", () => {
  //   console.log("clckk");
  // });

  // let params = new URLSearchParams(window.location.search);
  // let title = params.get("title");

  // const addTolist = JSON.parse(localStorage.getItem("mylist") || "[]");

  // function addToMylist(d) {
  //   let obj = d;
  //   if (Object.keys(obj).length != 0) {
  //     addTolist.push(obj);
  //     localStorage.setItem("mylist", JSON.stringify(addTolist));
  //     alert("movie add to my list");
  //   }
  // }

  // Open Modal
  function openModal(e) {
    let data = e.target.dataset;

    document.querySelector(".modal img").src = data.img;
    document.querySelector(".modal h1").innerHTML = data.title;
    document.querySelector(".modal p").innerHTML = data.subtitle;

    let modalCont = document.querySelector(".modal-cont");
    modalCont.classList.add("active");
  }

  // Close Modal
  function closeModal() {
    let modalCont = document.querySelector(".modal-cont");
    modalCont.classList.remove("active");
  
  }
  const XmarkEl=document.querySelector(".x-mark")
  XmarkEl.addEventListener("click", closeModal)
  console.log("click");


});

// video modal

function openVideoModal(){
  const infoBtnEl = document.querySelector(".infoBtn");
  infoBtnEl.addEventListener("click",()=>{
    console.log("clickc")
    // infoBtnEl.classList.add("active")
  })
}
