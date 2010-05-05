// $Id$
$(document).ready(function(){
  var vocab_over = function() {
    $(this).children('.vocab_edit_link').fadeIn();
  }
  var vocab_out = function() {
    $(this).children('.vocab_edit_link').fadeOut();
  }
  $('.block-taxonomyblocks h3').hover(vocab_over, vocab_out);
});