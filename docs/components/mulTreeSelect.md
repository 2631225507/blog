## 基础用法

### 下拉多选-父子关联

<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        :checkStrictly="false"
        :childCascade="false"
        @getValue="getValue($event)"/>
</template>

<script>
export default {
    data() {
        return {
            ids :'',
            ids1:'',
            ids2 :'',
            ids3:'',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '手册',
                children: [{
                  id :'111',
                  unitName: '一致',
                  children:[]
                }]
              },{
                id :'345',
                unitName: '文档',
                children: [{
                  id :'467',
                  unitName: '线上',
                  children:[]
                }]
              }]
            },
            {
              id :'22',
              unitName: '设计模式',
              children: [{
                id :'222',
                unitName: '工厂',
                children: [{
                  id :'3333',
                  unitName: '代理',
                  children:[]
                }]
              }]
            }],
            dataDefaultProps:{
                value: 'id', // ID字段名
                label: 'unitName', // 显示名称
                children: 'children', // 子级字段名
            }
        }
    },
    methods:{
      getValue(ids) {
        this.ids = ids
      },
      getValue1(ids1) {
        this.ids1 = ids1
      },
      getValue2(ids2) {
        this.ids2 = ids2
      },
      getValue3(ids3) {
        this.ids3 = ids3
      }
    }
}
</script>

<demo-block>

```vue
<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        :checkStrictly="false"
        :childCascade="false"
        @getValue="getValue($event)"/>
</template>

<script>
export default {
    data() {
        return {
            ids :'',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '手册',
                children: [{
                  id :'111',
                  unitName: '一致',
                  children:[]
                }]
              },{
                id :'345',
                unitName: '文档',
                children: [{
                  id :'467',
                  unitName: '线上',
                  children:[]
                }]
              }]
            },
            {
              id :'22',
              unitName: '设计模式',
              children: [{
                id :'222',
                unitName: '工厂',
                children: [{
                  id :'3333',
                  unitName: '代理',
                  children:[]
                }]
              }]
            }],
            dataDefaultProps:{
                value: 'id', // ID字段名
                label: 'unitName', // 显示名称
                children: 'children', // 子级字段名
            }
        }
    },
    methods:{
      getValue(ids) {
        this.ids = ids
      }
    }
}
</script>
```

</demo-block>


### 下拉多选-父子不关联

<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        :checkStrictly="true"
        :childCascade="false"
        @getValue="getValue2($event)"/>
</template>

<demo-block>

```vue
<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        :checkStrictly="true"
        :childCascade="false"
        @getValue="getValue($event)"/>
</template>

<script>
export default {
    data() {
        return {
            ids :'',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '手册',
                children: [{
                  id :'111',
                  unitName: '一致',
                  children:[]
                }]
              },{
                id :'345',
                unitName: '文档',
                children: [{
                  id :'467',
                  unitName: '线上',
                  children:[]
                }]
              }]
            },
            {
              id :'22',
              unitName: '设计模式',
              children: [{
                id :'222',
                unitName: '工厂',
                children: [{
                  id :'3333',
                  unitName: '代理',
                  children:[]
                }]
              }]
            }],
            dataDefaultProps:{
                value: 'id', // ID字段名
                label: 'unitName', // 显示名称
                children: 'children', // 子级字段名
            }
        }
    },
    methods:{
      getValue(ids) {
        this.ids = ids
      }
    }
}
</script>
```

</demo-block>



### 下拉多选-父联动子，子不联动父
<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids1"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        @getValue="getValue1($event)"/>
</template>

<demo-block>

```vue
<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        @getValue="getValue($event)"/>
</template>

<script>
export default {
    data() {
        return {
            ids :'1',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '手册',
                children: [{
                  id :'111',
                  unitName: '一致',
                  children:[]
                }]
              },{
                id :'345',
                unitName: '文档',
                children: [{
                  id :'467',
                  unitName: '线上',
                  children:[]
                }]
              }]
            },
            {
              id :'22',
              unitName: '设计模式',
              children: [{
                id :'222',
                unitName: '工厂',
                children: [{
                  id :'3333',
                  unitName: '代理',
                  children:[]
                }]
              }]
            }],
            dataDefaultProps:{
                value: 'id', // ID字段名
                label: 'unitName', // 显示名称
                children: 'children', // 子级字段名
            }
        }
    },
    methods:{
      getValue(ids) {
        this.ids = ids
      }
    }
}
</script>
```

</demo-block>


### 下拉多选-子联动父，父不联动子
<template>
    <one-multiple-tree-select
        style="margin-top:10px"
        ref="mulTreeSelect"
        :value="ids3"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        type="2"
        @getValue="getValue3($event)"/>
</template>


### Attributes

|    属性     |     说明     |  类型   | 默认值 |
| :---------: | :----------: | :-----: | :----: |
|    props    |    配置项    | object  |   []   |
|   options   | 选项列表数据 |  array  |   {}   |
|    value    |   默认选中   | string  |   -    |
|  clearable  |  是否可清空  | boolean |  true  |
|  disabled   |   是否禁用   | boolean | false  |
| placeholder |   占位符号   | string  |   -    |
|  accordion  |   是否收起   | boolean | false  |

### Options Attributes

|   参数   |                  说明                  |  类型  | 默认值 |
| :------: | :------------------------------------: | :----: | :----: |
|  value   |   指定选项的值为选项对象的某个属性值   | string |   —    |
|  label   |   指定选项标签为选项对象的某个属性值   | string |   —    |
| children | 指定选项的子选项为选项对象的某个属性值 | string |   —    |
| disabled |  指定选项的禁用为选项对象的某个属性值  | string |   —    |

### Props Attributes

|   参数   |     说明     |  类型  |  默认值  |
| :------: | :----------: | :----: | :------: |
|  label   |  文本配置项  | string |  label   |
|  value   |   id配置项   | string |    Id    |
| children | 子节点配置项 | string | children |

### Events

| 事件名称 | 说明               | 回调参数     |
| :------- | :----------------- | :----------- |
| getValue | 选中节点变化时触发 | 当前选中节点 |

## 组件源码

组件名称: one-tree-select


<demo-block>

```vue
<template>
  <el-select
    ref="elSelect"
    :value="valueTitle"
    :disabled="disabled"
    :clearable="clearable"
    :placeholder="placeholder"
    @clear="clearHandle"
  >
    <el-option :value="valueTitle" :label="valueTitle" class="options">
      <el-tree
        id="tree-option"
        ref="selectTree"
        :props="props"
        :data="options"
        :accordion="accordion"
        :node-key="props.value"
        :default-expanded-keys="defaultExpandedKey"
        @node-click="handleNodeClick"
      >
      </el-tree>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'one-tree-select',
  props: {
    // 配置项
    props: {
      type: Object,
      default: () => {
        return {
          value: 'id', // ID字段名
          label: 'title', // 显示名称
          children: 'children', // 子级字段名
        }
      },
    },
    // 选项列表数据(树形结构的对象数组)
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 下拉初始值
    value: {
      type: String,
      default: '',
    },
    // 可清空选项
    clearable: {
      type: Boolean,
      default: true,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 占位符号
    placeholder: {
      type: String,
      default: '',
    },
    // 是否收起
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valueTitle: '', // 下拉框显示名称
      valueId: null, // 初始Id
      defaultExpandedKey: [], // 默认展开节点数组
    }
  },
  mounted() {
    this.valueId = this.value, // 初始值
    this.initHandle()
  },
  methods: {
    // 初始化
    initHandle() {
      this.valueId = this.value
      if (this.valueId && this.options.length > 0) {
        this.$nextTick(function () {
          this.valueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label] // 初始化显示label
          this.$refs.selectTree.setCurrentKey(this.valueId) // 设置默认选中
          this.defaultExpandedKey = [this.valueId] // 设置默认展开
          this.$emit('getValue',this.$refs.selectTree.getNode(this.valueId).data)
        })
      }
      this.initScroll()
    },

    // 初始化滚动条
    initScroll() {
      this.$nextTick(() => {
        let scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
        let scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
        scrollWrap.style.cssText = 'margin: 0px; max-height: none; overflow: hidden;'
        scrollBar.forEach((el) => (el.style.width = 0))
      })
    },
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label] // 设置label
      this.valueId = node[this.props.id] // 设置id
      this.defaultExpandedKey = []
      this.$emit('getValue', node)
      this.$refs.elSelect.visible = false
    },
    // 清除选中
    clearHandle() {
      this.valueTitle = ''
      this.valueId = null
      this.defaultExpandedKey = []
      this.clearSelected()
      this.$emit('getValue', null)
    },
    // 清空选中样式
    clearSelected() {
      let allNode = document.querySelectorAll('#tree-option .el-tree-node')
      allNode.forEach((element) => element.classList.remove('is-current'))
    },
  },
  watch: {
    options() {
      this.valueId = this.value
      this.initHandle()
    },
  },
}
</script>
<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
</style>
```

</demo-block>