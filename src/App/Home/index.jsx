import "./base.css";

import HomeItems from "./Items";

const Home = () => {
  return (
    <main>
      <img src="" alt="" />
      <section className="welcome">
        <img src="/Home/Bike.svg" alt="Pet Icon" height="350px" />
        <div className="Text">
          <h2>¡Bienvenido a DUKE’s Racing!</h2>
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
        src="/Home/Videos.svg"
        alt=""
        width="70%"
        style={{ margin: "2rem 0" }}
      />
      <section className="OurBoss">
        <img src="/Home/Photo.svg" alt="Pet Icon" height="350px" />
        <div className="Text">
          <h2>Jimmy Patiño</h2>
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
      <section className="DoYouWant">
        <h2>Quieres ser parte de DUKE´S RACING?</h2>
        <div className="text">
          <p>
            DUKE'S RACING es una comunidad fanatica por el motociclismo
            deportivo, unida por el gusto por la velocidad y la vida urbana. Más
            que conducir, representa un estilo de vida basado en la adrenalina,
            la camaradería y el respeto por la ruta.
          </p>
          <button className="btn">
            <h3>UNETE</h3>
            <img src="/Home/Items/RightRow.svg" alt="" />
          </button>
        </div>
        <img src="" alt="" />
      </section>
      <img src="/Home/line.svg" alt="Line" />
      <section className="Others lists">
        <h2>QUIZAS QUIERAS VER</h2>
        <ul>
          <li>
            <img src="/Home/events.svg" alt="Events" />
            <h4>Eventos</h4>
          </li>
          <li>
            <img src="/Home/Shopping.svg" alt="Shopping" />
            <h4>Productos</h4>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
