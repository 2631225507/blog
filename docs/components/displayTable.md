## 基础用法

基础的表格结构展示
<template>
    <one-display-table :tableList="list"  :tableForm="tableForm" />
</template>

<demo-block>

```vue
<template>
  <one-display-table :tableList="list"  :tableForm="tableForm" />
</template>

<script>
export default {
    data() {
        return {
            list: [
                { label: '学生姓名', key: 'name', span: '8' },
                { label: '学校名称', key: 'school', span: '8' },
                { label: '学籍号', key: 'num', span: '8' },
                { label: '年级', key: 'grade', span: '12' },
                { label: '班级', key: 'class', span: '12' },
                { label: '备注', key: 'remark', span: '24' }
            ],
            tableForm:{
                name:'小试牛刀',
                school:"超人学院",
                num:"182743261",
                grade:"初一",
                class:"一班",
                remark:""
            }
        }
    }
}
</script>
```

</demo-block>



## 扩展用法

表格结合表单展示

<one-display-table :tableList="list2"  :tableForm="tableForm" :labelWidth ="100">
   <template v-slot:name>
        <el-input v-model="tableForm.name" placeholder="请输入学生姓名"></el-input>
   </template>
   <template v-slot:school>
        <el-input v-model="tableForm.school" placeholder="请输入学校名称"></el-input>
   </template>
   <template v-slot:num>
        <el-input v-model="tableForm.num" placeholder="请输入学籍号"></el-input>
   </template>
   <template v-slot:grade>
        <el-select v-model="tableForm.grade" placeholder="请选择年级" style="width:100%">
            <el-option
                v-for="item in gradeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:class>
        <el-select v-model="tableForm.class" placeholder="请选择班级" style="width:100%">
            <el-option
                v-for="item in classOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:remark>
        <el-input 
            v-model="tableForm.remark" 
            type="textarea"
            resize="none"
            :autosize="{ minRows: 5, maxRows: 5 }"
            :maxlength="255"
            placeholder="请输入备注">
        </el-input>
   </template>
</one-display-table>
    
    
<script>
export default {
    data() {
        return {
            list: [
                { label: '学生姓名', key: 'name', span: '8' },
                { label: '学校名称', key: 'school', span: '8' },
                { label: '学籍号', key: 'num', span: '8' },
                { label: '年级', key: 'grade', span: '12' },
                { label: '班级', key: 'class', span: '12' },
                { label: '备注', key: 'remark', span: '24' }
            ],
            list2: [
                { label: '学生姓名', key: 'name', span: '8', slot: 'name' },
                { label: '学校名称', key: 'school', span: '8', slot: 'school' },
                { label: '学籍号', key: 'num', span: '8', slot: 'num' },
                { label: '年级', key: 'grade', span: '12', slot: 'grade' },
                { label: '班级', key: 'class', span: '12', slot: 'class' },
                { label: '备注', key: 'remark', span: '24', slot: 'remark' }
            ],
            tableForm: {
                name: '小试牛刀',
                school: "超人学院",
                num: "182743261",
                grade: "",
                class: "",
                remark: "如需校验规则，请自行手动配置"
            },
            gradeOptions:[
                {
                    label:'一年级',
                    value: 1
                },
                {
                    label:'二年级',
                    value: 2
                }
            ],
            classOptions:[
                {
                    label:'一班',
                    value: 1
                },
                {
                    label:'二班',
                    value: 2
                }
            ]

        }
    }
}
</script>

<demo-block>
```vue

<one-display-table :tableList="list2"  :tableForm="tableForm" :labelWidth ="100">
   <template v-slot:name>
        <el-input v-model="tableForm.name" placeholder="请输入学生姓名"></el-input>
   </template>
   <template v-slot:school>
        <el-input v-model="tableForm.school" placeholder="请输入学校名称"></el-input>
   </template>
   <template v-slot:num>
        <el-input v-model="tableForm.num" placeholder="请输入学籍号"></el-input>
   </template>
   <template v-slot:grade>
        <el-select v-model="tableForm.grade" placeholder="请选择年级" style="width:100%">
            <el-option
                v-for="item in gradeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:class>
        <el-select v-model="tableForm.class" placeholder="请选择班级" style="width:100%">
            <el-option
                v-for="item in classOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:remark>
        <el-input 
            v-model="tableForm.remark" 
            type="textarea"
            resize="none"
            :autosize="{ minRows: 5, maxRows: 5 }"
            :maxlength="255"
            placeholder="请输入备注">
        </el-input>
   </template>
</one-display-table>
    
    
<script>
export default {
    data() {
        return {
            list2: [
                { label: '学生姓名', key: 'name', span: '8', slot: 'name' },
                { label: '学校名称', key: 'school', span: '8', slot: 'school' },
                { label: '学籍号', key: 'num', span: '8', slot: 'num' },
                { label: '年级', key: 'grade', span: '12', slot: 'grade' },
                { label: '班级', key: 'class', span: '12', slot: 'class' },
                { label: '备注', key: 'remark', span: '24', slot: 'remark' }
            ],
            tableForm: {
                name: '小试牛刀',
                school: "超人学院",
                num: "182743261",
                grade: "",
                class: "",
                remark: "如需校验规则，请自行手动配置"
            },
            gradeOptions:[
                {
                    label:'一年级',
                    value: 1
                },
                {
                    label:'二年级',
                    value: 2
                }
            ],
            classOptions:[
                {
                    label:'一班',
                    value: 1
                },
                {
                    label:'二班',
                    value: 2
                }
            ]
        }
    }
}
</script>
```

</demo-block>

### Attributes

|    属性    |      说明      |  类型  | 默认值 |
| :--------: | :------------: | :----: | :----: |
| tableList  |    展示配置    | array  |   []   |
| tableForm  |    接口传入    | object |   {}   |
| labelWidth | 表格文本的宽度 | number |  150   |



### tableList Attributes

| 属性  |     说明     |  类型  | 默认值 |
| :---: | :----------: | :----: | :----: |
| label |   标签文本   | String |   -    |
|  key  | 需展示的字段 | String |   -    |
| span  |  1/24 分栏   | String |   24   |
| slot  |     插槽     | String |   -    |

## 组件源码

组件名称: one-display-table


<demo-block>

```vue
<template>
    <div class="display-info w-100">
        <div class="flex-layout">
            <div class="table-ly info-item" v-for="(item, index) in tableList" :key="index" :style="{
                width: ((item.span ? item.span : 24) / 24).toFixed(6) * 100 + '%',
            }">
                <div class="table-cell label-name" :style="{ width: labelWidth + 'px' }">
                    <div class="text-style px-5" :title="item.label">{{ item.label }}</div>
                </div>
                <div class="table-cell px-10 content" :title="tableForm[item.key]">
                    <div v-if="item.slot">
                        <slot :name="item.slot"></slot>
                    </div>
                    <span v-else>{{
                            tableForm[item.key] ? tableForm[item.key] : "-"
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        tableList: {
            type: Array,
            default: () => {
                return []
            },
        },
        tableForm: {
            type: Object,
            default: () => {
                return {}
            },
        },
        labelWidth: {
            type: Number,
            default: 150,
        },
    },
}
</script>
  
<style lang="scss" scoped>
.display-info {
    border-top: 1px solid #d5d8db;
    border-right: 1px solid #d5d8db;
    border-bottom: none;

    .info-item {
        border-bottom: 1px solid #d5d8db;
        height: 30px;
    }
    .label-name {
        background: #e5f6ed;
        text-align: left;
        padding: 5px 0;
        border-right: 1px solid #d5d8db;
        border-left: 1px solid #d5d8db;
        vertical-align: middle;
    }

    .content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }

    .flex-layout {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}

.table-ly {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.table-cell {
    display: table-cell;
}

.text-style {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.w-100 {
    width: 100% !important;
}

.px-5 {
    padding: 0 5px;
}

.px-10 {
    padding: 0 10px;
}
</style>
```

</demo-block>