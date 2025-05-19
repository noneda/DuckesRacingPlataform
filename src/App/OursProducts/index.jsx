import "./base.css";
import { useOursProducts } from "./hook";
import ItemProduct from "../../Assets/ItemProduct";

const OursProducts = () => {
  const [mockUps, colors] = useOursProducts();

  return (
    <main>
      <section className="EventsPanel Products-Hero">
        <img src="/App/Banner-principal-1-3.webp" alt="Banner" />
        <div className="Above">
          <h2>MIRA NUESTROS PRODUCTOS DUKE´S</h2>
          <section>
            <div>
              <h1>1</h1>
              <h3>PRENDA 10%</h3>
            </div>
            <div>
              <h1>2</h1>
              <h3>PRENDAS 20%</h3>
            </div>
            <div>
              <h1>3</h1>
              <h3>PRENDAS 30%</h3>
            </div>
          </section>
          <h5>!POR TIEMPO LIMITADO¡</h5>
        </div>
      </section>
      <section className="Products-title">
        <h2>PRODUCTOS DUKE´S RACING</h2>
      </section>
      {mockUps.map((element, index) => (
        <ItemProduct
          key={index}
          colors={colors}
          name={element.name}
          url={element.url}
          clave={element.clave}
        />
      ))}
    </main>
  );
};

export default OursProducts;
