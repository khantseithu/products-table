import React from "react";
function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr className="text-center">
      <td className="">{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
