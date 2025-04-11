// FairTaleList.js
import React from "react";
import FairTaleCard from "./FairTaleCard";
import ded from "../Images/ded.svg";
import Prok from "../Images/Prok.svg";
import  seller from "../Images/Group 161.svg";
import bunt from "../Images/bunt.svg";
import  hero from "../Images/hero.svg";
import  jeje from "../Images/Group 6.svg";
import "../Styles/FairTaleList.css";

const FairTaleList = () => {
  const fairyTales = [
    {
      id: 1,
      name: "Сказка о рыбаке и рыбке",
      description: "Очень интересная сказка",

      image: ded,
      link: "./FairTale1",
    },
    {
      id: 2,
      name: "Линялый фосфор",
      description: "История рассказывает о мальчике  по имени Линай, ", // Исправлено

      image: Prok , // Исправлено
      link: "/FairTale2",
    },
    {
      id: 3,
      name: "Прокашивать  монументальный",
      description: "Очень интересная сказка", // Исправлено


      image: hero, // Исправлено
      link: "/FairTale3",
    },
    {
      id: 4,
      name: "Разровнять Снедь ",
      description: "Очень интересная сказка", // Исправлено

      image:
          bunt, // Исправлено
      link: "/FairTale3",
    },
    {
      id: 5,
      name: "Исподволь Меняться",
      description: "Очень интересная сказка", // Исправлено

      image:
          seller, // Исправлено
      link: "/FairTale3",
    },
    {
      id: 6,
      name: "Наслать Укатиться",
      description: "Очень интересная сказка", // Исправлено

      image: jeje
          , // Исправлено
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
