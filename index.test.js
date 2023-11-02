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
    //await Band.destroy({ truncate: true });
    await sequelize.sync({ force: true }); // clears whole database
  });

  describe("Model tests:", () => {
    describe("Band tests:", () => {
      it("can create a Band", async () => {
        const response = await Band.create({
          name: "AC/DC",
          genre: "hard rock",
        });
        expect(response.name).toBe("AC/DC");
        expect(response.genre).toBe("hard rock");
      });
      it("can update a Band", async () => {
        const response = await Band.create({
          name: "AC/DC",
          genre: "hard rock",
        });
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

    describe("Musician tests:", () => {
      it("can create a Musician", async () => {
        const response = await Musician.create({
          name: "Ace Freely",
          instrument: "electric guitar",
        });
        expect(response.name).toBe("Ace Freely");
        expect(response.instrument).toBe("electric guitar");
      });
      it("can update a Musician", async () => {
        const response = await Musician.create({
          name: "Ace Freely",
          instrument: "electric guitar",
        });
        expect(response.name).toBe("Ace Freely");
        expect(response.instrument).toBe("electric guitar");
        await response.update({ name: "Jon Bon Jovi" });
        expect(response.name).toBe("Jon Bon Jovi");
        expect(response.instrument).toBe("electric guitar");
      });
      it("can delete a Musician", async () => {
        const response = await Musician.create({
          name: "Ace Freely",
          instrument: "electric guitar",
        });
        await response.destroy();
        expect(await Musician.findAll()).toEqual([]);
      });
    });

    describe("Song tests:", () => {
      it("can create a Song", async () => {
        const response = await Song.create({
          title: "Run to the hills",
          year: 1973,
          length: 4,
        });
        expect(response.title).toBe("Run to the hills");
        expect(response.year).toBe(1973);
        expect(response.length).toBe(4);
      });
      it("can update a Song", async () => {
        const response = await Song.create({
          title: "Run to the hills",
          year: 1973,
          length: 4,
        });
        expect(response.title).toBe("Run to the hills");
        expect(response.year).toBe(1973);
        expect(response.length).toBe(4);
        await response.update({
          title: "Highway to hell",
          year: 1972,
          length: 3,
        });
        expect(response.title).toBe("Highway to hell");
        expect(response.year).toBe(1972);
        expect(response.length).toBe(3);
      });
      it("can delete a Song", async () => {
        const response = await Song.create({
          title: "Run to the hills",
          year: 1973,
          length: 4,
        });
        await response.destroy();
        expect(await Song.findAll()).toEqual([]);
      });
    });
  });
});
