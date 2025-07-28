function animateValue(id, end, duration) {
      let obj = document.getElementById(id);
      let start = 0;
      let startTime = null;
      function run(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) requestAnimationFrame(run);
        else obj.textContent = end.toLocaleString();
      }
      requestAnimationFrame(run);
    }
    window.addEventListener('DOMContentLoaded', () => {
      animateValue("stat-orders", 38000, 1800);
      animateValue("stat-users", 12000, 1200);
      animateValue("stat-resto", 120, 900);
    });