import { Link } from "react-router-dom";

const Brands = () => {
  const brand_names = [
    { name: "amana", url: "http://url.com" },
    { name: "asko", url: "http://url.com" },
    { name: "bosch", url: "http://url.com" },
    { name: "broan", url: "http://url.com" },
    { name: "cafe", url: "http://url.com" },
    { name: "fisher_paykel", url: "http://url.com" },
    { name: "forno", url: "http://url.com" },
    { name: "frigidaire", url: "http://url.com" },
    { name: "ge", url: "http://url.com" },
    { name: "haier", url: "http://url.com" },
    { name: "hotpoint", url: "http://url.com" },
    { name: "lg", url: "http://url.com" },
    { name: "marvel", url: "http://url.com" },
    { name: "monogram", url: "http://url.com" },
    { name: "profile", url: "http://url.com" },
    { name: "scotsman", url: "http://url.com" },
    { name: "sharp", url: "http://url.com" },
    { name: "summit", url: "http://url.com" },
    { name: "u_line", url: "http://url.com" },
    { name: "viking", url: "http://url.com" },
    { name: "zephyr", url: "http://url.com" },
    { name: "cove", url: "http://url.com" },
    { name: "gladiator", url: "http://url.com" },
    { name: "kitchen_aid", url: "http://url.com" },
    { name: "maytag", url: "http://url.com" },
    { name: "miele", url: "http://url.com" },
    { name: "sub-zero", url: "http://url.com" },
    { name: "whirlpool", url: "http://url.com" },
    { name: "wolf", url: "http://url.com" },
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
          <Link to={item.url}>
            <img
              src={"brands/" + item.name + ".png"}
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
