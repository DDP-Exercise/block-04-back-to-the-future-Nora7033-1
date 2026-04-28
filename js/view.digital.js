"use strict";

export let digitalView = {
    init: function() {
        this.display = document.createElement("div");
        this.display.textContent = "00:00:00";
        document.getElementById("delorean").append(this.display);
    },
    update: function(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        this.display.textContent =
            hours.toString().padStart(2, "0") + ":" +
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0");
    },

}
digitalView.init();