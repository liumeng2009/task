<template>
  <BasicTable
    title="基础示例"
    titleHelpMessage="温馨提醒"
    class="mt-4"
    :columns="columns"
    :dataSource="data"
    :canResize="resize"
    :loading="loading"
    :bordered="border"
    showTableSetting
    :pagination="pagination"
  >
    <template #toolbar>
      <a-button type="primary" @click="taskAdd">
        {{ '新建任务' }}
      </a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getTaskList } from '/@/api/task/task';
  import { getTaskTableColumns } from '../tableData';
  import { getTaskListModel } from '/@/api/task/model/taskModel';

  interface State {
    data: getTaskListModel;
    loading: boolean;
    border: boolean;
    resize: boolean;
    pagination: boolean;
  }

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const state = reactive<State>({
        data: [],
        loading: false,
        border: true,
        resize: true,
        pagination: true,
      });

      (async () => {
        state.loading = true;
        const taskList = await getTaskList();
        state.data = [...taskList.items];
        state.loading = false;
      })();

      return {
        columns: getTaskTableColumns(),
        ...toRefs(state),
      };
    },
  });
</script>
