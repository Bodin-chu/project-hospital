<template>
    <div>
        <div class="row mb-5">
            <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
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
                    id="table-person"
                    class="mt-2 font-table"
                    head-variant="dark"
                    responsive striped bordered small hover show-empty
                    :items="dataPerson"
                    :fields="fields"
                >
                    <template #cell(set)="row" align-v="center">
                        <b-link @click="viewMoreDataPerson(row.item)" class="mt-0 mb-0 font-m font-weight-bold">ดูข้อมูล</b-link>
                    </template>
                </b-table>
            </div>
            <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                <h6 class="font-m">รายละเอียด</h6>
                <!-- <pre>{{ arrViewData }}</pre> -->
                <hr class="mt-1 mb-3">
                <b-media class="mb-3">
                    <template #aside>
                        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                    </template>
                    <h5 class="mt-0 font-m"><strong>ชื่อผู้ป่วย : {{ arrViewData.name }}</strong></h5>
                    <p class="mt-1 mb-0"><strong>VN</strong> NUMBER :<span class="ml-2 bg-warning">{{ arrViewData.VN }}</span></p>
                    <p class="mt-1 mb-0"><strong>HN</strong> NUMBER :<span class="ml-2 bg-warning">{{ arrViewData.HN }}</span></p>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                            <p class="mt-1 mb-0 font-m font-weight-bold">อายุ : {{ arrViewData.age }}</p>
                            <hr class="mt-2 mb-2">
                        </div>
                        <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                            <p class="mt-1 mb-0 font-m font-weight-bold">เพศ : {{ arrViewData.gender }}</p>
                            <hr class="mt-2 mb-2">
                        </div>
                    </div>
                    <b-alert show variant="secondary">
                        <p class="mt-1 mb-0 font-m text-danger"><strong><font-awesome-icon class="mr-2" icon="exclamation-circle" />แพ้ยา : {{ arrViewData.errorMed }}</strong></p>
                        <p class="mt-1 mb-0 font-m"><font-awesome-icon class="mr-2" icon="bed" />เตียง : {{ arrViewData.bed }}</p>
                        <p class="mt-1 mb-0 font-m">สิทธิ์ : {{ arrViewData.permit }}</p>
                    </b-alert>
                </b-media>
                <b-card no-body>
                    <b-tabs card>
                        <b-tab class="font-m" title="ประวัติการรับยา" active>
                            <!-- 1 -->
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button
                                        block
                                        variant="link"
                                        v-b-toggle.collapse-1
                                        aria-controls="collapse-1"
                                    >
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="mt-1 mb-1 font-m text-dark font-weight-bold"><span class="text-danger">[ รายการที่ 1 ] / </span>ประวัติการรับยา : วันที่ 18/01/2564</p>
                                            <p class="mt-1 mb-1 font-m"><font-awesome-icon icon="folder" /></p>
                                        </div>
                                    </b-button>
                                </b-card-header>
                                <b-card-text>
                                    <b-collapse id="collapse-1">
                                        <b-list-group>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                        </b-list-group>
                                    </b-collapse>
                                </b-card-text>
                            </b-card>
                            <!-- 2 -->
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-2" role="tab">
                                    <b-button
                                        block
                                        variant="link"
                                        v-b-toggle.collapse-2
                                        aria-controls="collapse-2"
                                    >
                                        <div class="d-flex justify-content-between align-items-center">
                                            <p class="mt-1 mb-1 font-m text-dark font-weight-bold"><span class="text-danger">[ รายการที่ 2 ] / </span>ประวัติการรับยา : วันที่ 15/01/2564</p>
                                            <p class="mt-1 mb-1 font-m"><font-awesome-icon icon="folder" /></p>
                                        </div>
                                    </b-button>
                                </b-card-header>
                                <b-card-text>
                                    <b-collapse id="collapse-2">
                                        <b-list-group>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                            <b-list-group-item class="flex-column align-items-start">
                                                <h5 class="mb-1">List group item heading</h5>
                                                <p class="mb-1">
                                                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </p>
                                            </b-list-group-item>
                                        </b-list-group>
                                    </b-collapse>
                                </b-card-text>
                            </b-card>
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
                arrViewData: Object.assign({},''),
                dataPerson:[
                    {
                        'VN': 'vn0001',
                        'HN': 'HN60-001',
                        'name': 'นายสะอาด มากมาย',
                        'gender': 'ชาย',
                        'age': '40 ปี',
                        'permit': '',
                        'errorMed': 'Urticaria',
                        'bed': '',
                    },
                    {
                        'VN': 'vn9875',
                        'HN': 'HN58-689',
                        'name': 'นายทอง มั้งมี',
                        'gender': 'ชาย',
                        'age': '25 ปี',
                        'permit': '',
                        'errorMed': 'DIHS/DRESS',
                        'bed': '',
                    },
                    {
                        'VN': 'vn0002',
                        'HN': 'HN58-677',
                        'name': 'นายขยัน มั่นคง',
                        'gender': 'ชาย',
                        'age': '30 ปี',
                        'permit': '',
                        'errorMed': 'Anaphylaxis',
                        'bed': '',
                    },
                    {
                        'VN': 'vn0003',
                        'HN': 'HN64-001',
                        'name': 'นายธนสิทธ์ มีชัยงาม',
                        'gender': 'ชาย',
                        'age': '30 ปี',
                        'permit': '',
                        'errorMed': 'DIHS/DRESS ',
                        'bed': '',
                    },
                    {
                        'VN': 'vn0004',
                        'HN': 'HN64-002',
                        'name': 'นางสาวใจดี ต่อมนุษย์',
                        'gender': 'หญิง',
                        'age': '25 ปี',
                        'permit': '',
                        'errorMed': 'MPE',
                        'bed': '',
                    },
                ],
                fields: [
                    {
                        key: 'VN',
                        label:'VN',
                        sortable: true,
                        class:'text-center w-10 font-weight-bold'
                    },
                    {
                        key: 'HN',
                        label:'HN',
                        sortable: true,
                        class:'text-center w-10 font-weight-bold'
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
                        class:'text-center w-15'
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
                visible: true
            }
        },
        methods:{
            viewMoreDataPerson(objData){
                this.arrViewData = Object.assign({}, objData)
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
    .font-m{ font-family: 'Kanit', sans-serif; }
    .w-5{ width: 5%; }
    .w-10{ width: 10%; }
    .w-15{ width: 15%; }
</style>