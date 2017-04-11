export default {
  methods: {
    post (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        opt.err && opt.err('')
      })
    },
    get (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        // opt.error('')
      })
    }
  }
}
