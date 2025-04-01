const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static video files
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// List of available videos
const videos = [
    {
        id: 1,
        title: 'Static Video 1',
        url: 'http://localhost:5000/videos/video1.mp4',
    },
    {
        id: 2,
        title: 'Static Video 2',
        url: 'http://localhost:5000/videos/video2.mp4',
    },
    {
        id: 3,
        title: 'Static Video 3',
        url: 'http://localhost:5000/videos/video3.mp4',
    },
];

// API route to get video metadata
app.get('/api/videos', (req, res) => {
    res.json(videos);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

