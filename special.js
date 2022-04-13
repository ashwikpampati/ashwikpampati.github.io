const menu = data;
let day = new Date().getDay();
const sectionCenter = document.querySelector(".nsection-center");
// console.log(menu);
let cat = [];
menu.forEach((e) => {
  //   console.log(e);
  cat.push(e["category"]);
});
cat = Array.from(new Set(cat));
console.log(cat);

window.addEventListener("DOMContentLoaded", function () {
  displaySpecialItems(menu);
});

function displaySpecialItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    if (item["special"].includes(day)) {
      return `<article class="col-sm-6 text-center">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info w-50 mx-auto my-3"">
              <div>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </div>
              
            </div>
          </article>`;
    }
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
