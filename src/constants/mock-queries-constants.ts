export default class MockQueryConstants {
  private static base: string = "http://localhost:8002";
  public static users: string = this.base + "/users";
  public static projects: string = this.base + "/projects";
  public static clients: string = this.base + "/clients";
  public static workEntries: string = this.base + "/workEntries";

  public static roles: string = this.base + "/roles";
  public static countries: string = this.base + "/countries";

  //User queries
  public static getAllUsers(): string {
    return this.users + "?_expand=role";
  }

  public static getAllUsersPagination(pageIndex: number, pageSize: number) {
    return `${this.users}?_page=${pageIndex}&_limit=${pageSize}`;
  }

  //Project queries
  public static getAllProjectsPagination(pageIndex: number, pageSize: number) {
    return `${this.projects}?_page=${pageIndex}&_limit=${pageSize}`;
  }

  //Client queries
  public static getAllClientsPagination(pageIndex: number, pageSize: number) {
    return `${this.clients}?_page=${pageIndex}&_limit=${pageSize}`;
  }

  public static getAllClientsFetchProjects(): string {
    return `${this.clients}?_embed=projects`;
  }

  //WorkEntry queries
  public static getAllWorkEntriesForUser(
    userId: string,
    startDate: Date,
    endDate: Date
  ): string {
    return `${this.workEntries}?${this.formUserQuery(
      false,
      userId
    )}${this.formDateGreaterThanEqualQuery(
      true,
      startDate
    )}${this.formDateLowerThanEqualQuery(true, endDate)}`;
  }

  public static getWorkEntriesForReport(
    userId?: string,
    clientId?: string,
    projectId?: string,
    startDate?: Date,
    endDate?: Date
  ) {
    return `${this.workEntries}?
        ${this.formUserQuery(false, userId)}
        ${this.formDateGreaterThanEqualQuery(true, startDate)}
        ${this.formDateLowerThanEqualQuery(true, endDate)}
        ${this.formClientQuery(true, clientId)}
        ${this.formProjectQuery(true, projectId)}`;
  }

  //HELPER METHODS
  private static formUserQuery(
    andSignRequired: boolean,
    userId?: string
  ): string {
    return andSignRequired ? "&" : "" + userId ? `userId=${userId}` : "";
  }

  private static formClientQuery(
    andSignRequired: boolean,
    clientId?: string
  ): string {
    return andSignRequired ? "&" : "" + clientId ? `clientId=${clientId}` : "";
  }

  private static formProjectQuery(
    andSignRequired: boolean,
    projectId?: string
  ) {
    return andSignRequired
      ? "&"
      : "" + projectId
      ? `projectId=${projectId}`
      : "";
  }

  private static formDateGreaterThanEqualQuery(
    andSignRequired: boolean,
    date?: Date
  ) {
    return `${andSignRequired ? "&" : ""}${
      date != null ? `date_gte=${date!.toJSON()}` : ""
    }`;
  }

  private static formDateLowerThanEqualQuery(
    andSignRequired: boolean,
    date?: Date
  ) {
    return `${andSignRequired ? "&" : ""}${
      date ? `date_lte=${date!.toJSON()}` : ""
    }`;
  }
}
