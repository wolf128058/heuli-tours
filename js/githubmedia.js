$(document).ready(function() {
   $("img").each(function(){
      $old_src = $(this).attr('src');
      $new_src = 'https://media.githubusercontent.com/media/wolf128058/heuli-tours/main/'+ $old_src;
      $(this).attr('src',$new_src);
   });
});
