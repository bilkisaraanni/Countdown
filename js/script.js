  let targetDate = new Date("may 01, 2025 00:00:00").getTime();

    function timer(){
     let todayDate = new Date().getTime();
     let distance = targetDate - todayDate;

     let days = Math.floor(distance/1000/60/60/24); 
     let hours = Math.floor(distance/1000/60/60) %24;      
     let minutes = Math.floor(distance/1000/60) %60; 
     let seconds = Math.floor(distance/1000)%60; 

     document.getElementById("countdown").innerHTML = (`Days${days}:Hours${hours}:Minites${minutes}:Seconds${seconds}`);

   }
   timer()

   setInterval(timer,1000);

  

// let num = 20.4566;

// let number = parseFloat(num)

// console.log(num.toFixed(3));
