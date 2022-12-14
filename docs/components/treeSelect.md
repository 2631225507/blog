## 基础用法

下拉树形结构展示(this.$refs.xxx.selectTreeClearHandle()可用于清楚已选数据)

<template>
    <one-tree-select 
        ref="treeSelect"
        :value="id"
        :options="dataOptions"
        :props="dataDefaultProps"
        placeholder="请选择"
        @getValue="getValue($event)" />
</template>

<script>
export default {
    data() {
        return {
            id :'1',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '设计原则',
                children: [{
                  id :'111',
                  unitName: '一致',
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
      getValue(obj) {
        this.id = obj ? obj.id : ''
    },
    }
}
</script>


<demo-block>

```vue
<template>
    <one-tree-select 
        ref="treeSelect"
        :value="id"
        :options="dataOptions"
        :props="dataDefaultProps"
        placeholder="请选择"
        @getValue="getValue($event)" />
</template>

<script>
export default {
    data() {
        return {
            id :'1',
            dataOptions:[{
              id :'1',
              unitName: '指南',
              children: [{
                id :'11',
                unitName: '设计原则',
                children: [{
                  id :'111',
                  unitName: '一致',
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
      getValue(obj) {
        this.id = obj ? obj.id : ''
    },
    }
}
</script>
```

</demo-block>


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

| 事件名称 |        说明        |     回调参数      |
| :------: | :----------------: | :---------------: |
| getValue | 选中节点变化时触发 | 当前选中节点node |

### Method

|       方法名        |                             说明                             |                             参数                             |
| :-----------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     clearHandle     |                          清除树选中                          |                              -                               |
|  updateKeyChildren  |  通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性  |   (key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组    |
|   getCheckedNodes   | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false` |
|   setCheckedNodes   |     设置目前勾选的节点，使用此方法必须设置 node-key 属性     |                (nodes) 接收勾选节点数据的数组                |
|   getCheckedKeys    | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `false` |
|   setCheckedKeys    | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
|     setChecked      | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false |
| getHalfCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点所组成的数组 |                              -                               |
| getHalfCheckedKeys  | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组 |                              -                               |
|    getCurrentKey    | 获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null |                              —                               |
|   getCurrentNode    |    获取当前被选中节点的 data，若没有节点被选中则返回 null    |                              —                               |
|    setCurrentKey    | 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 |    (key) 待被选节点的 key，若为 null 则取消当前高亮的节点    |
|   setCurrentNode    | 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 |                   (node) 待被选节点的 node                   |
|       getNode       |          根据 data 或者 key 拿到 Tree 组件中的 node          |             (data) 要获得 node 的 key 或者 data              |
|       remove        |   删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性   |             (data) 要删除的节点的 data 或者 node             |
|       append        |              为 Tree 中的一个节点追加一个子节点              | (data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node |
|    insertBefore     |             为 Tree 的一个节点的前面增加一个节点             | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node |
|     insertAfter     |             为 Tree 的一个节点的后面增加一个节点             | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node |

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