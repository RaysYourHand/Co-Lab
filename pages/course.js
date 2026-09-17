function popUp() {
    const popUp = document.querySelector('.popUp');
    const overlay = document.querySelector('.overlay');
    popUp.classList.toggle('show');
    overlay.classList.toggle('show');
}

function popUpBack() {
    const popUp = document.querySelector('.popUp');
    const add = document.querySelector('.addCourse');
    const overlay = document.querySelector('.overlay');
    popUp.classList.remove('show');
    overlay.classList.remove('show');
    add.classList.remove('show');
}

function addCourse() {
    const add = document.querySelector('.addCourse');
    const overlay = document.querySelector('.overlay');
    add.classList.toggle('show');
    overlay.classList.toggle('show');
}

/*function addCourseBack() {
    const add = document.querySelector('.addCourse');
    const overlay = document.querySelector('.overlay');
    add.classList.remove('show');
    overlay.classList.remove('show');
}*/

window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

function checkCourseCode() {
    const input = document.getElementById('courseInput');
    const code = input.value.trim();

    if (code === '123456') {
        addCourseCard();
        input.value = '';
        popUpBack(); // 關掉加入課程視窗
    } else {
        alert('課程代碼錯誤');
    }
}

function addCourseCard() {
    const container = document.querySelector('.courseContainer');

    const courseBox = document.createElement('div');
    courseBox.className = 'courseBox';

    courseBox.innerHTML = `
        <img src="pages/image/基本設計.png" alt="">
        <h2>基本設計</h2>
    `;

    // 插在「新增課程」那張前面
    const addButtonBox = container.querySelector('.courseBox:last-child');
    container.insertBefore(courseBox, addButtonBox);
}

