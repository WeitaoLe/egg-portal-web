'use strict';
const egg = require('egg');
const Collection = require('../lib/db/collection');
const Query = require('../lib/db/query');
module.exports = class ArticeService extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.colllection = new Collection(ctx.db, 'article');
  }
  async getArtilceList(json = {}) {
    // const { title, categoryId, status, pageIndex, pageSize } = json;
    // const query = new Query();
    // query.where.categoryId = categoryId;
    // query.where.status = status;
    // query.like.title = title;
    // query.pageIndex = pageIndex;
    // query.pageSize = pageSize;
    // return this.colllection.getPager(query);
    const result = await this.ctx.curl(`http://boyue2.analysys.cn/api/joinus/listPositionType`, {
      dataType: 'json'
    });
    console.log(result.data)
    return result.data;
  }
  // async getPicture(uid) {
  //   const result = await this.ctx.curl(`http://boyue2.analysys.cn/api/joinus/listPositionType`, { dataType: 'json' });
  //   return result.data;
  // }
  getArticle(id) {
    return this.colllection.getByWhere({
      id
    });
  }
  saveArticle(json) {
    if (json.id) {
      return this.colllection.update({
        id: json.id
      }, json);
    }
    json.id = this.ctx.db.getUniqueId();
    this.colllection.add(json);
    return json.id;
  }
  deleteArticle(id) {
    return this.colllection.delete({
      id
    });
  }
};