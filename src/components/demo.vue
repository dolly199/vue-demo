<template>
    <div>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'demo',
        data() {
            return {msg: 'good good study, day day up'}
        },
    }
</script>
<style scoped>
    h1 {
        color: lightblue;
    }
</style>
