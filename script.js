const portfolioBtns = document.querySelector('.portfolio_button_menu');
function changeImage(event) {
    if(event.target.classList.contains('portfolio_button')) {
        const portfolioBtn = document.querySelector('.portfolio_button');
        const portfolioImages = document.querySelectorAll('.portfolio_pic');
        portfolioImages.forEach((img, index) => img.src = dataset.season = "winter");
    }
  }
