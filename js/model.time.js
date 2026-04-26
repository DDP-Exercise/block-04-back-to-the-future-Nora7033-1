"use strict";

export let timeModel = {
    time: new Date(),

    setTime: function(newTime) {
        this.time = newTime;
    },
    getTime: function() {
        return this.time;
    }
}