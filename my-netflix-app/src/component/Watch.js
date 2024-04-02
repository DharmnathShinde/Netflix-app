import React from 'react';
import tv from "./photo_2024-03-31_20-39-43.jpg";

export default function Watch(){
    return(
        <div className="center-content bordertop" style={{ background: "black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "700px", textAlign: "center" }}>
                <h1 style={{ fontSize: "3.9rem", fontWeight: "900", color: "white" }}>
                Watch everywhere
                </h1>
                <h3 style={{ fontSize: "1.7rem", fontWeight: "400",width:"50%", color: "white", whiteSpace: "nowrap" }}>
                Stream unlimited movies and TV shows on<br/> your phone, tablet, laptop, and TV.
                </h3>
            </div>
            <div style={{ position: "relative", width: "60%", maxWidth: "600px", height: "400px", margin: "20px" }}>
                <img src={tv} alt="TV" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <video
                    autoPlay
                    loop
                    muted
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    controls
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "80%",
                        maxHeight: "80%",
                        objectFit: "cover",
                        zIndex: "1"
                    }}
                ></video>
            </div>
        </div>
    );
}
