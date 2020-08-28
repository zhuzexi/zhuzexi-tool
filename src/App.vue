<template>
  <div id="app">
    <el-header class="header" v-text="$route.meta.title"></el-header>
    <div class="main">
      <div class="left">
        <left-menu></left-menu>
      </div>
       <div class="content">
         <router-view />
        <el-footer class="footer">2017 ©上海德拓信息技术股份有限公司 西南交付部</el-footer>
      </div>  
    </div>
  </div>
</template>

<script>
import leftMenu from "@/components/leftMenu"
export default {
  name: 'App',
  components: {
    leftMenu
  }
}
</script>

<style>
#app{
  height: 100vh;
}
.header{
  display: flex;
  align-items: center;
  font-size: 24px;
  background: #0e0e0f;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.main{
  display: flex;
  height: 100%;
  padding-top: 60px;
  overflow: hidden;
}
.left{
  /* width: 160px; */
  height: 100%;
  background: #f9f9fa;
  overflow: auto;
}
.main .content{
  flex: 1;
  height: 100%;
  padding: 15px;
  padding-bottom: 0;
  background: #f1f3f5;
  overflow: auto;
}
.main .footer{
  text-align: center;
  line-height: 60px;
  background: #fff;
  margin-top: 15px;
}
/* .sider{
  display: flex;
}
.sider .left{
  width: 160px;
  background: #f9f9fa;
}
.sider .content{
  flex: 1;
  padding: 15px;
  background: #f1f3f5;
} */
.wrapper{
  padding: 20px;
  min-height: 100%;
  background: #fff;
}
</style>
