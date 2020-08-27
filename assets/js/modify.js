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

        //console.log ((distance / 1000) - 3850)
        if (((distance / 1000) - 3850) < 1000)
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
            document.getElementById("is-rain").innerHTML = "💦 It's raining 💦"
        }
        else
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg.png)"
            document.getElementById("is-rain").innerHTML = "The next rain starts in"

        }
        
        if (!rain)
        {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";
            document.title ="Rain: " +  hours + "h " + minutes + "m " + seconds + "s ";
        }
        else
        {
            var rt = distance - 3850
            var minutes = Math.floor((rt % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((rt % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = + minutes + "m " + seconds + "s ";
            document.title ="💦 Raining: " + minutes + "m " + seconds + "s ";
        }


        if (distance <= 0)
        {
            nextRain = getNextRainTime()
        }
    }, 1000)
}