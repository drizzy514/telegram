var userBtn = document.querySelector(".user-btn");
var userChat = document.querySelector(".content");
userBtn.addEventListener('click', function(){
    userChat.classList.toggle('active');
    
})



var userIslom = document.querySelector(".user-islom");
var chat = document.querySelector(".content-2");
userIslom.addEventListener('click', function(){
    chat.classList.toggle('content-active');
    
})