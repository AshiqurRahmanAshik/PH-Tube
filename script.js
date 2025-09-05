const categoryContainer = document.getElementById("categoryContainer");

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
      removeBtnColor();
      const button = e.target;
      console.log(button);
      button.classList.add("bg-red-500", "text-white");
    }
  });
};

loadCategory();

const removeBtnColor = () => {
  const allBtn = document.querySelectorAll(".category-btn");
  console.log(allBtn);
  allBtn.forEach((btn) => {
    btn.classList.remove("bg-red-500", "text-white");
  });
};
