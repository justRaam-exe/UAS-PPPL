// Animated counter for each service
    function animateCount(el, target, duration = 1200) {
      let start = 0;
      let startTime = null;
      function updateCount(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (target - start) + start);
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(updateCount);
    }
    // Run when visible
    function runCounters() {
      document.querySelectorAll('.service-counter').forEach(counter => {
        animateCount(counter, parseInt(counter.dataset.count));
      });
    }
    // Highlight card on hover (service & catalog)
    function addHoverEffect(selector) {
      document.querySelectorAll(selector).forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('active'));
        card.addEventListener('mouseleave', () => card.classList.remove('active'));
      });
    }
    window.addEventListener('DOMContentLoaded', () => {
      runCounters();
      addHoverEffect('.service-card');
      addHoverEffect('.catalog-card');
    });