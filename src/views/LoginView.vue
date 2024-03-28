<template>
  <div class="min-h-screen flex justify-center items-center">
    <form class="px-4 py-6 w-full mx-4 md:mx-0 md:max-w-96 border border-gray-300 rounded-lg">
      <div class="flex items-center gap-2 mb-6 pb-3 border-b border-gray-300">
        <TaskList />
        <h1 class="flex-1 text-2xl">Task</h1>
      </div>

      <fieldset class="input-group mb-4">
        <label class="input-label">Email</label>
        <div class="input-default">
          <input type="email" inputmode="email" placeholder="task@mail.com" />
        </div>
      </fieldset>

      <fieldset class="input-group">
        <label class="input-label">Contraseña</label>
        <div class="input-default">
          <input type="password" />
        </div>
      </fieldset>

      <RouterLink to="/">
        <button
          class="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
          type="submit"
        >
          Ingresar
        </button>
      </RouterLink>
    </form>
  </div>
</template>

<script setup>
import { TaskList } from '@iconoir/vue'
import { RouterLink } from 'vue-router'
</script>
