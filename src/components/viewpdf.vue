<template>
    <div>
        <!-- chk : {{ this.$route.params.id }} -->
        <!-- <pre>{{ DataPdf }}</pre> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                DataPdf:[]
            }
        },
        computed: {
            getUrlIdBooking(){
                return this.$route.params.id
            }
        },
        mounted(){
            this.callInfomationBooking()
        },
        methods:{
            async callInfomationBooking(){}
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap');
    .font-pdf{
        font-size: 14px;
        font-family: 'Sarabun', sans-serif;
    }
    .l-h{ line-height:1.75rem; }
    .page {
        width: 25cm;
        min-height: 35cm;
        padding: 1cm;
        margin: 0.5cm auto;
        border: 0px #c5c5c5 solid;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    .subpage {
        padding: 0.95cm;
        border: 0px rgb(243, 243, 243) solid;
        height: 256mm;
        outline: 0cm #e9e9e9 solid;
    }
    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        .page {
            margin: 0.5cm auto;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            padding-left: 3cm;
            padding-right: 3cm;
            page-break-after: always;
        }
    }
</style>

