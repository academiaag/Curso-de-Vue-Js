const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Testando Vue Js em Off Mano')
      return {
        message
      }
    }
  }).mount('#app')