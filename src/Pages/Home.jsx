import React from "react";
import Content from "../Componets/Content";
import TopicBox from "../Componets/TopicBox";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/About">
            Go to the about page
      </Link>

      <Link to="/Contact">
            Go to the contact page
      </Link>

      {/* <TopicBox food="kottu" price="Rs.250">
        <span>This is the description</span>
      </TopicBox>

      <TopicBox food="rice" price="Rs.350">
        <button> Button </button>
      </TopicBox>

      <TopicBox food="hoppers" price="Rs.550">
      <button> Button </button>
      </TopicBox> */}
    </div>
  );
}
