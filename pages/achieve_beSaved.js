if (window.currentIndex === undefined) {
  window.currentIndex = 10; // 預設 十一月
}
if (window.monthData === undefined) {
  monthData = [
    {
    text: "2025 一月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 0,
    total: 10
  },
    {
    text: "2025 二月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 9,
    total: 10
  },
  {
    text: "2025 三月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 7,
    total: 10
  },
  {
    text: "2025 四月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 2,
    total: 10
  },
  {
    text: "2025 五月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 1,
    total: 10
  },
  {
    text: "2025 六月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 6,
    total: 10
  },
  {
    text: "2025 七月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 6,
    total: 10
  },
  {
    text: "2025 八月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 8,
    total: 10
  },
  {
    text: "2025 九月",
    img: "pages/image/獎牌-全白-被收藏_0.png",
    current: 8,
    total: 10
  },
  {
    text: "2025 十月",
    img: "pages/image/獎牌-3D-被收藏.png",
    current: 15,
    total: 10
  },
  {
    text: "2025 十一月",
    img: "pages/image/獎牌-3D-被收藏.png",
    current: 11,
    total: 10
  },
  {
    text: "2025 十二月",
    img: "pages/image/獎牌-3D-被收藏.png",
    current: 11,
    total: 10
  }
];
}


function changeMonth(offset) {
  currentIndex += offset;

  // 循環（不會超出）
  if (currentIndex < 0) currentIndex = monthData.length - 1;
  if (currentIndex >= monthData.length) currentIndex = 0;

  updateUI();
}

function updateUI() {
  const data = monthData[currentIndex];

  // 月份文字
  document.getElementById("monthText").textContent = data.text;

  // 獎章圖片
  document.getElementById("medalImg").src = data.img;

  // 進度條
  const percent = (data.current / data.total) * 100;
  document.getElementById("progressFill").style.width = percent + "%";

  // 進度文字
  document.getElementById("progressText").textContent =
    `(${data.current}/${data.total})`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});
