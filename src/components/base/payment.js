import axios from 'axios'

export default {
    name: 'Payment',
    props: [
        'WMI_PAYMENT_AMOUNT',
        'WMI_DESCRIPTION',
        'WMI_SUCCESS_URL',
        'WMI_FAIL_URL',
        'campaign_token'
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
                WMI_SIGNATURE: ""
            },
            modal: {
                name: '',
                email: '',
                orderid: '',
                campaign_token: this.campaign_token
            }
        }
    },
    methods: {
        buy() {
            this.modal.orderid = Date.now()
            this.payment.WMI_PAYMENT_NO = 'NA=' + this.modal.email
            const payload = {
                ...this.payment,
                ...this.modal
            }
            axios.get('https://iteam.ru/grform/payment', {
                params: {
                    ...payload
                }
            }).then(function (response) {
                console.log(response.data)
                if (response.data.status === 'ok') {
                    console.log('OK')
                } else if (response.data.status === 'error') {
                    console.log('ERROR')
                }
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
    mounted() {
        //
    }
}