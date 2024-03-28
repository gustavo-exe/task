<template>
  <h1 class="text-2xl mt-4 pb-5">New taks</h1>

  <form class="grid gap-3" @submit.prevent="handleSubmit">
    <fieldset class="input-group">
      <label class="input-label">Titulo</label>
      <div class="input-default">
        <input v-model="form.title" type="text" name="title" />
      </div>
    </fieldset>

    <div class="bg-[#FBFBFB] overflow-hidden">
      <QuillEditor
        v-model:content="form.caption"
        contentType="html"
        :toolbar="['bold', 'italic', 'underline']"
        theme="snow"
      />
    </div>

    <button
      class="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-6 w-fit"
      type="submit"
    >
      Guardar
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
import { useRouter } from 'vue-router'

const form = ref({
  title: '',
  caption: ''
})

const store = useStore()
const router = useRouter()

function handleSubmit() {
  store.commit('addTask', {
    title: form.value.title,
    caption: form.value.caption,
    idStatus: 0,
    status: 'PENDIENTE',
    statusColor: 'rgb(16 185 129)'
  })

  form.value.title = ''
  form.value.caption = ''

  router.push({ path: '/task' })
}
</script>
