$("#region_click").on('click', function () {
    $("#city").slideToggle()
});



$(".category_click").on('click', function () {
    $(this).next("#product_tag").slideToggle(); //#product_tag 是下一個同級元素
});

