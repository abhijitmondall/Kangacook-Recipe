import Header from "../Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
};

export default Main;
