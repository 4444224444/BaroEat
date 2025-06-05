  window.addEventListener("scroll", function () {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


const fallBoxes = document.querySelectorAll('.fall-box');

// 1) 각 박스에 시작 위치 계산
fallBoxes.forEach(box => {
  const y = parseFloat(getComputedStyle(box).getPropertyValue('--y')) || 0;
  const offset = 200;
  box.style.setProperty('--startY', `${y - offset}px`);
});

// 2) 관찰자 설정
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 3) y값 큰 순서 (즉 아래에 있는 박스부터)로 정렬해서 등장
      const sortedBoxes = [...fallBoxes].sort((a, b) => {
        const yA = parseFloat(getComputedStyle(a).getPropertyValue('--y')) || 0;
        const yB = parseFloat(getComputedStyle(b).getPropertyValue('--y')) || 0;
        return yB - yA; // 큰 y값(아래쪽)이 먼저
      });

      sortedBoxes.forEach((box, i) => {
        setTimeout(() => {
          box.classList.add('active');
        }, i * 120); // ✅ 등장 간격
      });
    } else {
      fallBoxes.forEach(box => box.classList.remove('active'));
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.fall-group'));


const textGroups = document.querySelectorAll('.TextGroup');

const overviewobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // 요소가 20% 이상 보이면 반응
});

textGroups.forEach(el => overviewobserver.observe(el));




const problems = document.querySelectorAll('.problem-box1, .problem-box2');

const problemobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // 보일 때
    } else {
      entry.target.classList.remove('show'); // 다시 숨겨짐
    }
  });
}, { threshold: 0.3 }); // 화면에 30% 이상 보이면 트리거

problems.forEach(el => problemobserver.observe(el));

// 타자기효과

 document.addEventListener("DOMContentLoaded", () => {
    const label = document.querySelector(".RegularLabel");
    const span = label.querySelector(".Regular");

    let typed = false;

    label.style.cursor = "pointer";

    label.addEventListener("click", () => {
      if (typed) return; // 중복 방지
      typed = true;

      const text = span.textContent;
      span.textContent = "";
      span.style.opacity = "1"; // 출력 시작하면서 완전히 보이게

      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          span.textContent += text[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80); // 속도 조절 가능
    });
  });

  //비디오
    document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".Mp4");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.classList.add("show");
        } else {
          video.classList.remove("show"); // 다시 위로 올렸다가 내려오면 또 애니메이션
        }
      });
    }, { threshold: 0.3 });

    observer.observe(video);
  });