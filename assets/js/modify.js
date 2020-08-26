function setTime()
{
    document.getElementById("test").innerHTML = getNextRainTime()
}
function timer()
{
    nextRain = getNextRainTime().getTime()
    rain = false
    // shamelessly stolen from https://www.w3schools.com/howto/howto_js_countdown.asp
    // rain lasts 1000 seconds
    var x = setInterval(function() {
        var now = Date.now()

        var distance = nextRain - now

        if ((distance - 1000) < 3850)
        {
            rain = true
        }
        else
        {
            rain = false
        }

        if (rain && document.getElementById("qbm").style.backgroundImage != "url(assets/images/bg_rain.png)")
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg_rain.png)"
        }
        else
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg.png)"
        }
        


        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var ta = ""
        var tta = ""
        if (rain)
        {
            ta = "<br>It's currently raining!"
            tta = "💦"
        }

        document.getElementById("timer").innerHTML =  hours + "h " + minutes + "m " + seconds + "s " + ta;
        document.title = tta + "Rain: " +  hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0)
        {
            nextRain = getNextRainTime()
        }
    }, 1000)
}