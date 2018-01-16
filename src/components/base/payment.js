export default {
    name: 'Payment',
    data() {
        return {
            modal: {
                name: '',
                email: '',
                orderid: '',
            }
        }
    },
    methods: {
        buy() {
            this.modal.orderid = Date.now()
        }
    },
    mounted() {
        //
    }
}