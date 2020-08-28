<!--
* @Description: 模块描述
* @Author: 作者
* @Date: 创建时间
* @LastEditTime: 修改时间
* @LastEditors: Please set LastEditors
-->
<template>
  <div class="wrapper to_color">
    <h2 id="he">颜色转换</h2>
    <el-input placeholder="#054C95" v-model="colorVal" class="input-with-select">
      <template slot="prepend">颜色值</template>
      <el-button @click="handleToColor" slot="append">转换</el-button>
    </el-input>
    <div class="tag_wrap">
        <span class="tag tips">输入示例(大小写不敏感):</span>
        <span 
          class="tag" 
          v-for="(item, index) in tagList" 
          :key="index" 
          :style="{'background-color': item.color}"
          @click="handleClick(item)"
        >
          {{item.name}}
        </span>
    </div>
    <table class="color_table">
      <tr>
        <td>格式</td>
        <td>转换结果</td>
        <td>预览</td>
      </tr>
      <tr v-for="item in toColorRes" :key="item.name">
        <td>{{item.name}}</td>
        <td @click="copyClick($event)">{{item.value}}</td>
        <td :style="{'background': item.color}"></td>
      </tr>
    </table>
    <h2>CSS颜色表</h2>
    <div class="tile mt-2">
        HTML 和 CSS 颜色规范中定义了 147 中颜色名（17 种标准颜色加 130 种其他颜色）。下面的表格中列出了所有这些颜色，以及它们的十六进制值。
        <br>
        17 种标准色是 aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red,
        silver,
        teal, white, yellow。
    </div>
    <div v-for="(item, index) in colorList" :key="item.name + index">
      <h2>{{item.name}}</h2>
      <table class="color_table">
        <tr>
          <td>颜色名</td>
          <td>预览</td>
          <td>HEX</td>
          <td>RGB</td>
          <td>HSL</td>
        </tr>
        <tr v-for="(value, idx) in item.value" :key="value[0] + idx">
          <td>{{value[0]}}</td>
          <td :style="{'background': value[1]}"></td>
          <td>{{value[1]}}</td>
          <td>{{value[2]}}</td>
          <td>{{value[3]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import toColor, { colorList } from "@/utils/toColor" 
export default {
  data() {
    return {
      select: "1",
      colorVal: "",
      colorList,
      toColorRes: toColor("#054C95"),
      tagList: [
        {name: "#707B7C", color: "#707B7C"},
        {name: "#AAF7DC6F", color: "rgba(247,220,111,0.667)"},
        {name: "rgb(72,201,176)", color: "rgb(72,201,176)"},
        {name: "rgba(241,148,138,0.5)", color: "rgba(241,148,138,0.5)"},
        {name: "hsl(204,70%,63%)", color: "#5FAEE3"},
      ]
    };
  },
  mounted() {
    console.log()
  },
  methods: {
    copyClick(e) {
      window.getSelection().selectAllChildren(e.target);
      document.execCommand("copy");  
    },
    handleClick(item) {
      this.colorVal = item.color;
      this.toColorRes = toColor(item.color);
    },
    handleToColor() {
      if(!this.colorVal) {
        this.$message.error("请输入颜色值！");
        return;
      }
      this.toColorRes = toColor(this.colorVal);
    }
  }
  
};
</script>
<style lang="less" scoped>
.to_color{
  h2{
    margin-bottom: 20px;
  }
  /deep/ .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .tag_wrap{
    display: flex;
    margin: 10px 0 20px 0;
  }
  .tag{
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    white-space: nowrap;
    margin-right: 15px;
    cursor: pointer;
  }
  .tips{
    cursor: default;
    color: #565656;
    font-weight: 600;
    padding-left: 0;
    margin-right: 1em;
    background-color: transparent;
  }
  .tile{
    padding: 10px 16px;
    background: #f5f5f5;
    font-size: 14px;
    line-height: 32px;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .color_table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    word-break: break-all;
    font-size: 14px;
    margin-bottom: 10px;
    td{
      border: 1px solid #dbdbdb;
      padding: 5px 12px;
      width: 20%;
    }
  }
}
</style>