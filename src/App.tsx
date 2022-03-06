import React from "react";

import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <StarRating size={30} fill="#ffd43b" maxRating={5} />
    </div>
  );
}

export default App;
