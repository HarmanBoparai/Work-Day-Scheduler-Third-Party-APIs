

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