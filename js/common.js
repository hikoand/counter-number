$(function () {
  $('.flex_box .count').each(function () {
    // console.log(i); //0,1,2,3;
    console.log($(this));
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
