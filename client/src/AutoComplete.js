/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classnames from "classnames";
import axios from "axios";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

const AutoCompleteInput = ({ onSelectItem }) => {
  const [query, setQuery] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(ITEMS_API_URL, {
          params: { q: query },
        });
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      if (query.length > 0) {
        fetchItems();
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleItemClick = (item) => {
    onSelectItem(item);
  };

  return (
    <div className="wrapper">
      <div className={classnames("control", loading && "is-loading")}>
        <input
          type="text"
          className="input"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {items.length > 0 && (
        <div className="list">
          {items.map((item) => (
            <a
              key={item}
              className="list-item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
