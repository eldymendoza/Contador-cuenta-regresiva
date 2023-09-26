const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem, finalmessage) => {
    const el = document.getElementById(elem);
    const timerupdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `${time.remainDays}d: ${time.remainHours}h: ${time.remainMinutes}m: ${time.remainSeconds}s`;

        if (time.remainTime <= 1) {
            clearInterval(timerupdate)
            el.innerHTML = finalmessage;
        }

    }, 1000)

};

countdown('Dec 31 2023 23:59:59 GMT-0500', 'clock', 'Feliz Año');