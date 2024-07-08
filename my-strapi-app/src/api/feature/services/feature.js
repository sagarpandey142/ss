// ./src/api/feature/services/feature.js

module.exports = {
    async find() {
      return await strapi.query('feature').find();
    },
  
    async findOne(params) {
      return await strapi.query('feature').findOne(params);
    },
  };
  