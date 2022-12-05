<template>
  <!-- 单选时 -->
  <div
    v-if="!multiple"
    class="button-select"
    :class="{ 'disabled-select': disabled }"
  >
    <div
      :class="{ 'disabled-option': item.disabled }"
      v-for="(item, index) in itemList"
      :key="index"
      class="button-option mr-10 mt-5"
      @click="selectOption(item, index)"
    >
      {{ item.descName }}
      <div class="select-img" v-show="item.value == selectValue">
        <i class="el-icon-check select-icon"></i>
      </div>
    </div>
  </div>
  <!-- 多选时 -->
  <div v-else class="button-select" :class="{ 'disabled-select': disabled }">
    <div
      :class="{ 'disabled-option': item.disabled }"
      v-for="(item, index) in itemList"
      :key="index"
      class="button-option mr-10 mt-5"
      @click="selectOption(item, index)"
    >
      {{ item.descName }}
      <div class="select-img" v-show="item.selected">
        <i class="el-icon-check select-icon"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number, Array],
    },
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    beforeClick: {
      type: Function,
      default: function () {
        return true;
      },
    },
    // 是否支持多选 默认为单选，多选时为ture
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectValue: this.value,
      itemList: this.handleSelection(),
    };
  },
  methods: {
    handleSelection() {
      // if (this.value instanceof Array) {
      //     this.list.forEach(item => {
      //         let juded = false
      //         for(let oval of this.value){
      //             if(item.value == oval) {
      //                 juded = true
      //                 break
      //             }
      //         }
      //         juded ? (item.selected = true) : (item.selected = false)
      //     })
      //     console.log(this.list)
      //     return this.list
      // }
      // else {
      //     return this.list.map(item =>({...item, selected:false}))
      // }

      if (this.value instanceof Array) {
        let newlist = this.list.map((item) => {
          let juded = false;
          for (let oval of this.value) {
            if (item.value == oval) {
              juded = true;
              break;
            }
          }
          if (juded) {
            return { ...item, selected: true };
          } else {
            return { ...item, selected: false };
          }
        });
        return newlist;
      } else {
        return this.list.map((item) => ({ ...item, selected: false }));
      }
    },
    /**
     * 选中选项
     */
    selectOption(item, index) {
      if (this.disabled) return;
      // 如果当前项被禁用，点击不改变值
      if (item.disabled && item.value === this.selectValue) {
        return;
      }
      if (!this.beforeClick()) return;
      // 当类型为多选时
      if (this.multiple) {
        this.itemList[index].selected = !Boolean(this.itemList[index].selected);
        let selectArr = this.itemList.filter((item) => item.selected);
        this.$emit("on-click", selectArr);
        return;
      }

      // 如果当前项已被选中，再次点击取消选中
      if (this.selectValue === item.value && !this.multiple) {
        this.selectValue = "";
        this.itemList[index].selected = !Boolean(this.itemList[index].selected);
        this.$nextTick(() => {
          item.checkType = "uncheck";
          this.$emit("on-click", item);
        });
        return;
      }

      this.selectValue = item.value;
      this.itemList[index].selected = true;
      this.$nextTick(() => {
        item.checkType = "";
        this.$emit("on-click", item);
      });
    },
  },
  watch: {
    /**
     * 父组件数据发生变化，更新子选中数据
     */
    value: {
      handler(newValue, old) {
        this.selectValue = newValue;
        this.itemList = this.handleSelection();
      },
    },
    /**
     * 如果选中的数据发生变化，更新v-model绑定的值
     */
    selectValue: {
      handler(newValue, old) {
        this.$emit("input", newValue);
      },
    },
    list: {
      handler(newValue, old) {
        this.itemList = JSON.parse(JSON.stringify(newValue));
        // 如果选中的值被禁用了，那绑定的值置为null
        let data = this.itemList.find((item) => {
          return item.value == this.selectValue;
        });
        if (data && data.disabled) {
          this.selectValue = null;
        }
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.mr-10 {
  margin-right: 10px;
}
.mt-5 {
  margin-top: 5px;
}
.disabled-select {
  .button-option {
    cursor: not-allowed !important;
    background: #f3f3f3 !important;
  }
}
.button-select {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: -5px;
  .button-option {
    cursor: pointer;
    padding: 5px 15px;
    border: 1px solid #e0e0e0;
    color: #4477ed;
    border-radius: 3px;
    min-width: 100px;
    text-align: center;
    position: relative;
    background: #fff;
  }
  .disabled-option {
    background: #eeeeee;
    border: 1px solid #abacb2;
    .select-img,
    .select-icon {
      display: none;
    }
  }
  .select-img {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 0;
    height: 0;
    border-bottom: 18px solid #4477ed;
    border-left: 23px solid transparent;
  }
  .select-icon {
    position: absolute;
    bottom: -18px;
    right: 0px;
    color: #fff;
    z-index: 5;
  }
}
</style>
