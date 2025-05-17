import { Outlet, useNavigate } from "react-router-dom";
import "./base.css";
import PopUp from "../Assets/PopUp";
const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <PopUp />
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
              <a href="/info">INFORMACIÓN GENERAL</a>
            </li>
            <li>
              <a href="/product">NUESTROS PRODUCTOS</a>
            </li>
            <li>
              <a href="/event">EVENTOS</a>
            </li>
          </ul>
        </nav>
        <button>
          <img src="/Layout/Header/icon-whatsapp.svg" alt="Icon WhatsApp" />
        </button>
      </header>
      <Outlet />
      <footer>
        <section className="info">
          <div className="socials lists">
            <h3>REDES</h3>
            <ul>
              <li>
                <button>
                  <img src="/Layout/Footer/Icons/TikTok.svg" alt="TikTok" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/Layout/Footer/Icons/WhatsApp.svg" alt="TikTok" />
                </button>
              </li>
              <li>
                <button>
                  <img src="/Layout/Footer/Icons/Instagram.svg" alt="TikTok" />
                </button>
              </li>
            </ul>
          </div>
          <div className="general">
            <h4>General</h4>
            <ul>
              <li>
                <a href="/info">TERMINOS Y CONDICIONES</a>
              </li>
              <li>
                <a href="/info#asks">PREGUNTAS FRECUENTES</a>
              </li>
              <li>
                <a href="">CONTACTO</a>
              </li>
            </ul>
          </div>
        </section>
        <img src="/Layout/Footer/line.svg" alt="Separate" />
        <section className="back-to-top">
          <div className="container">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
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
