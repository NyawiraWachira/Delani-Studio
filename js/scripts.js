$(document).ready(function() {
    $("img").click(function() {
        $(".icon-showing").toggle();
        $(".icon-hidden").toggle();
    });
});
$(document).ready(function() {
    $("p").click(function() {
        $(".icon-showing").toggle();
        $(".icon-hidden").toggle();
});
});
document.getElementById("submit").addEventListener("click", (Event) => {
    Event.preventDefault();
    main();
});

