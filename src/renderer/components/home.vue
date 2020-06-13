<template>
  <div class="home">

    <div class="main">
      <div class="table">
        <div class="title">公司排号公告</div>
        <div class="table-con">
          <div class="table-item">
            <table>
              <tr>
                <th width="124">序号</th>
                <th width="264">公司名称</th>
              </tr>
              <tr v-for="(item, index) in array1" :key="index">
                <td>{{index >= 9 ? index + 1 : '0' + (index+1)}}</td>
                <td>{{item.name}}</td>
              </tr>
            </table>
          </div>

          <div class="table-item">
            <table>
              <tr>
                <th width="124">序号</th>
                <th width="264">公司名称</th>
              </tr>
              <tr v-for="(item, index) in array2" :key="index">
                <td>{{index + half + 1}}</td>
                <td>{{item.name}}</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="btn-con">
          <button @click="editList">编辑</button>
          <button @click="reSort">随机排序</button>
          <button @click="printpage">打印本页</button>
          <button>
            <router-link :to="'/select/'+array.length">
              随机抽签
            </router-link>
          </button>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { result } from '../../data'

export default {
  name: 'Home',
  data () {
    return {
      array: result.list,
      array1: [],
      array2: [],
      half: 0
    }
  },
  mounted () {
    this.arrSort()
  },
  methods: {
    editList () {
      this.$router.push('edit')
    },
    reSort () {
      this.array = _.shuffle(this.array)
      this.arrSort()
    },
    arrSort () {
      this.half = Math.round(this.array.length / 2)
      this.array1 = this.array.slice(0, this.half)
      this.array2 = this.array.slice(this.half)
    },
    printpage () {
      window.print()
    }
  }
}
</script>
<style lang="scss">
</style>
