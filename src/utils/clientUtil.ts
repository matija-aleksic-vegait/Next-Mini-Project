export default class ClientUtil {
  public static extractClientNames(clients: Array<any>): Array<any> {
    return clients.map((client) => {
      return { name: client.name, id: client.id };
    });
  }
}
