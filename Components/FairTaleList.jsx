// FairTaleList.js
import React from "react";
import FairTaleCard from "./FairTaleCard";
import "../Styles/FairTaleList.css";

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
      name: "Линялый фосфор",
      description: "История рассказывает о мальчике по имени Линай, ", // Исправлено
      price: "300$",
      image:
        "https://i1.sndcdn.com/artworks-d3x2QXKOpM5j1RWo-FEKoaQ-t500x500.jpg", // Исправлено
      link: "/FairTale2",
    },
    {
      id: 3,
      name: "Прокашивать  монументальный",
      description: "Очень интересная сказка", // Исправлено
      price: "немало",
      image:
        "https://ksmrecords.ru/upload/iblock/1cc/bg66zlfuepnzhyloejo3i2n09caurno0.jpg", // Исправлено
      link: "/FairTale3",
    },
    {
      id: 4,
      name: "Разровнять Снедь ",
      description: "Очень интересная сказка", // Исправлено
      price: "немало",
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAFvJt9Jwbcmr8N5N38CkHSvpm1HNBUqa6Q&s", // Исправлено
      link: "/FairTale3",
    },
    {
      id: 5,
      name: "Исподволь Меняться",
      description: "Очень интересная сказка", // Исправлено
      price: "немало",
      image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r6G9a-oKllbODlXtOUO7v-l_xHegSkVM5A&s", // Исправлено
      link: "/FairTale3",
    },
    {
      id: 6,
      name: "Наслать Укатиться",
      description: "Очень интересная сказка", // Исправлено
      price: "немало",
      image:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4a/Kish_prodavec_koshmarov.jpg/800px-Kish_prodavec_koshmarov.jpg", // Исправлено
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
