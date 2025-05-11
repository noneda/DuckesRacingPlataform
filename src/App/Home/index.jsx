import "./base.css";

import HomeItems from "./Items";

const Home = () => {
  return (
    <main>
      <section className="HomePage">
        <img src="/App/Home/HomeAdobe.webp" alt="Home Image" />
        <div className="Above">
          <img src="/App/Home/Adobe.svg" alt="Adobe" />
        </div>
      </section>
      <section className="Welcome">
        <img src="/App/Home/Bike.svg" alt="Pet Icon" height="350px" />
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
      <img
        src="/App/Home/Videos.svg"
        alt=""
        width="70%"
        style={{ margin: "2rem 0" }}
      />
      <section className="OurBoss">
        <img src="/App/Home/Photo.svg" alt="Pet Icon" height="350px" />
        <div className="Text">
          <h3>Jimmy Patiño</h3>
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
      <HomeItems />
      <img src="/App/Home/line.svg" alt="Line" />
      <section className="Others lists">
        <h2>QUIZAS QUIERAS VER</h2>
        <ul>
          <li>
            <img src="/App/Home/events.svg" alt="Events" />
            <h5>Eventos</h5>
          </li>
          <li>
            <img src="/App/Home/AboutUs.svg" alt="Shopping" />
            <h5>Acerca de Nosotros</h5>
          </li>
          <li>
            <img src="/App/Home/Shopping.svg" alt="Shopping" />
            <h5>TIENDA DUKES RACING</h5>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
