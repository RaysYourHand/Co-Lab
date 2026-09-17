  
if (!window.postData) {
  postData = {
    basic4: {
    title: 'CO:Lab',
    text: '一個筆記/作品共享整合平台',
    tags: '#基本設計 #專題 #筆記',
    images: [
      'pages/minework/1.png',
      'pages/minework/2.png',
      'pages/minework/3.png',
      'pages/minework/4.png',
      'pages/minework/5.png',
      'pages/minework/6.png',
      'pages/minework/7.png',
      'pages/minework/8.png',
    ]
  },
  forever: {
    title: '畫作集',
    text: '好看就收藏',
    tags: '#統測 #畫作 #詠翔',
    images: [
      'pages/forever/forever (1).jpg',
      'pages/forever/forever (2).jpg',
      'pages/forever/forever (3).jpg'
    ]
  },
  modern: {
    title: '摩登男孩購物路線',
    text: '我改編自書籍{摩登少女購物路線}並實際去探訪書中景點，寫下了心得，好玩好玩',
    tags: '#摩登少女購物路線 #國文',
    images: [
      'pages/modern/1.png',
      'pages/modern/2.png',
      'pages/modern/3.png',
      'pages/modern/4.png',
      'pages/modern/5.png',
      'pages/modern/6.png',
      'pages/modern/7.png',
      'pages/modern/8.png',
    ]
  },
  logoDesign: {
    title: 'logoDesign',
    text: '互Design設計公司',
    tags: '#品牌設計 #logoDesign',
    images: [
      'pages/Asset 1.png',
    ]
  },
  basic1: {
    title: '基本設計方法論',
    text: '今天記錄了第一個學期學到的各種基本設計的方法\n希望之後再有設計也可以運用這些方法創造出更好的點子',
    tags: '#基本設計 #方法論',
    images: [
      'pages/notes/basic/handNote/basic1-1.jpg',
      'pages/notes/basic/handNote/basic1-2.jpg',
      'pages/notes/basic/handNote/basic1-3.jpg'
    ]
  },
  history1: {
    title: '文藝復興興甚麼',
    text: '身為資訊背景的小菜鳥，今天能學到設計史中的文藝復興，覺得很酷。\n我也是第一次發現原來設計始能牽扯到社會/經濟/文化背景等等的，好酷喔。',
    tags: '#設計史 #文藝復興 #酷',
    images: [
      'pages/notes/history/handNote/history1-1.jpg',
      'pages/notes/history/handNote/history1-2.jpg',
    ]
  },
  intro1: {
    title: '轉譯及解讀文本',
    text: '老師請了外師來上國文！？\n但能學到酷酷的轉譯，還是很有收穫的。',
    tags: '#轉譯',
    images: [
      'pages/notes/intro/handNote/intro1.jpg',
    ]
  },
  present2: {
    title: '創業實務面',
    text: '創業食物，好吃',
    tags: '#創業 #美食',
    images: [
      'pages/notes/present/handNote/present2-1.jpg',
      'pages/notes/present/handNote/present2-2.jpg',
    ]
  },
  intro2: {
    title: '消費者心理學',
    text: '免費的最好',
    tags: '#消費者 #心理學 #消費者心理學',
    images: [
      'pages/notes/intro/handNote/intro2-1.jpg',
      'pages/notes/intro/handNote/intro2-2.jpg',
    ]
  },
  history2: {
    title: '創業九宮格',
    text: '深入探索商業模式，學習如何成功應用到您的企業中。從創業的第一步開始，了解商業九宮格、目標客層設定、價值主張等業界常聽到的概念。',
    tags: '#創業九宮格',
    images: [
      'pages/notes/history/handNote/history2.jpg',
    ]
  },
  present1: {
    title: '設計表現 X 故事版分鏡',
    text: '看內文，猛的',
    tags: '#設計表現法 #故事版 #分鏡 #電影鏡頭',
    images: [
      'pages/notes/present/handNote/story1-1.jpg',
      'pages/notes/present/handNote/story1-2.jpg',
      'pages/notes/present/handNote/story1-3.jpg',
      'pages/notes/present/handNote/story1-4.jpg',
      'pages/notes/present/handNote/story1-5.jpg'
    ]
  },
  basic2: {
    title: '西西里防禦',
    text: '黑方最經典的防禦之一',
    tags: '#西洋棋 #西西里防禦',
    images: [
      'pages/notes/basic/handNote/basic2.jpg',
    ]
  },
  basic3: {
    title: '創業概論',
    text: '創業概論是一門介紹如何從零開始建立事業的學問，涵蓋了識別機會、整合資源、創新想法、制定商業模式、風險管理等關鍵要素',
    tags: '#創業概論',
    images: [
      'pages/notes/basic/handNote/basic3-1.jpg',
      'pages/notes/basic/handNote/basic3-2.jpg',
      'pages/notes/basic/handNote/basic3-3.jpg',
    ]
  },
};
}
if (!window.postId) {
  postId= localStorage.getItem('currentPostId');
}
if (!window.track) {
  track = document.getElementById('imageTrack');
}
if (!window.post) {
  post = postData[postId];
}
function initPost() {
    if (!postId || !postData[postId]) return;

    post = postData[postId]; // ✅ 更新全域 post 為最新的文章
    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    let currentIndex = 0;
    let startX = 0;

    document.getElementById('postTitle').innerText = post.title;
    document.getElementById('postText').innerText = post.text;
    document.getElementById('postTags').innerText = post.tags;

    // 載入圖片
    post.images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;

        img.addEventListener('click', () => {
            openLightbox(index);
        });

        track.appendChild(img);
    });

    // dots
    post.images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const handleTouchStart = e => { startX = e.touches[0].clientX; };
    const handleTouchEnd = e => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (diff > 50 && currentIndex < post.images.length - 1) currentIndex++;
        else if (diff < -50 && currentIndex > 0) currentIndex--;
        updateSlide();
    };
    const updateSlide = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    };

    track.removeEventListener('touchstart', handleTouchStart);
    track.removeEventListener('touchend', handleTouchEnd);
    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchend', handleTouchEnd);

    updateSlide();

    // ✅ 重新綁定 lightbox 事件
    lightboxImg = document.getElementById('lightboxImg');
    lightbox = document.getElementById('lightbox');

    lightbox.removeEventListener('click', closeLightbox);
    lightbox.addEventListener('click', closeLightbox);

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    lightbox.removeEventListener('touchstart', lightboxTouchStart);
    lightbox.removeEventListener('touchend', lightboxTouchEnd);

    lightbox.addEventListener('touchstart', lightboxTouchStart);
    lightbox.addEventListener('touchend', lightboxTouchEnd);

    let lightboxIndex = 0;
    let lightboxStartX = 0;

    function lightboxTouchStart(e) {
        lightboxStartX = e.touches[0].clientX;
    }

    function lightboxTouchEnd(e) {
        const endX = e.changedTouches[0].clientX;
        const diff = lightboxStartX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && lightboxIndex < post.images.length - 1) lightboxIndex++;
            else if (diff < 0 && lightboxIndex > 0) lightboxIndex--;
            lightboxImg.src = post.images[lightboxIndex];
        }
    }

    // openLightbox
    window.openLightbox = function(index) {
        lightboxIndex = index;
        lightboxImg.src = post.images[lightboxIndex];
        lightbox.style.display = 'flex';
    }
}


// 呼叫
postId = localStorage.getItem('currentPostId');
track = document.getElementById('imageTrack');
dotsContainer = document.getElementById('dots');
initPost();

if (window.lightboxIndex === undefined) {
  window.lightboxIndex = 0;
}

if (window.lightboxStartX === undefined) {
  window.lightboxStartX = 0;
}

function openLightbox(index) {
  lightboxIndex = index;
  lightboxImg.src = post.images[lightboxIndex];
  lightbox.style.display = 'flex';
}

// 點背景關閉
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// 手機左右滑
lightbox.addEventListener('touchstart', e => {
  lightboxStartX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = lightboxStartX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && lightboxIndex < post.images.length - 1) {
      lightboxIndex++;
    } else if (diff < 0 && lightboxIndex > 0) {
      lightboxIndex--;
    }
    lightboxImg.src = post.images[lightboxIndex];
  }
});

function goBack() {
  const returnPage = localStorage.getItem('returnPage');

  if (returnPage) {
    loadPage(returnPage);
  } else {
    loadPage('pages/note.html');
  }
}

if(!window.saveBtn ){
  saveBtn = document.querySelector('.save');
}
if(!window.isSaved){
  isSaved = false;
}
saveBtn.addEventListener('click', () => {
    if (isSaved) {
        saveBtn.src = 'pages/image/icon-收藏.png'; // 切回未收藏
    } else {
        saveBtn.src = 'pages/Group 274.png'; // 切換到已收藏
    }
    isSaved = !isSaved; // 反轉狀態
});

if(!window.aiBtn ){
  aiBtn = document.querySelector('.ai');
}
aiBtn.addEventListener('click', () => {
    loadPage('pages/ai.html')
});


if(!window.shareBtn ){
  shareBtn = document.querySelector('.icon.share');
}
if(!window.userModalOverlay ){
  userModalOverlay = document.querySelector('.user-modal-overlay');
}

// 點分享 → 打開彈窗
shareBtn.addEventListener('click', () => {
  userModalOverlay.classList.add('show');
});

// 點遮罩（黑色背景）→ 關閉
userModalOverlay.addEventListener('click', (e) => {
  if (e.target === userModalOverlay) {
    userModalOverlay.classList.remove('show');
  }
});
