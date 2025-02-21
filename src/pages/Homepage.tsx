//import wolf_img from "../images/wolf_1.jpg";

function Homepage() {
  return (
    <div className="container">
      <center>
        <p>
          <h4>Serving DC, MD, and VA since 1982</h4>
        </p>
        <p>6636 Virginia Manor Road, Beltsville, MD 20705</p>
        <div>
          <img
            src={import.meta.env.BASE_URL + "../images/wolf_1.jpg"}
            alt="Wolf Kitchen"
          />
        </div>
        <p>&nbsp;</p>
      </center>
    </div>
  );
}

export default Homepage;
