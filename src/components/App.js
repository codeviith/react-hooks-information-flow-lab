import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items"; //the second . means folder within the same folder.
import Header from "./Header"; //the . means within the same folder.

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
