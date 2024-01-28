function checkSymptoms() {
    var symptomsInput = document.getElementById("symptoms").value;

    // Display symptom suggestions (replace with actual suggestion logic)
    displaySuggestions(["Fever", "Cough", "Fatigue"]);

    // Perform your disease-checking algorithm here (replace this with actual logic)
    var requiresHospital = checkHospitalization(symptomsInput);

    // Display result to the user
    var resultMessage = requiresHospital ? "Please go to the hospital immediately." : "It seems okay, but consult a healthcare professional if needed.";
    document.getElementById("result").innerText = resultMessage;

    // Show the result section
    document.getElementById("resultSection").style.display = "block";

    // Display emergency information based on severity
    displayEmergencyInfo();
}

function displaySuggestions(suggestions) {
    var suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "<strong>Suggestions:</strong> " + suggestions.join(", ");
}

function checkHospitalization(symptoms) {
    // Example: Check if the symptoms indicate a serious condition
    return symptoms.toLowerCase().includes("emergency");
}

function displayEmergencyInfo() {
    var severity = document.getElementById("severity").value;

    if (severity >= 8) {
        document.getElementById("emergencyInfo").style.display = "block";
    } else {
        document.getElementById("emergencyInfo").style.display = "none";
    }
}
