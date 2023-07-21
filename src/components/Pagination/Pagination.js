import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from '../Products/ProductFeature/ProductFeature';
function Items({ currentItems, grid }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <ProductCard index={index} item={item} grid={grid} />
        ))}
    </>
  );
}

function Pagination({ itemsPerPage, items, grid }) {
  switch (grid) {
    case 3:
      itemsPerPage = 12;
      break;
    case 4:
      itemsPerPage = 6;
      break;
    case 6:
      itemsPerPage = 4;
      break;
    case 12:
      itemsPerPage = 3;
      break;
    default:
      itemsPerPage = 12;
  }
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} grid={grid} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        className="pagination"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pagination;
