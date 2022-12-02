// const myBtn = document.getElementById("mybtn");

// myBtn.addEventListener("click", () => {
//   console.log("clicked");
// });

const mydiv = document.getElementsByTagName("div")[0];

// mydiv.addEventListener("mouseenter", () => {
//   console.log("mouse entered");
// });

// mydiv.addEventListener("mouseleave", () => {
//   console.log("mouse left");
// });

// mydiv.addEventListener("mousemove", (event) => {
//   console.log(event.target);
// });

// const myInput = document.getElementById("myInput");

// myInput.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });

const myForm = document.getElementById("salam");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log("submit olundu");
});
