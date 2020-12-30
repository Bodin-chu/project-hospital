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
                              <p class="font-a mt-1 mb-1"><strong>ชื่อยาและเวชภัณฑ์ :</strong></p>
                              <p class="font-a mt-1 mb-1"><strong>รูปแบบการสั่งใช้ :</strong></p>
                              <p class="font-a mt-1 mb-1"><strong>ฉลากวิธีใช้ยา :</strong></p>
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
                                        <strong><u>เพิ่มข้อมูลยา</u></strong>
                                   </h5>
                                   <b-button @click="formMed = !formMed" size="sm" variant="danger"><font-awesome-icon icon="times-circle" /></b-button>
                              </div>
                              <hr>
                         </b-card-body>
                    </b-card>
               </div>
          </div>
     </div>
</template>

<script>
     export default {
          data(){
               return{
                    // set
                    filter: null,
                    filterOn: [],
                    formMed:false,
                    // table
                    dataMedical:[
                         {
                              'm1': 1,
                              'dataMed_1': '',
                              'dataMed_2': '',
                              'dataMed_3': '',
                              'm4': 5,
                              'm5': 'กล่อง',
                              'm6': 'xxx',
                         }
                    ],
                    fields: [
                         {
                              key: 'm1',
                              label:'ลำดับ',
                              sortable: true,
                              class:'text-center w-5'
                         },
                         // {
                         //      key: 'm2',
                         //      label:'รูปแบบการสั่งใช้',
                         //      sortable: true
                         // },
                         {
                              key: 'm3',
                              label:'ชื่อยาและเวชภัณฑ์',
                              sortable: true
                         },
                         {
                              key: 'm6',
                              label:'แหล่งที่มา',
                              sortable: true
                         },
                         {
                              key: 'm4',
                              label:'จำนวนรับเข้า',
                              sortable: true,
                              class:'text-center w-10',
                         },
                         {
                              key: 'm5',
                              label:'หน่วยนับ',
                              sortable: true,
                              class:'text-center w-10',
                         },
                         // {
                         //      key: 'm8',
                         //      label:'ฉลากวิธีใช้ยา',
                         //      sortable: true
                         // },
                         {
                              key: 'm7',
                              label:'จัดการ',
                              sortable: true,
                              class:'text-center w-15'
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