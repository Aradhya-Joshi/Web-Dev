var countDownDate = new Date("Nov 12, 2023 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "We are Live"; // Happy Diwali
  }
}, 1000);
