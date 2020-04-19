<template>
  <div class="home">
    <div class="main">
      <div class="table">
        <div class="title">随机抽签</div>
        <div class="select-number">
          {{ number }}
        </div>
        <div class="btn-con">
          <router-link to="/">
            <button style="background: #e5a147">返回</button>
          </router-link>

          <button v-if="begin_flag" style="background: #6bbf76" @click="startNum">开始抽签</button>
          <button v-else style="filter:grayscale(1);">抽签中...</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      choose: 0,
      timer: null,
      begin_flag: true,
      repeat: true,
      arr: [],
      number: '号码'
    }
  },
  mounted () {
    this.choose = this.$route.params.number
    console.log(this.choose)
    for(var i=1; i <= this.choose; i++){
      this.arr.push(i)  // 循环录入数组
    }

  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    startNum () {
      if (this.begin_flag){
        this.timer= setInterval(this.rd, 60);
        this.begin_flag = false;
      }
      setTimeout(() => {
        this.endNum()
      }, 3000)
    },
    endNum () {
      clearInterval(this.timer);
      this.begin_flag = true;
    },
    rd () {
      var num = this.arr[Math.floor(Math.random() * this.choose)];  //获得的随机数
      var hundred,figures,theunit;
      // hundred = Math.floor(num/100);
      figures = Math.floor(num%100/10);
      theunit = Math.floor(num%10);
      this.number = `${figures}${theunit}`
    }
  }
}
</script>
<style lang="scss">
.table {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
</style>
