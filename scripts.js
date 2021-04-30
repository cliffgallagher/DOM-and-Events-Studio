// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    //console.log('window loaded');
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");

    function takeOffClicked() {
        const takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeOffConfirmation) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }

    }

    function landingClicked() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    }

    function missionAbortClicked() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    }

    takeOffButton.addEventListener("click", takeOffClicked);
    landingButton.addEventListener("click", landingClicked);
    missionAbortButton.addEventListener("click", missionAbortClicked);
}


window.addEventListener("load", init);