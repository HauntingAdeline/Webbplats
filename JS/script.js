const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble, index) => {
    bubble.style.opacity = "0";

    setTimeout(() => {
        bubble.style.transition = "opacity 2s ease";
        bubble.style.opacity = "1";
    }, index * 1500);
});
bubble.style.transition = "opacity 2s ease";

