$(document).ready(function(){
   $(".hidden").hide();
});

$(document).ready(function(){
  $('button').on('click', function(){
    $(".hidden").show();
    $(".button").hide();
  });
});
