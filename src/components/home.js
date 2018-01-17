import Payment from '@/components/base/Payment.vue'
import VueWordCloud from 'vuewordcloud'

export default {
    name: 'Home',
    components: {
        Payment,
        [VueWordCloud.name]: VueWordCloud
    },
    data() {
        return {
            //
        }
    },
    mounted() {
        //
    }
}