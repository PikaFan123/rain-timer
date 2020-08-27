function getNextRainTime()
{
    const baseTime = new Date(1596552707 * 1000)

    let nextRain = baseTime

    let now = Date.now()

    while (nextRain < now)
    {
        nextRain.setSeconds(nextRain.getSeconds() + 4850)
    }

    return nextRain
}