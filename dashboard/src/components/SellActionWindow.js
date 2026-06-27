import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { watchlist } from "../data/data";

import { toast } from "react-toastify";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = React.useContext(GeneralContext);

  useEffect(() => {
    const stock = watchlist.find((s) => s.name === uid);
    if (stock) {
      setStockPrice(stock.price);
    }
  }, [uid]);

  const handleSellClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        { withCredentials: true }
      )
      .then(() => {
        toast.success("Sell order placed successfully!", { position: "top-right" });
        generalContext.triggerOrdersRefresh();
      });

    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
