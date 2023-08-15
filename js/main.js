let time = document.getElementById('time');

// time
setInterval(() => {
    let date = new Date;
time.innerHTML = date.toLocaleTimeString();
}, 1000);

//Toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    
    // toggle class fa-spin for rotation on self 
    this.classList.toggle("fa-spin");

    // toggle class open on main settings box 
    document.querySelector(".settings-box").classList.toggle("open");
    
};



