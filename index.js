const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const STATIONS = {
    "KEXP": {
        name: "KEXP",
        url: "https://kexp.streamguys1.com/kexp160.aac",
        type: "audio/aac"
    },
    "INTENSE": {
        name: "Intense Radio",
        url: "https://intenseradio.live-streams.nl:18000/live",
        type: "audio/aac"  // Assuming the stream type is the same; adjust if different
    }
};

function getCurrentBitRate() {
    return "160kbps";  // Placeholder value
}

app.get('/', (req, res) => {
    const stationKey = req.query.station || "KEXP";  // Default to KEXP if no station parameter
    const selectedStation = STATIONS[stationKey];
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

        <h1>${selectedStation.name}</h1>
        <p>Bit Rate: ${bitRate}</p>
        
        <select onchange="location = this.value;">
            ${Object.keys(STATIONS).map(key => `
                <option value="/?station=${key}" ${key === stationKey ? 'selected' : ''}>${STATIONS[key].name}</option>
            `).join('')}
        </select>

        <audio controls autoplay>
            <source src="${selectedStation.url}" type="${selectedStation.type}">
            Your browser does not support the audio element.
        </audio>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
