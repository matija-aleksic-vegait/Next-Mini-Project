export class TableUtil {
  public static letterExistsInList(char: string, list: Array<string>) {
    if (char.length > 1) throw Error("Char must be one letter");
    for (var i = 0; i < list.length; i++) {
      if (list[i].toLowerCase() === char.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
}
