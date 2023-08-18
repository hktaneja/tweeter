$(document).ready(function() {
  // Call the loadTweets function to fetch and render tweets
  loadTweets();

  // Add an event listener for the form submit
  $('form').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const $errorMessage = $('.error-message');
    // Get the form data
    const formData = $(this).serialize();
    const tweetText = $('#tweet-text').val();
    // validation for form data
    if (tweetText === '' || tweetText === null) {
      $errorMessage.text('The tweet is empty'); // Set error message text
      $errorMessage.slideDown(); // Show the error message with animation
    } else if (tweetText.length > 140) {
      $errorMessage.text('The tweet exceeds the maximum length of 140');
      $errorMessage.slideDown();
    } else {
      $errorMessage.slideUp(); // Hide the error message if no error
      // Use AJAX to submit the form data to the server
      $.ajax({
        method: 'POST',
        url: '/tweets', // Adjust the URL according to your server's endpoint
        data: formData
      }).then(function(response) {
        console.log('Success:', response);
        // Clear the textarea
        $('#tweet-text').val('');
        $errorMessage.slideUp(); // Hide the error message after successful submission
        // Fetch and render the updated list of tweets
        loadTweets();
      }).catch(function(error) {
        console.error('Error submitting form:', error);
      });
    }
  });
});

// Function to render tweets
const renderTweets = function(tweets) {
  for (const tweetData of tweets) {
    const $tweet = createTweetElement(tweetData);
    $('.tweets').append($tweet);
  }
};

// Function to create tweet elements
const createTweetElement = function(tweetData) {
  const $tweet = $(`
  <article class="tweet">
    <header>
      <div>
        <img src="${escapeHtml(tweetData.user.avatars)}" height="30" width="30" alt="${escapeHtml(tweetData.user.name)}">
        ${escapeHtml(tweetData.user.name)}
      </div>
    </header>
    <h2 class="tweet-header-title"><label for="article-text">${escapeHtml(tweetData.content.text)}</label></h2>
    <footer>
    <p>${formatTimeAgo(tweetData.created_at)}</p>
      <div class="icons">
        <i class="fas fa-heart"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-share"></i>
      </div>
    </footer>
  </article>
`);
  return $tweet;
};

// Helper function to escape HTML entities
const escapeHtml = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
//

// Function to format timestamp using Timeago library
const formatTimeAgo = function(timestamp) {
  return timeago.format(timestamp); // Use the Timeago library to format the timestamp
};

// Function to load tweets
const loadTweets = function() {
  // Use AJAX to fetch tweets from the server
  $.ajax({
    method: 'GET',
    url: '/tweets', // Adjust the URL according to your server's endpoint
    dataType: 'json'
  }).then(function(tweets) {
    const sortedTweets = tweets.sort((a, b) => b.created_at - a.created_at);
    // Clear the existing tweets container
    $('.tweets').empty();
    renderTweets(sortedTweets); // Render the fetched tweets
  }).catch(function(error) {
    console.error('Error fetching tweets:', error);
  });
};

