import React from 'react';
import tv from "./photo_2024-03-31_20-39-43.jpg";

export default function Download(){
    return(
        <div className="center-content bordertop" style={{ background: "black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", textAlign: "center", display: "flex", justifyContent: "center" }}>
                <div >
                    <img src={tv} alt="TV" style={{height:"400px"}} />
                </div>

                <div style={{ flex: 1, textAlign: "left" ,marginLeft:"20px"}}>
                    <h1 style={{ fontSize: "3.9rem", fontWeight: "700", color: "white",width:"80%" }}>
                    Download your shows to watch offline
                    </h1>
                    <h3 style={{ fontSize: "2rem", fontWeight: "400", color: "white", whiteSpace: "nowrap" }}>
                    Save your favourites easily and always have<br/> something to watch.
                    </h3>
                </div>
            </div>
        </div>
    );
}
