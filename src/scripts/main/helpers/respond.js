let breakpoint = {
    'small': 767,
    'medium': 992,
    'large': 1200
};

function respondTo(breakpoint, callback, runWhenCalled, addEvent) {
    if (breakpoint >= window.innerWidth) {
        let active = true;
        if (runWhenCalled) {
            requestAnimationFrame(callback);
        }
    } else {
        let active = false;
    }

    if (addEvent) {
        window.addEventListener("optimizedResize", function() {
            if (!active) {
                active = true;
                if (breakpoint >= window.innerWidth) {

                    setTimeout(function(){
                        requestAnimationFrame(callback);
                    }, 100);
                    return true;
                }
            }
            if (breakpoint <= window.innerWidth) active = false;
        });
    }
}

function respondFrom(breakpoint, callback, runWhenCalled, addEvent) {
    if (breakpoint <= window.innerWidth) {
        let active = true;
        if (runWhenCalled) {
            requestAnimationFrame(callback);
        }
    } else {
        let active = false;
    }

    if (addEvent) {
        window.addEventListener("optimizedResize", function() {
            if (!active) {
                active = true;
                if (breakpoint <= window.innerWidth) {

                    setTimeout(function(){
                        requestAnimationFrame(callback);
                    }, 100);
                    return true;
                }
            }
            if (breakpoint >= window.innerWidth) active = false;
        });
    }
}
