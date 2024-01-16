import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(setListings)
  }, [])

  console.log(listings)
  console.log(search)

  function removeListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id)
    setListings(newListings)
  }

  const displayedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
