document.addEventListener("DOMContentLoaded", function () {
    // Create chat button
    let chatButton = document.createElement("div");
    chatButton.innerHTML = "💬";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.backgroundColor = "#007bff";
    chatButton.style.color = "white";
    chatButton.style.borderRadius = "50%";
    chatButton.style.width = "50px";
    chatButton.style.height = "50px";
    chatButton.style.display = "flex";
    chatButton.style.alignItems = "center";
    chatButton.style.justifyContent = "center";
    chatButton.style.fontSize = "24px";
    chatButton.style.cursor = "pointer";
    chatButton.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    document.body.appendChild(chatButton);

    // Create chat window
    let chatWindow = document.createElement("div");
    chatWindow.style.position = "fixed";
    chatWindow.style.bottom = "80px";
    chatWindow.style.right = "20px";
    chatWindow.style.width = "300px";
    chatWindow.style.height = "400px";
    chatWindow.style.backgroundColor = "white";
    chatWindow.style.border = "1px solid #ddd";
    chatWindow.style.borderRadius = "10px";
    chatWindow.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    chatWindow.style.display = "none";
    chatWindow.style.flexDirection = "column";
    chatWindow.style.overflow = "hidden";
    document.body.appendChild(chatWindow);

    // Chat header
    let chatHeader = document.createElement("div");
    chatHeader.innerText = "Chatbot";
    chatHeader.style.backgroundColor = "#007bff";
    chatHeader.style.color = "white";
    chatHeader.style.padding = "10px";
    chatHeader.style.textAlign = "center";
    chatHeader.style.fontWeight = "bold";
    chatWindow.appendChild(chatHeader);

    // Chat messages container
    let chatMessages = document.createElement("div");
    chatMessages.style.flex = "1";
    chatMessages.style.padding = "10px";
    chatMessages.style.overflowY = "auto";
    chatMessages.style.height = "300px";
    chatWindow.appendChild(chatMessages);

    // Chat input
    let chatInputContainer = document.createElement("div");
    chatInputContainer.style.display = "flex";
    chatInputContainer.style.padding = "10px";
    chatWindow.appendChild(chatInputContainer);

    let chatInput = document.createElement("input");
    chatInput.type = "text";
    chatInput.placeholder = "Type a message...";
    chatInput.style.flex = "1";
    chatInput.style.padding = "5px";
    chatInput.style.border = "1px solid #ddd";
    chatInput.style.borderRadius = "5px";
    chatInputContainer.appendChild(chatInput);

    let sendButton = document.createElement("button");
    sendButton.innerText = "Send";
    sendButton.style.marginLeft = "5px";
    sendButton.style.padding = "5px 10px";
    sendButton.style.border = "none";
    sendButton.style.backgroundColor = "#007bff";
    sendButton.style.color = "white";
    sendButton.style.borderRadius = "5px";
    sendButton.style.cursor = "pointer";
    chatInputContainer.appendChild(sendButton);

    // Toggle chat window
    chatButton.addEventListener("click", function () {
        chatWindow.style.display = chatWindow.style.display === "none" ? "flex" : "none";
    });

    // Chatbot responses
    sendButton.addEventListener("click", function () {
        let userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        let userBubble = document.createElement("div");
        userBubble.innerText = userMessage;
        userBubble.style.backgroundColor = "#007bff";
        userBubble.style.color = "white";
        userBubble.style.padding = "5px";
        userBubble.style.borderRadius = "5px";
        userBubble.style.margin = "5px 0";
        userBubble.style.alignSelf = "flex-end";
        chatMessages.appendChild(userBubble);

        chatInput.value = "";
        setTimeout(() => {
            let botBubble = document.createElement("div");
            botBubble.innerText = "Hello! How can I help you?";
            botBubble.style.backgroundColor = "#f1f1f1";
            botBubble.style.padding = "5px";
            botBubble.style.borderRadius = "5px";
            botBubble.style.margin = "5px 0";
            botBubble.style.alignSelf = "flex-start";
            chatMessages.appendChild(botBubble);
        }, 1000);
    });
});
