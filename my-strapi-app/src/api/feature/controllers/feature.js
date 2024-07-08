// ./src/api/feature/controllers/feature.js

module.exports = {
    async find(ctx) {
      const entries = await strapi.services.feature.find();
      return entries;
    },
  
    async findOne(ctx) {
      const { id } = ctx.params;
      const entry = await strapi.services.feature.findOne({ id });
      return entry;
    },
  };
  