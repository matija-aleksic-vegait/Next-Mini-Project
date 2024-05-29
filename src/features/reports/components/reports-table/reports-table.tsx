import Pagination from "@/components/table-controls/pagination";

function ReportsTable({ workEntries }: { workEntries: Array<any> }) {
  return (
    <section>
      <div className="table-container">
        <table className="table">
          <ReportsTableHeader />
          <tbody>
            {workEntries &&
              workEntries.map((workEntry, index) => (
                <tr key={index}>
                  <td>??????????</td>
                  <td>??????????</td>
                  <td>{workEntry.client.name}</td>
                  <td>{workEntry.project.name}</td>
                  <td>{workEntry.category}</td>
                  <td>{workEntry.user.name}</td>
                  <td>{workEntry.date}</td>
                  <td className="table__cell--img">
                    <img src="/icons/download.svg" alt="download" />
                    <span>Download</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        pageIndex={5}
        totalElementCount={100}
        changePageIndexFunction={() => alert("Change index called")}
      />
    </section>
  );
}

export default ReportsTable;

function ReportsTableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">Start date</th>
        <th scope="col">End date</th>
        <th scope="col">Client</th>
        <th scope="col">Project</th>
        <th scope="col">Category</th>
        <th scope="col">Employee</th>
        <th scope="col">Created at</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
}
