<one-display-table :tableList="list"  :tableForm="tableForm" :labelWidth ="100">
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
        <el-select v-model="tableForm.grade" placeholder="请选择年级">
            <el-option
            v-for="item in gradeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:class>
        <el-select v-model="tableForm.class" placeholder="请选择班级">
            <el-option
            v-for="item in classOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
   </template>
   <template v-slot:remark>
        <el-input v-model="tableForm.remark" placeholder="请输入备注"></el-input>
   </template>
</one-display-table>
    
    
<script>
export default {
    data() {
        return {
            list: [
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
                remark: ""
            },
            
        }
    }
}
</script>