const onglets = document.querySelectorAll(".onglet");
const cards = document.querySelectorAll(".card");

function cardReset() {
  for(i=0; i<cards.length; i++) {
  cards[i].classList.remove("card-active");
  }
}

function handleClick() {
  cardReset();
  const targetId = "#card-"+this.id;
  const target = document.querySelector(targetId);
  target.classList.add("card-active");
}

for(i=0; i<onglets.length; i++) {
  onglets[i].addEventListener("click", handleClick);
}