<template>
  <div>
    <!-- {{ this.$route.path }} -->
    <b-navbar toggleable="md" fixed="top" class="mt-0 " type="dark" variant="dark">
      <b-navbar-brand class="font-main" to="/">เมนู Hospital App</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="font-main">
          <b-nav-item :class="{ 'active line-bottom' : this.$route.path === '/hospital' }" to="/hospital"><font-awesome-icon class="mr-2" icon="notes-medical" />รายชื่อผู้ป่วย</b-nav-item>
          <b-nav-item :class="{ 'active line-bottom' : this.$route.path === '/forma' }" to="/forma"><font-awesome-icon class="mr-2" icon="briefcase-medical" />ฟอร์ม คีย์ยา</b-nav-item>
          <!-- <b-nav-item :class="{ 'active line-bottom' : this.$route.path === '/formb' }" to="/formb">ฟอร์ม B</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br><br>
    <b-container fluid class="mt-3 text-left"></b-container>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'pageOne',
    components:{},
    data() {
      return {}
    },
    methods:{}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
  .font-main{ font-family: 'Kanit', sans-serif; }
  .line-bottom{ 
    background-color: rgb(129, 141, 255);
    border-bottom: 5px solid rgb(113, 122, 255); 
    border-radius: 3px;
  }
</style>
