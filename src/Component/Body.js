import React from "react";

export default function Body() {
  return (
    <div
      style={{
        backgroundColor: "#474747",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <div className="yellow" >
        <h2 className="fw-lighter">THE HERO SPRINT</h2>
        <h1 className="fw-bold" style={{ marginTop: "-16px" }}>
          THE STORY PROMISE
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: " 45px",
          paddingBottom: " 45px",
        }}
      >
        <div
          className="card "
          style={{
            width: "18rem",
            backgroundColor: "#5E5E5E",
            textAlign: "center",
          }}
        >
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">
              <div>
                <img
                  src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw5702aee8/assets/images/icon-cycle-insurance.svg"
                  alt=" "
                />
              </div>
              <div>FREE </div>
              <div>INSTURANCE</div>
            </h5>
            <p className="card-fw-lighter">Safeguard Your Cycle</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "#5E5E5E",
            textAlign: "center",
          }}
        >
          <div className="card-body" style={{}}>
            <h5 className=" card-title">
              <div>
                <img
                  src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw110236a3/assets/images/icon-cycle-service.svg"
                  alt=""
                />
              </div>
              <div>FREE</div>
              <div>1ST SERVICE</div>
            </h5>
            <p className="card-fw-lighter">
              Keep Your Cycle In Prime Condition!
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "#5E5E5E",
            textAlign: "center",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              <div>
                <img
                  src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw74799305/assets/images/icon-doorstep-delivery.svg"
                  alt=" "
                />
              </div>
              <div>FREE </div>
              <div>DELIVERY</div>
            </h5>
            <p className="card-fw-lighter">Your Hero Sprint Comes To You!</p>
          </div>
        </div>
      </div>




    </div>
  );
}
