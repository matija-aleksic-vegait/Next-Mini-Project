import TableConstants from "@/constants/tableConstants";

export class ProjectsUtil {
  public static filterProjectsStartWithChar(
    char: string,
    projectsList: Array<any>
  ) {
    return projectsList.filter(
      (project) => project.name.charAt(0).toLowerCase() === char.toLowerCase()
    );
  }

  public static getSetOfProjectsForPage(
    pageIndex: number,
    projectsList: Array<any>
  ): Array<any> {
    return projectsList.slice(
      (pageIndex - 1) * TableConstants.elementsPerPage,
      pageIndex * TableConstants.elementsPerPage
    );
  }
}
