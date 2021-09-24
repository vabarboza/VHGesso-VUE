<template>
  <div v-if="show" class="alert alert-success alert-dismissible fade show animated fadeInRight" role="alert" >
    E-Mail de contato enviado com sucesso!
    <button @click="close()" type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span id="icon" aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    close() {
      this.show = false
    },
    showToast() {
      this.show = true;
      setTimeout(() => {
        this.close()
      }, 5000)
    }
  }
}
</script>

<style scoped>
.alert {
  top: 80px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
  position: fixed;
  background-color: #388e3c;
  color: white;
}
.close {
  color: white;
}
#icon {
  color: white;
}
</style>
