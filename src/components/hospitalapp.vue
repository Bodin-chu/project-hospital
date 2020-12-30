<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-xl-5 col-lg-5">
                <b-alert show variant="warning">
                    <div class="d-flex justify-content-between align-items-center">
                        <h6 class="mt-2 mb-2 font-m"><strong class="text-dark"><font-awesome-icon class="mr-2" icon="user" />ข้อมูลผู้ป่วยในระบบ</strong></h6>
                        <b-button size="sm" class="font-m" variant="info"><font-awesome-icon class="mr-2" icon="plus" />เพิ่มข้อมูลผู้ป่วย</b-button>
                    </div>
                    <hr>
                    <label class="text-dark font-m">ค้นหาข้อมูลผู้ป่วย</label>
                    <b-form-group description="ค้นหาจาก VN , HN , ชื่อจริง , นามสกุล">
                        <b-form-input
                            class="font-m"
                            id="filter-input"
                            type="search"
                            placeholder="ค้นหาข้อมูลในตาราง"
                        ></b-form-input>
                    </b-form-group>
                </b-alert>
                <b-table 
                    class="mt-2 font-table"
                    head-variant="dark"
                    responsive striped bordered small hover show-empty
                    :fields="fields"
                >
                </b-table>
            </div>
            <div class="col-sm-12 col-md-12 col-xl-7 col-lg-7">
                <b-media class="mb-3">
                    <template #aside>
                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                    </template>
                    <h5 class="mt-0 font-m"><strong>ผู้ป่วย :</strong></h5>
                    <p class="mt-1 mb-0"><strong>VN</strong> number :</p>
                    <p class="mt-1 mb-0"><strong>HN</strong> number :</p>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                            <p class="mt-1 mb-0">อายุ :</p>
                        </div>
                        <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                            <p class="mt-1 mb-0">เพศ :</p>
                        </div>
                    </div>
                    <hr class="mt-2 mb-2">
                    <p class="mt-1 mb-0">แพ้ยา :</p>
                    <p class="mt-1 mb-0">เตียง :</p>
                    <p class="mt-1 mb-0">สิทธิ์ :</p>
                </b-media>
                <b-card no-body>
                    <b-tabs card>
                        <b-tab class="font-m" title="ประวัติการรับยา" active>
                            <b-button
                                block
                                variant="link"
                                v-b-toggle.collapse-1
                                aria-controls="collapse-1"
                            >
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="mt-1 mb-1 font-m">ประวัติการรับยา ครั้งที่ ... วันที่ ....</p>
                                    <p class="mt-1 mb-1 font-m"><font-awesome-icon icon="folder" /></p>
                                </div>
                            </b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                                <b-card>I should start open!</b-card>
                            </b-collapse>
                        </b-tab>
                        <b-tab class="font-m" title="แบบฟอร์มคีย์ยา" >
                            <label class="font-a"><strong>ชื่อยาและเวชภัณฑ์</strong></label>
                            <b-form-input
                                class="font-a mb-3"
                                placeholder=""
                                required
                            ></b-form-input>
                            <label class="font-a"><strong>รูปแบบการสั่งใช้</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-select
                                    class="font-a"
                                    placeholder=""
                                    required
                                    :options="select_2"
                                ></b-form-select>
                            </b-form-group>
                            <label class="font-a"><strong>วิธีบริหาร</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-select
                                    class="font-a"
                                    placeholder=""
                                    required
                                    :options="select_3"
                                ></b-form-select>
                            </b-form-group>
                            <label class="font-a"><strong>วิธีการใช้ยา</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-select
                                    class="font-a"
                                    placeholder=""
                                    required
                                    :options="select_4"
                                ></b-form-select>
                            </b-form-group>
                            <label class="font-a"><strong>ฉลากช่วย 1</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-input
                                    class="font-a"
                                    placeholder=""
                                    required
                                ></b-form-input>
                            </b-form-group>
                            <label class="font-a"><strong>ฉลากช่วย 2</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-input
                                    class="font-a"
                                    placeholder=""
                                    required
                                ></b-form-input>
                            </b-form-group>
                            <label class="font-a"><strong>รายละเอียดฉลาก</strong></label>
                            <b-form-textarea
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                                class="font-a mb-2"
                            ></b-form-textarea>
                            <label class="font-a"><strong>ความถี่การบริหาร (เพิ่ม)</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-input
                                    class="font-a"
                                    placeholder=""
                                    required
                                ></b-form-input>
                            </b-form-group>
                            <label class="font-a"><strong>เหตุผลการสั่งจ่าย</strong></label>
                            <b-form-group id="input-group-1">
                                <b-form-input
                                    class="font-a"
                                    placeholder=""
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fields: [
                    {
                        key: 'VN',
                        label:'VN',
                        sortable: true,
                        class:'text-center w-10'
                    },
                    {
                        key: 'HN',
                        label:'HN',
                        sortable: true,
                        class:'text-center w-10'
                    },
                    {
                        key: 'name',
                        label:'ชื่อ - นามสกุล',
                        sortable: true,
                        class:''
                    },
                    {
                        key: 'permit',
                        label:'สิทธิ์',
                        sortable: true,
                        class:'text-center w-5'
                    },
                    {
                        key: 'errorMed',
                        label:'แพ้ยา',
                        sortable: true,
                        class:'text-center'
                    },
                    {
                        key: 'bed',
                        label:'เตียง',
                        sortable: true,
                        class:'text-center'
                    },
                    {
                        key: 'set',
                        label:'',
                        sortable: true,
                        class:'text-center w-5'
                    },
                ],
                // form add med
                // input dynamic
                options:[
                        { text:'ไทย' , value: 'ไทย' },
                        { text:'พม่า' , value: 'พม่า' },
                        { text:'อังกฤษ' , value: 'อังกฤษ' },
                ],
                select_1:[
                        { text:'เลือก' , value: null , disabled:true },
                        { text:'เม็ด/แคปซูล' , value: 'เม็ด/แคปซูล' },
                        { text:'ขวด' , value: 'ขวด' },
                        { text:'ชิ้น' , value: 'ชิ้น' },
                        { text:'เข็ม' , value: 'เข็ม' },
                        { text:'กล่อง' , value: 'กล่อง' },
                        { text:'Nebule' , value: 'Nebule' },
                        { text:'CC.' , value: 'CC.' },
                        { text:'mL.' , value: 'mL.' },
                ],
                select_2:[
                        { text:'เลือก' , value: null , disabled:true },
                        { text:'สั่งใช้ต่อ / Cont.' , value: 'สั่งใช้ต่อ / Cont.' },
                        { text:'ปรับเปลี่ยน / Change' , value: 'ปรับเปลี่ยน / Change' },
                        { text:'หยุดใช้ชั่วคราว / Hold' , value: 'หยุดใช้ชั่วคราว / Hold' },
                        { text:'ยกเลิกใช้ / OFF' , value: 'ยกเลิกใช้ / OFF' },
                ],
                select_3:[
                        { text:'เลือก' , value: null , disabled:true },
                        { text:'สูดพ่น' , value: 'สูดพ่น' },
                        { text:'รับประทาน' , value: 'รับประทาน' },
                ],
                select_4:[
                        { text:'เลือก' , value: null , disabled:true },
                        { text:'1 เม็ด วันละ 3 ครั้ง' , value: '1 เม็ด วันละ 3 ครั้ง' },
                ],
            }
        },
        methods:{}
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
    .font-m{ font-family: 'Kanit', sans-serif; }
    .w-5{ width: 5%; }
    .w-10{ width: 10%; }
    .w-15{ width: 15%; }
</style>