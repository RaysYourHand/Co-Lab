// ===== 初始化 localStorage（只跑一次）=====
if (!localStorage.getItem("chatData")) {
  localStorage.setItem("chatData", JSON.stringify({
    user1: {
      name: "it520",
      avatar: "pages/image/user.jpg",
      headerTitle: "it520",
      lastMessage: "ian有哪科需要筆記嗎",
      lastDate: "11/03"
    },
    user2: {
      name: "it520 的群組",
      avatar: "pages/image/groupCola.jpg",
      headerTitle: "互動設計群",
      lastMessage: "我之後會分享我互動概論的筆記",
      lastDate: "11/02"
    },
    user3: {
      name: "elder100",
      avatar: "pages/pfp/150 (2).jpg",
      headerTitle: "elder100",
      lastMessage: "你好",
      lastDate: "11/01"
    }
  }));
}


if (!localStorage.getItem("chatHistory")) {
  localStorage.setItem("chatHistory", JSON.stringify({
    user1: [
      { from: "other", text: "ian有哪科需要筆記嗎" }
    ],
    user2: [
      { from: "other", text: "我之後會分享我互動概論的筆記" }
    ],
    user3: [
      { from: "other", text: "你好" }
    ]
  }));
}



// ===== 畫面渲染 function（重點）=====
function renderFriendList() {
  const friendList = document.getElementById("friendList");
  if (!friendList) return;

  const chatData = JSON.parse(localStorage.getItem("chatData"));
  friendList.innerHTML = "";

  Object.keys(chatData).forEach(userId => {
    const user = chatData[userId];

    const item = document.createElement("div");
    item.className = "friend-item";
    item.onclick = () => openChat(userId);

    item.innerHTML = `
  <img src="${user.avatar}" class="avatar">
  <div class="info">
    <div class="top-row">
      <span class="name">${user.name}</span>
      <span class="date">${user.lastDate}</span>
    </div>
    <div class="last-message">${user.lastMessage}</div>
  </div>
`;

    friendList.appendChild(item);
  });
}

renderFriendList();

function openChat(userId) {
  localStorage.setItem("currentChat", userId);
  loadPage("pages/chat.html");
}


// ===== 進頁面就呼叫 =====
renderFriendList();


document.addEventListener("DOMContentLoaded", () => {
  if(!window.currentChat){
      currentChat = localStorage.getItem("currentChat");
  }
  if (!currentChat) return;
if(!window.chatData){
      chatData = JSON.parse(localStorage.getItem("chatData"));
  }
  if(!window.user){
      user =chatData[currentChat];
  }
  if (!user) return;


  if(!window.chatTitle){
      chatTitle = document.getElementById("chatTitle");
  }
  if(!window.header){
      header = document.getElementById("chatHeader");
  }
  if(!window.input){
      input = document.getElementById("chatInput");
  }
  if(!window.sendBtn){
      sendBtn = document.getElementById("sendBtn");
  }

  // ===== 設定 header =====
  chatTitle.textContent = user.headerTitle;

  // ===== 群組 or 私聊 判斷 =====
  if (currentChat === "user2") { // it520 的群組
    header.style.backgroundColor = "#444";

    input.disabled = true;
    input.placeholder = "此群組無法傳送訊息";
    sendBtn.disabled = true;
    sendBtn.style.opacity = "0.5";
  } else {
    header.style.backgroundColor = "#1B3C53";

    input.disabled = false;
    input.placeholder = "輸入訊息…";
    sendBtn.disabled = false;
    sendBtn.style.opacity = "1";
  }
});
