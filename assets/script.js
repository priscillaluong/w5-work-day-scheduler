// moment.js to dynamically update seconds

var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);

/* var test = $(".time");
var test1 = $(".time")[0];
var test2 = $(".time")[1].innerHTML;
console.log(test);
console.log(test1);
console.log(test2);
 */
var test = $("textarea");
var test1 = $("textarea")[0];
console.log(test);
console.log(test1);

var timeArr = $(".time");

/* for (var i = 0; i < timeArr.length; i++) {
    var time = timeArr[i].innerHTML;
    console.log(time);
} */

$.each(timeArr, function(index, element) 
{
    //console.log("the index is: " + index + " The element is: " + element.innerHTML);
    var time = element.innerHTML;
    var timeFormat = moment(time, 'ha');
    //console.log(timeFormat);
    var timeNow = moment().format('ha');
    var timeNowFormat = moment(timeNow, 'ha');
    //console.log(timeNowFormatted);
    var currentTextArea = $("textarea")[index];
    console.log(this);
    console.log(index);
    console.log(currentTextArea);
    if (timeFormat.isBefore(timeNowFormat))
    {
        console.log("Is before");
        $("textarea").eq(index).addClass("past");
    } else if (timeFormat.isAfter(timeNowFormat)) {
        console.log("Is after");
        $("textarea").eq(index).addClass("future");
    } else {
        console.log("Is same");
        $("textarea").eq(index).addClass("present");
    };
});

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
