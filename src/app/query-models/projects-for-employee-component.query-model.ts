export interface ProjectsForEmployeeComponentQueryModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: string;
  readonly dueDate: string;
  readonly tasks: {
    readonly name: string;
    readonly description: string;
    readonly startDate: number;
    readonly dueDate: number;
    readonly assigneeIds: string[];
    readonly checkList: {
      readonly name: string;
      readonly isDone: boolean;
      readonly id: string;
    }[];
    readonly projectId: string;
    readonly id: string;
  }[];
  readonly id: string;
  readonly percentage: number;
}
