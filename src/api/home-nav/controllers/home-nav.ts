/**
 * home-nav controller
 */

import { factories } from "@strapi/strapi";
import { removeAtTime } from '../../../utils'

export default factories.createCoreController("api::home-nav.home-nav", {
  async find(ctx) {
    ctx.query = { populate: "*", ...ctx.query };
    const { data, meta } = await super.find(ctx);

    return { data: removeAtTime(data), meta };
  },
});
