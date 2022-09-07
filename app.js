const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls') //parent
const sectBtn = document.querySelectorAll('.control') // actual button
const allSection = document.querySelector('.main-content')

function PageTransitions(){
 // Button click active class only active class will working
  for(let i=0; i < sectBtn.length; i++){
  sectBtn[i].addEventListener('click',function(){
    let currentBtn = document.querySelectorAll('.active-btn')
    currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
    this.className += ' active-btn'
  })
  }

 //Sections Active class
 // Here we used addeventlistener when i click event will call  so when we call then events will answer.
  
  allSection.addEventListener('click', (e) => {
  // dataset is like referreing to whatever we clicked on the element specially on the buttons it will worked silently it will not showing any kind of messages to the user. 
    const id = e.target.dataset.id;
    if(id){
     // remove selected from the other btns.
      sectBtns.forEach((btn) => {
      btn.classList.remove('active')
      })
     // when it is removed when we clicked on another button then it will automatically add the classList
      e.target.classList.add('active')
     // hide other sections
     // we are not seeing any sections over here When I click on the active button I want to be able to set the display and set to default & it will helps to remove the active from that specific part.
      sections.forEach((section) => {
      section.classList.remove('active')
      })
     // Whatever id we have mentioned at html it will call that id. Here id will be targetted so it will be activated. When I click home button will be activated now it's getting rid of the existing class . So now we can only use the active on one element.
      const element = document.getElementById(id)
      element.classList.add('active')
    }
  })

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

PageTransitions();