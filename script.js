// JavaScript code to fetch and display real-time data from Arduino
// You can update this code to fetch data from your Arduino server

function fetchData() {
    // Fetch data from Arduino server (replace this with your actual data fetching logic)
    // Example:
    // fetch('http://your-arduino-server/data')
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('data-container').innerText = JSON.stringify(data);
    //     })
    //     .catch(error => console.error('Error fetching data:', error));

    // For demonstration purposes, let's just display a placeholder message
    document.getElementById('data-container').innerText = "Real-time data will be displayed here";
}

// Fetch data initially and then set an interval to fetch data periodically
fetchData();
setInterval(fetchData, 5000); // Fetch data every 5 seconds
