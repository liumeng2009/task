import { PaginationResult } from '/@/api/model/baseModel';

export interface TaskStatistic {
  tasksCount: Number;
  urmessageCount: Number;
  urcallCount: Number;
}

export interface TaskItem {
  id: String;
  taskName: String;
  monitorName: String;
  phones: String;
  startTime: String;
  endTime: String;
  type: String;
  createData: String;
  unReadMessage: Number;
  unReadCall: Number;
}

/**
 * @description: 返回任务列表模型
 */
export type getTaskListModel = TaskItem[];

/**
 * @description 分页的任务列表模型
 */
export interface TaskListPage extends PaginationResult {
  items: getTaskListModel;
}
