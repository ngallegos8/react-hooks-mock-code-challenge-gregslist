import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  console.log(listings)

  const listCard = listings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} removeListing={removeListing}/>
  ))


  return (
    <main>
      <ul className="cards">
        {listCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
