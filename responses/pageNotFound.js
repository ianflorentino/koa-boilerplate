module.exports = function *(next) {
  yield next;

  if (404 !== this.status) return;

  this.status = 404;
  this.body = {error: "Not Found: Error with endpoint request"};
  
  /* Example for responding with multiple Content-Types
  switch (this.accepts('json', 'html')) {
    case 'json':
      this.body = {
        error: 'Not Found: Error with endpoint request'
      };
      break;
    case 'html':
      this.type = 'html';
      this.body = '<p>Not Found: Error with endpoint request</p>';
      break;
    default:
      this.type = 'json';
      this.body = {
        error: 'Not Found: Error with endpoint request'
      };
  }  
  */
}
