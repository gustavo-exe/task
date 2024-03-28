<template>
  <section class="flex justify-end pb-3 border-b border-gray-300">
    <button
      class="px-4 py-2 rounded-md mt-6 border border-blue-400 hover:border-blue-600 flex gap-1"
    >
      <Plus />
      Nueva tarea
    </button>
  </section>

  <div class="mt-4">
    <article v-for="(task, index) in tasks" :key="index" class="shadow-sm rounded-xl p-4">
      <header class="flex justify-between gap-5">
        <h1 class="text-2xl mb-2">
          {{ task.title }}
        </h1>

        <div>
          <p
            :style="{ backgroundColor: task.statusColor }"
            class="px-2 py-1 font-bold rounded-2xl text-[12px] min-w-7 w-full uppercase"
          >
            {{ task.status }}
          </p>
        </div>
      </header>

      <div v-html="task.caption"></div>
    </article>
  </div>
</template>

<script setup>
import { Plus } from '@iconoir/vue'
</script>
<script>
import { mapState } from 'vuex'
import { storeTask } from './Task.store'

export default {
  computed: {
    ...mapState({
      tasks: (state) => state
    })
  },
  store: storeTask
}
</script>
