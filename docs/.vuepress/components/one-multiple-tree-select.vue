<template>
  <el-select v-model="multipleSelectTreeVal" clearable collapse-tags multiple :disabled="disabled"
    popper-class="select-tree-popper" @clear="selectTreeClearHandle" @remove-tag="removeSelectTreeTag">
    <!-- 参数：
            current-node-key：当前选中节点
            default-checked-keys：默认勾选的节点的 key 的数组
            default-expanded-keys：默认展开的节点的 key 的数组
         -->
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
      // 进行数据回填
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
