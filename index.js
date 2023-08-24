// MRKL Radio http://144.217.32.237:8162
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8162;
import fetch from 'node-fetch';  // This is for fetching the stream

const STATIONS = {
    "KEXP": {
        name: "KEXP Seattle",
        url: "https://kexp.streamguys1.com/kexp160.aac",
        type: "audio/aac"
    },
    "ClassicFM": {
        name: "ClassicFM",
        url: "http://media-ice.musicradio.com/ClassicFMMP3",
        type: "audio/mp3" // Assuming the stream type is mp3; adjust if different
    },
    "KDHX": {
        name: "KDHX",
        url: "http://kdhx-ice.streamguys1.com/live",
        type: "audio/mp3" // Assuming the stream type is mp3; adjust if different
    },
    "MainMix": {
        name: "Radio Paradise - Main Mix (FLAC)",
        url: "http://stream.radioparadise.com/flacm",
        type: "audio/flac" // Assuming the stream type is mp3; adjust if different
    },
    "MotherEarth2": {
        name: "Mother Earth Radio",
        url: "http://server9.streamserver24.com:18900/motherearth.aac",
        type: "audio/aac"
    },
    "RockMix": {
        name: "Radio Paradise - Jay Perry's Rock Mix (FLAC)",
        url: "http://stream.radioparadise.com/rock-flacm",
        type: "audio/flac"    
    },
    "RadioBlues": {
        name: "RadioBlues",
        url: "https://audio-edge-es6pf.mia.g.radiomast.io/radioblues-flac",
        type: "audio/flac" // Assuming the stream type is flac; adjust if different
    },
    "MotherEarth3": {
        name: "Radio Paradise - Jay Perry's Rock Mix (320k AAC)",
        url: "http://stream.radioparadise.com/rock-320",
        type: "audio/aac"
    },
    "SuperStereo1": {
        name: "Super Stereo 1",
        url: "http://ingest-mia.radiomast.io/8a760c25-fb95-4fcb-9c0e-ca0f269a7360",
        type: "audio/flac" // Assuming the stream type is flac; adjust if different
    },
    "SuperStereo2": {
        name: "Super Stereo 2",
        url: "http://198.204.228.202:8160/flac",
        type: "audio/flac"
    },
    "SuperStereo4": {
        name: "Super Stereo 4",
        url: "http://198.204.228.202:8157/flac",
        type: "audio/flac"
    },
    "SuperStereo5": {
        name: "Super Stereo 5",
        url: "http://198.204.228.202:8539/flac",
        type: "audio/flac"
    },
    "SuperStereo6": {
        name: "Super Stereo 6",
        url: "http://198.204.228.202:8030/flac",
        type: "audio/flac"
    },
    "SuperStereo7": {
        name: "Super Stereo 7",
        url: "http://198.204.228.202:8511/canal1",
        type: "audio/flac" // Assuming the stream type is flac; adjust if different
    },
    "SuperStereo8": {
        name: "Super Stereo 8",
        url: "http://198.204.228.202:8157/flac6",
        type: "audio/flac"
    },
    "SuperStereo9": {
        name: "Super Stereo 9",
        url: "http://198.204.228.202:8030/flac7",
        type: "audio/flac"
    },
    "INTENSE": {
        name: "Intense Radio",
        url: "https://intenseradio.live-streams.nl:18000/live",
        type: "audio/aac"
    }
};

function getCurrentBitRate(stationKey) {
    return BITRATES[stationKey] || "Unknown";
}

app.get('/', (req, res) => {
    const stationKey = req.query.station || "KEXP";  // Default to KEXP if no station parameter
 
    if (!STATIONS[stationKey]) {
        return res.status(404).send("Station not found.");
    }
 
    const selectedStation = STATIONS[stationKey];

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




