export const calcCurrentPageElements = (elements, currentPage, elementsPerPage) => {
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = elements?.slice(
        indexOfFirstElement,
        indexOfLastElement
    );
    const totalPages = elements
      ? Math.ceil(elements.length / elementsPerPage)
      : 0;


  return {currentElements, totalPages}
}