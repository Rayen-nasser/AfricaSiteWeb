/*****  typing animation  *****/
var typed = new Typed(".typing" ,{
    strings:["","Web Designer","","Web Developer",""],
    typeSpeed:100,
    BackSpeed:90,
    loop:true,
});

function toggle(){
    sec.classList.toggle('active')
<<<<<<< Updated upstream
};
=======
};


// Get all the <li> elements inside the <ul> with class "nav"
const navItems = document.querySelectorAll('.nav li a');

// Iterate over each <li> element
navItems.forEach((item) => {
  // Add a click event listener to each <li> element
  item.addEventListener('click', () => {
    // Remove the "active" class from all <li> elements
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });
    
    // Add the "active" class to the clicked <li> element
    item.classList.add('active');
  });
});
>>>>>>> Stashed changes
