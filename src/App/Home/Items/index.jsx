import "./base.css";

const HomeItems = () => {
  return (
    <section className="Look">
      <h2>HECHA UN VISTASO A NUESTRA TIENDA DUKE´S</h2>
      <div className="items">
        {new Array(3).fill(null).map((_, index) => (
          <div className="item" key={index}>
            <img src="/Home/Items/item.svg" alt="item" />
            <h5>Item</h5>
          </div>
        ))}
      </div>
      <button className="btn">
        <h3>SABER MÁS</h3>
        <img src="/Home/Items/RightRow.svg" alt="" />
      </button>
    </section>
  );
};

export default HomeItems;
