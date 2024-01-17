import React from "react";

export default function Body3() {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dwae0d4e00/assets/images/shutterstock-1455172898-copy%402x.jpg")`,
        backgroundSize: "cover",
        height: "550px",
        margin:"50px 0px"
      
      }}
    >
      <div className="style">
        <div style={{ color: "white" }}>
          <p
            style={{
              fontWeight: "700",
              paddingTop: "40px",

              color: "white",
            }}
          >
            <img
              className="hero-sprint"
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw7fe94a65/assets/images/hero-sprint-mobile.svg"
              alt=""
              width="200rem"
            />
          </p>
          <p
            style={{
              fontWeight: "700",
              minWidth: "800px",

              fontSize: "1.7rem",
            }}
          >
            EXPERIENCE STORES
          </p>
          <p
            style={{
              fontWeight: "700",

              paddingBottom: "20px",
            }}
          >
            Bicycles. Accessories.
            <br></br>
            Services. Community. All of these experiences <br></br>under one
            roof!
            <br></br>
            <div style={{paddingTop:"5px"}}>
              <button
                style={{
                  fontWeight: "bold",
                  padding: " 5px 1rem 4px 1rem",
                 
                }}
                type="button"
                className="btn btn-danger"
              >
                STORE ENTERY HERE!
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
