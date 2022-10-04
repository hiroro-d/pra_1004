<template>
  <div>
    <HeaderComp/>
    <main>
      <section id="mv">
        <h2 class="mv__ttl">動的コンポーネント</h2>
        <div class="btn__wrapper">
          <button @click="current = 'CompA'">CompA</button>
          <button @click="current = 'CompB'">CompB</button>
          <button @click="current = 'CompC'">CompC</button>
        </div>
        <transition name="slide" appear mode="out-in">
          <CompA v-if="current === 'CompA'"/>
          <CompB v-else-if="current === 'CompB'"/>
          <CompC v-else/>
        </transition>
      </section>
      
    </main>
    <FooterComp/>
  </div>
</template>

<script>
import CompA from "@/components/CompA.vue";
import CompB from "@/components/CompB.vue";
import CompC from "@/components/CompC.vue";

export default {
  data() {
    return {
      current: "CompA"
    }
  },

  components: {
    CompA,
    CompB,
    CompC,
  },
  methods: {

  }
}

</script>


<style scoped>
.mv__ttl {
  font-size: 3.2rem;
  margin-bottom: 2em;
}

.btn__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.slide-enter-active {
  animation: slideIn 1s;
}
.slide-leave-active {
  animation: slideIn 1s reverse;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>