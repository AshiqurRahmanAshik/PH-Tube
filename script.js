const categoryContainer = document.getElementById("categoryContainer");
const VideoContainer = document.getElementById("videoContainer");

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
const displayCategory = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
    <button class="bg-gray-200 px-5 py-2 rounded category-btn">${category.category}</button>
    `;
  });
  categoryContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.innerText);
      removeBtnColor();
      const button = e.target;
      //console.log(button);
      button.classList.add("bg-red-500", "text-white");
    }
  });
};
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos));
};
const displayVideo = (videos) => {
  //console.log(videos);
  videos.forEach((video) => {
    videoContainer.innerHTML += `
     <div class="relative">
     <img src="${video.thumbnail}" alt="thumbnail" class="w-full h-48 object-cover rounded-sm" />
    
        <div class="flex mt-2 gap-2">
          <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}" alt="logo" />
          <div>
            <p class="font-bold text-xl" >${video.title}</p>
            <p>
              ${video.authors[0].profile_name}"<i
                class="fa-solid fa-circle-check"
                style="color: #3b2eea"
              ></i>
            </p>
            <p>${video.others.views} views</p>
          </div>
        </div>
      </div>`;
  });
};
loadCategory();
loadVideo();

const removeBtnColor = () => {
  const allBtn = document.querySelectorAll(".category-btn");
  //console.log(allBtn);
  allBtn.forEach((btn) => {
    btn.classList.remove("bg-red-500", "text-white");
  });
};
