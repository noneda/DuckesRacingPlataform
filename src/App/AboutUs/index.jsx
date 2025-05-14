import "./base.css";
const AboutUs = () => {
  return (
    <main>
      <section className="AboutUsPanel">
        <img src="/App/AboutUs/Banner.webp" alt="Banner" />
        <div className="Above">
          <div className="container">
            <h3>Dukes Racing</h3>
            <p>
              Dukes Racing es una comunidad de la ciudad de Bogotá conformada
              por personas de distintas edades, apasionadas por el motociclismo,
              la velocidad y la hermandad entre miembros, al ser una comunidad
              que se conformó hace aproximadamente 1 año, su visibilidad es
              limitada, lo que reduce la posibilidad de atraer nuevos
              integrantes o seguidores. Mediante este proyecto se propone el
              desarrollo de una estrategia de comunicación visual efectiva a
              través de diferentes piezas gráficas que reflejan la esencia y
              valores de la comunidad, respondiendo a las necesidades de esta
              misma con el fin de fortalecer la identidad por medios digitales y
              físicos y llamar la atención de nuevas personas que se
              identifiquen, puedan y quieran pertenecer a dicho grupo.
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
          <h3>¡Bienvenido a DUKE’s Racing!</h3>
          <p>
            Donde la velocidad, la hermandad y la pasión por las motos
            deportivas definen nuestro estilo de vida. Somos una comunidad
            independiente, unida por el amor a las rutas, la adrenalina y el
            diseño potente sobre dos ruedas. Aquí no solo rodamos, vivimos para
            rodar. Si compartes la emoción de correr libre, desafiar límites y
            ser parte de una familia que respira motores, ¡este es tu lugar!
          </p>
        </div>
      </section>
      <section className="ItsPart">
        <h2>¡SE PARTE DE NUESTRA COMUNIDAD!</h2>
        <p>
          Descubre mas sobre esta comunidad apasionadas por las motos
          deportivas.
        </p>
        <form>
          <section className="Form-Text">
            <div className="Container">
              <label htmlFor="Name">NOMBRE</label>
              <input type="text" name="Name" />
            </div>
            <div className="Container">
              <label htmlFor="CellphoneNumber">NUMERO DE DOCUMENTO</label>
              <input type="text" name="CellphoneNumber" />
            </div>
            <div className="Container">
              <label htmlFor="City">CIUDAD/LUGAR DE RESIDENCIA</label>
              <input type="text" name="City" />
            </div>
            <div className="Container">
              <label htmlFor="Email">CORREO</label>
              <input type="text" name="Email" />
            </div>
          </section>
          <button className="btn" type="submit"></button>
        </form>
      </section>
    </main>
  );
};

export default AboutUs;
