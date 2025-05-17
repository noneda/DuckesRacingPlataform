import "./base.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context";

const HomeItems = () => {
  const navigate = useNavigate();
  const { colors } = useGlobalContext();
  return (
    <section className="Look">
      <h2>¡HECHA UN VISTASO A LA TIENDA DUKES RACING!</h2>
      <div className="items">
        {colors.map((_, index) => (
          <div className="item" key={index}>
            <img src={`/MockUps/GORRA${_}.png`} alt="item" />
            <h5>
              Gorra {_} <br /> DUKE´S RACING
            </h5>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/product");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="btn-LearnMore"
      >
        <h3>SABER MÁS</h3>
        <img src="/App/Home/Items/RightRow.svg" alt="" />
      </button>
    </section>
  );
};

export default HomeItems;
