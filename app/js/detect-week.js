// our office chore schedule is split into 6 weeks
// this function detects which week we are in
// and returns the week number
// it starts at week 1 and ends at week 6
// it is called by the function that displays the schedule
// every 7 days the week number is incremented
// if the week number is greater than 6, it is reset to 1
// the week number is stored in a data-attribute in the html element called data-week
// the week number is also stored in a cookie called week
// the cookie is used to remember the week number when the page is refreshed
// the cookie is also used to remember the week number when the page is closed and reopened
// the cookie is also used to remember the week number when the browser is closed and reopened
// the cookie is also used to remember the week number when the computer is shut down and restarted
// the cookie is also used to remember the week number when the computer is turned off and on
// the cookie is also used to remember the week number when the computer is unplugged and plugged in
// the function is called when the page is loaded
// write a function that based on the current week, it changes certain elements of the page
// when it's week 2 the h5 child element with a parent div of "dropdown__text" should say "Katrina & ICE", the small element should say "Snow Leopards" the img with class "icon--md" should have a source of "images/icons/leopard.svg" and an alt of "Katrina & ICE"
// when it's week 3 the h5 child element with a parent div of "dropdown__text" should say "Milan & Hugo", the small element should say "School Bus Drivers" the img with class "icon--md" should have a source of "images/icons/bus.svg" and an alt of "Milan & Hugo"
// when it's week 4 the h5 child element with a parent div of "dropdown__text" should say "Ben & Nico", the small element should say "HR Hazard" the img with class "icon--md" should have a source of "images/icons/hazard.svg" and an alt of "Ben & Nico"
// when it's week 5 the h5 child element with a parent div of "dropdown__text" should say "Liam & Mark", the small element should say "Biz Wizs" the img with class "icon--md" should have a source of "images/icons/suitcase.svg" and an alt of "Liam & Mark"
// when it's week 6 the h5 child element with a parent div of "dropdown__text" should say "Manesha & Prasanth", the small element should say "Sweet Munchkins" the img with class "icon--md" should have a source of "images/icons/cat.svg" and an alt of "Manesha & Prasanth"

function detectWeek() {
  const startDate = new Date("August 28, 2023");
  const today = new Date();
  const timeDiff = today.getTime() - startDate.getTime();
  const week = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7)) % 7 || 7;
  const dataWeek = document.querySelector("[data-week]");
  if (dataWeek) {
    dataWeek.setAttribute("data-week", week);
    dataWeek.textContent = `${week}`;
  }
  const dropdownText = document.querySelector(".dropdown__text h5");
  // const small = document.querySelector(".dropdown__text small");
  if (dropdownText) {
    switch (week) {
      case 2:
        dropdownText.textContent = "Anakin & ICE";
        // small.textContent = "Snow Leopards";
        // icon.src = "images/icons/leopard.svg";
        // icon.alt = "Anakin & ICE";
        console.log("2 case");
        break;
      case 3:
        dropdownText.textContent = "Persia & Hugo";
        // small.textContent = "School Bus Drivers";
        // icon.src = "images/icons/bus.svg";
        // icon.alt = "Persia & Hugo";
        console.log("3 case");
        break;
      case 4:
        dropdownText.textContent = "Ben & Nico";
        // small.textContent = "HR Hazard";
        // icon.src = "images/icons/hazard.svg";
        // icon.alt = "Ben & Nico";
        console.log("4 case");
        break;
      case 5:
        dropdownText.textContent = "Alex & Cathy";
        // small.textContent = "Smells Fishy";
        // icon.src = "images/icons/sushi.svg";
        // icon.alt = "Liam & Mark";
        console.log("5 case");
        break;
      case 6:
        dropdownText.textContent = "Manesha & Prasanth";
        // small.textContent = "Sweet Munchkins";
        // icon.src = "images/icons/cat.svg";
        // icon.alt = "Manesha & Prasanth";
        console.log("6 case");
        break;
      case 7:
        dropdownText.textContent = "Tarik & Mark";
        // small.textContent = "Enjoy the Silence";
        // icon.src = "images/icons/mute.svg";
        // icon.alt = "Parth & Hyeseong";
        console.log("7 case");
        break;
      default:
        dropdownText.textContent = "Nicholas & Benji";
        // small.textContent = "Respectfully Loud";
        // icon.src = "images/icons/peace.svg";
        // icon.alt = "Nicholas & Benji";
        console.log("1 case");
        break;
    }
  }
}

detectWeek();
