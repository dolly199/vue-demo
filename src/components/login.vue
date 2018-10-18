<template>
    <div>
        <router-link to="./register">{{msg}}</router-link>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                msg: '登录组件'
            }
        }
    }
</script>
