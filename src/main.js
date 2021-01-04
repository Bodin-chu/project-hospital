import Vue from 'vue'
import App from './App.vue'

// Install Router
import router from "./router/index";

// vuex
import store from "./store.js";

// Install axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from "./config.js"
// axios.defaults.baseURL = config.apiUrl
Vue.use(VueAxios, axios)

// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Install fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faLanguage, faLock, faFileSignature, faCheck, faExclamationTriangle, faTimesCircle, faCalendarDay, faMapPin, faClock, faHourglassHalf, faTable, faReply, faExternalLinkAlt, faEnvelope, faUserLock, faKey, faFilePdf, faCircle, faCheckCircle, faSquareFull, faSquare, faCheckSquare, faPrint, faSignOutAlt, faPlus, faFileExcel, faFolder, faPencilAlt, faTrash, faUser, faNotesMedical, faBriefcaseMedical, faBed, faExclamationCircle, faPills } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faUserSecret,
  faLanguage,
  faLock,
  faFileSignature,
  faCheck,
  faExclamationTriangle,
  faTimesCircle,
  faCalendarDay,faMapPin,faClock,faHourglassHalf,faTable,faReply,faExternalLinkAlt,faEnvelope,faUserLock,faKey,faFilePdf,faCircle,faCheckCircle,
  faSquare,faCheckSquare,faPrint,faSignOutAlt,faPlus,faFileExcel,faFolder,faPencilAlt,faTrash,faUser,faNotesMedical,faBriefcaseMedical,faBed,
  faExclamationCircle,faPills
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install v-calendar
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
import VCalendar from 'v-calendar'
Vue.use(VCalendar, { componentPrefix: 'vc' });

// Install moment
import moment from 'moment'
Vue.prototype.moment = moment

Vue.config.productionTip = false


new Vue({
  store : store,
  router: router,
  render: h => h(App),
}).$mount('#app')
