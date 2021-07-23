import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const taskTableColumns: BasicColumn[] = [
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

export const taskFormSchema: FormSchema[] = [
  {
    field: 'taskName',
    component: 'Input',
    label: '任务名称',
    required: true,
  },
  {
    field: 'monitorName',
    component: 'Input',
    label: '监听对象',
    required: true,
  },
  {
    field: 'phone-0',
    component: 'Input',
    label: '电话号码',
    required: true,
  },
  {
    field: '0',
    component: 'Input',
    label: ' ',
    required: true,
    slot: 'add',
  },
  {
    field: 'startTime',
    component: 'RangePicker',
    label: '时间区间',
    required: true,
  },
  {
    field: 'type',
    component: 'RadioGroup',
    label: '监控类型',
    required: true,
  },
];
