import React, { useState } from "react";
import styled from "styled-components";
import TelaInicial from "./pages/TelaInicial";
import TelaDeMatches from "./pages/TelaDeMatches";

function App() {
  const [actualPage, setActualPage] = useState("first")

  switchPage = () => {
    switch (setActualPage) {
      case "first":
        return <TelaInicial />
      case "second":
        return  <TelaDeMatches  />
      default:
        return <div>Error! Page not found.</div>
    }
  }

  function goToFirstPage() {
    setActualPage(first)
  }

  function goToSecondPage() {
    setActualPage(second)
  }

  return (
    <>
     {switchPage()}
    </>
  );
}

export default App;
