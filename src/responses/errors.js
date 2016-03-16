module.exports = function *errors(next) {  
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = {
      error: err.message || 'Internal server error'
    }
    this.app.emit('error', err, this);
  }
}

