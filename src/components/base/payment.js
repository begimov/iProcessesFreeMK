export default {
    name: 'Payment',
    data() {
        return {
            name: '',
            email: '',
            orderid: '',
        }
    },
    methods: {
        buy () {
            console.log('buy')
            this.orderid = Date.now()
        }
    },
    mounted() {
        //
    }
}