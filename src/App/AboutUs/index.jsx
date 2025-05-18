import "./base.css";
import { useAboutUs } from "./hook";
const AboutUs = () => {
  const [action] = useAboutUs();
  return (
    <main>
      <section className="AboutUsPanel">
        <img src="/App/Banner-principal-1-2.webp" alt="Banner" />
        <div className="Above">
          <div className="container">
            <h3>¡TE DAMOS LA BIENVENIDA A DUKES RACING!</h3>
            <p>
              Duke ́s Racing es una comunidad de moteros de la ciudad de Bogotá
              conformada por personas de distintas edades, apasionadas por el
              motociclismo, la velocidad y la hermandad entre miembros.
            </p>
          </div>
          <img src="/App/AboutUs/AboutUsContainer.webp" alt="" />
        </div>
      </section>
      <section className="WhoIsItFor">
        <img
          src="/App/AboutUs/WhoIsItFor.svg"
          alt="Who Is It For"
          height="350px"
        />
        <div className="Text">
          <h3>¿A QUIEN VA DIRIGIDO?</h3>
          <p>
            DUKES RACING está pensado para apasionados del motociclismo
            deportivo que buscan algo más que velocidad: buscan una comunidad.
            Esta plataforma está dirigida a riders jóvenes y adultos con
            espíritu competitivo, con interes en la aventura y por las motos de
            alto rendimiento. También está abierta a quienes están iniciando en
            este mundo y quieren aprender, conectar y formar parte de un grupo
            con valores de respeto, libertad y adrenalina compartida.
          </p>
        </div>
      </section>
      <section className="ItsPart">
        <h2>¡SE PARTE DE NUESTRA COMUNIDAD!</h2>
        <p>
          Unirte a la comunidad te conecta, te protege, te enseña y te impulsa.
          No solo se trata de motos, sino de crecer y disfrutar con otros que
          viven tu misma pasión.
        </p>
        <form onSubmit={action}>
          <section className="Form-Info">
            <div>
              <h3>¿POR QUE UNIRTE A DUKES RACING?</h3>
              <ul>
                <li>Comunidad actividad en redes sociales</li>
                <li>Rodadas organizadas</li>
                <li>Inscripción gratuita</li>
              </ul>
              <h3>¿TIENES UNA DUDA O NECESITAS AYUDA?</h3>
              <p>
                Si necesitas más información sobre nuestra comunidad y deseas
                resolver cualquier duda antes de ser parte de esta aventura, no
                dudes en contactarnos:
              </p>
              <h3>INSTAGRAM</h3>
              <h3>
                <a href="https://www.instagram.com/duke.racing_">
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
              <label htmlFor="CellphoneNumber">TELEFONO*</label>
              <input
                type="text"
                name="CellphoneNumber"
                placeholder="Ingresa tu numero telefónico"
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
              <label htmlFor="Email">CORREO*</label>
              <input
                type="text"
                name="Email"
                placeholder="Ingresa tu correo electronico"
              />
            </div>
            <div className="form-link">
              <h4>Quieres ir a un Evento?</h4>
              <h4>
                Click <a href="#">Aqui</a>
              </h4>
            </div>
            <button className="btn-submit" type="submit">
              Continuar
            </button>
          </section>
        </form>
        <section className="ButtomPicture">
          <img src="/App/AboutUs/ButtomPicture.svg" alt="SAPAAAA" />
        </section>
      </section>
    </main>
  );
};

export default AboutUs;
