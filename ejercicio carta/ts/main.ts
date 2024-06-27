document.addEventListener("DOMContentLoaded", () => {
    const cardBack = document.getElementById("card-back");
    const cardFront = document.getElementById("card-front");

    if (cardBack && cardFront) {
        cardBack.addEventListener("mouseover", () => {
            cardBack.classList.add("hidden");
            cardFront.classList.remove("hidden");
            document.body.style.backgroundColor = "rgb(199, 66, 66)";
        });

        cardFront.addEventListener("mouseover", () => {
            cardBack.classList.remove("hidden");
            cardFront.classList.add("hidden");
            document.body.style.backgroundColor = ""
        });
    }
});
