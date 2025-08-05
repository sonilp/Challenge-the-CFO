function checkAnswer(choice) {
  const cfoImage = document.getElementById("cfo");
  if (choice === "B") {
    cfoImage.src = "assets/cfo-happy.png";
    alert("Correct! Smart inventory management saves money.");
  } else {
    cfoImage.src = "assets/cfo-angry.png";
    alert("Oops! That’s not the best answer.");
  }
}
