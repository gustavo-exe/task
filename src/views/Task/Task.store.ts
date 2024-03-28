import { createStore } from 'vuex'

export const storeTask = createStore({
  state() {
    return {
      tasks: [
        {
          title: 'Lorem',
          idStatus: 0,
          status: 'pendiente',
          statusColor: 'rgb(16 185 129)',
          caption:
            'Lorem, <b>  ipsum dolor sit amet </b> consectetur adipisicing elit. Dolorem tempora eligendi ab'
        }
      ]
    }
  },
  mutations: {
    addTask(state: any, task: any) {
      console.log(state)
      state.tasks.push(task)
    }
  }
})
