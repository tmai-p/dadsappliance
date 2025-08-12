import { useEffect, useState } from "react";
import { Tabs, Tab, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Cooktop_details() {
  //Hook for state handler
  const [product, setProduct] = useState([
    {
      brand: "",
      model: "",
      price: "",
      msrp: "",
      images: [],
      feature: [],
      interior: [],
      specifications: [],
      top: [],
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "./products/cooktops/data/" + params.model + ".json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("product_list:", json);
        setProduct(json);
        setError(null);
      } catch (e: any) {
        setError(e);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  //Currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="container">
      <div style={{ display: "block", padding: 10 }}></div>
      <div style={{ display: "inline-block", padding: 20 }}>
        <div
          style={{
            display: "inline-block",
            float: "left",
            width: 320,
            padding: 20,
          }}
        >
          {product.map((p: any) => (
            <Carousel fade>
              {p.images.map((img: any) => (
                <Carousel.Item>
                  <img
                    src={"products/cooktops/img/" + img}
                    width={300}
                    height={250}
                    alt={"Kitchen Aid"}
                  />
                  <Carousel.Caption>
                    {/* <h6>First slide label</h6> */}
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ))}
        </div>

        <div
          style={{
            display: "inline-block",
            width: 300,
            padding: 20,
          }}
        >
          {product.map((p: any) => (
            <p>
              <h4>{p.brand}</h4>
              <br />
              <p>Model: {p.model}</p>
              <p>MSRP: {formatter.format(p.msrp)}</p>
              <p>Our Price: {p.price}</p>
              <br />
            </p>
          ))}
        </div>
      </div>

      <div style={{ display: "block", width: 1000, padding: 10 }}>
        {product.map((p) => (
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Feature">
              <br />
              <ul>
                {p.feature.map((item: string) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="second" title="Oven Interior">
              <br />
              <ul>
                {p.interior.map((item: string) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="third" title="Specifications">
              <br />
              <ul>
                {p.specifications.map((item: string) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="four" title="Top">
              <br />
              <ul>
                {p.top.map((item: string) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Tab>
          </Tabs>
        ))}
      </div>
    </div>
  );
}

export default Cooktop_details;
