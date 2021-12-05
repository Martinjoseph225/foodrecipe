import React from "react";

function Pagination(props) {
  let numberOfPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filteredDishes.length / props.itemsPerPage);
    i++
  ) {
    numberOfPages.push(i);
  }
  //   console.log(numberOfPages);
  function showNextDishesHandler(event) {
    // console.log(event.target.id);
    props.setCurrentPage(event.target.id);
  }
  let pages = numberOfPages.map((pageNumber, index) => {
    return (
      <li id={pageNumber} onClick={showNextDishesHandler}>
        {pageNumber}
        {console.log("id", props.currentPage)}
        {console.log("pageno", pageNumber)}
      </li>
    );
  });
  return (
    <section>
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
}

export default Pagination;
