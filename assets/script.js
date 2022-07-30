// moment.js to dynamically update seconds

var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);

function a(){
    localStorage.setItem('hour-14', 'text value')
}

function b(){
    localStorage.getItem('hour-14')
}
