//For analog clock
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

//For digital clock
setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            am_pm = "AM";

            if (h > 12) {
                h -= 12;
                am_pm = "PM";
            }
            if (h == 0) {
                h = 12;
                am_pm = "AM";
            }

            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            let currentTime = h + ":" + m + ":" + s + " " + am_pm;

            document.getElementById("dclock").innerHTML = currentTime;
        }

        showTime();