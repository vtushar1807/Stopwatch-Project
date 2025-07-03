
let msec=0;
let sec=0;
let min=0;
let intervl1=0;
let check=0;

let screen = document.getElementById('screen');
let start = document.getElementById('start');
let stop1 = document.getElementById('stop');
let lapDiv = document.getElementById('lapDiv');

let lapBtn = document.createElement('button');
let reset = document.createElement('button');

stop1.addEventListener("click", pause);

function pause()
{
    clearInterval(intervl1);
    check=1;
    
    reset.innerText="Reset";
    reset.classList.add('btn');
    reset.classList.add('resetFont');

    stop1.parentNode.replaceChild(reset,stop1);
    reset.addEventListener("click", resetfun);
}
    

    function resetfun(){

        lapBtn.parentNode.replaceChild(start,lapBtn);
        reset.parentNode.replaceChild(stop1,reset);  

        clearInterval(intervl1);
        screen.innerText="00:00:00";
        msec=0;
        sec=0;
        min=0;
        lapDiv.innerText="";
    }


start.addEventListener("click", run);
function run()
{
    check=0;
    lapBtn.classList.add('btn');
    lapBtn.innerText="Lap";

    start.parentNode.replaceChild(lapBtn,start);
    lapBtn.addEventListener("click", ()=>{
        
    let laps = document.createElement('div');
    laps.id='singleLap';
    laps.classList.add('lapsProp');
    laps.innerText=screen.innerText;
    lapDiv.appendChild(laps);
})
    
   intervl1= setInterval(()=>{

        if(check==0){
        if(msec<9)
        {
            if(sec<=9)
            screen.innerText=`0${min}:0${sec}:0${++msec}`;

            else if(sec>59)
        {
            sec=0;
            screen.innerText=`0${++min}:0${sec}:0${++msec}`;
        }
            
        else{
            screen.innerText=`0${min}:${sec}:0${++msec}`;
        }
        }
        
        else if(msec<100)
        {
            if(sec<=9)
            screen.innerText=`0${min}:0${sec}:${++msec}`;

            else
            screen.innerText=`0${min}:${sec}:${++msec}`;
        }
        
        else
        {
            msec=0;
            if(sec<9)
            screen.innerText=`0${min}:0${++sec}:${++msec}`;

            else
            screen.innerText=`0${min}:${++sec}:${++msec}`;
        }
    }
},10);
    }
