export default class MockQueryConstants{

    //User queries
    public static  getAllUsers() : string{
        return "http://localhost:8002/users?_expand=role";
    }

    //Project queries
    public static getAllProjects() : string {
        return "http://localhost:8002/projects";
    }

    //Client queries
    public static getAllClients() : string{
        return "http://localhost:8002/clients";
    }

    public static getAllClientsFetchProjects(): string {
        return "http://localhost:8002/clients?_embed=projects";
    }

    //WorkEntry queries
    public static getAllWorkEntriesForUser(userId : string, startDate : Date, endDate : Date) : string{
        return `http://localhost:8002/workEntries?${this.formUserQuery(false, userId)}${this.formDateGreaterThanEqualQuery(true,startDate)}${this.formDateLowerThanEqualQuery(true, endDate)}`;
    }

    public static getWorkEntriesForReport(userId? : string, clientId? : string, projectId? : string,  startDate? : Date, endDate? : Date){
        return `http://localhost:8002/workEntries?
        ${this.formUserQuery(false, userId)}
        ${this.formDateGreaterThanEqualQuery(true,startDate)}
        ${this.formDateLowerThanEqualQuery(true, endDate)}
        ${this.formClientQuery(true, clientId)}
        ${this.formProjectQuery(true, projectId)}`;
    }

    //Country queries
    public static getAllCountries() : string{
        return "http://localhost:8002/countries";
    }

    //Role queries
    public static getAllRoles() : string{
        return "http://localhost:8002/roles";
    }



    //HELPER METHODS
    private static formUserQuery(andSignRequired : boolean, userId? : string) : string{
        return (andSignRequired) ? "&" : "" + (userId) ? `userId=${userId}` : "";
    }
    
    private static formClientQuery(andSignRequired : boolean, clientId? :string) : string {
        return (andSignRequired) ? "&" : "" +(clientId) ? `clientId=${clientId}` : "";
    }
    
    private static formProjectQuery(andSignRequired : boolean, projectId? :string){
        return (andSignRequired) ? "&" : "" +(projectId) ? `projectId=${projectId}` : "";
    }

    private static formDateGreaterThanEqualQuery(andSignRequired : boolean,  date? :Date){
        return (andSignRequired) ? "&" : "" +(date) ? `date_gte=${date?.toDateString()}` : "";
    }

    private static formDateLowerThanEqualQuery(andSignRequired : boolean,  date? :Date){
        return (andSignRequired) ? "&" : "" +(date) ? `date_lte=${date?.toDateString()}` : "";
    }
}