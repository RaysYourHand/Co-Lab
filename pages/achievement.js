if (!window.month) {
  months = [
  '一月', '二月', '三月', '四月',
  '五月', '六月', '七月', '八月',
  '九月', '十月', '十一月', '十二月'
];
}
if (!window.monthData) {
  window.monthsData = [
    {
    text: '2025 一月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 二月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 三月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 四月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 五月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 六月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 七月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
    {
    text: '2025 八月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 九月',
    medals: [
      'pages/image/獎牌-3D-收藏筆記.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-全白-被收藏_0.png'
    ]
  },
  {
    text: '2025 十月',
    medals: [
      'pages/image/獎牌-全白-收藏筆記_0.png',
      'pages/image/獎牌-3D-發筆記.png',
      'pages/image/獎牌-3D-被收藏.png'
    ]
  },
  {
    text: '2025 十一月',
    medals: [
      'pages/image/獎牌-3D-收藏筆記.png',
      'pages/image/獎牌-全白-發筆記_0.png',
      'pages/image/獎牌-3D-被收藏.png'
    ]
  },
  {
    text: '2025 十二月',
    medals: [
      'pages/image/獎牌-3D-收藏筆記.png',
      'pages/image/獎牌-3D-發筆記.png',
      'pages/image/獎牌-3D-被收藏.png'
    ]
  }
];
}


if (!window.currentDate) {
  window.currentDate = new Date(); // 預設 十一月
}

if (!window.currentYear) {
  window.currentYear = currentDate.getFullYear(); // 預設 十一月
}
if (!window.currentMonth) {
  window.currentMonth = currentDate.getMonth(); // 預設 十一月
}

if (!window.currentMonthIndex) {
  window.currentMonthIndex = 10; // 預設 十一月
}
/* 預設使用現在時間
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentMonthIndex = 11; // 預設 十一月*/
// 畫面初始化
document.addEventListener('DOMContentLoaded', () => {
  updateMonthText();
});

// 切換月份
function changeMonth(offset) {
  currentMonthIndex += offset;

  if (currentMonthIndex < 0) {
    currentMonthIndex = monthsData.length - 1;
  }

  if (currentMonthIndex >= monthsData.length) {
    currentMonthIndex = 0;
  }

  renderAchievement();
}

// 更新畫面文字
function updateMonthText() {
  const monthText = document.getElementById('monthText');
  monthText.textContent = `${currentYear} ${months[currentMonth]}`;
}

function renderAchievement() {
  const monthText = document.getElementById('monthText');
  const medalImgs = document.querySelectorAll('.medal');

  const data = monthsData[currentMonthIndex];

  // 更新月份文字
  monthText.textContent = data.text;

  // 更新獎章圖片
  medalImgs.forEach((img, index) => {
    img.src = data.medals[index];
  });
}
renderAchievement();