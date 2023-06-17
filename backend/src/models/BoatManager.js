const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `SELECT boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, has_treasure
       FROM ${this.table} AS boat
       LEFT JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
       WHERE boat.name = ?`,
      [name]
    );
  }

  update(boat) {
    return this.connection.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
  }

  reset(boat) {
    return this.connection.query(
      `UPDATE ${this.table} SET coord_x = 1, coord_y = 1 WHERE name = ?`,
      [boat.name]
    );
  }
}

module.exports = BoatManager;
