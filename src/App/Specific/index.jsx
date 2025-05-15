import "./base.css";
import { useSpecific } from "./hook";
const Specific = () => {
  const [event] = useSpecific();
  console.log(event === undefined);

  if (event === undefined) {
    return (
      <main>
        <section className="EventsPanel">
          <img src="/App/Banner-principal-1-2.webp" alt="Banner" />
          <div className="Above">
            <h2>Evento no Encontrado</h2>
          </div>
        </section>
      </main>
    );
  }
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
      <section>
        <img src={event.img} alt={event.name} height="350px" />
        <div className="Text">
          <h3>{event.name}</h3>
          <p>{event.text}</p>
        </div>
      </section>
      <section className="location">
        <div className="info">
          <div className="title">
            <h3>Ubicación</h3>
          </div>
          <div className="data">
            <div>
              <h5>Nombre del Lugar</h5>
              <p>{event.location.name}</p>
            </div>
            <div>
              <h5>Lugar Exacto</h5>
              <p>{event.location.place}</p>
            </div>
            <div>
              <h5>Dirección</h5>
              <p>{event.location.address}</p>
            </div>
          </div>
          <div className="map">
            
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default Specific;
