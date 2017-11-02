let wrapper = $("#content");
let link = $(".navigation__links ul li > a");

// loads first home page
$(document).ready(function() {
    wrapper.load($(".navigation__links ul li > a:first").attr("href"));
    // active link
    link.click(function() {
        link.removeClass("active");
        $(this).addClass("active");
    });
  });

// loading content with ajax
link.on("click", function(e) {
    var href = $(this).attr("href");
    wrapper.hide().load(href).fadeIn("normal");
    return false;
});

// arrow function in the action
let clickBtn = document.getElementById("click");
clickBtn.addEventListener("click", () => {
    alert("Bu Bro!!!");
    clickBtn.innerHTML = "CLICKED";
});

