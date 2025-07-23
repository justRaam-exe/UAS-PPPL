// Company stats animated counters
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
      animateValue("about-users", 0, 1500, 1200);
      animateValue("about-resto", 0, 50, 900);
      animateValue("about-delivery", 0, 3500, 1600);
    };