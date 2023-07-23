import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Navbar } from "./common/Navbar";
import { Home } from "../src/pages/Home/index";
import { About } from "./pages/About";
import { User } from "./pages/User/[login]";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
