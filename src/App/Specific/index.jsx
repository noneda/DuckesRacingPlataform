import "./base.css";
import { useSpecific } from "./hook";
const Specific = () => {
  const [event, action] = useSpecific();
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
            <h3>UBICACIÓN</h3>
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
        </div>
        <div className="map">
          <iframe
            src={event.location.maps}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="ItsPart Specific">
        <p>Quieres ser parte de esta aventura DUKE´S RACING?</p>
        <h2>INSCRIBETE AQUI</h2>
        <form onSubmit={action} className="Specific-Form">
          <section className="Form-Info Specific-Info">
            <div>
              <h3>DETALLES DEL EVENTO</h3>
              <ul>
                <li>
                  Fecha: <p>{event.details.data}</p>
                </li>
                <li>
                  Lugar: <p>{event.details.place}</p>
                </li>
                <li>
                  Participantes:<p>{event.details.participants}</p>
                </li>
                <li>
                  Organización:<p>{event.details.organization}</p> 
                </li>
              </ul>
              <h3>¿TIENES UNA DUDA O NECESITAS AYUDA?</h3>
              <p>¡Descubre mas en las redes sociales!</p>
              <h3>INSTAGRAM</h3>
              <h3>
                <a href="https://www.instagram.com/reel/DGGGBN6IVP2/?igsh=azllMG95dGFiNHd6">
                  @duke.racing_
                </a>
              </h3>
            </div>
          </section>
          <section className="Form-Text">
            <div className="Container">
              <label htmlFor="Name">NOMBRE COMPLETO*</label>
              <input
                type="text"
                name="Name"
                placeholder="Ingresa tu nombre y apellido completo"
              />
            </div>
            <div className="Container">
              <label htmlFor="CellphoneNumber">NUMERO DE DOCUMENTO*</label>
              <input
                type="text"
                name="CellphoneNumber"
                placeholder="Ingresa tu numero de documento"
              />
            </div>
            <div className="Container">
              <label htmlFor="City">CIUDAD/LUGAR DE RESIDENCIA*</label>
              <input
                type="text"
                name="City"
                placeholder="Ingresa tu dirección de residencia"
              />
            </div>
            <div className="Container">
              <label htmlFor="Email">CORREO ELECTRÓNICO*</label>
              <input
                type="text"
                name="Email"
                placeholder="Ingresa tu correo electronico"
              />
            </div>
            <div className="Container">
              <label htmlFor="number">NUMERO DE TELOFONO*</label>
              <input
                type="text"
                name="number"
                placeholder="Ingresa tu numero de telefónico"
              />
            </div>

            {event.facture && (
              <>
                <div className="line" />
                <h3>DATOS DE FACTURACIÓN</h3>
                <div className="Container">
                  <label htmlFor="NAME-TARGET">NOMBRE COMPLETO*</label>
                  <input
                    type="text"
                    name="NAME-TARGET"
                    placeholder="Ingresa tu nombre y apellido completo"
                  />
                </div>
                <div className="Container">
                  <label htmlFor="NUMBER-TARGET">NUMERO DE TELOFONO*</label>
                  <input
                    type="text"
                    name="NUMBER-TARGET"
                    placeholder="Ingresa tu numero de telefónico"
                  />
                </div>
                <div className="Container">
                  <label htmlFor="NUMBER-TARGET">CORREO ELECTRONICO*</label>
                  <input
                    type="text"
                    name="NUMBER-TARGET"
                    placeholder="Ingresa tu correo electronico"
                  />
                </div>
                <label htmlFor="NUMBER-TARGET">CORREO ELECTRONICO*</label>
                <div className="CreditCard">
                  <input
                    className="bigger"
                    type="text"
                    name="NUMBER-CREDIT-CARD"
                    placeholder="1234 1234 1234 1234"
                  />
                  <input
                    type="text"
                    name="NUMBER-DATA-TARGET"
                    placeholder="MM / AA"
                  />
                  <input type="text" name="NUMBER-TARGET" placeholder="CVC" />
                </div>
                <div className="Container">
                  <label htmlFor="TITULAR-NAME-TARGET">
                    NOMBRE DEL TITULAR*
                  </label>
                  <input
                    type="text"
                    name="TITULAR-NAME-TARGET"
                    placeholder="CVC"
                  />
                </div>
                <div className="Container">
                  <label htmlFor="CC-TARGET">NUMERO DE DOCUMENTO*</label>
                  <input
                    type="text"
                    name="CC-TARGET"
                    placeholder="Ingresa tu numero de documento"
                  />
                </div>
              </>
            )}

            <div className="Container Check">
              <input type="checkbox" name="Accept" />
              <label htmlFor="Accept">ACEPTAR TÉRMINOS Y CONDICIONES*</label>
            </div>
            <button className="btn-submit" type="submit">
              Continuar
            </button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Specific;
