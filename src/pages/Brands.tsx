import { Link } from "react-router-dom";

const Brands = () => {
  const brand_names = [
    { name: "amana", url: "https://www.amana.com/" },
    { name: "asko", url: "https://global.asko.com/" },
    { name: "broan", url: "https://broan-nutone.com/en-us" },
    { name: "cafe", url: "https://www.cafeappliances.com/" },
    { name: "fisher_paykel", url: "https://www.fisherpaykel.com/us/" },
    { name: "forno", url: "https://forno.ca/" },
    { name: "frigidaire", url: "https://www.frigidaire.com/en/" },
    { name: "ge", url: "https://www.geappliances.com/" },
    { name: "haier", url: "https://www.haierappliances.com/" },
    { name: "hotpoint", url: "https://www.hotpoint.com/appliances/" },
    { name: "lg", url: "https://www.lg.com/us/" },
    { name: "marvel", url: "https://www.marvelrefrigeration.com/" },
    { name: "monogram", url: "https://www.monogram.com/" },
    { name: "profile", url: "https://www.geappliances.com/ge/profile.htm" },
    { name: "scotsman", url: "https://scotsmanhomeice.com/" },
    { name: "sharp", url: "https://shop.sharpusa.com/" },
    { name: "summit", url: "https://www.summitappliance.com/" },
    { name: "u_line", url: "https://www.u-line.com/" },
    { name: "viking", url: "https://www.vikingrange.com/consumer/index.jsp" },
    { name: "zephyr", url: "https://zephyronline.com/" },
    { name: "cove", url: "https://www.subzero-wolf.com/en/cove/dishwashers" },
    { name: "purlick", url: "https://www.perlick.com/" },
    { name: "kitchen_aid", url: "https://www.kitchenaid.com/" },
    { name: "maytag", url: "https://www.maytag.com/" },
    { name: "miele", url: "https://www.mieleusa.com/" },
    { name: "sub-zero", url: "https://www.subzero-wolf.com/sub-zero" },
    { name: "whirlpool", url: "https://www.whirlpool.com/" },
    { name: "wolf", url: "https://www.subzero-wolf.com/wolf" },
  ];

  return (
    <div
      style={{
        width: "1000px",
        paddingTop: "10px",
        margin: "20px",
        lineHeight: "60px",
        overflowWrap: "break-word",
      }}
    >
      {brand_names.map((item) => (
        <span
          style={{
            width: "2px",
            padding: "10px",
          }}
        >
          <Link to={item.url} target="_blank">
            <img
              src={"brand_img/" + item.name + ".png"}
              width={100}
              height={40}
              alt={item.name}
            />
          </Link>
          <span> </span>
        </span>
      ))}
    </div>
  );
};

export default Brands;
