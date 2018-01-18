export default {
    name: 'Ytplayer',
    props: [
        'videoId',
    ],
    data() {
        return {
            videoUrl: ''
        }
    },
    methods: {
        onPlay() {
            this.videoUrl = 'https://www.youtube.com/embed/' + this.videoId
        },
        onClose() {
            this.videoUrl = ''
        }
    },
    mounted() {
        //
    }
}