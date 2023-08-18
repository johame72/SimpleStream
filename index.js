const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const STATION_NAME = "KEXP";

// Placeholder function to get the bit rate. In a real-world scenario,
// you'd need to integrate with a tool or library that can analyze the stream.
function getCurrentBitRate() {
    return "160kbps";  // Placeholder value
}

app.get('/', (req, res) => {
    const bitRate = getCurrentBitRate();

    res.send(`
        <style>
            html, body {
                height: 100%;
                margin: 0;
                font-family: Arial, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
        </style>

        <h1>${STATION_NAME}</h1>
        <p>Bit Rate: ${bitRate}</p>
        
        <audio controls autoplay>
            <source src="https://kexp.streamguys1.com/kexp160.aac" type="audio/aac">
            Your browser does not support the audio element.
        </audio>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
