import wolf_img from "../images/wolf_2.jpg";
import Brands from "./Brands";

function Homepage() {
  return (
    <div className="container">
      <center>
        <p>
          <h4>Serving DC, MD, and VA since 1982</h4>
        </p>
        <p>6636 Virginia Manor Road, Beltsville, MD 20705</p>
        <div>
          <img src={wolf_img} alt="Wolf Kitchen" />
        </div>
        <p>&nbsp;</p>
        <div>
          <span>
            <h4>BRANDS WE SERVE</h4>
          </span>
        </div>
        <div>
          <Brands />
        </div>
      </center>
    </div>
  );
}

export default Homepage;
