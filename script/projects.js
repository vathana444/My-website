export function projectFuntionality(){
  // ------project navigation functionality---- //
  const filterButtons = document.querySelectorAll('.project-nav .btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');

      const filterType = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterType === 'all' || card.classList.contains(filterType)) {
          card.style.display = 'block'; 
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

}





