
    function copy(){
        let textArea = document.createElement("textarea");
        textArea.value = quoteElement.textContent;
        textArea.style.display = "none";
        document.body.appendChild(textArea);
        textArea.select();
        navigator.clipboard.writeText(textArea.value).then(() => textArea.remove());
    }

    function generateRandomNumber(max) {
        return Math.round(Math.random() * max)
    }
