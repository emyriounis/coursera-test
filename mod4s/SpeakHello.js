(function (window) {
  var speak = {};
  var helloSpeaker = speak;
  var speakWord = "Hello";
  function helloSpeaker(name) {
    console.log(speakWord + " " + name);
  }
  window.speak = helloSpeaker;
  })(window);