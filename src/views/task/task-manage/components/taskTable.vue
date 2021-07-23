<template>
  <BasicTable class="mt-4" @register="registerTable">
    <template #tableTitle>
      <a-button type="primary" @click="handleTaskAdd">
        {{ '新建任务' }}
      </a-button>
    </template>
    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            label: '编辑',
            icon: 'ic:outline-edit',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: '删除',
            icon: 'ic:outline-delete-outline',
            onClick: handleDelete.bind(null, record),
          },
        ]"
      />
    </template>
  </BasicTable>
  <TaskModal @register="registerModal" @success="handleSuccess" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { getTaskListApi, deleteTaskApi } from '/@/api/task/task';
  import { taskTableColumns } from '../task.data';
  import { Modal, message } from 'ant-design-vue';
  import TaskModal from './TaskModal.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, TaskModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        api: getTaskListApi,
        bordered: true,
        columns: taskTableColumns,
        tableSetting: {
          redo: true,
          fullScreen: false,
          size: false,
          setting: false,
        },
        showTableSetting: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerModal, { openModal }] = useModal();

      function handleTaskAdd() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        Modal.confirm({
          title: '确认删除',
          content: '您确定要删除这个任务吗？',
          onOk: () => {
            return deleteTaskApi(record.id).then(() => {
              message.success({
                content: '删除成功！',
              });
              reload();
            });
          },
        });
      }

      function handleSuccess() {
        console.log('成功了');
      }

      return {
        registerTable,
        registerModal,
        handleTaskAdd,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
