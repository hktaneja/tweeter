$(document).ready(function() {
  const maxCharacters = 140; // Maximum character limit

  // Find the textarea element
  const $textarea = $('#tweet-text');

  // Find the counter element by traversing the DOM
  const $counter = $textarea.closest('.new-tweet').find('.counter');


  // Register an event handler for the input event on the textarea
  $textarea.on('input', function() {
    const currentCharacters = $(this).val().length;
    const remainingCharacters = maxCharacters - currentCharacters;

    // Update the counter text and style
    $counter.text(remainingCharacters);
    if (remainingCharacters < 0) {
      $counter.addClass('over-limit');
    } else {
      $counter.removeClass('over-limit');
    }
  });
});
