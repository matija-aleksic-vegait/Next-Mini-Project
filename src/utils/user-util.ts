export class UserUtil {
  public static extractUserNames(users: Array<any>): Array<any> {
    return users.map((user) => {
      return { name: user.name, id: user.id };
    });
  }
}
