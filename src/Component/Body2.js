import React from 'react'

export default function Body2() {
  return (
    <div
      style={{ backgroundImage: "url(/bicycle.jpg)", backgroundSize: "cover" }}
    >
      <div>
        <section className="brands">
          <h4 style={{ marginBottom: "0px", fontWeight: "400" }}>Explore</h4>
          <h1 style={{ marginTop: "-11px", fontWeight: "900" }}>OUR BRANDS</h1>
        </section>
        <div className="red" style={{}}>
          <div
            className="card"
            style={{ width: "14rem", marginBottom: "25px" }}
          >
            <img
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dwe7100bf3/Homepage/OurBrands/5_octane_440x556-min.png"
              alt="Hero Cycles Octane"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <img
                src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw65d512e0/assets/images/fill-4.png"
                alt="Our Brands Octane Card"
              />
              <p className="card-text">Soar higher—the world is your oyster!</p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "14rem", marginBottom: "25px" }}
          >
            <img
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw9f1d108d/Homepage/OurBrands/4_Herosprintpro_440x556%20copy-min.png"
              alt="Hero Sprint Pro"
              alt="Hero Cycles Octane"
              className="card-img-top"
            />
            <div className="card-body">
              <img
                src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw7799403f/assets/images/fill-3.png"
                alt="Hero Sprint Pro Card"
              />
              <p className="card-text">
                Inspired by the ones always high on adrenaline!
              </p>
            </div>
          </div>
          <section
            className="card"
            style={{ width: "14rem", marginBottom: "25px" }}
          >
            <img
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw82ff5ed0/Homepage/OurBrands/3_Herosprint_440x556%20copy-min.png"
              alt="Our Brands Hero Sprint"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <img
                src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw5dee1369/assets/images/fill-2.png"
                alt="Our Brands Hero Sprint"
              />
              <p className="card-text">
                Inspired by the ones who seek to do more, always.
                #InspirationIsYou
              </p>
            </div>
          </section>
          <div
            className="card"
            style={{ width: "14rem", marginBottom: "25px" }}
          >
            <img
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4e4c6a87/Homepage/OurBrands/1_MissIndia_440x556.jpg"
              alt="Hero Cycles Miss India"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <img
                src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw865708c4/assets/images/fill-5.png"
                alt="Our Brands Miss India Card"
              />
              <p className="card-text">
                The perfect companion for all the lovely women out there.
                #SheRulesTheRoads
              </p>
            </div>
          </div>
          <div
            className="card"
            style={{ width: "14rem", marginBottom: "25px" }}
          >
            <img
              src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw88e2fe0a/Homepage/OurBrands/2_Herocycle_440x556-min.png"
              alt="Hero Cycles Card"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <img
                src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw13420d5a/assets/images/fill-1.png"
                alt="Hero Cycles Card Image"
              />
              <p className="card-text">
                The world’s No. 1 cycling brand. Proudly Indian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
