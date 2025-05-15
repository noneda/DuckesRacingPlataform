import "./base.css";
import { useGlobalContext } from "../../Context";
import ItemEvent from "./Items";

const Events = () => {
  const { is } = useGlobalContext();
  return (
    <main>
      <section className="EventsPanel">
        <img src="/App/Banner-principal-1-2.webp" alt="Banner" />
        <div className="Above">
          <h2>
            EVENTOS Y COMPETENCIAS <br />
            DUKES RACING
          </h2>
        </div>
      </section>
      <section className="All-Events">
        <h3>Bienvenido a la sección de Eventos DUKES RACING</h3>
        <p>
          Aquí encontraras los diferentes eventos donde la comunidad DUKES
          RACING participa y compite
        </p>
      </section>
      <img alt="Line" src="/App/line.svg" />
      <section className="Items-Events">
        {is.map((_, i) => (
          <ItemEvent key={i} {..._} />
        ))}
      </section>
    </main>
  );
};

export default Events;
