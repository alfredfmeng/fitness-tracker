const button = document.getElementById("click-me");

let completed = false;

button.onclick = () => {
  if (completed) {
    button.classList.remove("fas", "fa-check-circle");
    button.classList.add("far", "fa-circle");
  } else {
    button.classList.remove("far", "fa-circle");
    button.classList.add("fas", "fa-check-circle");
  }
  completed = !completed;
};
