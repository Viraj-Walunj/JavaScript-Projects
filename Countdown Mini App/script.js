const endDate = new Date ("27 June, 2026 22:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //calculate days,hrs,min,sec
    //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending%(oneDayInMillis)/(oneHourInMillis)));
    const min = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMillis));
    const sec = Math.floor((distancePending % oneMinInMillis)/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    //calculate width percentage for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar and populate
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }

}   , 1000);