export default class UserUtil {
  public static extractUserNames(users: Array<any>): Array<string> {
    return users.map((user) => {
      return user.name;
    });
  }
}
