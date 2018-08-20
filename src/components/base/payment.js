import axios from 'axios'

export default {
    name: 'Payment',
    props: [
        'WMI_PAYMENT_AMOUNT',
        'WMI_DESCRIPTION',
        'WMI_SUCCESS_URL',
        'WMI_FAIL_URL',
        'campaign_token',
        'product_name'
    ],
    data() {
        return {
            payment: {
                WMI_MERCHANT_ID: "132360589069",
                WMI_PAYMENT_AMOUNT: this.WMI_PAYMENT_AMOUNT,
                WMI_CURRENCY_ID: "643",
                WMI_PAYMENT_NO: "",
                WMI_DESCRIPTION: this.WMI_DESCRIPTION,
                WMI_AUTO_LOCATION: "1",
                WMI_SUCCESS_URL: this.WMI_SUCCESS_URL,
                WMI_FAIL_URL: this.WMI_FAIL_URL,
                WMI_SIGNATURE: "1"
            },
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
            const orderId = 'NA=' + this.modal.email + '=' + this.modal.campaign_token + '=' + Date.now()
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
                        document.getElementById('paymentForm' + this.campaign_token).submit()
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