hour  = document.getElementById("hour");
minute  = document.getElementById("minute");
sec  = document.getElementById("sec");
digi = document.getElementById("digi")
setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (30*htime) + (mtime/2);
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    sec.style.transform =`rotate(${srotation}deg)`;
    digi.innerHTML=`Digital Time is ${d.toLocaleTimeString()}`
},1000); 
