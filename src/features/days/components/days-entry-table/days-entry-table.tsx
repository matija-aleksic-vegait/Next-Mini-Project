function DaysEntryTable() {
  return (
    <section aria-label="Day Entry">
      <div className="timesheet-entry">
        <div className="timesheet-entry__header">
          <div className="timesheet-entry__header__item">
            <span>Client</span>
            <span className="mandatory">*</span>
          </div>
          <div className="timesheet-entry__header__item">
            <span>Project</span>
            <span className="mandatory">*</span>
          </div>
          <div className="timesheet-entry__header__item">
            <span>Category</span>
            <span className="mandatory">*</span>
          </div>
          <div className="timesheet-entry__header__item">
            <span>Description</span>
          </div>
          <div className="timesheet-entry__header__item timesheet-entry__header__item--small">
            <span>Hours</span>
            <span className="mandatory">*</span>
          </div>
        </div>
        <form>
          <div className="timesheet-entry__item">
            <div className="input-box">
              <label className="sr-only" htmlFor="client">
                Client
              </label>
              <select
                id="client"
                className="input-box__input-field input-box__select"
                aria-label="Client"
              >
                <option value="" disabled>
                  Select client
                </option>
                <option value="Constellation Software Inc.">
                  Constellation Software Inc.
                </option>
                <option value="Snowflake Inc.">Snowflake Inc.</option>
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
              >
                <option value="" disabled>
                  Select project
                </option>
                <option value="Visionary">Visionary</option>
                <option value="Stellar">Stellar</option>
              </select>
            </div>
            <div className="input-box">
              <label className="sr-only" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="input-box__input-field input-box__select"
                aria-label="Category"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Software development">
                  Software development
                </option>
                <option value="Testing">Testing</option>
              </select>
            </div>
            <div className="input-box">
              <label className="sr-only" htmlFor="description">
                Description
              </label>
              <input
                id="description"
                className="input-box__input-field"
                type="text"
                placeholder="Description"
                aria-label="Description"
              />
            </div>
            <div className="input-box input-box--sm">
              <label className=" sr-only" htmlFor="hours">
                Hours
              </label>
              <input
                id="hours"
                className="input-box__input-field"
                type="text"
                placeholder="Hours"
                aria-label="Hours"
              />
            </div>
          </div>
        </form>
        <form>
          <div className="timesheet-entry__item">
            <div className="input-box">
              <label className="sr-only" htmlFor="client">
                Client
              </label>
              <select
                id="client"
                className="input-box__input-field input-box__select"
                aria-label="Client"
              >
                <option value="" disabled>
                  Select client
                </option>
                <option value="Constellation Software Inc.">
                  Constellation Software Inc.
                </option>
                <option value="Snowflake Inc.">Snowflake Inc.</option>
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
              >
                <option value="" disabled>
                  Select projectd
                </option>
                <option value="Visionary">Visionary</option>
                <option value="Stellar">Stellar</option>
              </select>
            </div>
            <div className="input-box">
              <label className="sr-only" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="input-box__input-field input-box__select"
                aria-label="Category"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Software development">
                  Software development
                </option>
                <option value="Testing">Testing</option>
              </select>
            </div>
            <div className="input-box">
              <label className="sr-only" htmlFor="description">
                Description
              </label>
              <input
                id="description"
                className="input-box__input-field"
                type="text"
                placeholder="Description"
                aria-label="Description"
              />
            </div>
            <div className="input-box input-box--sm">
              <label className=" sr-only" htmlFor="hours">
                Hours
              </label>
              <input
                id="hours"
                className="input-box__input-field"
                type="text"
                placeholder="Hours"
                aria-label="Hours"
              />
            </div>
          </div>
        </form>
        <button
          className="btn btn--secondary btn--secondary--icon-left"
          type="button"
        >
          <img src="/icons/plus.svg" alt="add" />
          <span>New entry</span>
        </button>
      </div>
    </section>
  );
}

export default DaysEntryTable;
