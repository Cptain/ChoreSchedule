window.onload = detectWeek();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // path=/ means the cookie is available in all paths of the website
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie); // decodeURIComponent is used to decode a URI component
  var ca = decodedCookie.split(";"); // split the cookie into an array of strings
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      // remove whitespace from the beginning of the string
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      // if the cookie name is found at the beginning of the string
      return c.substring(name.length, c.length); // return the cookie value
    }
  }
  return "";
}

function detectWeek() {
  var week = getCookie("week"); // get the week number from the cookie
  if (week == "") {
    // if the cookie is empty
    week = 1; // set the week number to 1
    setCookie("week", week, 365); // set the cookie
  }
  var d = new Date(); // get the current date
  var n = d.getDay(); // get the current day of the week
  if (n == 0) {
    // if the current day of the week is Sunday
    week++; // increment the week number
    if (week > 6) {
      // if the week number is greater than 6
      week = 1; // reset the week number to 1
    }
    setCookie("week", week, 365); // set the cookie
  }
  document.getElementById("week").innerHTML = week; // display the week number
  document.getElementById("week").setAttribute("data-week", week); // store the week number in a data-attribute
}