// Pagination system example : https://github.com/bradtraversy/simple_react_pagination

const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="Pagination">
      {pageNumbers.map((number) => (
        <li onClick={() => paginate(number)} key={number}>
          <b>{number}</b>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
