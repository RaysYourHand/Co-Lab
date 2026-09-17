
    function initTabs(tabName, tab) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tabs => {
            tabs.classList.remove('active');
        });
        document.getElementById(tab).classList.add('active');
        changeContainer(tabName)
        if(tabName ==='all'){
            const btn = document.getElementsByClassName("textRoom")[0];
            btn.innerText = "<   筆記 & 作品";
            btn.style.whiteSpace = "pre"; // 保留空格
        }
        if(tabName ==='note'){
            const btn = document.getElementsByClassName("textRoom")[0];
            btn.innerText = "<   筆記";
            btn.style.whiteSpace = "pre"; // 保留空格
        }
        if(tabName ==='work'){
            const btn = document.getElementsByClassName("textRoom")[0];
            btn.innerText = "<   作品";
            btn.style.whiteSpace = "pre"; // 保留空格
        }
    }

    function changeContainer(tabName) {
        const containers = document.querySelectorAll('.courseContainer');
        containers.forEach(container => {
            container.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }


    function openPost(postId, returnPage) {
  localStorage.setItem('currentPostId', postId);
  localStorage.setItem('returnPage', returnPage);
  loadPage('pages/post.html');
}




    function searchPanelUp(){
        const searchPanel = document.querySelector('.search-panel');
        const overlay = document.querySelector('.overlay');
        searchPanel.classList.toggle('show');
        overlay.classList.toggle('show');
    }

    function popUp() {
        const popUp = document.querySelector('.popUp');
        const overlay = document.querySelector('.overlay');
        popUp.classList.toggle('show');
        overlay.classList.toggle('show');
    }

    function popUpBack() {
        const popUp = document.querySelector('.popUp');
        const overlay = document.querySelector('.overlay');
        const searchPanel = document.querySelector('.search-panel');
        popUp.classList.remove('show');
        overlay.classList.remove('show');
        searchPanel.classList.remove('show');
    }


    function selectFiles(type) {
    const fileInput = document.getElementById('fileInput');

    fileInput.value = ''; // 超重要

    if (type === 'image') {
        fileInput.accept = 'image/*';
        fileInput.multiple = true;
    } else if (type === 'file') {
        fileInput.accept = '*';
        fileInput.multiple = false;
    }

    fileInput.click();
    }


    function handleFileChange(e) {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const tempFiles = files.map(file => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file)
    }));

    localStorage.setItem('newPostFiles', JSON.stringify(tempFiles));

    popUpBack();
    loadPage('pages/post-create.html');
    }

    // 搜尋面板 chip 點擊效果
document.querySelectorAll('.chips').forEach(group => {
  const chips = group.querySelectorAll('.chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
});