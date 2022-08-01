# w5-work-day-scheduler

Week Five Challenge of the *UOB Full Stack Development Coding Bootcamp* requires students to use jQuery, Moment.js and Bootstrap to create a **Work Day Scheduler**. 

We were given a User Story and an Acceptance Criteria as per below:

User Story:

![User Story](/assets/images/user-story.png) 

Acceptance Criteria:

![Acceptance Criteria](/assets/images/acceptance.png) 

## How I approached the task:

* Analysed starter code, and used Bootstrap grid with existing CSS to build timeblocks. 

* Used Moment.js to dynamically display current time, and to check if time-block isBefore(), isAfter() or same as current time. 

**Dynamic time display:**

```
var update = function(){
    var now = moment();
    $("#currentDay").text(now.format("dddd, Do MMMM YYYY, h:mm:ss a"));
} 
setInterval(update, 1000);
```

* Used jQuery to simplify DOM manipulation and event methods  e.g. .click(), .show(), .hide(), -each().

## Screenshot of Deployed Application:

![Deployed Application Screenshot](/assets/images/application.png) 

## Screenshot of Application Interaction:

![Saved Notification Screenshot](/assets/images/notif.png)

When the user clicks the Save icon, a notification pops up for three seconds, to confirm the entry has been saved to local storage. 

![Timeblock Past Present Future Screenshot](/assets/images/blocks.png) 

Past, present and future time blocks are colour coded and is updated dynamically. 

![Clear Entries Screenshot](/assets/images/clear.png) 

Users have the option to clear all entries, or individually overwrite old entries. 

## URL to Deployed Application:

[Click here](https://priscillaluong.github.io/w5-work-day-scheduler/) 

### Final note:

*Any feedback to improve code or implement best practice would be appreciated* 😊