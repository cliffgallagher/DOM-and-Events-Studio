// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    //console.log('window loaded');
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");

    function takeOffClicked() {
        const takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeOffConfirmation) {
            flightStatus.innerHTML = "Shuttle in flight.";
            
        }

    }

    takeOffButton.addEventListener("click", takeOffClicked);
}


window.addEventListener("load", init);