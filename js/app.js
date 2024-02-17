let enddate = "20 March 2024 10:00 AM"
document.getElementById("title").innerHTML = enddate;

function clock(){
    let end = new Date(enddate);
    let now = new Date();
    let diff = (end - now)/1000;
    if(diff<0)return;
    document.getElementById("days").innerHTML = (Math.floor(diff/3600/24));
    document.getElementById("hours").innerHTML = (Math.floor((diff/3600)%24));
    document.getElementById("minutes").innerHTML = (Math.floor((diff/60)%60));
    document.getElementById("seconds").innerHTML = (Math.floor(diff%60));
    
}
setInterval(clock,1000);