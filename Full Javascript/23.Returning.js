function callOnce(func) {
    var called = false;
    return function() {
        if (!called) {
            func.apply(this, arguments);
            called = true;
        }
    };
}

function ( => ) {  }