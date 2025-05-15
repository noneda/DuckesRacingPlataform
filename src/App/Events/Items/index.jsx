import "./base.css";
import { useNavigate } from "react-router-dom";

const ItemEvent = ({ name, img, url }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>{name}</h4>
      <img src={img} alt={name} />
      <button
        className="btn-LearnMore"
        onClick={() => {
          navigate(url);
        }}
      >
        <h3>SABER MÁS</h3>
        <img alt="RightRow" src="/App/Home/Items/RightRow.svg" />
      </button>
    </div>
  );
};

export default ItemEvent;
