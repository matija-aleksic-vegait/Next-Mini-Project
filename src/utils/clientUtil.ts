export default class ClientUtil {
  public static extractClientNames(clients: Array<any>): Array<string> {
    return clients.map((client) => {
      return client.name;
    });
  }
}
