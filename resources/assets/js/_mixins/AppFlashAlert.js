export const appFlashAlert = {
  methods: {
    showToastAlert(type, msg, toast) {
        this.$swal({
          // title: msg,
          // // title: 'Operação bem sucedida <i class="fa fa-arrow-right"></i>!',
          // type: type,
          // toast: true,
          // position: "top-end",
          // showConfirmButton: false,
          // timer: 5000
          toast: toast,
          position: 'top-end',
          type: type,
          title: msg,
          showConfirmButton: false,
          timer: 3000
        });
      },
      //Ainda n\ao utilizado
      errorAlert(message) {
        this.$swal(message,
          'That thing is still around?',
          'question');
      }

  },
}

// Swal.fire({
//   position: 'top-end',
//   type: 'success',
//   title: 'Your work has been saved',
//   showConfirmButton: false,
//   timer: 1500
// })
