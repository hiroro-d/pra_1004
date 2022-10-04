<template>
  <div>
    <HeaderComp/>
    <main>
      <section id="mv">
        <h2 class="mv__ttl">算出プロパティとメソッド</h2>
        <ul>
          <li>算出プロパティは引数を持てない</li>
          <li>算出プロパティは取得用途（データの加工1（+）はするが、更新（=）はしない）</li>
          <li>算出プロパティの値はキャッシュされる</li>
        </ul>
        <button @click="upDate">更新</button>
        <h3>算出プロパティ：{{ computedData }}</h3>
        <h3>メソッド：{{ methodsData(message) }}</h3> <!--この書き方は絶対しない。勝手に動いてしまう。-->
        <h3>現在日時：{{ current }}</h3>
      </section>
    </main>
    <FooterComp/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: new Date().toLocaleString(),
      message: 'Hello World'
    }
  },
  computed: {
    computedData() {
      return Math.random(); //+ this.current;
    }
    //name: slimeと同じ
  },
  methods: {
    methodsData(m) {
      return Math.random() + m ;
    },
    upDate() {
      this.current = new Date().toLocaleString()
    }
  },
}
</script>


<style scoped>
#mv ul {
  list-style: disc;
  margin-bottom: 4rem;
}

#mv ul li {
  font-size: 1.8rem;
  margin-top: 0.5em;
}

h3 {
  font-size: 2.8rem;
  margin-bottom: 1em;
}
</style>