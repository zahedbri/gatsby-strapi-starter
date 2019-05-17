'use strict';

/**
 * Teaser.js controller
 *
 * @description: A set of functions called "actions" for managing `Teaser`.
 */

module.exports = {

  /**
   * Retrieve teaser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.teaser.search(ctx.query);
    } else {
      return strapi.services.teaser.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a teaser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.teaser.fetch(ctx.params);
  },

  /**
   * Count teaser records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.teaser.count(ctx.query, populate);
  },

  /**
   * Create a/an teaser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.teaser.add(ctx.request.body);
  },

  /**
   * Update a/an teaser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.teaser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an teaser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.teaser.remove(ctx.params);
  }
};
