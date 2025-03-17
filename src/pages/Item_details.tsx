import { useEffect, useState } from "react";
import { Tabs, Tab, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Item_details() {
  //Hook for state handler
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let params = useParams();

  //console.log("param: " + params.model);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "./products/ranges/data/" + params.model + ".json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("item_data:", json);
        setItems(json);
        setError(null);
      } catch (e: any) {
        setError(e);
        setItems([]);
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
          <Carousel fade>
            {items[1].images.map((img) => (
              <Carousel.Item>
                <img
                  src={"products/ranges/img/" + img}
                  width={300}
                  height={250}
                  alt={"Kitchen Aid"}
                />
                <Carousel.Caption>
                  {/* <h6>First slide label</h6> */}
                  <p>description</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div
          style={{
            display: "inline-block",
            width: 300,
            padding: 20,
          }}
        >
          <p>
            <h4>{items[0].brand}</h4>
            <br />
            <p>Model: {items[0].model}</p>
            <p>MSRP: {formatter.format(items[0].msrp)}</p>
            <p>Our Price: {formatter.format(items[0].price)}</p>
            <br />
          </p>
        </div>
      </div>

      <div style={{ display: "block", width: 1000, padding: 10 }}>
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="Feature">
            <br />
            <ul>
              {items[2].feature.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="second" title="Oven Interior">
            <br />
            <ul>
              {items[2].interior.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="third" title="Specifications">
            <br />
            <ul>
              {items[2].specifications.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="four" title="Top">
            <br />
            <ul>
              {items[2].top.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Item_details;
