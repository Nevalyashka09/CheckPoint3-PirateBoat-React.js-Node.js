const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  isTileExist(tile) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE coord_x = ? AND coord_y = ?`,
      [tile.coord_x, tile.coord_y]
    );
  }
}

module.exports = TileManager;
