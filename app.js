// count initial set to zero
let count = 0;

//
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("divTwo")) {
      count /= 2;
    } else if (styles.contains("mulTwo")) {
      count *= 2;
    } else {
      console.log("Can't find that class");
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
