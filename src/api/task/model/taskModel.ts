import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description task列表的请求参数
 */
export type TaskParams = BasicPageParams;

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
export type TaskListPage = BasicFetchResult<TaskItem>;
