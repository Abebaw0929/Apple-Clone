import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css"; // Import the CSS file

const YoutubeVideos = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCbYNH59U4JxM_zbLj0FnI_Polzm9_9wsc"
    )
      .then((res) => res.json())
      .then((res) => {
        const realData = res.items;
        setVideo(realData);
      });
  }, []);

  return (
    <div className="video-container">
      {video.map((data) => {
        return (
          <div key={data.id.videoId} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${data.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data.snippet.thumbnails.high.url}
                alt={data.snippet.title}
                className="video-thumbnail"
              />
              <div className="video-info">
                <h2 className="video-title">{data.snippet.title}</h2>
                <p className="video-description">{data.snippet.description}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeVideos;
