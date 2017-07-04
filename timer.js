function check(){
  var now = new Date();
  var timer = document.getElementById("demo");
  var hour = now.getHours();
  var day = now.getDay();

//poniżej pole określające godzinę wysyłki! W celu zmiany na inną trzeba zmienić poniższe trzy 16 na odpowiednią godzinę
  if (day == 5) {
    if (hour < 16) {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate()), 16, 0, 0);
    }
    else {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 3), 16, 0, 0);
    }
  }
  else if (day == 6) {
    if (hour < 16) {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 2), 16, 0, 0);
    }
    else {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 2), 16, 0, 0);
    }
  }
  else if (day == 0) {
    if (hour < 16) {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 1), 16, 0, 0);
    }
    else {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 1), 16, 0, 0);
    }
  }
  else {
    if (hour < 16) {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate()), 16, 0, 0);
    }
    else {
      var deadline = new Date(parseInt(now.getFullYear()), parseInt(now.getMonth()), parseInt(now.getDate() + 1), 16, 0, 0);
    }
  }

  var from = now.getTime();
  var to = deadline.getTime();
  var counter = (to-from)/1000;

setInterval(function(){
  var h = parseInt(counter/3600);
  var c = counter % 3600;
  var m = parseInt(c/60);
  var s = parseInt(c%60);
  counter--;
  if (counter == 0) {
    check();
  }
  else if (h<10){
    if (m<10){
      if (s<10){
        timer.innerHTML = "0" + h + ":0" + m + ":0" + s;
      }
      else {
        timer.innerHTML = "0" + h + ":0" + m + ":" + s;
      }
    }
    else {
      if (s<10){
        timer.innerHTML = "0" + h + ":" + m + ":0" + s;
      }
      else {
        timer.innerHTML = "0" + h + ":" + m + ":" + s;
      }
    }
  }
  else {
    if (m<10){
      if (s<10){
        timer.innerHTML = h + ":0" + m + ":0" + s;
      }
      else {
        timer.innerHTML = h + ":0" + m + ":" + s;
      }
    }
    else {
      if (s<10){
        timer.innerHTML = h + ":" + m + ":0" + s;
      }
      else {
        timer.innerHTML = h + ":" + m + ":" + s;
      }
    }
  }
}, 1000);
};
