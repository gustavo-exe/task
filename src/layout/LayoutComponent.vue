<template>
  <header class="px-4 py-3 vmb-6 border-b border-gray-300 flex justify-between">
    <div class="flex items-center gap-2">
      <TaskList />
      <h1 class="flex-1 text-2xl">Task</h1>
    </div>

    <div>
      <article class="bg-purple-200 rounded-full p-2 flex justify-center items-center select-none">
        <span class="font-bold">AD</span>
      </article>
    </div>
  </header>

  <section class="px-4 lg:px-0 max-w-[1024px] mx-auto">
    <RouterView />
  </section>
</template>

<script setup>
import { TaskList } from '@iconoir/vue'
import { RouterView } from 'vue-router'
</script>
