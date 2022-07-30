// moment.js to dynamically update seconds

var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);

var test = $(".time");
var test1 = $(".time")[0];
var test2 = $(".time")[1].innerHTML;
console.log(test);
console.log(test1);
console.log(test2);

var timeArr = $(".time");

for (var i = 0; i < timeArr.length; i++) {
    var time = timeArr[i].innerHTML;
    console.log(time);
}

$.each(timeArr, function(index, element) 
{
    console.log("the index is: " + index + " The element is: " + element.innerHTML);
    var time = element.innerHTML;
    var timeFormat = moment(time, 'ha');
    console.log(timeFormat);
    var timeNow = moment();
    var timeNowFormatted = moment(timeNow, 'ha');
    console.log(timeNowFormatted);
    if (timeFormat.isBefore(timeNowFormatted))
    {
        console.log("Is before");
    } else if (timeFormat.isAfter(timeNowFormatted)) {
        console.log("Is after");
    } else {
        console.log("Is same");
    };
});

/* let momentTime = moment("13:30", 'ha');
let laterMomentTime = moment("15:00", 'ha');

if(momentTime.isBefore(laterMomentTime)){
  console.log("Yes 1:30 pm is earlier");
}
 */

// past, present, future change colours 

/* $.each(abilities, function(i, ability) {
    abilityEl.append("<div>" + ability + "</div>");
})

if 

$("textarea").addClass("past");
$("textarea").addClass("present");
$("textarea").addClass("future"); */

function a(){
    localStorage.setItem('hour-14', 'text value')
}

function b(){
    localStorage.getItem('hour-14')
}
