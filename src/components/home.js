import Payment from '@/components/base/Payment.vue'
import Ytplayer from '@/components/base/Ytplayer.vue'
import VueWordCloud from 'vuewordcloud'

export default {
    name: 'Home',
    components: {
        Payment,
        Ytplayer,
        [VueWordCloud.name]: VueWordCloud
    },
    data() {
        return {
            words: [
                ['Компания малоуправляема', 1000],
                ['Нечетко определены области ответственности', 500],
                ['Много совещаний, низкая результативность', 250],
                ['Решения не доводятся до результатов', 125],
                ['Планы не выполняются', 60],
                ['Рабочие процессы плохо организованы', 30],
                ['Сотрудники не мотивированы работать на результат', 15],
                ['Исполнители безответственны', 7],
                ['Ухудшается качество продукции, услуг', 3],
                ['Утрачивается лояльность клиентов', 2],
                ['Снижается прибыль', 1],
                ['Развитие компании замедлено', 1],
            ],
        }
    },
    methods: {
        onWordMouseOver(word) {
            //
        }
    },
    mounted() {
        //
    }
}