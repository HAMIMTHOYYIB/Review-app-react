import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import '../index.css';


const smartphones = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFlMr8YaxWg9h5C8fUmYy2c--J2FuKvxT3g&usqp=CAU",
    name: "Phone 1",
    rating: 4.5,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DECcvXiIBGrONGKZV9mXk5wvrulJVFWSQA&usqp=CAU",
    name: "Phone 2",
    rating: 4.0,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnchewd7UJEqXoGex7iPqLqVTKNxGhKxLNMA&usqp=CAU",
    name: "Phone 3",
    rating: 4.8,
  },
];


const HomePage = () => (
  <div>
    <Header />
    <div className="card-container">
      {smartphones.map(phone => (
        <Card key={phone.id} {...phone} />
      ))}
    </div>
    <Footer />
  </div>
);

export default HomePage;
