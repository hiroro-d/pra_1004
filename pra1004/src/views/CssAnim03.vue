<template>
  <div class="css__anim01">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv">
        <h2 class="mv__ttl">CSSアニメーション条件分岐</h2>
        <button @click="isShow = !isShow">Switch</button>
        <transition name="switchon">
          <div v-if="isShow" key="a" class="switch__contents">コンテンツ１</div>
          <div v-else key="b" class="switch__contents">コンテンツ２</div>
        </transition>
      </section>
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

#mv {
  display: block;
}

.mv__ttl {
  font-size: 4.6rem;
  margin: 0.5em 0;
}

button {
  margin-bottom: 2em;
}

.switch__contents {
  font-size: 4.2rem;
}

.switchon-enter-active,
.switchon-leave-active {
  transition: opacity 2500ms;
}

.switchon-leave-active {
  position: absolute; /*relativeがいらないのは、ブロックを残らないようにするため*/
}

.switchon-enter,
.switchon-leave-to {
  opacity: 0;
}

</style>
