function initChat() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");

  const userId = localStorage.getItem("currentChat");
  if (!userId) return;

  // 載入聊天紀錄
  const histories = JSON.parse(localStorage.getItem("chatHistory")) || {};
  const history = histories[userId] || [];

  messages.innerHTML = "";
  history.forEach(msg => {
    const div = document.createElement("div");
    div.className = `message ${msg.from}`;
    div.textContent = msg.text;
    messages.appendChild(div);
  });

  messages.scrollTop = messages.scrollHeight;

  // 傳送訊息
  window.sendMessage = function () {
    const text = input.value.trim();
    if (!text) return;

    addMessage("me", text);
    input.value = "";
  };

  function addMessage(from, text) {
    const msg = document.createElement("div");
    msg.className = `message ${from}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;

    // 存聊天紀錄
    histories[userId] = histories[userId] || [];
    histories[userId].push({ from, text });
    localStorage.setItem("chatHistory", JSON.stringify(histories));

    // 更新 message.html 的最後一句話
    updateLastMessage(userId, text);
  }

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });
}

initChat();

function updateLastMessage(userId, text) {
  const chatData = JSON.parse(localStorage.getItem("chatData"));
  chatData[userId].lastMessage = text;

  const today = new Date();
  chatData[userId].lastDate =
    String(today.getMonth() + 1).padStart(2, "0") +
    "/" +
    String(today.getDate()).padStart(2, "0");

  localStorage.setItem("chatData", JSON.stringify(chatData));
}

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
