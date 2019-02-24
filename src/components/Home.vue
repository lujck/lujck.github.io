<template>
  <div>
    <section class="wrap">
      <h3>天人合一</h3>
      <button v-on:click="onStartClick" class="btn">路由</button>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    onStartClick () {
      console.log('on item click')
      this.$router.push({
        name: 'Detail',
        params: {
          id: '1'
        }
      })
    }
  }
}
</script>

<style>
  .wrap{
    position: relative;
  }
  h3{
    margin: 34% auto;
    text-align: center;
  }
  .btn{
    padding: 0.15rem 0.5rem;
  }
</style>
