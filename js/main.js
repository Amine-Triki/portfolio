let time = document.getElementById('time');

// time
setInterval(() => {
    let date = new Date;
time.innerHTML = date.toLocaleTimeString();
}, 1000);




