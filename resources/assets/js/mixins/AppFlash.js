export default {
    methods: {
        showToastAlert(type, msg) {
            this.$swal({
                title: msg,
                // title: 'Operação bem sucedida <i class="fa fa-arrow-right"></i>!',
                type: type,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 5000
            });
        },

    },
}