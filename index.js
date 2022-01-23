

function clock(){



  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var meridian = document.getElementById("meridian");


  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var mer ="AM";

  if(h>=12){
    mer="PM";
  }
   
  
  if(h>12){
    h = h-12;

  }

  if (m < 10)
    {
        m = "0" + m;
    }
 
    if (s < 10)
    {
        s = "0" + s;
    }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  meridian.innerText = mer;


}
setInterval(clock,1000);


function setTime() {
  var tym = new Date();
  var hrs = tym.getHours();

  
  let waketime = document.getElementById("wakeup").value;
  let lunchtime = document.getElementById("lunchtym").value;
  let naptime = document.getElementById("sleeptym").value;

  if (waketime == hrs) {
    document.getElementById("lunchpic").style.backgroundImage =
    "url('./assets/window.png')";
     
    document.getElementById("textbox1").innerHTML = "Let's have some breakfast !";
     

    document.getElementById("wish").innerHTML = "GOOD MORNING !"
     
  }
  if (lunchtime == hrs) {
    document.getElementById("lunchpic").style.backgroundImage =
    "url('./assets/group.png')";
     
    document.getElementById("textbox1").innerHTML = "Let's have some lunch !";
     

    document.getElementById("wish").innerHTML = "GOOD AFTERNOON !"
     
  }

  if (naptime == hrs) {
    document.getElementById("lunchpic").style.backgroundImage =
    "url('./assets/bed).png')";
     
    document.getElementById("textbox1").innerHTML = "Let's sleep !";
     

    document.getElementById("wish").innerHTML = "GOOD NIGHT !"
     
  }
  displayValue();
}

function displayValue() {


  let waketime = document.getElementById("wakeup").value;
  let lunchtime = document.getElementById("lunchtym").value;
  let naptime = document.getElementById("sleeptym").value;

  var insideValue1 = document.getElementById("wakeup");
  var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

  var insideValue2 = document.getElementById("lunchtym");
  var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

  var insideValue3 = document.getElementById("sleeptym");
  var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

  if (waketime == "none") {
    document.getElementById("mrng").innerHTML = "";
  } else {
    document.getElementById("mrng").innerHTML ="Wake up time : " + invalue1;
  }

  if (lunchtime == "none") {
    document.getElementById("aftn").innerHTML = "";
  } else {
    document.getElementById("aftn").innerHTML ="Lunch time : " + invalue2;
  }

  if (naptime == "none") {
    document.getElementById("nyt").innerHTML = "";
  } else {
    document.getElementById("nyt").innerHTML = "sleep time : " + invalue3;
  }
}

