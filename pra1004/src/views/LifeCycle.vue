<template>
  <div>
    <HeaderComp/>
    <main>
      <section id="mv">
        <h1 class="mv-ttl">ライフサイクル</h1>
        <h2>{{ name }}</h2>
        <button @click="name = !name">変更</button>
        <button @click="dataDestroy">破棄</button>
      </section>
    </main>
    <FooterComp/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: false
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    dataDestroy() {
      this.$destroy();
    }
  }
}
</script>

<style scoped>
button {
  margin-top: 4rem;
}

h2 {
  margin-top: 4rem;
}
</style>