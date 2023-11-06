
$(document).ready(function(){
    $('.home-score').html('00');
    $('.guest-score').html('00');
    $('.clock-time').html('24');
});

// Home Point buttons

function homeOnePointer () {
    const homeScore = parseInt($('.home-score').html(), 10);
    const updatedScore = homeScore + 1;

    if (updatedScore < 10) {
        $('.home-score').html('0' + updatedScore.toString());
    } else {
        $('.home-score').html(updatedScore.toString());
    }
}

$('.homePlusOne').click(function() {
    homeOnePointer();
});


function homeTwoPointer() {
    const homeScore = parseInt($('.home-score').html(), 10);
    const updatedScore = homeScore + 2;

    if (updatedScore < 10) {
        $('.home-score').html('0' + updatedScore.toString());
    } else {
        $('.home-score').html(updatedScore.toString());
    }
}

$('.homePlusTwo').click(function() {
    homeTwoPointer();
});

function homeThreePointer() {
    const homeScore = parseInt($('.home-score').html(), 10);
    const updatedScore = homeScore + 3;

    if (updatedScore < 10) {
        $('.home-score').html('0' + updatedScore.toString());
    } else {
        $('.home-score').html(updatedScore.toString());
    }
}

$('.homePlusThree').click(function() {
    homeThreePointer();
});

//Guest Point Buttons

function guestOnePointer() {
    const guestScore = parseInt($('.guest-score').html(), 10);
    const updatedScore = guestScore + 1;

    if (updatedScore < 10) {
        $('.guest-score').html('0' + updatedScore.toString());
    } else {
        $('.guest-score').html(updatedScore.toString());
    }
}

$('.guestPlusOne').click(function(){
    guestOnePointer();
});

function guestTwoPointer() {
    const guestScore = parseInt($('.guest-score').html(), 10);
    const updatedScore = guestScore + 2;

    if (updatedScore < 10) {
        $('.guest-score').html('0' + updatedScore.toString());
    } else {
        $('.guest-score').html(updatedScore.toString());
    }
}

$('.guestPlusTwo').click(function(){
    guestTwoPointer();
});

function guestThreePointer() {
    const guestScore = parseInt($('.guest-score').html(), 10);
    const updatedScore = guestScore + 3;

    if (updatedScore < 10) {
        $('.guest-score').html('0' + updatedScore.toString());
    } else {
        $('.guest-score').html(updatedScore.toString());
    }
}

$('.guestPlusThree').click(function(){
    guestThreePointer();
});

// Shot Clock Start Button

let interval;

function startShotClock() {
    const startTime = parseInt($('.clock-time').html(), 10);

    if (isNaN(startTime)) {
        console.error('Clocktime is not a valid number')
        return;
    }

    let clockTime = startTime;

    interval = setInterval(function() {
        if (clockTime <= 0 ) {
            clearInterval(interval);
        } else if (clockTime <= 10) {
            clockTime--;
            $('.clock-time').html('0' + clockTime.toString());
        } else {
            clockTime--;
            $('.clock-time').html(clockTime.toString());
        } 
    }, 1000);
    
}

$('.start-clock').click(function() {
    startShotClock();
});


//Reset Buttons

function resetHomeScore () {
    $('.home-score').html('00');
}

function resetGuestScore () {
    $('.guest-score').html('00');
}

function resetShotClock() {
    $('.clock-time').html('24');
}

$('.reset-home-score').click(function(){
    resetHomeScore();
});

$('.reset-guest-score').click(function() {
    resetGuestScore();
})

$('.reset-clock').click(function() {
    resetShotClock();
    clearInterval(interval);
})
