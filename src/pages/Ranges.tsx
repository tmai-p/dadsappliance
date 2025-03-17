import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Ranges() {
  //Hook for state handler
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("./products/ranges/data/item_list.json");
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
          width: "1000px",
          paddingTop: "10px",
          margin: "20px",
          lineHeight: "60px",
          overflowWrap: "break-word",
        }}
      >
        <br />
        {items.map((item: any) => (
          <span
            style={{
              width: "2px",
              padding: "10px",
            }}
          >
            <Link to={`/item_details/${item.model}`}>
              <img
                src={item.image_loc + item.name + ".png"}
                width={200}
                height={250}
                alt={item.brand}
              />
            </Link>
            <span> </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ranges;
