<template>
  <BasicModal v-bind="$attrs" :title="getTitle" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #add="{ field }">
        <a-button v-if="Number(field) === 0" @click="add">+</a-button>
        <a-button v-if="field > 0" @click="del(field)">-</a-button>
      </template>
    </BasicForm>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, unref, computed } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal/index';
  import { taskFormSchema } from '../task.data';

  export default defineComponent({
    name: 'TaskModal',
    components: { BasicForm, BasicModal },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [
        registerForm,
        { appendSchemaByField, removeSchemaByFiled, validate, resetFields, setFieldsValue },
      ] = useForm({
        schemas: taskFormSchema,
        labelWidth: 100,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => {
        return unref(isUpdate) ? '新增任务' : '编辑任务';
      });

      async function handleSubmit() {
        try {
          const data = await validate();
          setModalProps({ confirmLoading: true });
          console.log(data);
          closeModal();
          emit('success');
        } catch (e) {
          console.log(e);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      const phoneFieldIndex = ref(1);

      function add() {
        appendSchemaByField(
          {
            field: `phone-${phoneFieldIndex.value}`,
            component: 'Input',
            label: '',
            colProps: {
              span: 8,
            },
            required: true,
          },
          ''
        );
        appendSchemaByField(
          {
            field: `${phoneFieldIndex.value}`,
            component: 'Input',
            label: ' ',
            colProps: {
              span: 8,
            },
            slot: 'add',
          },
          ''
        );
        phoneFieldIndex.value++;
      }

      function del(field) {
        removeSchemaByFiled([`phone-${field}`, `${field}`]);
        phoneFieldIndex.value--;
      }

      return { registerForm, registerModal, getTitle, handleSubmit, add, del };
    },
  });
</script>
