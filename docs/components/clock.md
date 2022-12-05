## 基础用法

时间展示-数据面板
<template>
    <one-clock />
</template>

<demo-block>

```vue
<template>
  <one-clock />
</template>

```

</demo-block>







## 组件源码

组件名称: one-clock


<demo-block>

```vue
<template>
  <div class="time fullContent">
        <div class="clock">
            <p class="date">{{ date }}</p>
            <p class="time">{{ time }}</p>
        </div>
        <button @click="returnTime">获取当前时间: {{currentTime}}</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            timerID: '',
            time: '1',
            date: '2',
            week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            currentTime: ''
        }
    },
    methods: {
        updateTime() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
        },
        zeroPadding(num, digit) {
            var zero = '';
            for (var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        returnTime() {
            var cd = new Date();
            this.currentTime = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ` ` + this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
        }
    },
    mounted() {
        this.timerID = setInterval(this.updateTime, 1000);
        this.updateTime()
    },
    beforeDestroy () {
        clearInterval(this.timerID)
    }
}
</script>

<style scoped lang="scss">
    .time {
        background: #0f3854;
        background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
        background-size: 100%;
        .clock {
            font-family: 'Share Tech Mono', monospace;
            color: #ffffff;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
            color: #daf6ff;
            text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
            }
            .clock .time {
                letter-spacing: 0.05em;
                font-size: 80px;
                padding: 5px 0;
            }
            .clock .date {
                letter-spacing: 0.1em;
                font-size: 24px;
            }
            .clock .text {
                letter-spacing: 0.1em;
                font-size: 12px;
                padding: 20px 0 0;
            }
    }
    p {
        margin: 0;
        padding: 0;
    }
</style>
```

</demo-block>