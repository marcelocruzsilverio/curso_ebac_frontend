$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $(".cancel").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (ev) {
    ev.preventDefault();

    const newTask = $("#task-input").val();
    const newLi = $("<li></li>");
    const link = $(`<a href="#">${newTask}</a>`);
    $(link).appendTo(newLi);
    $(newLi).appendTo("ul");
    $("#task-input").val("");

    $("ul li a").click(function () {
      $(this).addClass("clicked");
    });

    $("#clean-list").click(function () {
      $("ul").children("li").remove();
    });
  });
});
