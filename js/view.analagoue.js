"use strict";

export let analagoueView = {
    init: function () {
        this.secondHand = document.querySelector(".secondHand");
        this.minuteHand = document.querySelector(".minuteHand");
        this.hourHand = document.querySelector(".hourHand");
    },
    update: function(date){
        let sec = date.getSeconds();
        let min = date.getMinutes();
        let hour = date.getHours();

        let secAngle = (360/60) * sec;
        let minAngle = (360/60) * min;
        let hourAngle = (360/12) * hour;

        this.secondHand.style.transform = "rotate(" + secAngle + "deg)";
        this.minuteHand.style.transform = "rotate(" + minAngle + "deg)";
        this.hourHand.style.transform = "rotate(" + hourAngle + "deg)";
    }
}
analagoueView.init();


