document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("q1").value;
    const satisfaction = document.querySelector('input[name="q2"]:checked').value;
    const comments = document.getElementById("q3").value;
    
    // Display the response and customize it
    const responseElement = document.getElementById("response");
    responseElement.style.display = "block";
    
    responseElement.innerHTML = `
        <h2>Thank you, ${name}! 🎉</h2>
        <p>Your satisfaction: ${satisfaction} 🌟</p>
        <p>Your feedback: ${comments} 📝</p>
    `;
    
    // Clear the form after submission
    document.getElementById("q1").value = "";
    document.querySelector('input[name="q2"]:checked').checked = false;
    document.getElementById("q3").value = "";
});
