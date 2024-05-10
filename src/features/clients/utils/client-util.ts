import TableConstants from "@/constants/table-constants";

export default class ClientsUtil {
  public static extractClientNames(clients: Array<any>): Array<any> {
    return clients.map((client) => {
      return { name: client.name, id: client.id };
    });
  }

  public static filterClientsStartWithChar(
    char: string,
    clientsList: Array<any>
  ) {
    return clientsList.filter(
      (client) => client.name.charAt(0).toLowerCase() === char.toLowerCase()
    );
  }

  public static getSetOfClientsForPage(
    pageIndex: number,
    clientsList: Array<any>
  ): Array<any> {
    return clientsList.slice(
      (pageIndex - 1) * TableConstants.elementsPerPage,
      pageIndex * TableConstants.elementsPerPage
    );
  }
}
