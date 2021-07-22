import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const task: AppRouteModule = {
  path: '/task',
  name: 'Task',
  component: LAYOUT,
  redirect: '/task/index',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('routes.task.task'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'TaskIndex',
      component: () => import('/@/views/task/task-manage/index.vue'),
      meta: {
        title: t('routes.task.list'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'monitor',
      name: 'TaskMonitor',
      component: () => import('/@/views/task/task-monitor/index.vue'),
      meta: {
        title: t('routes.task.monitor'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default task;
