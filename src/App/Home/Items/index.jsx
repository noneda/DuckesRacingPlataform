import "./base.css";

const HomeItems = () => {
  return (
    <section className="Look">
      <h2>¡HECHA UN VISTASO A LA TIENDA DUKES RACING!</h2>
      <div className="items">
        {new Array(3).fill(null).map((_, index) => (
          <div className="item" key={index}>
            <img src="/App/Home/Items/item.svg" alt="item" />
            <h5>Item</h5>
          </div>
        ))}
      </div>
      <button className="btn-LearnMore">
        <h3>SABER MÁS</h3>
        <img src="/App/Home/Items/RightRow.svg" alt="" />
      </button>
    </section>
  );
};

export default HomeItems;
