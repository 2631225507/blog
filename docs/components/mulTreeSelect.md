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
        :value="ids1"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        :checkStrictly="true"
        :childCascade="false"
        @getValue="getValue1($event)"/>
</template>

<demo-block>

```vue
<template>
    <one-multiple-tree-select
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
        :value="ids2"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
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

<demo-block>

```vue
<template>
    <one-multiple-tree-select
        ref="mulTreeSelect"
        :value="ids"
        :props="dataDefaultProps"
        :options="dataOptions"
        placeholder="请选择"
        type="2"
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

### Attributes

|     属性      |       说明       |  类型   | 默认值 |
| :-----------: | :--------------: | :-----: | :----: |
|     props     |      配置项      | object  |   []   |
|    options    |   选项列表数据   |  array  |   {}   |
|     value     |     默认选中     | string  |   -    |
|   clearable   |    是否可清空    | boolean |  true  |
|   disabled    |     是否禁用     | boolean | false  |
| checkStrictly |     是否单选     | boolean |  true  |
| childCascade  | 是否开启子级联父 | boolean |  true  |

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
| getValue | 选中节点变化时触发 | 当前已选中节点ids |


### Method

|        方法名         |                             说明                             |                             参数                             |
| :-------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| selectTreeClearHandle |                          清除树选中                          |                              -                               |
|   updateKeyChildren   |  通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性  |   (key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组    |
|    getCheckedNodes    | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false` |
|    setCheckedNodes    |     设置目前勾选的节点，使用此方法必须设置 node-key 属性     |                (nodes) 接收勾选节点数据的数组                |
|    getCheckedKeys     | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `false` |
|    setCheckedKeys     | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
|      setChecked       | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false |
|  getHalfCheckedNodes  | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点所组成的数组 |                              -                               |
|  getHalfCheckedKeys   | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组 |                              -                               |
|     getCurrentKey     | 获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null |                              —                               |
|    getCurrentNode     |    获取当前被选中节点的 data，若没有节点被选中则返回 null    |                              —                               |
|     setCurrentKey     | 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 |    (key) 待被选节点的 key，若为 null 则取消当前高亮的节点    |
|    setCurrentNode     | 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性 |                   (node) 待被选节点的 node                   |
|        getNode        |          根据 data 或者 key 拿到 Tree 组件中的 node          |             (data) 要获得 node 的 key 或者 data              |
|        remove         |   删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性   |             (data) 要删除的节点的 data 或者 node             |
|        append         |              为 Tree 中的一个节点追加一个子节点              | (data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node |
|     insertBefore      |             为 Tree 的一个节点的前面增加一个节点             | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node |
|      insertAfter      |             为 Tree 的一个节点的后面增加一个节点             | (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node |
## 组件源码

组件名称: one-tree-select


<demo-block>

```vue
<template>
  <el-select v-model="multipleSelectTreeVal" clearable collapse-tags multiple :disabled="disabled"
    popper-class="select-tree-popper" @clear="selectTreeClearHandle" @remove-tag="removeSelectTreeTag">
    <el-option :value="multipleSelectTreeKey">
      <el-tree ref="multipleSelectTree" :check-strictly="checkStrictly" :current-node-key="multipleSelectTreeKey"
        :default-checked-keys="selectTreeDefaultSelectedKeys" :default-expanded-keys="selectTreeDefaultSelectedKeys"
        :data="options" highlight-current :props="props" :node-key="props.value" show-checkbox
        @check="multipleSelectTreeCheckNode"></el-tree>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'el-multipleTree-select',
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
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 选项列表数据(树形结构的对象数组)
    options: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 初始值
    value: {
      type: String,
      default: '',
    },
    // 是否单选
    checkStrictly: {
      type: Boolean,
      default: true,
    },
    // 是否开启子级联父
    childCascade: {
      type: Boolean,
      default: true,
    },
    /**
     * type控制父子级间的关联，默认1
     * 前提是需要将checkStrictly置为true，childCascade为true才能完全生效
     * 1:父联动子，而子不联动父，
     * 2:子联动父，父不联动子 (选中时不联动，取消选中时可以联动)
     */
    type: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      // 多选
      singleSelectTreeKey: '',
      multipleSelectTreeVal: [], // 多选树默认label值
      multipleSelectTreeKey: '', // 多选树默认key值
      selectTreeDefaultSelectedKeys: [], // 默认展开的key值数组
    }
  },
  methods: {
    // 初始化单选树的值
    async initSingleTree() {
      this.singleSelectTreeKey = this.value
      if (this.singleSelectTreeKey && this.options.length > 0) {
        this.$nextTick(() => {
          this.selectTreeDefaultSelectedKeys = this.singleSelectTreeKey
            ? this.singleSelectTreeKey.split(',')
            : [] // 设置默认展开
          let keyArr = []
          let valueArr = []
          if (this.singleSelectTreeKey) {
            this.singleSelectTreeKey.split(',').forEach((item) => {
              let tdata = this.$refs.multipleSelectTree.getNode(item).data
              keyArr.push(tdata[this.props.value])
              valueArr.push(tdata[this.props.label])
            })
          }
          this.multipleSelectTreeVal = valueArr
          this.multipleSelectTreeKey = keyArr.join(',')
          this.$emit('getValue', this.multipleSelectTreeKey)
          // 多选树
          this.$refs.multipleSelectTree.setCheckedKeys(
            this.selectTreeDefaultSelectedKeys
          )
        })
      }
    },
    // 清除树选中
    selectTreeClearHandle() {
      this.selectTreeDefaultSelectedKeys = []
      this.clearSelected()
      // 清空
      this.multipleSelectTreeVal = []
      this.multipleSelectTreeKey = ''
      this.$refs.multipleSelectTree.setCheckedKeys([])
      this.$emit('getValue', this.multipleSelectTreeKey)
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll(
        '#singleSelectTree .el-tree-node'
      )
      allNode.forEach((element) => element.classList.remove('is-current'))
    },
    // select多选时移除某项操作
    removeSelectTreeTag(val) {
      const stack = JSON.parse(JSON.stringify(this.options))
      while (stack.length) {
        const curr = stack.shift()
        if (curr[this.props.label] == val) {
          this.$refs.multipleSelectTree.setChecked(curr[this.props.value], false)
          let temporaryId = this.multipleSelectTreeKey.split(',')
          temporaryId.forEach((item, tindex) => {
            if (item == curr[this.props.value]) {
              temporaryId.splice(tindex, 1)
            }
          })
          this.multipleSelectTreeKey = temporaryId.join(',')
        }
        if (curr[this.props.children] && curr[this.props.children].length) {
          stack.unshift(...curr[this.props.children])
        }
      }
      this.$emit('getValue', this.multipleSelectTreeKey)
    },
    // 节点选中操作
    multipleSelectTreeCheckNode(node, store) {
      // 取消级联及开启子节点级联
      if (this.checkStrictly && this.childCascade && this.type == '2') {
        let key = this.props.value
        let target = node[key]
        // 判断当前节点是选中还是取消选中
        if (store.checkedKeys.indexOf(target) === -1) {
          this.cancelChildChecked(node)
          return
        }
        let result = this
          .treeFindPath(this.options, (data) => data[key] === target)
          .map((item) => {
            return item[key]
          })
        let currentKeys = this.$refs.multipleSelectTree.getCheckedKeys()
        this.$refs.multipleSelectTree.setCheckedKeys([
          ...result,
          ...currentKeys,
        ])
      } else if (this.checkStrictly && this.childCascade && this.type == '1') {
        this.clickDeal(node, store)
      }
      this.dataBackfill()
    },
    /**
     * 数据回填
     */
    dataBackfill(){
      const checkedNodes = this.$refs.multipleSelectTree.getCheckedNodes()
      const keyArr = []
      const valueArr = []
      checkedNodes.forEach((item) => {
        keyArr.push(item[this.props.value])
        valueArr.push(item[this.props.label])
      })
      this.multipleSelectTreeVal = valueArr
      this.multipleSelectTreeKey = keyArr.join(',')
      this.$emit('getValue', this.multipleSelectTreeKey)
    },
    clickDeal(currentObj, treeStatus) {
      // 用于：父子节点严格互不关联时，父节点勾选变化时通知子节点同步变化，实现单向关联。
      let selected = treeStatus.checkedKeys.indexOf(currentObj[this.props.value]) // -1未选中
      // 选中
      if (selected !== -1) {
        // 子节点只要被选中父节点就被选中
        // this.selectedParent(currentObj)
        // 统一处理子节点为相同的勾选状态
        this.uniteChildSame(currentObj, true)
      } else {
        // 未选中 处理子节点全部为未选中
        if (currentObj[this.props.children] && currentObj[this.props.children].length) {
          this.uniteChildSame(currentObj, false)
        }
      }
    },
    uniteChildSame(treeList, isSelected) {
      this.$refs.multipleSelectTree.setChecked(treeList[this.props.value], isSelected)
      if (treeList[this.props.children]) {
        for (let i = 0; i < treeList[this.props.children].length; i++) {
          this.uniteChildSame(treeList[this.props.children][i], isSelected)
        }
      }
    },
    selectedParent(currentObj) {
      let currentNode = this.$refs.multipleSelectTree.getNode(currentObj)
      if (currentNode.parent.key !== undefined) {
        this.$refs.multipleSelectTree.setChecked(currentNode.parent, true)
        this.selectedParent(currentNode.parent)
      }
    },
    /**
     * 取消节点下所有子节点的选中状态
     */
    cancelChildChecked(node) {
      let childKey = []
      this.findChildren(node, childKey, this.props.children, this.props.value)
      let currentKeys = this.$refs.multipleSelectTree.getCheckedKeys()
      childKey.forEach((item) => {
        let index = currentKeys.indexOf(item)
        if (index > -1) {
          currentKeys.splice(index, 1)
        }
      })
      this.$refs.multipleSelectTree.setCheckedKeys(currentKeys)
      this.dataBackfill()
    },
    /**
     * 根据条件获取父级节点
     */
    treeFindPath(tree, func, path = []) {
      if (!tree) return []
      for (const data of tree) {
        // 这里按照你的需求来存放最后返回的内容吧
        path.push(data)
        if (func(data)) return path
        if (data.children) {
          const findChildren = this.treeFindPath(data.children, func, path)
          if (findChildren.length) return findChildren
        }
        path.pop()
      }
      return []
    },
    /**
     * 递归获取所有的子节点
     */
    findChildren(node, childKey = [], children = 'children', keyName) {
      let key = keyName || this.nodeKey
      if (node[children] && node[children].length) {
        node[children].forEach((item) => {
          childKey.push(item[key])
          this.findChildren(item, childKey, children, keyName)
        })
      }
    },
  },
  watch: {
    options() {
      this.$nextTick(() => {
        // 初始化多选树
        this.initSingleTree()
      })
    },
    value() {
      this.initSingleTree()
    },
  },
}
</script>

<style  lang="scss">
/* 下拉树样式-----------开始 */
.select-tree-popper {
  .el-scrollbar {
    .el-scrollbar__view {
      .el-select-dropdown__item {
        height: auto;
        max-height: 274px;
        padding: 0px;
        overflow-y: auto;
        line-height: 26px;
      }
    }
  }
}
</style>

```

</demo-block>