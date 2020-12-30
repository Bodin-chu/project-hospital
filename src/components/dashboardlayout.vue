<template>
    <div>
        <page-one></page-one>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import pageOne from './pageOne.vue'
    export default {
        components: { pageOne },
        data(){
            return{}
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
    .font-th-menu{ font-family: 'Kanit', sans-serif; }
</style>