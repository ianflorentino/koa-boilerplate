module.exports = {
  index: function *() {
    // need to explicitly define status for response, default is 404
    this.status = 200;
    this.body = {jello: "World"};
  }
}
