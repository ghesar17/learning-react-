import NewListGroup from "./components/Grid";
import Kana from "./components/Kana";

import { useState } from "react";

function App() {
  let heading = "Characters";

  return (
    <>
      <NewListGroup heading={heading} characters={characters} />
      <Kana />
    </>
  );
}

export default App;
