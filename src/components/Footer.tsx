import front_door from "../images/front_door.jpg";
import dads_logo from "../images/dads_logo.jpg";

function Footer() {
  return (
    <div className="bground">
      <center>
        <div className="float-container">
          <div className="float-child-1">
            <img src={front_door} alt="Front-door" width={120} height={90} />
          </div>
          <div className="float-child-2">
            <img src={dads_logo} alt="DAD'S Logo" width={80} height={25} />
            <p>
              Monday-Friday: 9am - 4pm <br />
              📞 301-937-0222
            </p>
          </div>
          <p className="footer-note">
            © Dadsappliance 2025. All Rights Reserved.
          </p>
        </div>
      </center>
    </div>
  );
}

export default Footer;
