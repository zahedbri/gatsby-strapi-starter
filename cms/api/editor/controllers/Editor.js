'use strict';

/**
 * Editor.js controller
 *
 * @description: A set of functions called "actions" for managing `Editor`.
 */

module.exports = {

  /**
   * Retrieve editor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.editor.search(ctx.query);
    } else {
      return strapi.services.editor.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a editor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.editor.fetch(ctx.params);
  },

  /**
   * Count editor records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.editor.count(ctx.query, populate);
  },

  /**
   * Create a/an editor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.editor.add(ctx.request.body);
  },

  /**
   * Update a/an editor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.editor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an editor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.editor.remove(ctx.params);
  }
};
