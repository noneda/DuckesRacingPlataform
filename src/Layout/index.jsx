import { Outlet } from "react-router-dom";
import "./base.css";
const Layout = () => {
  return (
    <>
      <header>
        <img src="/Layout/Header/icon.svg" alt="Icon" />
        <nav>
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <li>
              <a href="/about-us">MÁS DE NOSOTROS</a>
            </li>
            <li>
              <a href="#">INFORMACIÓN GENERAL</a>
            </li>
            <li>
              <a href="#">NUESTROS PRODUCTOS</a>
            </li>
            <li>
              <a href="#">NUESTROS PRODUCTOS</a>
            </li>
          </ul>
        </nav>
        <img src="/Layout/Header/icon-whatsapp.svg" alt="Icon WhatsApp" />
      </header>
      <Outlet />
      <footer>
        <section className="info">
          <div className="socials lists">
            <h3>REDES</h3>
            <ul>
              <li>
                <img src="/Layout/Footer/Icons/TikTok.svg" alt="TikTok" />
              </li>
              <li>
                <img src="/Layout/Footer/Icons/WhatsApp.svg" alt="TikTok" />
              </li>
              <li>
                <img src="/Layout/Footer/Icons/Instagram.svg" alt="TikTok" />
              </li>
            </ul>
          </div>
        </section>
        <img src="/Layout/Footer/line.svg" alt="Separate" />
        <section className="back-to-top">
          <div className="container">
            <button>
              <img src="/Layout/Footer/backtotop.svg" alt="Icon" />
              <h3>VOLVER ARRIBA</h3>
            </button>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout;
