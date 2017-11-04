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
// let clickBtn = document.getElementById("modalBtn");
// clickBtn.addEventListener("click", () => {
//     alert("Bu Bro!!!");
//     clickBtn.innerHTML = "CLICKED";
// });

// modal
let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen to open click
modalBtn.addEventListener("click", openModal);
// listen to close click
closeBtn.addEventListener("click", closeModal);
// listen to outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
    modal.style.display = "block";
}
// function to close modal
function closeModal() {
    modal.style.display = "none";
}
// // function to close modal when clicked outside
function clickOutside(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}