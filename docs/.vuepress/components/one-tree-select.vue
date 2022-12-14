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
          label: 'label', // 显示名称
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