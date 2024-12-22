import axios from "axios";
import { useEffect, useState } from "react";

const LostAndFound = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/allLostAndFoundItem"
    );
    setItems(data);
  };

  console.log(items);

  return (
    <div>
      This is LostAndFound
      <div className="grid grid-cols-4 gap-4">
        {/* {
          items.map(item => div>)
        } */}
      </div>
    </div>
  );
};

export default LostAndFound;
