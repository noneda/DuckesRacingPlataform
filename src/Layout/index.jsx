import { Outlet } from "react-router-dom";
import "./base.css";
const Layout = () => {
  return (
    <>
      <header>
        <img src="/Header/icon.svg" alt="Icon" />
        <nav className="lists">
          <ul>
            <li>INICIO</li>
            <li>MÁS DE NOSOTROS</li>
            <li>INFORMACIÓN GENERAL</li>
            <li>NUESTROS PRODUCTOS</li>
            <li>EVENTO</li>
          </ul>
        </nav>
        <img src="/Header/icon-whatsapp.svg" alt="Icon WhatsApp" />
      </header>
      <Outlet />
      <footer>
        <section className="info">
          <div className="socials lists">
            <h3>REDES</h3>
            <ul>
              <li>
                <img src="/Footer/Icons/TikTok.svg" alt="TikTok" />
              </li>
              <li>
                <img src="/Footer/Icons/WhatsApp.svg" alt="TikTok" />
              </li>
              <li>
                <img src="/Footer/Icons/Instagram.svg" alt="TikTok" />
              </li>
            </ul>
          </div>
          <div className="legal">
            <h3>LEGAL</h3>
            <h4>TERMINOS Y CONDICIONES</h4>
            <p>no se</p>
            <p>no se</p>
          </div>
        </section>
        <img src="/Footer/line.svg" alt="Separate" />
        <section className="back-to-top">
          <div className="container">
            <button>
              <img src="/Footer/backtotop.svg" alt="Icon" />
              <h3>VOLVER ARRIBA</h3>
            </button>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout;
