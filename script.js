var timeDisplayEl = $('#currentDay')

// handle displaying the time
function displayTime() {
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);


//button passes sibling text to local storage and set object name as the buttons ID.
$('.btn').click(function() {
    localStorage.setItem(($(this).attr("id")),$(this).siblings('.form-control').val().trim());
});



//Compare current 
     
var hod = moment().format('LT');

//change 12hr to 24hr enable comparison

const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
      let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
}

 
  
//Compares  current time with planner schedule time to render correct background

$( ".hour" ).each(function( ) { (convertTime12to24( $( this ).text()));

    
    if (parseInt(convertTime12to24($( this ).text())) < parseInt(convertTime12to24( hod)))
   $(this).siblings().addClass("past")
   
   else if (parseInt(convertTime12to24($( this ).text())) == parseInt(convertTime12to24( hod)))
    $(this).siblings().addClass("present")
    
    else
    {
        $(this).siblings().addClass("future")
    }
});


//Runs at initial load  
init()

//Sets placeholder text with stored text by searching storage using the id of the button which was set set as the stored object name
function init(){
        $(".form-control" ).each(function( ) {$(this).attr("placeholder",((localStorage.getItem($(this).siblings(".btn").attr("id"))) || []))})
}

