
//select an HTML element with JavaScrip

//var skillset = document.getElementsByClassName('skillset')
//alert(skillset)

//select an HTML element with jQuery
  function main() {
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);
    $('.projects').hide();
    $('.projects-button').on('click', function() {

//Selecting by class
    // $('.projects').show();
    // $('.projects').toggle();
    // $('.projects').toggleClass('active');

//Using THIS selector
    // $(this).next().toggle(); //This line can prevent the slideToggle from working properly
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });

}
$(document).ready(main);
