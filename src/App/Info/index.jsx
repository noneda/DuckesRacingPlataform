import "./base.css";
import { TermsAndConditions, FrequentlyAskedQuestions } from "./data";

const Info = () => {
  const show = TermsAndConditions;
  const other = FrequentlyAskedQuestions;
  return (
    <main className="info">
      <section className="title">
        <h1>TÉRMINOS Y CONDICIONES</h1>
        <h4>Ultima actualización: 12/05/25</h4>
      </section>
      <section id="terms" className="terms">
        {show.map((e, i) => (
          <div key={i}>
            <h3>
              {i + 1}. {e.title}
            </h3>
            <p>{e.info}</p>
          </div>
        ))}
      </section>
      <section id="asks" className="Asks">
        <h1>PREGUNTAS FRECUENTES</h1>
        <h4>
          Hemos resumido para ti las preguntas frecuentes sobre la comunidad
        </h4>
        <div className="container">
          {other.map((e, i) => (
            <div key={i}>
              <h3>
                {i + 1}. {e.title}
              </h3>
              <p>{e.info}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Info;
