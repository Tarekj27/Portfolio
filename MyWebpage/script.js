const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("mouseover", function() {
    this.style.backgroundColor = "grey";
  });

  button.addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
  });
});
