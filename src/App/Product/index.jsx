import "./base.css";
import { useProduct } from "./hook";
import ItemProduct from "../../Assets/ItemProduct";

const Product = () => {
  const [isMockUp, isColor, showPopUp, colors] = useProduct();

  if (!isMockUp) {
    return (
      <main>
        <section>Don’t Found</section>
      </main>
    );
  }

  return (
    <main>
      <section className="Product">
        <div className="Picture">
          <img src={`${isMockUp.url}${isColor}.png`} alt="" />
        </div>
        <div className="Text">
          <section className="title">
            <h2>{isMockUp.name}</h2>
            <h3>{isColor}</h3>
          </section>
          <section>
            <h4>COP {isMockUp.data.price}</h4>
            <p>{isMockUp.data.desc}</p>
          </section>
          <button onClick={showPopUp}>COMPRAR</button>
        </div>
      </section>
      <section className="Products-title">
        <h2>QUIZAS TE INTERECE</h2>
      </section>
      <ItemProduct
        colors={colors}
        name={isMockUp.name}
        url={isMockUp.url}
        clave={isMockUp.clave}
      />
    </main>
  );
};

export default Product;
