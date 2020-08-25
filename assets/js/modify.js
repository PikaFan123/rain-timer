function setTime()
{
    document.getElementById("test").innerHTML = getNextRainTime()
}
function timer()
{
    nextRain = getNextRainTime().getTime()

    // shamelessly stolen from https://www.w3schools.com/howto/howto_js_countdown.asp
    var x = setInterval(function() {
        var now = Date.now()

        var distance = nextRain - now

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0)
        {
            nextRain = getNextRainTime()
        }
    }, 1000)
}