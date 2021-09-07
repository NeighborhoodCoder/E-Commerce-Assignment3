import "./catalog.css";
import Item from "./item";
import { useEffect, useState } from "react";
import ItemService from "../services/itemService";

const Catalog = () => {
  // state variables
  let [products, setProducts] = useState([]);

  // logic (fns)
  const retrieveCatalog = () => {
    let service = new ItemService();
    let cat = service.getCatalog();
    setProducts(cat);
    console.log(cat);
  };

  // Effects
  useEffect(() => {
    console.log(`Component Loaded`);
    retrieveCatalog();
  }, []);

  // return
  return (
    <div className="catalog">
      <h3 className="display-5">Check our amazing products!</h3>
      <h6>Currently we have {products.length} items for you.</h6>
      <div className="item-box">
        {products.map((prod) => (
          <Item key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
