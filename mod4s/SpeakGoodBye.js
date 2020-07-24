(function (window) {
var speak = {};
var byeSpeaker = speak;
var speakWord = "Good Bye";
function byeSpeaker(name) {
  console.log(speakWord + " " + name);
}
window.speak = byeSpeaker;
})(window);