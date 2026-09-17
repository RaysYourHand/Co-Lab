function openCat(evt, tabName) {
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}


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


/*function attachPageEvents() {

    // --- 原本 main.js 裡的事件要都搬來這裡 ---

    // 加新的按鈕事件
    const goProfileBtn = document.querySelector(".mine");
    if (goProfileBtn) {
        goProfileBtn.addEventListener("click", () => {
            loadPage("pages/profile.html");
        });
    }
}*/

function triggerFile(acceptType) {
    const fileInput = document.getElementById("fileInput");
    fileInput.accept = acceptType;  // 限制檔案類型
    fileInput.click();              // 打開檔案選擇視窗

    // 選擇完檔案後的事件
    fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (file) {
            console.log("使用者選擇的檔案：", file.name);
            // 這裡可以做上傳或預覽
            // 例如：readFile(file)
        }
    }
}