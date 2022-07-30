// moment.js to dynamically update seconds

var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);

var blocks = $(".time");
var blocks2 = $(".container").children().eq().children("#time").html();

/* var blockLength = $(".container").children();
for (var i = 0; i < blockLength.length; i++) {
    var blocks = $(".container").children().eq(i).children("#time").html();
    var time = blocks;
    console.log(time);
} */

console.log(blocks);
console.log(blocks2);

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
