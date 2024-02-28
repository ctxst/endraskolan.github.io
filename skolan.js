function submitVote() {
    var selectedOption = document.querySelector('input[name="vote"]:checked');
    if (selectedOption) {
        var optionValue = selectedOption.value;
        // Here you can send the selected vote option to the server for processing
        // For simplicity, let's just display a message indicating the selected option
        document.getElementById('message').innerHTML = "Thank you for voting for " + optionValue;
    } else {
        document.getElementById('message').innerHTML = "Please select an option to vote.";
    }
}
