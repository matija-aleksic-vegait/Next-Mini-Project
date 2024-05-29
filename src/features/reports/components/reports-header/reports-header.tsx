import { useState } from "react";

function ReportsHeader({
  clients,
  categories,
  users,
  fetchWorkEntitiesForReport,
}: {
  clients: Array<any>;
  categories: Array<any>;
  users: Array<any>;
  fetchWorkEntitiesForReport: Function;
}) {
  const [selectedClient, setSelectedClient] = useState<any>();

  const generateClicked = () => {
    alert("Generate Clicked");
    // fetchWorkEntitiesForReport();
  };

  const resetClicked = () => {
    alert("Reset Clicked");
  };

  return (
    // <div className="low-resolution-warning body-md">
    //     Resolution under 420px is not supported.
    // </div>
    <>
      <section className="application-content__card application-content__card--column">
        <div className="application-content__card__action-container">
          <div className="application-content__card__action-container__header heading-lg">
            Reports
          </div>
          <p className="application-content__card__action-container__content text-lg">
            Choose from a range of criteria including date range, client,
            project, category, employee, and more to tailor your reports exactly
            as required.
          </p>
        </div>
        <form className="application-content__card__form">
          <div className="application-content__card__form__content">
            <div className="application-content__card__form__content__input-group">
              <div className="input-box">
                <label className="sr-only" htmlFor="start-date">
                  Start date
                </label>
                <input
                  id="start-date"
                  className="input-box__input-field"
                  type="date"
                  placeholder="Start date"
                  aria-label="Start Date"
                />
                {/* onfocus="(this.type='date')"
                                    onblur="(this.type='text')" */}
              </div>
              <div className="input-box">
                <label className="sr-only" htmlFor="end-date">
                  End date
                </label>
                <input
                  id="end-date"
                  className="input-box__input-field"
                  type="date"
                  placeholder="End date"
                  aria-label="End Date"
                />
                {/* onfocus="(this.type='date')" onblur="(this.type='text')" */}
              </div>
            </div>
            <div className="application-content__card__form__content__input-group">
              <div className="input-box">
                <label className="sr-only" htmlFor="client">
                  Client
                </label>
                <select
                  id="client"
                  className="input-box__input-field input-box__select"
                  aria-label="Client"
                  defaultValue={"All"}
                  onChange={(event) =>
                    setSelectedClient(
                      clients.find((client) => client.id === event.target.value)
                    )
                  }
                >
                  <option value="All" disabled>
                    All
                  </option>

                  {clients &&
                    clients.map((client, index) => (
                      <option value={client.id} key={index}>
                        {client.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-box">
                <label className="sr-only" htmlFor="project">
                  Project
                </label>
                <select
                  id="project"
                  className="input-box__input-field input-box__select"
                  aria-label="Project"
                  defaultValue={"All"}
                >
                  <option value="All" disabled>
                    All
                  </option>
                  {selectedClient &&
                    selectedClient.projects.map(
                      (project: any, index: number) => (
                        <option key={index} value={project.name}>
                          {project.name}
                        </option>
                      )
                    )}
                </select>
              </div>
            </div>
            <div className="application-content__card__form__content__input-group">
              <div className="input-box">
                <label className="sr-only" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className="input-box__input-field input-box__select"
                  aria-label="Category"
                  defaultValue={"All"}
                >
                  <option value="All" disabled>
                    All
                  </option>
                  {categories &&
                    categories.map((category, index) => (
                      <option value={category.name} key={index}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-box">
                <label className="sr-only" htmlFor="employee">
                  Employee
                </label>
                <select
                  id="employee"
                  className="input-box__input-field input-box__select"
                  aria-label="Employee"
                  defaultValue={"All"}
                >
                  <option value="All" disabled>
                    All
                  </option>
                  {users &&
                    users.map((user, index) => (
                      <option value={user.name} key={index}>
                        {user.name}{" "}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="application-content__card__form__controls">
            <button
              type="button"
              className="btn btn--primary"
              aria-label="Generate"
              onClick={() => generateClicked()}
            >
              Generate
            </button>
            <button
              type="reset"
              className="btn btn--secondary"
              aria-label="Reset"
              onClick={() => resetClicked()}
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ReportsHeader;
