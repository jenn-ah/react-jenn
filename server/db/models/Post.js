const bookshelf = require('./bookshelf');

class Post extends bookshelf.Model {
  get tableName() { return 'posts'; }
  get hasTimestamps() { return true; }

}

module.exports = bookshelf.Model('Post', Post);