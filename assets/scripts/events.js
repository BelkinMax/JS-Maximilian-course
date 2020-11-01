/* -------------------------------------------------------------------------- */
/*                                   EVENTS                                   */
/* -------------------------------------------------------------------------- */

// const btn = document.querySelector("button");
// const action = () => console.log("Button pressed");
// const action2 = () => console.log("Button pressed twice");

// btn.addEventListener("click", action);
// //btn.onclick = () => action(); // only can use once
// //btn.ondblclick = () => action2();

// btn.addEventListener("dblclick", () =>
//   btn.removeEventListener("click", action)
// );

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
