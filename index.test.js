const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    // await Band.destroy({ truncate: true });

    await sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    Band.destroy({ truncate: true });
  });

  describe("Band tets:", () => {
    it("can create a Band", async () => {
      const response = await Band.create({ name: "AC/DC", genre: "hard rock" });
      expect(response.name).toBe("AC/DC");
      expect(response.genre).toBe("hard rock");
    });
    it("can update a Band", async () => {
      const response = await Band.create({ name: "AC/DC", genre: "hard rock" });
      expect(response.name).toBe("AC/DC");
      expect(response.genre).toBe("hard rock");
      await response.update({ name: "Guns N Roses" });
      expect(response.name).toBe("Guns N Roses");
      expect(response.genre).toBe("hard rock");
    });
    it("can delete a Band", async () => {
      const response = await Band.create({
        name: "AC/DC",
        genre: "hard rock",
      });
      await response.destroy();
      expect(await Band.findAll()).toEqual([]);
    });
  });
});
