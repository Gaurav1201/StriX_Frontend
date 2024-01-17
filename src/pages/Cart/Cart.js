const Cart = ({ items, removeFromCart }) => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  export default Cart