<template>
  <div class="md:flex">
    <Card
      size="small"
      :loading="loading"
      :title="'总监控任务数'"
      class="md:w-1/3 w-full md:!mt-0 !mt-4 md:!mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag :color="'purple'">单位：条</Tag>
      </template>
      <div class="flex justify-between px-4 py-4">
        <CountTo :startVal="1" :endVal="tasksCount" class="text-2xl" />
        <Icon :icon="'document|svg'" :size="40" />
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      :title="'总未读短信消息数'"
      class="md:w-1/3 w-full md:!mt-0 !mt-4 md:!mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag :color="'green'">单位：条</Tag>
      </template>
      <div class="flex justify-between px-4 py-4">
        <CountTo :startVal="1" :endVal="urmessageCount" class="text-2xl" />
        <Icon :icon="'sms|svg'" :size="40" />
      </div>
    </Card>
    <Card
      size="small"
      :loading="loading"
      :title="'总未读语音消息数'"
      class="md:w-1/3 w-full md:!mt-0 !mt-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag :color="'blue'">单位：条</Tag>
      </template>
      <div class="flex justify-between px-4 py-4">
        <CountTo :startVal="1" :endVal="urcallCount" class="text-2xl" />
        <Icon :icon="'cell_phone|svg'" :size="40" />
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';

  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Card, Tag } from 'ant-design-vue';
  import { TaskStatistic } from '/@/api/task/model/taskModel';
  import { getTaskStatistic } from '/@/api/task/task';

  interface State {
    loading: Boolean;
  }

  export default defineComponent({
    components: { CountTo, Card, Icon, Tag },
    setup() {
      let statistic = reactive<TaskStatistic>({
        tasksCount: 0,
        urmessageCount: 0,
        urcallCount: 0,
      });
      const state = reactive<State>({
        loading: true,
      });

      (async () => {
        state.loading = true;
        const taskStatistic = await getTaskStatistic();
        statistic.tasksCount = taskStatistic.tasksCount;
        statistic.urmessageCount = taskStatistic.urmessageCount;
        statistic.urcallCount = taskStatistic.urcallCount;
        state.loading = false;
      })();

      return { ...toRefs(statistic), ...toRefs(state) };
    },
  });
</script>
