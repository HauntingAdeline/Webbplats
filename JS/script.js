const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble, index) => {  /*sets a function once for each bubble*/
    bubble.style.opacity = "0";  /*bubble = current bubble worked on, 0, bubbles position on the list starting at 0*/

    setTimeout(() => {
        bubble.style.transition = "opacity 2s ease";
        bubble.style.opacity = "1";
    }, index * 1500);
});

/*all bubbles are selected, all are all made invisible (opacity = 0),
first bubbble fades in, second one after 1,5 sec (1500millisecinds), third comes in after 3 sec, bubbles takes 2 seconds to fade*/



