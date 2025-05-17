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
        </div>
      </section>
      <section>
        <div>
          <h2>QUIZAS TE INTERESE</h2>
        </div>
        <ItemProduct
          colors={colors}
          name={isMockUp.name}
          url={isMockUp.url}
          clave={isMockUp.clave}
        />
      </section>
    </main>
  );
};

export default Product;
