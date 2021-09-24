<template>
  <div id="nav"></div>
  <toast />
  <router-view />
</template>

<script>
import Toast from "./components/Toast.vue"
export default {
  components: {
    Toast
  }
}
</script>