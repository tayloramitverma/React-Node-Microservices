import React from "react";

const USERS_URL = "https://example.com/api/users";
const PAGE_SIZE = 10;

const UserTable = () => {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(totalPages);

  React.useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${USERS_URL}?page=${currentPage}`);
      const response = await res.json();
      setData(response.results);
      setTotalPages(Math.ceil(response.count / PAGE_SIZE));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(0);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages - 1);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3">Loading data...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan="3">No records found.</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <section className="pagination">
        <button
          className="first-page-btn"
          onClick={handleFirstPage}
          disabled={currentPage === 0 || isLoading}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 0 || isLoading}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isLoading}
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={handleLastPage}
          disabled={currentPage === totalPages - 1 || isLoading}
        >
          last
        </button>
      </section>
    </div>
  );
};

export default UserTable;
