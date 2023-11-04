// JavaScript function to create the typing effect
function typeWriter(element, text, i, fnCallback) {
  // Check if text length matches the current position
  if (i < text.length) {
    // Add next character to h2
    document.getElementById(element).textContent = text.substring(0, i + 1);

    // Delay and call this function again for next character
    setTimeout(function () {
      typeWriter(element, text, i + 1, fnCallback);
    }, 100); // The number 100 here represents the typing speed
  }
  // Text has been fully displayed
  else if (typeof fnCallback == "function") {
    // Call the callback after a short delay to start deletion
    setTimeout(fnCallback, 700);
  }
}

// JavaScript function to delete the text
function deleteWriter(element, text, i, fnCallback) {
  // Check if text length matches the current position
  if (i >= 0) {
    // Delete the character
    document.getElementById(element).textContent = text.substring(0, i);

    // Delay and call this function again for the previous character
    setTimeout(function () {
      deleteWriter(element, text, i - 1, fnCallback);
    }, 50); // The number 50 here represents the deletion speed
  }
  // All text has been deleted
  else if (typeof fnCallback == "function") {
    // Call the callback after a short delay to start typing again
    setTimeout(fnCallback, 700);
  }
}

// Start the typing effect
function StartTextAnimation() {
  // Get text from the h2 element
  var text = "Hi, friend!";
  // Start the typing effect, upon completion start deleting
  typeWriter("dynamic-title", text, 0, function () {
    // Start the deleting effect, upon completion start typing again
    deleteWriter("dynamic-title", text, text.length, StartTextAnimation);
  });
}

// Start the effect once the DOM has loaded
document.addEventListener("DOMContentLoaded", function (event) {
  StartTextAnimation();
});
