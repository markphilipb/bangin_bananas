import Navbar from "../Navbar/Navbar.js";
import { Main } from "../Home/HomeElements.js";

export default function Layout({ children }) {
  return (
    <>
      <Main>
        {/* <Navbar /> */}
        <main>{children}</main>
      </Main>
    </>
  );
}
