// Write your JavaScript code here.
window.addEventListener('load', (event) => {
    console.log('page is fully loaded Zak');    
  });
// Remember to pay attention to page loading!
function confirmWindow(){
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }

}

function landing(){
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle is landing. Landing gear engaged.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerHTML = Number(0);
}
function missionAbort(){
    if(confirm("Confirm that you want to abort the mission.")){
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = Number(0);
    }
}