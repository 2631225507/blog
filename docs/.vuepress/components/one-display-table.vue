<template>
    <div class="display-info w-99">
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

.w-99 {
    width: 99% !important;
}

.px-5 {
    padding: 0 5px;
}

.px-10 {
    padding: 0 10px;
}
</style>