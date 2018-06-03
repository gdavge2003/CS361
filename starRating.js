$(document).ready(function() {
    $("form#ratingForm").submit(function(e) 
    {
        e.preventDefault(); // prevent the default click action from being performed
        if ($("#ratingForm :radio:checked").length == 0) {
            $('#status').html("Service has not been rated!");
            return false;
        } else {
            $('#status').html( 'Thank you for rating this service!');
        }
    });
});