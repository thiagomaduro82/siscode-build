const bcrypt = require('bcrypt')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adminusers').del()
    .then(function () {
      // Inserts seed entries
      var salt = bcrypt.genSaltSync(10)
      var senhacript = bcrypt.hashSync("th200182",salt)
      return knex('adminusers').insert([
        {name: 'Thiago Amaral', email: 'thiagomaduro82@gmail.com', password: senhacript}
      ]);
    });
};
