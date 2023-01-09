(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");
  //Method 2
  //   let equal = document.querySelector("#equal");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      //Method 1
      if (e.target.dataset.num != "=") {
        let value = e.target.dataset.num;
        screen.value += value;
      }
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
