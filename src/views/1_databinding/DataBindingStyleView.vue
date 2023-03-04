<template>
  <div>
    <div style="color: red; font-size: 30px">하이요</div>
    <p :style="style">하이하이요</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      style: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  method: {}
}
</script>
