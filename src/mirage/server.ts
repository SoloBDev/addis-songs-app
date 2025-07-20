import { createServer, Model, Response } from "miragejs";
import { Song } from "../redux/songs/songsSlice";
import { ModelDefinition, Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

// Define your Mirage model to match your Song interface
type SongModel = ModelDefinition<Omit<Song, "id"> & { id: string }>;

type AppRegistry = Registry<
  {
    song: typeof Model;
  },
  {}
>;

type AppSchema = Schema<AppRegistry>;

export function makeServer() {
  return createServer({
    models: {
      song: Model as SongModel,
    },

    seeds(server) {
      // Artist images (placeholder URLs)
      const artistImages = {
        "Ed Sheeran": "https://i.imgur.com/EdSheeran.jpg",
        "The Weeknd": "https://i.imgur.com/TheWeeknd.jpg",
        Adele: "https://i.imgur.com/Adele.jpg",
        Coldplay: "https://i.imgur.com/Coldplay.jpg",
        "Dua Lipa": "https://i.imgur.com/DuaLipa.jpg",
        "Bruno Mars": "https://i.imgur.com/BrunoMars.jpg",
        "Taylor Swift": "https://i.imgur.com/TaylorSwift.jpg",
        "Billie Eilish": "https://i.imgur.com/BillieEilish.jpg",
        Drake: "https://i.imgur.com/Drake.jpg",
        "Kendrick Lamar": "https://i.imgur.com/KendrickLamar.jpg",
        BTS: "https://i.imgur.com/BTS.jpg",
        "Post Malone": "https://i.imgur.com/PostMalone.jpg",
        "Ariana Grande": "https://i.imgur.com/ArianaGrande.jpg",
        "Justin Bieber": "https://i.imgur.com/JustinBieber.jpg",
      };

      // 50 REALISTIC SONGS (NO PLACEHOLDERS)
      const songs: Song[] = [
        // Ed Sheeran (3 songs)
        {
          id: "1",
          title: "Shape of You",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "2",
          title: "Perfect",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "3",
          title: "Thinking Out Loud",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },

        // The Weeknd (3 songs)
        {
          id: "4",
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "5",
          title: "Save Your Tears",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "6",
          title: "Starboy",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },

        // Adele (2 songs)
        {
          id: "7",
          title: "Hello",
          artist: "Adele",
          album: "25",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },
        {
          id: "8",
          title: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },

        // Coldplay (2 songs)
        {
          id: "9",
          title: "Yellow",
          artist: "Coldplay",
          album: "Parachutes",
          year: 2000,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: "10",
          title: "Viva La Vida",
          artist: "Coldplay",
          album: "Viva la Vida or Death and All His Friends",
          year: 2008,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },

        // Dua Lipa (3 songs)
        {
          id: "11",
          title: "Don't Start Now",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "12",
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "13",
          title: "New Rules",
          artist: "Dua Lipa",
          album: "Dua Lipa",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },

        // Bruno Mars (3 songs)
        {
          id: "14",
          title: "Uptown Funk",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Funk",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "15",
          title: "Just the Way You Are",
          artist: "Bruno Mars",
          album: "Doo-Wops & Hooligans",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "16",
          title: "24K Magic",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "Funk",
          artistImage: artistImages["Bruno Mars"],
        },

        // Taylor Swift (3 songs)
        {
          id: "17",
          title: "Blank Space",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "18",
          title: "Love Story",
          artist: "Taylor Swift",
          album: "Fearless",
          year: 2008,
          genre: "Country",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "19",
          title: "Shake It Off",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },

        // Billie Eilish (2 songs)
        {
          id: "20",
          title: "Bad Guy",
          artist: "Billie Eilish",
          album: "When We All Fall Asleep, Where Do We Go?",
          year: 2019,
          genre: "Electropop",
          artistImage: artistImages["Billie Eilish"],
        },
        {
          id: "21",
          title: "Happier Than Ever",
          artist: "Billie Eilish",
          album: "Happier Than Ever",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Billie Eilish"],
        },

        // Drake (3 songs)
        {
          id: "22",
          title: "God's Plan",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "23",
          title: "Hotline Bling",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "24",
          title: "One Dance",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },

        // Kendrick Lamar (2 songs)
        {
          id: "25",
          title: "HUMBLE.",
          artist: "Kendrick Lamar",
          album: "DAMN.",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistImages["Kendrick Lamar"],
        },
        {
          id: "26",
          title: "Alright",
          artist: "Kendrick Lamar",
          album: "To Pimp a Butterfly",
          year: 2015,
          genre: "Hip-Hop",
          artistImage: artistImages["Kendrick Lamar"],
        },

        // BTS (3 songs)
        {
          id: "27",
          title: "Dynamite",
          artist: "BTS",
          album: "BE",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },
        {
          id: "28",
          title: "Butter",
          artist: "BTS",
          album: "Butter",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },
        {
          id: "29",
          title: "Boy With Luv",
          artist: "BTS",
          album: "Map of the Soul: Persona",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },

        // Post Malone (3 songs)
        {
          id: "30",
          title: "Circles",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "31",
          title: "Sunflower",
          artist: "Post Malone",
          album: "Spider-Man: Into the Spider-Verse",
          year: 2018,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "32",
          title: "Rockstar",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistImages["Post Malone"],
        },

        // Ariana Grande (3 songs)
        {
          id: "33",
          title: "thank u, next",
          artist: "Ariana Grande",
          album: "thank u, next",
          year: 2018,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },
        {
          id: "34",
          title: "7 rings",
          artist: "Ariana Grande",
          album: "thank u, next",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },
        {
          id: "35",
          title: "Side to Side",
          artist: "Ariana Grande",
          album: "Dangerous Woman",
          year: 2016,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },

        // Justin Bieber (3 songs)
        {
          id: "36",
          title: "Sorry",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "37",
          title: "Love Yourself",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "38",
          title: "Stay",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },

        // Additional popular songs to reach 50
        {
          id: "39",
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "40",
          title: "Watermelon Sugar",
          artist: "Harry Styles",
          album: "Fine Line",
          year: 2019,
          genre: "Pop",
          artistImage: "https://i.imgur.com/HarryStyles.jpg",
        },
        {
          id: "41",
          title: "Stay",
          artist: "The Kid LAROI",
          album: "F*CK LOVE 3",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/TheKidLAROI.jpg",
        },
        {
          id: "42",
          title: "Montero",
          artist: "Lil Nas X",
          album: "Montero",
          year: 2021,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/LilNasX.jpg",
        },
        {
          id: "43",
          title: "Good 4 U",
          artist: "Olivia Rodrigo",
          album: "SOUR",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/OliviaRodrigo.jpg",
        },
        {
          id: "44",
          title: "Peaches",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "45",
          title: "Kiss Me More",
          artist: "Doja Cat",
          album: "Planet Her",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/DojaCat.jpg",
        },
        {
          id: "46",
          title: "Industry Baby",
          artist: "Lil Nas X",
          album: "Montero",
          year: 2021,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/LilNasX.jpg",
        },
        {
          id: "47",
          title: "Stay",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "48",
          title: "Mood",
          artist: "24kGoldn",
          album: "El Dorado",
          year: 2020,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/24kGoldn.jpg",
        },
        {
          id: "49",
          title: "Drivers License",
          artist: "Olivia Rodrigo",
          album: "SOUR",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/OliviaRodrigo.jpg",
        },
        {
          id: "50",
          title: "Save Your Tears (Remix)",
          artist: "The Weeknd",
          album: "After Hours (Deluxe)",
          year: 2021,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
      ];

      // Seed all 50 songs
      songs.forEach((song, index) => {
        server.create("song", {
          ...song,
          id: song.id || (index + 1).toString(), // Ensure id is a string
        });
      });
    },

    routes() {
      this.namespace = "api";
      this.passthrough();

      this.post("/songs", (schema: AppSchema, request) => {
        const attrs = JSON.parse(request.requestBody) as Omit<Song, "id">;
        return schema.create("song", attrs as any);
      });

      this.get("/songs", (schema: AppSchema, request) => {
        const { artist, album, genre, year, q } = request.queryParams;
        let songs = schema.all("song").models;

        if (q) {
          const query = q.toString().toLowerCase();
          songs = songs.filter((song) => {
            const attrs = song.attrs as Song;
            return (
              attrs.title.toLowerCase().includes(query) ||
              attrs.artist.toLowerCase().includes(query) ||
              attrs.album.toLowerCase().includes(query)
            );
          });
        }

        if (artist)
          songs = songs.filter(
            (song) => (song.attrs as Song).artist === artist
          );
        if (album)
          songs = songs.filter((song) => (song.attrs as Song).album === album);
        if (genre)
          songs = songs.filter((song) => (song.attrs as Song).genre === genre);
        if (year)
          songs = songs.filter(
            (song) => (song.attrs as Song).year === Number(year)
          );

        return songs;
      });

      this.get("/songs/:id", (schema: AppSchema, request) => {
        return schema.find("song", request.params.id);
      });

      this.put("/songs/:id", (schema: AppSchema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody) as Partial<Song>;
        const song = schema.find("song", id);

        if (!song) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: "Song not found" }
          );
        }

        song.update(attrs);
        return new Response(
          200,
          { "Content-Type": "application/json" },
          song.attrs
        );
      });

      this.delete("/songs/:id", (schema: AppSchema, request) => {
        const song = schema.find("song", request.params.id);
        if (!song) {
          return new Response(
            404,
            { "Content-Type": "application/json" },
            { error: "Song not found" }
          );
        }
        song.destroy();
        return new Response(204, { "Content-Type": "application/json" }, {});
      });
    },
  });
}
