document.querySelectorAll(".accordion-question").forEach(item => {
  item.addEventListener("click", (event) => {
    console.log("click!");
    item.classList.toggle("open");


    // open accordion item
    // if (!item.classList.contains("open")) {
    //   console.log("toggle accordion button");
    //   //Remove "collapse", add "collapsing" class to .accordion_collapse (sibling)
    //   item.nextElementSibling.classList = "accordion-collapse collapsing"

    //   // after X amt of time, remove "collapsing" class and add "collapse open" class
    //   setTimeout(() => {
    //     console.log("open accordion content");
    //     item.nextElementSibling.classList ="accordion-collapse open";
    //   }, 300);
    // }
    // //close accordion item
    // else {
    //   item.nextElementSibling.classList = "accordion-collapse collapsing"

    //   setTimeout(() => {
    //     console.log("close accordion content");
    //     item.nextElementSibling.classList ="accordion-collapse collapse";
    //   }, 300);


    // }


    item.nextElementSibling.classList.toggle("open");
  });
});