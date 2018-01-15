import Payment from '@/components/base/Payment.vue'

export default {
    name: 'Home',
    components: {
        Payment
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        console.log('Home mounted 2')
    }
}