const input = document.getElementById("button");

function addingEventListener() {
  input.addEventListener("click", run);
}

addingEventListener();

function run(event) {

  alert("Button clicked!");
}