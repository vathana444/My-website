export function topNav(){
  const topNav = document.querySelectorAll('.top-nav .nav-btn');
  const sections = document.querySelectorAll("section");

  // goto another section when click the nav //
  topNav.forEach(nav => {
    nav.addEventListener('click',()=> [
      sections.forEach(section => {
        const sectionName = section.classList[0];
        const navClass = nav.classList[1];

        if(navClass === sectionName){
          section.style.display = "block";
        }
        else{
          section.style.display = "none"
        }
      })
    ]);
  });

  
  // change the color of nav that match the section
  const sectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach(enrty => {      
      if(enrty.isIntersecting){
        topNav.forEach(nav => {
          const sectionClass = enrty.target.classList[0];  
          const navClass = nav.classList[1];
          if(sectionClass === navClass){
            nav.classList.add('active');
          }else{
            nav.classList.remove('active');
          }
        })
      }
    });
  });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
   
}

