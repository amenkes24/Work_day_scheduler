
// sets the current date in the heading
var californiaTime = document.querySelector("#currentDay")
var currentTime = moment();

californiaTime.textContent = currentTime.format('dddd, MMMM Do');

// enables tasks to be editable on click
$(".col-10").on("click", function() {
  var id = $(this).attr("id");
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("col-10")
    .attr("id", id)
    .val(text);
    $(this).replaceWith(textInput);
  });

// function to save entries to local storage
$(".saveBtn").on("click", function() {
    var taskId = $(this).siblings(".col-10").attr("id");
    var task = $(this).siblings(".col-10").val();
    localStorage.setItem(taskId, task)
  })


// function that retrieves from local storage
  $(".col-10").each(function(){
  var newTask = $(this).attr("id");
  $(this).text(localStorage.getItem(newTask))
  });


// functions to update column styling based on time

$(".col-10").each(function(){
  var now = moment().hour()
  console.log(now);
  var columnTime = parseInt($(this).attr("id").split("-")[0]);
  console.log(columnTime)
  if (columnTime < now){
    $(this).addClass("past")
    // $(this).removeClass("future")
  } else if (columnTime == now) {
    $(this).addClass("present")
  } else (columnTime > now) 
    $(this).addClass("future")
});

$(".col-10").each(function(){
  var now = moment().hour()
  var columnTime = parseInt($(this).attr("id").split("-")[0]);
  if (columnTime < now){
    $(this).removeClass("future")
  } else (columnTime == now)
    $(this).removeClass("future")
});

$(".col-10").each(function(){
  var now = moment().hour()
  var columnTime = parseInt($(this).attr("id").split("-")[0]);
  if (columnTime > now) {
    $(this).addClass("future")
  } else (columnTime == 25)
  console.log("bananas")
});