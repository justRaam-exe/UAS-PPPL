// Typing effect
new TypeIt("#typing-headline", {
  strings: [
    "Makan Enak, Sampai di Rumah!",
    "Delivery Cepat, Harga Kaki Lima!",
    "Kedai Favoritmu, Hanya Sejauh Klik!"
  ],
  speed: 70,
  breakLines: false,
  loop: true,
  nextStringDelay: 1600
}).go();

// Statistik Dinamis (counter)
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let minTimer = 30;
  let stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  function run() {
    let now = new Date().getTime();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - (remaining * range));
    obj.textContent = value.toLocaleString();
    if (value == end) return;
    requestAnimationFrame(run);
  }
  run();
}
window.onload = () => {
  animateValue("stat-users", 0, 1500, 1800);
  animateValue("stat-orders", 0, 3500, 2200);
  animateValue("stat-resto", 0, 50, 1400);
};

// Navbar scroll background & text color effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const brand = document.querySelector('.navbar-brand');
  const links = document.querySelectorAll('.navbar-link');

  if (window.scrollY > 50) {
    // Navbar putih, teks abu-abu
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-white', 'shadow', 'border-b', 'border-gray-200');
    if (brand) {
      brand.classList.remove('text-white');
      brand.classList.add('text-gray-800');
    }
    links.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-700');
    });
  } else {
    // Navbar transparan, teks putih
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'shadow', 'border-b', 'border-gray-200');
    if (brand) {
      brand.classList.add('text-white');
      brand.classList.remove('text-gray-800');
    }
    links.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-700');
    });
  }
});