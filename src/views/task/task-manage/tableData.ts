import { BasicColumn } from '/@/components/Table/src/types/table';

export function getTaskTableColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '任务名称',
      dataIndex: 'taskName',
      width: 150,
    },
    {
      title: '监控对象',
      dataIndex: 'monitorName',
    },
    {
      title: '电话',
      dataIndex: 'phones',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      width: 150,
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: 150,
    },
    {
      title: '创建时间',
      dataIndex: 'createDate',
      width: 150,
    },
    {
      title: '未读消息',
      dataIndex: 'unReadMessage',
    },
    {
      title: '未接听电话',
      dataIndex: 'unReadCall',
    },
  ];
}
