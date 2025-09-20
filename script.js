

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach(card => card.classList.remove('zoomed'));
        entry.target.classList.add('zoomed');
      }
    });
  }, {
    threshold: 0.6
  });

  cards.forEach(card => observer.observe(card));
});




const box = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
},
  {
    threshold: 0.6 // یعنی وقتی ۶۰٪ باکس تو دید بود فعال بشه
  });

box.forEach(box => {
  observer.observe(box);
});


let isNightMode = false;
function toggleMode() {
  isNightMode = !isNightMode;
  document.body.style.backgroundColor = isNightMode ? "black" : "white";
  document.body.style.color = isNightMode ? "white" : "black";
  document.body.classList.toggle("dark-mode");
  document.querySelector(".titel,.navbar").style.transform = document.body.classList.contains("dark-mode");

}
document.getElementById("modeToggle").addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
function toggleIcon() {
  let icon = document.getElementById("icon");
  if (icon.classList.contains("bi-moon-stars-fill")) {
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-stars-fill");
  }
}

    const menuBar = document.getElementById('menuBar-fc');
    const toggleBtn = document.getElementById('toggleBtn-fc');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // جلوگیری از بسته شدن فوری منو
      menuBar.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      if (menuBar.classList.contains('active')) {
        const isClickInsideMenu = menuBar.contains(e.target);
        const isClickOnButton = toggleBtn.contains(e.target);
        if (!isClickInsideMenu && !isClickOnButton) {
          menuBar.classList.remove('active');
        }
      }
    });
    