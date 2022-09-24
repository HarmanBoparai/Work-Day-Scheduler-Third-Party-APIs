
//Variable for displaying time
var timeDisplayEl = $('#time-display');

// function for displaying current date and time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);
console.log(moment().format()); //console log it to see it

//Store the values added to the events in the local storage
$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const key = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(key, value);
    });
});

//Getting the stored values of the events from the local storage to display 
$('input[type="text"]').each(function () { 
    const getting = $(this).attr('id'); 
    const letsGrab = localStorage.getItem(getting); 
    document.getElementById(getting).value = letsGrab; 
});

var currentHour = moment().format("H"); // variable for getting the value of time in current hour

// colorcode for different timeblocks of the day
colorCode(9,  "#entertext1");  //colorcode(hour,id)
colorCode(10, "#entertext2"); 
colorCode(11, "#entertext3"); 
colorCode(12, "#entertext4"); 
colorCode(13, "#entertext5");
colorCode(14, "#entertext6"); 
colorCode(15, "#entertext7"); 
colorCode(16, "#entertext8"); 
colorCode(17, "#entertext9"); 
colorCode(18, "#entertext10");
colorCode(19, "#entertext11");
colorCode(20, "#entertext12");
colorCode(21, "#entertext13");
colorCode(22, "#entertext14");

//function to check the time of an event and compare it with the current time
function colorCode(time, theId) { 
    if (currentHour> time) { 
        $(theId).addClass("past"); 
    }
    if (currentHour < time) { 
        $(theId).addClass("future"); 
    }
    if (currentHour == time) { 
        $(theId).addClass("present");
    }
   console.log('time: ' , time , 'theID: ' , theId);
}
