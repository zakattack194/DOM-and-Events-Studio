// Write your JavaScript code here.
window.addEventListener('load', (event) => {
     

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener('click', function (event){
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    }
    ); 

    let landing = document.getElementById("landing");
    landing.addEventListener('click', function (event){
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle is landing. Landing gear engaged.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = Number(0);
    }
    ); 

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener('click', function (event){
        if(confirm("Confirm that you want to abort the mission.")){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.innerHTML = Number(0);
        }
    }
    ); 
    
    let upDirection = 0;
    let rightDirection = 0;
    

    let up = document.getElementById("up");
    up.addEventListener('click', function (event){
        upDirection = upDirection - 10;
        document.getElementById("rocket").style.top = `${upDirection}px`;
    }); 

    let down = document.getElementById("down");
    down.addEventListener('click', function (event){
        upDirection = upDirection + 10;
        document.getElementById("rocket").style.top = `${upDirection}px`;
    }); 

    let right = document.getElementById("right");
    right.addEventListener('click', function (event){
        rightDirection = rightDirection - 10;
        document.getElementById("rocket").style.right = `${rightDirection}px`;
    }); 

    let left = document.getElementById("left");
    left.addEventListener('click', function (event){
        rightDirection = rightDirection + 10;
        document.getElementById("rocket").style.right = `${rightDirection}px`;
    }); 
    
    
    
});





