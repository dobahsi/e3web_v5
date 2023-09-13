const time = document.querySelector('.time');
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

    // time[0].innerHTML = ampm;
    // time[1].innerHTML = utc8Hours;
    // time[2].innerHTML = utc8Minutes;
    // time[3].innerHTML = utc8Seconds;

    setTimeout(timeRender, 1000);
}
timeRender();

const tickerBundle = document.querySelector('.ticker-bundle');
const tickerItem = document.querySelectorAll('.ticker-item');
const tickerItemCopy = document.querySelectorAll('.ticker-item-copy');
const tickerMargin = window.getComputedStyle(tickerItem[0]).marginRight;
const tickerItemsWidth = tickerItem[0].offsetWidth + tickerItem[1].offsetWidth + parseInt(tickerMargin) * 2;

const tickerMovingPerSecond = 35;
tickerBundle.style.animationDuration = `${tickerItemsWidth / tickerMovingPerSecond}s`;

const scrollBarWidth = window.innerWidth - document.body.offsetWidth
console.log(scrollBarWidth);
console.log(window.innerWidth, document.body.offsetWidth);