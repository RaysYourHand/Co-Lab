function renderPostCreate() {
    const preview = document.getElementById('preview');
    if (!preview) return;

    preview.innerHTML = '';

    const files = JSON.parse(localStorage.getItem('newPostFiles')) || [];

    files.forEach((file, index) => {
        if (file.type === 'image') {
            const img = document.createElement('img');
            img.src = file.url;
            img.title = index + 1; // 對應上方編號概念
            preview.appendChild(img);
        }
    });
}

renderPostCreate();

if(!window.categoryBtn){
  categoryBtn = document.querySelector('.category-btn');
}
if(!window.courseModal){
  courseModal = document.getElementById('courseModal');
}
if(!window.courseItems){
  courseItems = document.querySelectorAll('.course-list li');
}

function openCourseModal() {
  // 先讓遮罩出現
  courseModal.style.display = 'flex';

  // 下一個 frame 才加 class（動畫才會跑）
  requestAnimationFrame(() => {
    courseModal.classList.add('show');
  });
}

function closeCourseModal() {
  courseModal.classList.remove('show');

  setTimeout(() => {
    courseModal.style.display = 'none';
  }, 300);
}

categoryBtn.addEventListener('click', openCourseModal);

// 點背景關閉
courseModal.addEventListener('click', (e) => {
  if (e.target === courseModal) {
    closeCourseModal();
  }
});

// 點任何 li 關閉
courseItems.forEach(item => {
  item.addEventListener('click', closeCourseModal);
});