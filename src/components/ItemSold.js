const ItemSold = ({ item, number }) => {
  return (
    <div>
      <p className="bold">{`No. #${number}: ${item.text}`}</p>
      <p className="thin">{`No. sold: ${item.number_sold}`}</p>
    </div>
  );
};

export default ItemSold;
