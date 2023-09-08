const time = document.querySelector('.time>span');
function timeRender() {
    var timeNow = new Date();
    utc8Hours = timeNow.getUTCHours() + 8;
    utc8Minutes = timeNow.getUTCMinutes();
    utc8Seconds = timeNow.getUTCSeconds();

    utc8Hours = utc8Hours >= 24 ? utc8Hours - 24 : utc8Hours;
    utc8Minutes = utc8Minutes < 10 ? '0' + utc8Minutes : utc8Minutes;
    utc8Seconds = utc8Seconds < 10 ? '0' + utc8Seconds : utc8Seconds;

    var ampm = utc8Hours >= 12 ? 'PM' : 'AM';

    utc8Hours = utc8Hours % 12;
    utc8Hours = utc8Hours ? utc8Hours : 12;
    utc8Hours = utc8Hours < 10 ? '0' + utc8Hours : utc8Hours;

    time.innerHTML = `${ampm} ${utc8Hours}:${utc8Minutes}:${utc8Seconds}`;
    setTimeout(timeRender, 1000);
}
timeRender();
