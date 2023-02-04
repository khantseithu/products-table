import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="mx-auto max-w-max">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="input w-full max-w-xs shadow-lg"
      />
      <label className="label-text my-5 flex items-center gap-4">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          className="checkbox checkbox-primary"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
