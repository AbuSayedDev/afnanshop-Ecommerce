$(document).ready(function() {
    $(".content").slice(0, 1).show();
    $("#loadMore").on("click", function(e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 1).slideDown();
        if ($(".content:hidden").length == 0) {
            $("#loadMore").text("").addClass("noContent");
        }
    });

})

//starRating
$(document).ready(function() {
    $(".my-rating-9").starRating({
        initialRating: false,
        disableAfterRate: false,
        onHover: function(currentIndex, currentRating, $el){
        $('.live-rating').text(currentIndex);
        },
        onLeave: function(currentIndex, currentRating, $el){
        $('.live-rating').text(currentRating);
        }
    });
})
