window.addEventListener("DOMContentLoaded", () => {
  const MIN_TRACK_WIDTH = window.innerWidth * 2; // 최소 두 화면 너비 이상으로
  document.querySelectorAll(".scroll-track").forEach(track => {
    let contentWidth = track.scrollWidth;
    const originalHTML = track.innerHTML;

    while (contentWidth < MIN_TRACK_WIDTH) {
      track.innerHTML += originalHTML;
      contentWidth = track.scrollWidth;
    }
  });
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

  
 document.addEventListener("DOMContentLoaded", () => {
    const label = document.querySelector(".MediumLabel");
    const span = label.querySelector(".Medium");

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

  
 document.addEventListener("DOMContentLoaded", () => {
    const label = document.querySelector(".SemiBoldLabel");
    const span = label.querySelector(".SemiBold");

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


  //메인

  window.addEventListener('load', () => {
    const images = document.querySelectorAll('.MainMockUpImgBox img');

    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('show');
      }, index * 150); // ✅ 더 빠르게: 0.15초 간격
    });
  });



  // 해상도




  window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.Service1Text');

  // 초기 상태 숨김
  target.classList.add('hidden');

  function handleScroll() {
    const rect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100 && rect.bottom > 100) {
      // 화면 안에 있을 때
      target.classList.add('slide-in');
      target.classList.remove('hidden');
    } else {
      // 벗어나면 다시 숨김 상태로
      target.classList.remove('slide-in');
      target.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 진입 시 바로 체크
});


window.addEventListener('DOMContentLoaded', () => {
  const leftTarget = document.querySelector('.Service1Text');
  const rightTarget = document.querySelector('.Service1Img');

  // 초기 숨김 설정
  leftTarget.classList.add('hidden');
  rightTarget.classList.add('hidden-right');

  function handleScroll() {
    const leftRect = leftTarget.getBoundingClientRect();
    const rightRect = rightTarget.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 좌측 텍스트
    if (leftRect.top < windowHeight - 100 && leftRect.bottom > 100) {
      leftTarget.classList.add('slide-in');
      leftTarget.classList.remove('hidden');
    } else {
      leftTarget.classList.remove('slide-in');
      leftTarget.classList.add('hidden');
    }

    // 우측 이미지
    if (rightRect.top < windowHeight - 100 && rightRect.bottom > 100) {
      rightTarget.classList.add('slide-in-right');
      rightTarget.classList.remove('hidden-right');
    } else {
      rightTarget.classList.remove('slide-in-right');
      rightTarget.classList.add('hidden-right');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 처음 로딩 시에도 바로 체크
});

window.addEventListener('DOMContentLoaded', () => {
  const revealTarget = document.querySelector('.Service2Img');

  function handleScroll() {
    const rect = revealTarget.getBoundingClientRect();
    const winH = window.innerHeight;

    if (rect.top < winH - 100 && rect.bottom > 100) {
      revealTarget.classList.add('reveal-left');
      revealTarget.classList.remove('hidden-reveal');
    } else {
      revealTarget.classList.remove('reveal-left');
      revealTarget.classList.add('hidden-reveal');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 첫 로딩 시 체크
});



  const targets = document.querySelectorAll('.scroll-animate');

  const wjatjsobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // 반복해서 스르륵 등장
      }
    });
  }, {
    threshold: 0.1,
  });

  targets.forEach(el => wjatjsobserver.observe(el));

  //

  function typeWriterHTML(el, speed = 30) {
  const originalHTML = el.getAttribute('data-original') || el.innerHTML;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = originalHTML;

  const nodes = Array.from(tempDiv.childNodes);
  el.innerHTML = '';
  el.style.visibility = 'visible';
  el.style.opacity = 1;

  function processNode(nodeList, callback) {
    if (nodeList.length === 0) return callback();

    const node = nodeList.shift();

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      let j = 0;
      function typeChar() {
        if (j < text.length) {
          el.innerHTML += text.charAt(j);
          j++;
          setTimeout(typeChar, speed);
        } else {
          processNode(nodeList, callback);
        }
      }
      typeChar();
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
      el.innerHTML += '<br>';
      processNode(nodeList, callback);
    } else {
      processNode(nodeList, callback); // 그 외 태그 무시
    }
  }

  processNode(nodes, () => {});
}

// 초기 설정
document.querySelectorAll('.text1, .text2, .text3, .text4').forEach(el => {
  el.setAttribute('data-original', el.innerHTML);
  el.innerHTML = '';
  el.style.visibility = 'hidden';
  el.style.opacity = 0;
});

// 이미지별 감지하고 매칭된 텍스트 실행
const observerPairs = [
  { imgClass: '.wjatjs1', textClass: '.text1' },
  { imgClass: '.wjatjs2', textClass: '.text2' },
  { imgClass: '.wjatjs3', textClass: '.text3' },
  { imgClass: '.wjatjs4', textClass: '.text4' },
];

observerPairs.forEach(pair => {
  const imgEl = document.querySelector(pair.imgClass);
  const txtEl = document.querySelector(pair.textClass);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeWriterHTML(txtEl, 30);
      }
    });
  }, { threshold: 0.5 });

  io.observe(imgEl);
});



const subDesignEl = document.querySelector('.SubDesignImg');

const subDesignObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      subDesignEl.classList.add('slide-in');
    } else {
      subDesignEl.classList.remove('slide-in'); // 다시 나가면 초기화 (반복 효과)
    }
  });
}, {
  threshold: 0.3,
});

subDesignObserver.observe(subDesignEl);








