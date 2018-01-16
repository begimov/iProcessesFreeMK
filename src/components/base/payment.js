import axios from 'axios'

export default {
    name: 'Payment',
    data() {
        return {
            payment: {
                WMI_MERCHANT_ID: "132360589069",
                WMI_PAYMENT_AMOUNT: "990",
                WMI_CURRENCY_ID: "643",
                WMI_PAYMENT_NO: "",
                WMI_DESCRIPTION: "iTeam",
                WMI_AUTO_LOCATION: "1",
                WMI_SUCCESS_URL: "https://iteam.ru/promo/2018/01_thank_you.php",
                WMI_FAIL_URL: "https://iteam.ru/promo/2018/",
                WMI_SIGNATURE: ""
            },
            modal: {
                name: '',
                email: '',
                orderid: '',
                campaign_token: 'nIGYh'
            }
        }
    },
    methods: {
        buy() {
            this.modal.orderid = Date.now()
            this.payment.WMI_PAYMENT_NO = 'NA=' + this.modal.email
            axios.get('https://iteam.ru/grform/payment', {
                ...this.payment,
                ...this.modal
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {
        //
    }
}