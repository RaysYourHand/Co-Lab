function initTabs(containerId, tabId) {
    const tab = document.getElementById(tabId);
    const section = tab.closest('section');

    // 切換 tab 顯示
    const tabs = section.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 切換 courseContainer
    const containers = section.querySelectorAll('.courseContainer');
    containers.forEach(c => c.classList.remove('active'));
    section.querySelector('#' + containerId).classList.add('active');
}


function changeContainer(tabName) {
    const containers = document.querySelectorAll('.courseContainer');
    containers.forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

function initBrownSwitch(itemId) {
    const items = document.querySelectorAll('.brown');
    items.forEach(i => i.classList.remove('active'));
    document.getElementById(itemId).classList.add('active');

    if (itemId === 'item_pupil') return;

    // 隱藏所有 section
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');

    // 對應 brown 項目切換 section
    let sectionId = '';
    if(itemId === 'item_mine') sectionId = 's1';
    if(itemId === 'item_save') sectionId = 's2';
    if(itemId === 'item_record') sectionId = 's3';

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // 初始化該 section tabs
    const firstTab = activeSection.querySelector('.tab');
    if(firstTab) firstTab.click();  // 觸發 initTabs
}


window.addEventListener('DOMContentLoaded', initBrownSwitch);
window.addEventListener('DOMContentLoaded', initTabs);
window.addEventListener('DOMContentLoaded', () => {
    initBrownSwitch('item_mine'); // 預設顯示第一個 brown 項目
});


function openPost(postId, returnPage) {
  localStorage.setItem('currentPostId', postId);
  localStorage.setItem('returnPage', returnPage);
  loadPage('pages/post.html');
}