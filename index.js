/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet((timeString)))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const parse_time = parseInt(time)
  if (parse_time <= 11) {
    return "Good Morning";
  } else if (parse_time <= 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

function displayMessage(t){
  document.getElementById("greeting").innerText = t
}