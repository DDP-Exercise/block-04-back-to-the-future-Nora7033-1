"use strict";

export let timeModel = {
    time: new Date(),

    setTime: function(newTime) {
        this.time = newTime;
    },
    getTime: function() {
        return this.time;
    },
    saveTime: function(){
        localStorage.setItem("timeSaved", this.time);
    },
    loadTime: function(){
        let saved = localStorage.getItem("timeSaved");
        if (saved) {
            this.time = new Date(saved);
        }
    }
}
