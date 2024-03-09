$(".first-btn").on("click", function() {
    $(".hidden-text").show(1000)
});

$(".first-radio").on("click", function() {
    $(".radio-one-hidden-text").show(1000)
});

$(".second-radio").on("click", function() {
    $(".radio-two-hidden-text").show(1000)
});

$(function() {
    $(".aqua-block").draggable()
});

$(".red-block" ).droppable({
    drop: function( event, ui ) {
      $(".block-drag")
      .find( "p" )
        .addClass( "reveal" )
        .fadeIn("slow")
    }
});

$("#text-input").on("input", function() {
    $('.output').text($(this).val())

    $('.output').css("opacity", '1')
})

$(".green-box").on("click", function() {
    $(".box").animate({
        left: "+=50",
    }, 500)
})

$(".block-animated-box").on("click", function(event) { 
    var $target = $(event.target);
    if(!$target.closest('.box').length && 
    $('.box').is(":visible")) {
        $(".box").animate({
            left: "0",
        }, 500)
    }        
  });