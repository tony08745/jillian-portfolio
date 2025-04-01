import React, { useEffect, useState } from 'react';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/videos')
            .then(res => res.json())
            .then(data => setVideos(data))
            .catch(err => console.error('Error fetching videos:', err));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {videos.map(video => (
                <div key={video.id} className="rounded-lg shadow-md overflow-hidden">
                    <video controls className="w-full h-auto">
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="p-2 text-center font-semibold">{video.title}</div>
                </div>
            ))}
        </div>
    );
};

export default VideoGallery;

