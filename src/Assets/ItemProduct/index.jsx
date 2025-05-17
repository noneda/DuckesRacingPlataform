import "./base.css";
import { useNavigate } from "react-router-dom";

const ItemProduct = ({ name, url, clave, colors }) => {
  const navigate = useNavigate();

  const action = (element) => {
    navigate(`/product/${clave}${element}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="Product-Item">
      <h3>{name}</h3>
      <section>
        {colors.map((element, index) => (
          <div key={index}>
            <img src={`${url}${element}.png`} alt={`${url}${element}`} />
            <button onClick={() => action(element)}>MAS INFO</button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ItemProduct;
