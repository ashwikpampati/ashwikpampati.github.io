const menu = data;
const sectionCenter = document.querySelector(".nsection-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="col-sm-6 text-center">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info w-50 mx-auto my-3">
            <div>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      // return `<button class="filter-btn" type="button" data-id=${category}>
      // ${category}
      // </button>`;
      return ` <li class="nav-item">
      <a class=" filter-btn" href="#" data-id="${category}">
      ${category}</a></li>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget);
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
// console.log(category);
