import { defHttp } from '/@/utils/http/axios';
import { TaskStatistic, TaskListPage } from './model/taskModel';

enum Api {
  GetTaskList = '/Tasks/GetPageList',
  GetTaskStatistic = '/Tasks/GetDataStatistics',
}

const withToken = false;

/**
 * @description: 获取任务列表
 */

export const getTaskList = () => {
  return defHttp.get<TaskListPage>({ url: Api.GetTaskList }, { withToken });
};

export const getTaskStatistic = () => {
  return defHttp.get<TaskStatistic>({ url: Api.GetTaskStatistic }, { withToken });
};
