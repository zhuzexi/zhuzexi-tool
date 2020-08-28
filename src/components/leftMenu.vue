<!--
* @Description: 模块描述
* @Author: 作者
* @Date: 创建时间
* @LastEditTime: 修改时间
* @LastEditors: Please set LastEditors
-->
<template>
  <div class="left_menu">
    <el-menu
      :default-active="defaultActive"
      router
      class="el-menu-vertical-demo"
      >
        <el-menu-item v-for="(item, index) in menuList" :key="item.id + index" :index="item.path">
          <template slot="title">
            <i size="20" :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>   
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{
        name: "首页",
        path: "/",
        icon: "el-icon-s-home",
        id: 1
      }, {
        name: "颜色转换",
        path: "/tocolor",
        icon: "el-icon-refresh",
        id: 2
      }],
      defaultActive: "/"
    };
  },
  mounted() {
    console.log(this.$route)
    this.defaultActive = window.location.href.split("#").pop();
  },
  methods: {
    //
  }
};
</script>
<style lang="less" scoped>
  .left_menu{
    .el-menu{
      background: none;
      .el-menu-item{
        font-size: 18px;
        span{
          padding-left: 10px;
        }
      }
      .el-menu-item.is-active{
        background: rgba(0,0,0,.05);
        color: #303133;
      }
      .el-menu-item:focus, .el-menu-item:hover{
        background: rgba(0,0,0,.05);
      }
    }
  }
  // 
</style>