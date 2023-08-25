let time = document.getElementById('time');
// time
setInterval(() => {
    let date = new Date;
time.innerHTML = date.toLocaleTimeString();
}, 1000);


// check if there' s local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null ) {
    document.documentElement.style.setProperty('--main-color' , mainColors);


  // change second color
  if ( mainColors === "#a8c9fa") {
    document.documentElement.style.setProperty('--second-color' , "#C79471");
} else if ( mainColors === "#427624") {
    document.documentElement.style.setProperty('--second-color' , "#9CDBAD");
} else if (mainColors  === "#762473") {
    document.documentElement.style.setProperty('--second-color' , "#A8A723");
}else if (mainColors  === "#847625") {
    document.documentElement.style.setProperty('--second-color' , "#2164B8");
} else {
    document.documentElement.style.setProperty('--second-color' , "#93B0EF");
}



     // remove active class from all colors list item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        //add active class on element with data-color === local storage item
        if (element.dataset.color === mainColors) {

            // add active class
            element.classList.add("active");
        }
        
    });
}



//Click on toggle settings Gear
document.querySelector(".toggle-settings  ").onclick = function() {  
    // toggle class fa-spin for rotation on self 
   // /*this.classList.toggle("fa-spin");*/
   document.querySelector(".fa-gear").classList.toggle("fa-spin");
    // toggle class open on main settings box 
    document.querySelector(".settings-box").classList.toggle("open");
};


// switch Colors
const colorsli = document.querySelectorAll(".colors-list li");

//loop on all list items
colorsli.forEach(li => {

    //click on every list items
    li.addEventListener("click" ,(e) => {

        //set color on root 
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);
    
        //set color on local storage
        localStorage.setItem("color_option" , e.target.dataset.color);
    
        // remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });

        // add active class on self 
        e.target.classList.add("active");
    

            // change second color
                if ( e.target.dataset.color === "#a8c9fa") {
                    document.documentElement.style.setProperty('--second-color' , "#C79471");
                } else if ( e.target.dataset.color === "#427624") {
                    document.documentElement.style.setProperty('--second-color' , "#9CDBAD");
                } else if (e.target.dataset.color  === "#762473") {
                    document.documentElement.style.setProperty('--second-color' , "#A8A723");
                }else if (e.target.dataset.color  === "#847625") {
                    document.documentElement.style.setProperty('--second-color' , "#2164B8");
                } else {
                    document.documentElement.style.setProperty('--second-color' , "#93B0EF");
                }
     
        
    });
});







