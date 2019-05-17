'use strict';

/**
 * Slideshow.js controller
 *
 * @description: A set of functions called "actions" for managing `Slideshow`.
 */

module.exports = {

  /**
   * Retrieve slideshow records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.slideshow.search(ctx.query);
    } else {
      return strapi.services.slideshow.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a slideshow record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.slideshow.fetch(ctx.params);
  },

  /**
   * Count slideshow records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.slideshow.count(ctx.query, populate);
  },

  /**
   * Create a/an slideshow record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.slideshow.add(ctx.request.body);
  },

  /**
   * Update a/an slideshow record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.slideshow.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an slideshow record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.slideshow.remove(ctx.params);
  }
};
