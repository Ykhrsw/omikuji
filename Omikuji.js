function getRandomImage(){
    const number = Math.floor(Math.random() * 7);
    const imagePath = "./Images/omikuji" + number.toString() + ".jpg";
    return imagePath;
}

function playOmikuji(){
    // setIntervalの返り値をintervalIdに保存
    const intervalId = window.setInterval(function(){
        document.querySelector("#js-result").setAttribute("src", getRandomImage());
    }, 100);

    // 2秒後にintervalを停止
    setTimeout(function() {
        clearInterval(intervalId);
    }, 2000);
}

document.getElementById("js-button").addEventListener("click", playOmikuji);
