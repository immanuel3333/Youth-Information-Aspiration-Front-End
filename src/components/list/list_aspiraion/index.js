import React from "react";
import CardAspirasi from "../../card/card_aspirasi";
import Aspiration from "../../../data/json/aspiration.json"

export default function ListAspiration() {
  return (
    <div>
      <h1>Some Popular Aspiration</h1>
      {
        Aspiration.map((value)=>{
          return (
            <CardAspirasi key={value.category_id} />

          );
        })
      }
    </div>
  );
}
