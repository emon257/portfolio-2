// Typing script js

const typed = new Typed('.typing', {
    strings: [
            'Web Designer',
            'Web Developer',
            'Blogger',
            'YouTuber'
        ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 700,
  });

  const typed_2 = new Typed('.typing-2', {
    strings: [
            'Web Designer',
            'Web Developer',
            'Blogger',
            'YouTuber'
        ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 500,
  });

  // Show/hide FAQS answer
 
  const items = document.querySelectorAll('.accordion button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach((item) => item.addEventListener('click', toggleAccordion));

  //Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open_menu_btn');
const closeBtn = document.querySelector('#close_menu_btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})
