import React from 'react';
import { useSelector } from 'react-redux';

// const list = [
//   {
//     album: "17 CARAT",
//     description: "1st mini album",
//     price: "29",
//     image: "https://upload.wikimedia.org/wikipedia/en/2/21/Seventeen-17_Carat_%28EP%29.jpg",
//   },
//   {
//     album: "BOYS BE",
//     description: "2nd mini album",
//     price: "27",
//     image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Boys_Be_EP.png",
//   },
//   {
//     album: "LOVE&LETTER",
//     description: "1st full album",
//     price: "35",
//     image: "https://upload.wikimedia.org/wikipedia/en/d/de/Seventeen_-_Love_and_Letter.jpg"
//   },
//   {
//     album: "Going Seventeen",
//     description: "3rd mini album",
//     price: "39",
//     image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Going_Seventeen_EP.jpg"
//   }
// ];

export default function List() {
    const list = useSelector(state => state.list)
    return (
        <ul title="Seventeen Album List">
          {list.map((item) => (
            <li key={item.album}>Album Name: {item.album} Description: {item.description} Price: {item.price} Album Cover: <img src={item.image} alt='album cover'/></li>
          ))}
        </ul>
      );
}