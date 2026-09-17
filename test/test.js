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




function togglePopUp() {
    const popUp = document.querySelector(".popUp");
    const overlay = document.querySelector(".overlay");

    popUp.classList.toggle("show");

    if (popUp.classList.contains("show")) {
        overlay.classList.add("show");
    } else {
        overlay.classList.remove("show");
    }
}

function closeOverlay() {
    document.querySelector(".popUp").classList.remove("show");
    document.getElementById("searchPanel").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
}

/*/ 開啟搜尋面板
function openSearch() {
    const panel = document.getElementById("searchPanel");
    const overlay = document.querySelector(".overlay");
    panel.classList.add("show");   // 給 panel 一個 show class
    overlay.classList.add("show");
}

// 關閉 overlay（同時關閉 popup 與搜尋面板
function closeOverlay() {
    document.getElementById("searchPanel").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
}*/

function openSearch() {
    document.getElementById("searchPanel").classList.add("show");
    document.querySelector(".overlay").classList.add("show");
}

function closeOverlay() {
    document.getElementById("searchPanel").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
}



// 檔案上傳
function triggerFile(acceptType) {
    const fileInput = document.getElementById("fileInput");
    fileInput.accept = acceptType;
    fileInput.click();

    fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (file) console.log("使用者選擇的檔案：", file.name);
    };
}

// 搜尋篩選示範
function filter(option) {
    console.log("使用者選擇：", option);
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