// 获取节点
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// 初始化变量-追踪active (active属性的个数)
let currentActive = 1;

// 事件监听
prev.addEventListener('click', () => {
  currentActive--;
  // 保持currentActive在界限范围内
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
next.addEventListener('click', () => {
  currentActive++;
  // 保持currentActive在界限范围内
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

function update() {
  // 依据currentActive的值来添加和删除active类名
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // 获取拥有active属性的circle
  const actives = document.querySelectorAll('.active');

  // 通过百分比设置进度条宽度
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  // 按钮
  if (currentActive === 1) {
    // 禁止prev
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    // 禁止next
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
