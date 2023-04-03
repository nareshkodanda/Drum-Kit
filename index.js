let btns = document.querySelectorAll("button");

for (let i of btns) {
  i.addEventListener("click", function() {
    var buttonInnerhtml = this.innerHTML;
    makeSound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid key pressed");
  }
}

function buttonAnimation(currentkey) {
    // Find the element with a class that matches the currentkey
    var activeButton = document.querySelector("." + currentkey);
  
    // Add the "pressed" class immediately
    activeButton.classList.add("pressed");
  
    // Remove the "pressed" class after 0.1 seconds
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
  