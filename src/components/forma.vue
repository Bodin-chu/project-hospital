<template>
     <div class="">
          <div class="mb-5 row">
               <div class="col-sm-12 col-md-12 col-xl-7 col-lg-7">
                    <div class="d-flex justify-content-between align-items-center">
                         <b-form-input
                              class="font-a"
                              style="width:50%"
                              size="sm"
                              id="filter-input"
                              type="search"
                              placeholder="ค้นหาข้อมูล 'ยา' ในตาราง"
                              v-model="filter"
                         ></b-form-input>
                         <div> 
                              <b-button-group size="sm" class="mt-1 mb-2">
                                   <b-button @click="viewFormAddMed" variant="warning" class="font-a">
                                        <font-awesome-icon class="mr-2" icon="plus" />
                                        เพิ่มข้อมูลยา
                                   </b-button>
                                   <b-button @click="viewFormAddMed" variant="success" class="font-a">
                                        <font-awesome-icon class="mr-2" icon="file-excel" />
                                        export .xlxs
                                   </b-button>
                              </b-button-group>
                         </div>
                    </div>
                    <b-table 
                         class="mt-2 font-table"
                         head-variant="dark"
                         responsive striped bordered small hover show-empty
                         :items="dataMedical"
                         :fields="fields"
                         :filter="filter"
                         @filtered="onFiltered"
                    >
                         <template #cell(m3)="row">
                              <p class="font-a mt-1 mb-1"><span class="text-muted mr-2">ชื่อสามัญทางยา (Generic name/Active Ingredient) :</span><strong>{{ row.item.m3 }}</strong></p>
                              <p class="font-a mt-1 mb-1"><span class="text-muted mr-2">ชื่อการค้า (Trade name) :</span><strong>{{ row.item.m31 }}</strong></p>
                              <p class="font-a mt-1 mb-1"><span class="text-muted mr-2">ผู้ผลิต/จำหน่าย (Manufacturer) :</span><strong>{{ row.item.m32 }}</strong></p>
                         </template>
                         <template #cell(m7)="row" align-v="center">
                              <b-button-group  vertical size="sm">
                                   <b-button class="font-a" variant="info">อัพเดทข้อมูลยา</b-button>
                                   <b-button class="font-a" variant="danger">ลบ</b-button>
                              </b-button-group>
                         </template>
                    </b-table>
               </div>
               <div class="col-sm-12 col-md-12 col-xl-5 col-lg-5">
                    <b-card v-if="formMed">
                         <b-card-body>
                              <div class="d-flex justify-content-between align-items-center">
                                   <h5 class="mt-1 mb-1 font-a">
                                        <strong><u><font-awesome-icon class="mr-2" icon="pills" />เพิ่มข้อมูลยา</u></strong>
                                   </h5>
                                   <b-button @click="formMed = !formMed" size="sm" variant="danger"><font-awesome-icon icon="times-circle" /></b-button>
                              </div>
                              <hr>
                              <!-- 1 -->
                              <label class="font-a"><strong>1. รหัสยา (TMT code)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.code"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 2 -->
                              <label class="font-a"><strong>2. ชื่อสามัญทางยา (Generic name/Active Ingredient)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Generic"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 3 -->
                              <label class="font-a"><strong>3. ชื่อการค้า (Trade name)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Trade"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 4 -->
                              <label class="font-a"><strong>4. ขนาดยา (Strength) : Ex. 10 mg, 120 mg/ml, 10mg+15 mg</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Strength"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 5 -->
                              <label class="font-a"><strong>5. รูปแบบยา (Dosage form)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Dosage"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 6 -->
                              <label class="font-a"><strong>6. หน่วยนับ (Unit)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Unit"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <!-- 7 -->
                              <label class="font-a"><strong>7. ผู้ผลิต/จำหน่าย (Manufacturer)</strong></label>
                              <b-form-group>
                                   <b-form-input
                                        v-model="formData.Manufacturer"
                                        class="font-a"
                                        placeholder=""
                                        required
                                   ></b-form-input>
                              </b-form-group>
                              <hr>
                              <!-- btn data -->
                              <b-button @click="addMed" variant="primary" class="font-a">เพิ่มข้อมูลยา</b-button>
                         </b-card-body>
                    </b-card>
               </div>
          </div>
     </div>
</template>

<script>
     const formAddMed = {
          code:null,
          Generic:null,
          Trade:null,
          Strength:null,
          Dosage:null,
          Unit:null,
          Manufacturer:null,
     }
     export default {
          data(){
               return{
                    formData: Object.assign({},formAddMed),
                    // set
                    filter: null,
                    filterOn: [],
                    formMed:false,
                    // table
                         // {
                         //      'm1': 1,
                         //      'dataMed_1': '',
                         //      'dataMed_2': '',
                         //      'dataMed_3': '',
                         //      'm4': 5,
                         //      'm5': 'กล่อง',
                         //      'm6': 'xxx',
                         // }
                    dataMedical:[],
                    fields: [
                         {
                              key: 'm1',
                              label:'รหัสยา',
                              sortable: true,
                              class:'text-center w-15'
                         },
                         {
                              key: 'm3',
                              label:'ชื่อยาและเวชภัณฑ์',
                              sortable: true,
                         },
                         {
                              key: 'm6',
                              label:'ขนาดยา (Strength)',
                              sortable: true,
                              class:'text-center w-10'
                         },
                         {
                              key: 'm4',
                              label:'รูปแบบยา (Dosage form)',
                              sortable: true,
                              class:'text-center w-10',
                         },
                         {
                              key: 'm5',
                              label:'หน่วยนับ (Unit)',
                              sortable: true,
                              class:'text-center w-10',
                         },
                         {
                              key: 'm7',
                              label:'จัดการ',
                              sortable: true,
                              class:'text-center w-10'
                         },
                    ],
               }
          },
          methods:{
               onFiltered(filteredItems) {
                    // Trigger pagination to update the number of buttons/pages due to filtering
                    this.totalRows = filteredItems.length
                    this.currentPage = 1
               },
               viewFormAddMed(){
                    this.formMed = true
               },
               addMed(){
                    this.dataMedical.push({
                         'm1': this.formData.code,
                         'm3': this.formData.Generic,
                         'm31': this.formData.Trade,
                         'm32': this.formData.Manufacturer,
                         'm6': this.formData.Strength,
                         'm4': this.formData.Dosage,
                         'm5': this.formData.Unit,
                    })
                    this.formData = Object.assign({}, formAddMed)
               }
          }
     }
</script>

<style>
     @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
     .font-a{ font-family: 'Kanit', sans-serif; }
     .font-table{ font-family: 'Kanit', sans-serif; font-size: 0.85rem; }
     .w-5{ width: 5%; }
     .w-10{ width: 10%; }
     .w-15{ width: 15%; }
</style>