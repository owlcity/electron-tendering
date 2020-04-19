<template>
  <div class="home">
    <div class="main">
      <div class="table">
        <div class="title">公司列表</div>
        <div class="table-con">
          <div class="table-item">
            <table>
              <tr>
                <th width="124">序号ID</th>
                <th width="264">公司名称</th>
                <th width="200">操作</th>
              </tr>
              <tr v-for="item in array" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td><el-button class="button" size="small" type="danger" round @click="del(item.id)">删除</el-button></td>
              </tr>
            </table>
          </div>

        </div>

        <div class="btn-con">
          <router-link to="/">
            <button style="background: #e5a147">返回</button>
          </router-link>
          <button @click="add">添加</button>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { result, addJson, deleteJson } from '../../data'

export default {
  name: 'Home',
  data () {
    return {
      array: result.list,
    }
  },
  mounted () {

  },
  methods: {
    del (id) {
      this.$confirm('删除此条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteJson(id)
          // 重新载入数据
          location.reload()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    add () {
      this.$prompt('请输入', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w\W]/,
          inputErrorMessage: '内容不能为空'
        }).then(({ value }) => {
          addJson({
            id: this.array.length + 1,
            name: value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    }
  }
}
</script>
<style lang="scss" scoped>
.table {
  justify-content: center;
}
.table-con {
  width: 428px;
  height: 428px;
  overflow-y: scroll;
}
.button {
  color: #ffffff!important;
}
</style>
