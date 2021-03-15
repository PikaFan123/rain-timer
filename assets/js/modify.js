async function timer()
{
    let offset = document.getElementById('dst').checked
    let useOffline = document.getElementById('noapi').checked
    let nrt
    if (useOffline)
    {
        nrt = await getNextRainTimeOffline()
    }
    else
    {
        nrt = await getNextRainTime()
    }
    console.log(nrt)
    if (offset)
    {
        nrt.setTime(nrt.getTime() - (1*60*60*1000))
    }
    nextRain = nrt.getTime()
    rain = false
    // shamelessly stolen from https://www.w3schools.com/howto/howto_js_countdown.asp
    // rain lasts 1000 seconds
    var x = setInterval(async function() {
        var now = Date.now()

        var distance = nextRain - now
        rtc = ((distance / 1000) - 3850)
        //console.log (rtc)
        if ((rtc < 1000) && (rtc > 0))
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
            var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
            var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000),2);
            var hts = minutes + "m " + seconds + "s ";
            var tts = minutes + "m " + seconds + "s "
            if (hours == 1)
            {
                hts = hours + "h " + hts
                tts = hours + "h " + tts
            }
            document.getElementById("timer").innerHTML = hts;
            document.title = "Rain: " + tts;
        }
        else
        {
            var rt = distance - (3850 * 1000)
            //console.log(rt / 1000)
            var minutes = Math.floor((rt % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((rt % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = + minutes + "m " + seconds + "s ";
            document.title ="💦 Raining: " + minutes + "m " + seconds + "s ";
        }


        if (distance <= 0)
        {
            if (useOffline)
            {
                nrt = await getNextRainTimeOffline()
            }
            else
            {
                nrt = await getNextRainTime()
            }
            if (offset)
            {
                nrt.setTime(nrt.getTime() - (1*60*60*1000))
            }
            nextRain = nrt.getTime()
        }
    }, 1000)
}

// https://stackoverflow.com/a/10073788
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }