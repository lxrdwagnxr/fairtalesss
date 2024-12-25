// FairTaleList.js
import React from "react";
import FairTale1 from "./FairTale1";
import FairTaleCard from "./FairTaleCard";
import "./FairTaleList.css";

const FairTaleList = () => {
  const fairyTales = [
    {
      id: 1,
      name: "Сказка о рыбаке и рыбке",
      description: "Очень интересная сказка",
      price: "пойдет",
      image: "https://imo10.labirint.ru/books/479633/cover.jpg/242-0",
      link: "./FairTale1",
    },
    {
      id: 2,
      name: "жеж",
      description: "Очень интересная сказка", // Исправлено
      price: "достаточно",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAewv0I8x_wWzz1v4MRkPqW9bvb7w4GmGDxA&s", // Исправлено
      link: "/FairTale2",
    },
    {
      id: 3,
      name: "жеж",
      description: "Очень интересная сказка", // Исправлено
      price: "немало",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAewv0I8x_wWzz1v4MRkPqW9bvb7w4GmGDxA&s", // Исправлено
      link: "/FairTale3",
    },
  ];

  return (
    <div className="fair-tale-list">
      {fairyTales.map((tale) => (
        <FairTaleCard key={tale.id} fairyTale={tale} />
      ))}
    </div>
  );
};

export default FairTaleList;
