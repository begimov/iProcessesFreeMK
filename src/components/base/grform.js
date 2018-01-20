import axios from 'axios'

export default {
    name: 'Payment',
    props: [
        'campaign_token'
    ],
    data() {
        return {
            modal: {
                name: '',
                email: '',
                orderid: '',
                campaign_token: this.campaign_token
            },
            error: '',
            isLoading: false
        }
    },
    methods: {
        buy() {
            const orderId = 'NA=' + this.modal.email + '=' + this.modal.campaign_token
            this.modal.orderid = orderId
            this.payment.WMI_PAYMENT_NO = orderId
            const payload = {
                ...this.payment,
                ...this.modal
            }
            this.error = ''
            this.isLoading = true
            axios.get('https://iteam.ru/grform/payment', {
                params: {
                    ...payload
                }
            }).then((response) => {
                if (response.data.status === 'ok') {
                    this.payment.WMI_SIGNATURE = response.data.WMI_SIGNATURE
                    this.$nextTick(() => {
                        document.getElementById('paymentForm').submit()
                    })
                } else if (response.data.status === 'error') {
                    this.error = response.data.msg
                }
                this.isLoading = false
            }).catch((error) => {
                console.log(error.response)
                if (error.response.status === 422) {
                    console.log(error.response.data)
                    this.error = 'Все поля обязательны к заполнению'
                } else {
                    this.error = 'Ошибка, пожалуйста проверьте правильность введенных данных и попробуйте еще раз'
                }
                this.isLoading = false
            })
        }
    },
    mounted() {
        //
    }
}