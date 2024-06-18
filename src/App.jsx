import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Footer, Container } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
