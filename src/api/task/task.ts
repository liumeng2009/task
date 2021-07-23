import { defHttp } from '/@/utils/http/axios';
import { TaskStatistic, TaskListPage, TaskItem, TaskParams } from './model/taskModel';

enum Api {
  GetTaskList = '/Tasks/GetPageList',
  GetTaskStatistic = '/Tasks/GetDataStatistics',
  DeleteTask = '/Tasks/Delete',
  EditTask = '/Tasks/Edit',
}

const withToken = false;

/**
 * @description: 获取任务列表
 */
export const getTaskListApi = (params: TaskParams) => {
  return defHttp.get<TaskListPage>(
    {
      url: Api.GetTaskList,
      params,
    },
    { withToken }
  );
};

/**
 * @description: 获取任务数据概述
 */
export const getTaskStatisticApi = () => {
  return defHttp.get<TaskStatistic>({ url: Api.GetTaskStatistic }, { withToken });
};

export const deleteTaskApi = (id: string) => {
  return defHttp.post<string>({ url: Api.DeleteTask + '?id=' + id }, { withToken });
};

export const editTaskApi = (item: TaskItem) => {
  return defHttp.post<string>({ url: Api.EditTask, data: item }, { withToken });
};
