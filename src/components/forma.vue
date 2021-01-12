<template>
     <div class="">
          <div class="mb-5 row">
               <div class="col-sm-12 col-md-12 col-xl-9 col-lg-9">
                    <div class="d-flex justify-content-between align-items-center">
                         <div>
                              <label class="font-a font-weight-bold">ค้นหาข้อมูล 'ยา' ในตาราง</label>
                              <b-form-input
                                   class="font-a"
                                   style="width:250%;border:1px solid #000;"
                                   size="sm"
                                   id="filter-input"
                                   type="search"
                                   v-model="filter"
                              ></b-form-input>
                         </div>
                         <div> 
                              <b-button-group size="sm" class="mt-1 mb-2">
                                   <b-button @click="viewFormAddMed" variant="warning" class="font-a">
                                        <font-awesome-icon class="mr-2" icon="plus" />
                                        <strong>เพิ่มข้อมูลยา</strong>
                                   </b-button>
                              </b-button-group>
                         </div>
                    </div>
                    <p class="mt-2 mb-2 font-a text-muted"><font-awesome-icon class="mr-2" icon="pills" />จำนวนข้อมูลยาในระบบทั้งหมด {{ dataMedical.length }} รายการ</p>
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
                                   <b-button class="font-a" variant="info">อัพเดท</b-button>
                                   <b-button class="font-a" variant="danger">ลบ</b-button>
                              </b-button-group>
                         </template>
                    </b-table>
               </div>
               <div class="col-sm-12 col-md-12 col-xl-3 col-lg-3">
                    <b-card v-if="formMed">
                         <b-card-body>
                              <div class="d-flex justify-content-between align-items-center">
                                   <h5 class="mt-1 mb-1 font-a">
                                        <strong class="text-info"><font-awesome-icon class="mr-2" icon="pills" />กรอกรายละเอียดยา</strong>
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
                              <label class="font-a"><strong>4. ขนาดยา (Strength)</strong></label>
                              <b-form-group description="Ex. 10 mg, 120 mg/ml, 10mg+15 mg">
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
                    dataMedical:[
                         {
                              'm1': '141881',
                              'm3': 'fluorouracil',
                              'm31': 'EFFCIL',
                              'm32': 'PHARMACHEMIE, NETHERLANDS',
                              'm6': '250 mg/5 mL',
                              'm4': 'solution for injection/infusion',
                              'm5': 'vial',
                         },
                         {
                              'm1': '141997',
                              'm3': 'fluorouracil',
                              'm31': 'FLUOROURACIL U.S.P. ABIC',
                              'm32': 'BORYUNG PHARMACEUTICAL, KOREA',
                              'm6': '250 mg/5 mL',
                              'm4': 'solution for injection/infusion',
                              'm5': 'vial',
                         },
                         {
                              'm1': '108953',
                              'm3': 'amlodipine + valsartan',
                              'm31': 'EXFORGE',
                              'm32': 'NOVARTIS PHARMA, SWITZERLAND',
                              'm6': '5 mg + 160 mg',
                              'm4': 'film-coated tablet',
                              'm5': 'tab',
                         },
                         {
                              'm1': '100005',
                              'm3': 'alginic acid + dried aluminum hydroxide gel + magnesium carbonate',
                              'm31': 'ALGYCON',
                              'm32': 'TAI YU CHEMICAL & PHARMACEUTICAL, TAIWAN',
                              'm6': '200 mg + 30 mg + 40 mg',
                              'm4': 'chewable tablet',
                              'm5': 'tab',
                         },
                    ],
                    fields: [
                         {
                              key: 'm1',
                              label:'รหัส',
                              sortable: true,
                              class:'text-center w-5 font-weight-bold'
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