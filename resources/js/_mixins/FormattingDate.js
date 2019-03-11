import moment from "moment";

export const formattingDate = {
  computed: {

    startLimit() {
        return moment(new Date().toISOString().substr(0, 10)).add(6, 'month')
          .format("DD/MM/YYYY")
      },

      endStart() {
        return this.article.start ?
          moment(this.article.start).format("DD/MM/YYYY") :
          ""
      },

      formattingStartDate() {
        return this.article.start ?
          moment(this.article.start).format("DD/MM/YYYY") :
          ""
      },
      formattingEndDate() {
        return this.article.end ?
          moment(this.article.end).format("DD/MM/YYYY") :
          ""
      },
      formattingPresentDate() {
        moment.locale("pt");
        return this.article.created_at
          ? moment(this.article.created_at).format("LL")
          : "";
        // moment(this.article.created_at).format("dddd, MMMM Do YYYY") :
      }
  },

}
