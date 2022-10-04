<template>
  <div class="css__anim01">
    <HeaderComp></HeaderComp>
    <main :class="{bgOn: isShow}">
      <section id="mv">
        <button @click="fadeAnim">Fade In/Out</button>
        <transition name="test">
          <h1 v-show="isShow" class="mv__ttl">CSS Animation01</h1>
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
      isShow: false
    }
  },
  methods: {
    fadeAnim() {
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style scoped>
/* .test {
  color: aqua;
} */
button {
  position: relative;
}
#mv {
  position: relative;
  background: url(/public/images/menu13.jpg);
  background-size: cover;
}
#mv::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-color: #FFF;
  opacity: 1;
  transition: opacity 2500ms ease-out;
}
.bgOn #mv::before {
  opacity: 0;
}
.mv__ttl {
  font-size: 4.6rem;
  margin: 0.5em 0;
}


.test-enter-active,
.test-leave-active {
  /*フェードイン アウト中 */
  transition: opacity 2500ms ease-out;
}

.test-enter {
  /*フェードインの初期状態 */
  opacity: 0;
}
.test-enter-to {
  /*フェードインの終了状態 */
  opacity: 1;
}

.test-leave {
  /*フェードアウトの初期状態 */
  opacity: 1;
}
.test-leave-to {
  /*フェードアウトの終了状態 */
  opacity: 0;
}

</style>
