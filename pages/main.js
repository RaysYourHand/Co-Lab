


function togglePanel() {
    const searchPanel = document.querySelector('.searchPanel');
    const overlay = document.querySelector('.overlay');
    searchPanel.classList.toggle('show');
    overlay.classList.toggle('show');
}

function closePanel() {
    const searchPanel = document.querySelector('.searchPanel');
    const overlay = document.querySelector('.overlay');
    const popUp = document.querySelector('.popUp');
    searchPanel.classList.remove('show');
    overlay.classList.remove('show');
    popUp.classList.remove('show');
}

function togglePopUp() {
    const popUp = document.querySelector('.popUp');
const overlay = document.querySelector('.overlay');
    popUp.classList.toggle('show');
    overlay.classList.toggle('show');
}


function closePopUp() {
    const popUp = document.querySelector('.popUp');
const overlay = document.querySelector('.overlay');
    popUp.classList.remove('show');
    overlay.classList.remove('show');

}


function triggerFile(acceptType) {
    const fileInput = document.getElementById("fileInput");
    fileInput.value = ""; 
    fileInput.accept = acceptType;
    fileInput.click();

    fileInput.onchange = () => {
        const selectedFiles = Array.from(fileInput.files);
        if (selectedFiles.length === 0) return;

        const files = [];
        let readCount = 0;

        selectedFiles.forEach(file => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = e => {
                    files.push({
                        type: "image",
                        name: file.name,
                        url: e.target.result
                    });
                    readCount++;
                    if (readCount === selectedFiles.length) {
                        localStorage.setItem("newPostFiles", JSON.stringify(files));
                        loadPostCreate();
                    }
                };
                reader.readAsDataURL(file);
            } else {
                files.push({
                    type: "file",
                    name: file.name
                });
                readCount++;
                if (readCount === selectedFiles.length) {
                    localStorage.setItem("newPostFiles", JSON.stringify(files));
                    loadPostCreate();
                }
            }
        });
    };
}

function loadPostCreate() {
    fetch('pages/post-create.html')
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById('app'); // SPA 父容器
            container.innerHTML = html;

            // ⭐ 等 HTML 插入後再 render
            const script = document.createElement('script');
            script.src = 'pages/post-create.js';
            script.onload = () => {
                if (window.renderPostCreate) window.renderPostCreate();
            };
            document.body.appendChild(script);
        });
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
    popUp.classList.remove('show');
    overlay.classList.remove('show');
}

function openPost(postId, returnPage) {
  localStorage.setItem('currentPostId', postId);
  localStorage.setItem('returnPage', returnPage);
  loadPage('pages/post.html');
}