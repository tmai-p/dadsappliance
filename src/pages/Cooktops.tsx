import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CooktopItem } from "../interf/CooktopItem";


function Cooktops() {
  //Hook for state handler
  const [items, setItems] = useState<CooktopItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("./products/cooktops/data/item_list.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log("data:", json);
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

  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "none",
          width: "1200px",
          paddingTop: "10px",
          margin: "20px",
          lineHeight: "60px",
          overflowWrap: "break-word",
        }}
      >
        <h3 className="mb-4">Cooktops</h3>
        <Row>
          {items.map((image, index) => (
            /*<Col key={index} xs={12} sm={6} md={4} lg={3}>*/
            <Col key={index} md={3} sm={6} className="text-center">
              <Link to={`/cooktop_details/${image.model}`}>
                <p>
                  <Image
                    src={image.image_loc + image.name + ".jpg"}
                    width={240}
                    height={290}
                    alt={`Image ${index + 1}`}
                    thumbnail
                    fluid
                  />
                </p>
              </Link>
              <p>
                <Card.Body>
                  <Card.Title>{image.name}</Card.Title>
                </Card.Body>
              </p>

              <br />
            </Col>
          ))}
        </Row>

      </div>
    </div>
  );
}

export default Cooktops;
