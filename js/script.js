$( document ).ready(function() {
  $(".sert_item").colorbox({
    //inline: true
    rel:'sert_item'
  });
  $(".gallery_item").colorbox({
    //inline: true
    rel:'gallery_item'
  });
  $(".work_colorbox").colorbox({
    //inline: true
    //rel:'sert_item'
  });


  $('.work_link').each(function(){
    var curHeight = "135px";
    //$(this).parent().next().css('height', 'auto');
    var autoHeight = $(this).parent().next().height();
    $(this).parent().next().css('height', curHeight);
    $(this).click(function(event){
      event.preventDefault();
      if ($(this).parent().next().css('height') == curHeight) {
        $(this).text('Свернуть');
        $(this).parent().next().animate({
          height: autoHeight
        }, 200, function() {
        });
      } else {
        $(this).text('Смотреть все фото');
        $(this).parent().next().animate({
          height: curHeight
        }, 200, function() {
        });
      }
    });
  });



});