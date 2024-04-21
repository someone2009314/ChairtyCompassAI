const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "sk-proj-H5OHP2cOYzdVzXiYP6LET3BlbkFJN11JrSdYMeeeQzLxNuUr";

window.addEventListener('scroll', function() {
    // Check if user has reached the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("Reached bottom of the page"); // Check scroll event

        // Prompt for the AI to complete
        const prompt = "Complete the cause name and cause information.";

        // Request parameters
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 100,
                model:"gpt-3.5-turbo" // Add the model parameter here
            })
        };

        // Fetch data from the API
        fetch(API_URL, params)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("API Response:", data); // Log API response

                // Extract completed text from response
                const completion = data.choices[0].text.trim();

                // Create a new div element
                var newDiv = document.createElement('div');
                newDiv.innerHTML = `<div class="cause_div" style="display: flex; height: 350px; margin: 30px; background-color: rgb(212, 212, 212);">
                <div class="cause_img" style="height: 350px; width: 350px; background-color: black;"></div>
                <div style="flex: 1; padding: 20px;">
                    <h3 style="color: black;">Cause Name</h3>
                    <p style="color: black;">${completion}</p>
                    <button onclick="openInfo()" class="btn btn-secondary btn-lg">Open Info</button>
                </div>
            </div>`;

                // Append the new div to the document
                document.body.appendChild(newDiv);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});

function openAnimalWelfare(){
    window.location.href = "info1.html";
}
function openOrphanage(){
    window.location.href = "info2.html";
}
function openHomelessness(){
    window.location.href = "info3.html";
}
function openEnvironment(){
    window.location.href = "info4.html";
}
function openPoverty(){
    window.location.href = "info5.html";
}


function back(){
    window.location.href = "causes.html";
}