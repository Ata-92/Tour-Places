import React, { Component } from "react";
import "./Card.css";
import { data } from "../../helper/data";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        {data.map((i) => (
          <div className={`card${i.id}`}>
            <h2 className={`title${i.id}`}>{i.title}</h2>
            <img src={i.image} className={`image${i.id}`} alt={i.title} />
            <p className={`desc${i.id}`}>{i.desc}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
