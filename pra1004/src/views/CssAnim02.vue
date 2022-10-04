<template>
  <div class="css__anim01">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv">
        <button @click="anim">Let's Anim!</button>
        <transition name="ttl">
          <h1 class="mv__ttl" v-show="isAnim === true">カスタムトランジションクラス(Animate.css編)</h1>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounceInUp"
          leave-active-class="animate__animated animate__bounceOutDown"
        >
          <div v-show="isAnim" class="popBox">
            <h2 class="popBox__ttl">ポップアップ</h2>
            <p><img src="/images/menu12.jpg" alt=""></p>
          </div>
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
      isAnim: false
    }
  },
  methods: {
    anim() {
      this.isAnim = !this.isAnim;
    }
  }
}
</script>

<style scoped>

.mv__ttl {
  font-size: 4.6rem;
  margin: 0.5em 0;
}
.popBox {
  width: 50vw;
  height: 50vh;
  border: solid 1px #CCC;
  border-radius: 10px;
  background-color: #FFF;
  padding: 40px;
  margin: auto;
  box-shadow: 4px 4px 16px 4px rgb(0 0 0 / 10%);
}
.popBox__ttl {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 2rem;
}

.mv__ttl {
  animation: zoomInDown;
  animation-duration: 2s;
}
</style>
