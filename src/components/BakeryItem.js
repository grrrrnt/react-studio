import "./BakeryItem.css"

export default function BakeryItem({ item, cart, setCart }) {
  return (
    <div className="bakery-item">
      <img src={item.image} alt={item.name} />
      <div className="bakery-item-content">
        <div className="bakery-item-name-description">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="bakery-item-price-buy">
          <p>${item.price}</p>
          <button onClick={() => setCart([...cart, item])}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};