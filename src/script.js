  // count js //
  function animation() {
    return {
      counter: 0,
      animate(finalCount) {
        let time = 35 /* Time in milliseconds */
        let interval = 1
        let step = Math.floor(finalCount*interval/time)
        let timer = setInterval(() => {
          this.counter = this.counter + step;
          if (this.counter >= finalCount + step) {
            this.counter = finalCount
            clearInterval(timer);
            timer = null;
            return;
          }
        }, interval);
      }
    };
  }

  function animation2() {
    return {
      counter: 0,
      animate(finalCount) {
        let time = 14 /* Time in milliseconds */
        let interval = 1
        let step = Math.floor(finalCount*interval/time)
        let timer = setInterval(() => {
          this.counter = this.counter + step;
          if (this.counter >= finalCount + step) {
            this.counter = finalCount
            clearInterval(timer);
            timer = null;
            return;
          }
        }, interval);
      }
    };
  }
  
  




  function myFunction3() {
    var x = document.querySelector(".jsDropdown3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  function myFunction4() {
    var x = document.querySelector(".jsDropdown4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  
  function myFunction5() {
    var x = document.querySelector(".jsDropdown5");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  function myFunction6() {
    var x = document.querySelector(".jsDropdown6");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  function myFunction7() {
    var x = document.querySelector(".jsDropdown7");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  function myFunction8() {
    var x = document.querySelector(".jsDropdown8");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  
  function myFunction13() {
    var x = document.querySelector(".jsDropdown13");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  } 
  


