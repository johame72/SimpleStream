const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <audio controls autoplay>
            <source src="https://kexp.streamguys1.com/kexp160.aac" type="audio/aac">
            Your browser does not support the audio element.
        </audio>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
