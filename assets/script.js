// moment.js to dynamically update seconds

var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);

var test = $("textarea").eq(1);
console.log(test);
test.text("test");

 // check if time-block is before, same or after current time

var timeArr = $(".time");

$.each(timeArr, function(index, element) 
{
    var time = element.innerHTML;
    var timeFormat = moment(time, 'ha');

    var timeNow = moment().format('ha');
    var timeNowFormat = moment(timeNow, 'ha');

    if (timeFormat.isBefore(timeNowFormat))
    {
        $("textarea").eq(index).addClass("past");
    } else if (timeFormat.isAfter(timeNowFormat)) {
        $("textarea").eq(index).addClass("future");
    } else {
        $("textarea").eq(index).addClass("present");
    };
});

//store message to local storage

var btnArr = $(".saveBtn");

$.each(btnArr, function(index) {
    $(".saveBtn").eq(index).click(function() {
        event.preventDefault();
        var textEl = $("textarea").eq(index).val();
        console.log(textEl);
        localStorage.setItem('hour-' + index, textEl);


    })
});

//get message when page reloads

var textArea = $("textarea");

window.onload = function() {
    $.each(textArea, function(index) {
    var message = localStorage.getItem('hour-' + index);
    console.log(message);
    if (message !== null) {
        textArea.eq(index).text(message);
    }
})
};