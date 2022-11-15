<!-- <one-tree-select :tableList="[
        { label: '学生姓名', key: 'name', span: '8' },
        { label: '学校名称', key: 'school', span: '8' },
        { label: '学籍号', key: 'num', span: '8' },
        { label: '年级', key: 'grade', span: '12' },
        { label: '班级', key: 'class', span: '12' },
        { label: '备注', key: 'remark', span: '24' }
      ]"  :tableForm="[]"/> -->


## 基本用法

适用广泛的基础单选

::: demo 适用广泛的基础单选
```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
  }
</script>
```
:::