const boxes = document.querySelectorAll('.PJG-container > div');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 다시 스크롤 올라가면 제거
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
