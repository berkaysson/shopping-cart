export const ProductItem = ({ id, price, imgPath, description, name }) => {
  return (
    <div>
      <img src={imgPath} alt={name} />
      <div>{description}</div>
      <div>{price}</div>
      <button>Add to Cart</button>
    </div>
  );
};
