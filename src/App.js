/* eslint-disable react/prop-types */ // TODO: upgrade to latest craco+eslint or Next.js?
import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: "4.8",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7,
  },
];

function Food({ fav, pic, rating }) {
  return (
    <div>
      <h3>{fav}</h3>
      <h5>{rating}/5.0</h5>
      <img src={pic} alt={fav}></img>
    </div>
  );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div className="App">
      <h1>Helloooooooooo</h1>
      {console.log(
        foodILike.map((dish) => (
          <Food
            fav={dish.name}
            pic={dish.image}
            key={dish.id}
            rating={dish.rating}
          />
        ))
      )}
      {foodILike.map((dish) => (
        <Food
          fav={dish.name}
          pic={dish.image}
          key={dish.id}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
