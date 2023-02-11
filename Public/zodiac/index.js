const zodiac = document.getElementById("zodiac");


const body = document.body;

const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "yellow";
            break;
        case "tarus":
            body.style.backgroundColor = "#fc0303";
            break;
        case "gemini":
            body.style.backgroundColor = "green";
            break;
        case "cancer":
            body.style.backgroundColor = "purple";
            break;
        case "leo":
            body.style.backgroundColor = "grey";
            break;
        case "virgo":
            body.style.backgroundColor = "blue";
            break;
        case "libra":
            body.style.backgroundColor = "skyblue";
            break;
        case "scorpio":
            body.style.backgroundColor = "pink";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#786d06";
            break;
        case "aquarius":
            body.style.backgroundColor = "wheat";
            break;
        case "capricorn":
            body.style.backgroundColor = "#42f575";
            break;
        case "pisces":
            body.style.backgroundColor = "#780606";
            break;
    
        default:
            break;
    }
}