<!--
 * @Author: Jackie
 * @Date: 2021-10-25 14:01:56
 * @LastEditTime: 2021-10-25 15:32:18
 * @LastEditors: Jackie
 * @Description: file content
 * @version: 
-->
<template>
  <div>
    测试-{{ $t("Common.test") }}
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  font-size: 20px;
}
</style>