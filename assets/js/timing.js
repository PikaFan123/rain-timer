// https://stackoverflow.com/a/11888430
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

function getNextRainTimeOffline()
{
    
    ttrem = 3600
    if (new Date().isDstObserved())
    {
        ttrem = 0
    }

    const baseTime = new Date((1596552707 - ttrem) * 1000)

    let nextRain = baseTime

    let now = Date.now()

    while (nextRain < now)
    {
        nextRain.setSeconds(nextRain.getSeconds() + 4850)
    }

    return nextRain
}

async function getNextRainTime()
{
    let nextRain = new Date(1596552707 * 1000);

    nr = await axios.get('https://pikafan.de/rain/api').then((res) => { console.log(res.data.timestamp); return res.data.timestamp})

    nextRain.setTime(nr)

    console.log(nextRain)

    return nextRain
}