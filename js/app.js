/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav_Bar=document.querySelector('.navbar__menu');
const nav_list=document.querySelector('#navbar__list');
const Sections = document.querySelectorAll('section');
const header = document.querySelector('.page__header');
const footer = document.querySelector('footer');

//end global variables

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//start buliding the navbar function 
function generate_NavBar(){
    //a variable to count the numbers of sections
    //after the for loop the section_num be = 1
    let Section_num=1;
    for(let i=0;i<Sections.length;i++){
        //Create a Link element which is anchor and add to  
        const Link=document.createElement('a');
        Link.href="#section"+Section_num;
        Link.textContent=`section${Section_num}`;
        Link.classList.add('menu__link');
        //creates the list item in order to put the link inside it 
        const List_Item=document.createElement('li');
        //add a classname to the list item
        List_Item.className="section"+Section_num;
        //add the link created to the list.item
        List_Item.appendChild(Link);
        //add all element to the navbar itself
        nav_list.appendChild(List_Item);
        //increment the section number by 1
        Section_num=Section_num+1;     
    }
};
//end function buliding 
//fuction invoke generate_NavBar in order the build the navbar
generate_NavBar();
//end of the first function and function invokation

 // Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach(anchoritem => {
    anchoritem.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//end of scroll to anchor Id using scrollTo event

//set sections as active
// Add class 'active' to section when it's near top of viewport

//Function that make the current section with a class called "your-active-class"
//function to add activeclass
//start function
function addActiveClass(section) {
    // get the id from the section
    const id = section.getAttribute('id');
    // add the active class to the section 'your-active-class'
    document.querySelector(`#${id}`).classList.add('your-active-class');
  }
  //end function

  //A function to remove the active class
  //start function
  function removeActiveClass(section) {
    const id = section.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
  }
  //end function

  //function to make the Activesection itself using the pervious 2 functions
  //start function
  function makeActiveSection() {
    Sections.forEach((section) => {
        //get the bounding of the used device and store it in elementOffset
      let elementOffset = section.getBoundingClientRect();
      
      if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
        addActiveClass(section);
        //section.setAttribute('class','activeclass');
      } else {
        removeActiveClass(section);
      // section.removeAttribute('activeclass');
      }
    });
  }
  //end makeActivesection  function

  // event listener to the function makeActiveSection to make it respond while scrolling
  document.addEventListener('scroll', makeActiveSection);
//end eventlistener

//function that makes the acive section in the nav bar lighted
//start function 
function activeSectionNavBar (){
  // Select all anchor using "menu__link" class
  const navActive = document.querySelectorAll(".menu__link");
  Sections.forEach((section, i)=>{
      //Get the boundingrect for each section 
      const sectionBond = section.getBoundingClientRect();
      //Check if the section is in viewport or not 
      if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
          //section in viewport accourding to top and bottom boundings
          //add 'active_button' class to the specific nav button according to section ID
          navActive[i].classList.add("ActiveButton");
      } else{
          //Remove navButton active classes when section is off sight
          navActive[i].classList.remove("ActiveButton");
      }
  });
}
//end function
//start eventlistenser
document.addEventListener('scroll',activeSectionNavBar);
//end eventlistenser

//function to displayhamburger icon 
//start function
const image=document.getElementsByTagName('img');
  image[0].addEventListener('click',function(){
 
  const ul=document.querySelector('ul');
  
  //if condation checks whether the classlist contains a open class or not
  if(ul.classList.contains('open')){
   ul.classList.remove('open'); 
   ul.removeAttribute('id');
   ul.classList.add('close');
   ul.style.cssText='display:none;';
   
  }
  else{
     ul.classList.remove('close');
     ul.classList.add('open');
     ul.style.cssText='display:flex; flex-direction:column;margin-top:20px;';
     ul.setAttribute('id','navbar__list');
  }
  })
  //end function
  

//Start of up button
//Create the div element for the button to store it inside before the begin of the footer 
const UpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="TopArrow" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("TopArrow").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
//end of up button
  
  


