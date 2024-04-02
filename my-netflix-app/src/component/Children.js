import React from 'react';
import tv from "./photo_2024-03-31_20-39-43.jpg";

export default function Children(){
    return(
        <div className="center-content bordertop" style={{ background: "black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", textAlign: "center", display: "flex", justifyContent: "center" }}>
                <div >
                    <img src="https://occ-0-2164-1009.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="TV" style={{height:"400px"}} />
                </div>

                <div style={{ flex: 1, textAlign: "left" ,marginLeft:"20px"}}>
                    <h1 style={{ fontSize: "3.9rem", fontWeight: "700", color: "white",width:"80%" }}>
                    Create profiles for kids
                    </h1>
                    <h3 style={{ fontSize: "2rem", fontWeight: "400", color: "white", whiteSpace: "nowrap" }}>
                    Send children on adventures with their <br/>favourite characters in a space made just<br/> for them—free with your membership.
                    </h3>
                </div>
            </div>
        </div>
    );
}
