import "./base.css";
const AboutUs = () => {
  return (
    <main>
      <section className="AboutUsPanel"></section>
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
    </main>
  );
};

export default AboutUs;
