import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {
  console.log(listing)

  const [favorite, setFavorite] = useState(false)

  // function handleClick() {                   //Can use as a callback function instead of functionality inside of JSX on favorite star buttons
  //   removeListing(listing.id)
  // }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    removeListing(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
