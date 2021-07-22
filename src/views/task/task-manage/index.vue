<template>
  <div class="p-4">
    <StatisticCard class="enter-y" />
    <TaskTable />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import StatisticCard from './components/StatisticCard.vue';
  import TaskTable from './components/taskTable.vue';

  export default defineComponent({
    components: {
      StatisticCard,
      TaskTable,
    },
    setup() {},
  });
</script>
