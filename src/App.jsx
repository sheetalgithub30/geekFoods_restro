import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { data } from "./dummy";

function App() {
  const [food, setFood] = useState("");
  const [new_data, setData] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setData([...data]);
  }, []);

  useEffect(() => {
    if (food == "") {
      setData([...data]);
    }
  }, [food]);


  useEffect(() => {
    console.log(rating);
    setRating(rating);
    if(rating!=0){
      findRating();
    }
    if(rating == 0){
      setData([...data]); 
    }
    
  }, [rating]);



  function find() {
    setData(
      data.filter((da) => {
        if (da.name.toLowerCase().includes(food.toLowerCase())) return da;
      })
    );
  }

  function findRating() {
    setData(
      data.filter((da) => {
        if (da.rating == rating) {
          return da;
        }
      })
    );
  }
  return (
    <div id="main">
      <div id="top">
        <input
          type="text"
          placeholder="Search resturants"
          onChange={(e) => {
            setFood(e.currentTarget.value);
            find();
          }}
          value={food}
        ></input>
        <div id="rating">
          <label>Minimum Rating:</label>
          <input
            type="number"
            min="0"
            max="5"
            onChange={(e) => {
              setRating(e.currentTarget.value);
            }}
            value={rating}
          ></input>
        </div>
      </div>

      <Card data={new_data} />
    </div>
  );
}

export default App;
