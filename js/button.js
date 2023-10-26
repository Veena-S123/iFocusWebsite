$(document).ready(function() {
    // When hovering over the first button, hide the second button
    $('.button1').hover(function() {
        $('.button2').hide();
    }, function() {
        // When the mouse leaves the first button, show the second button again
        $('.button2').show();
    });
});