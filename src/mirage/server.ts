import { createServer, Model, Response } from "miragejs";

export function makeServer() {
  return createServer({
    models: {
      song: Model.extend({}),
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

      // Genres
      const genres = [
        "Pop",
        "Rock",
        "R&B",
        "Hip-Hop",
        "Electronic",
        "Jazz",
        "Country",
        "Funk",
        "Indie",
      ];

      // 50 REALISTIC SONGS (NO PLACEHOLDERS)
      const songs = [
        // Ed Sheeran (3 songs)
        {
          id: 1,
          title: "Shape of You",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: 2,
          title: "Perfect",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: 3,
          title: "Thinking Out Loud",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },

        // The Weeknd (3 songs)
        {
          id: 4,
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: 5,
          title: "Save Your Tears",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: 6,
          title: "Starboy",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },

        // Adele (2 songs)
        {
          id: 7,
          title: "Hello",
          artist: "Adele",
          album: "25",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },
        {
          id: 8,
          title: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },

        // Coldplay (2 songs)
        {
          id: 9,
          title: "Yellow",
          artist: "Coldplay",
          album: "Parachutes",
          year: 2000,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: 10,
          title: "Viva La Vida",
          artist: "Coldplay",
          album: "Viva la Vida or Death and All His Friends",
          year: 2008,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },

        // Dua Lipa (3 songs)
        {
          id: 11,
          title: "Don't Start Now",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: 12,
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: 13,
          title: "New Rules",
          artist: "Dua Lipa",
          album: "Dua Lipa",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },

        // Bruno Mars (3 songs)
        {
          id: 14,
          title: "Uptown Funk",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Funk",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: 15,
          title: "Just the Way You Are",
          artist: "Bruno Mars",
          album: "Doo-Wops & Hooligans",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: 16,
          title: "24K Magic",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "Funk",
          artistImage: artistImages["Bruno Mars"],
        },

        // Taylor Swift (3 songs)
        {
          id: 17,
          title: "Blank Space",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: 18,
          title: "Love Story",
          artist: "Taylor Swift",
          album: "Fearless",
          year: 2008,
          genre: "Country",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: 19,
          title: "Shake It Off",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },

        // Billie Eilish (2 songs)
        {
          id: 20,
          title: "Bad Guy",
          artist: "Billie Eilish",
          album: "When We All Fall Asleep, Where Do We Go?",
          year: 2019,
          genre: "Electropop",
          artistImage: artistImages["Billie Eilish"],
        },
        {
          id: 21,
          title: "Happier Than Ever",
          artist: "Billie Eilish",
          album: "Happier Than Ever",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Billie Eilish"],
        },

        // Drake (3 songs)
        {
          id: 22,
          title: "God's Plan",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: 23,
          title: "Hotline Bling",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: 24,
          title: "One Dance",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },

        // Kendrick Lamar (2 songs)
        {
          id: 25,
          title: "HUMBLE.",
          artist: "Kendrick Lamar",
          album: "DAMN.",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistImages["Kendrick Lamar"],
        },
        {
          id: 26,
          title: "Alright",
          artist: "Kendrick Lamar",
          album: "To Pimp a Butterfly",
          year: 2015,
          genre: "Hip-Hop",
          artistImage: artistImages["Kendrick Lamar"],
        },

        // BTS (3 songs)
        {
          id: 27,
          title: "Dynamite",
          artist: "BTS",
          album: "BE",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },
        {
          id: 28,
          title: "Butter",
          artist: "BTS",
          album: "Butter",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },
        {
          id: 29,
          title: "Boy With Luv",
          artist: "BTS",
          album: "Map of the Soul: Persona",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["BTS"],
        },

        // Post Malone (3 songs)
        {
          id: 30,
          title: "Circles",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: 31,
          title: "Sunflower",
          artist: "Post Malone",
          album: "Spider-Man: Into the Spider-Verse",
          year: 2018,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: 32,
          title: "Rockstar",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistImages["Post Malone"],
        },

        // Ariana Grande (3 songs)
        {
          id: 33,
          title: "thank u, next",
          artist: "Ariana Grande",
          album: "thank u, next",
          year: 2018,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },
        {
          id: 34,
          title: "7 rings",
          artist: "Ariana Grande",
          album: "thank u, next",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },
        {
          id: 35,
          title: "Side to Side",
          artist: "Ariana Grande",
          album: "Dangerous Woman",
          year: 2016,
          genre: "Pop",
          artistImage: artistImages["Ariana Grande"],
        },

        // Justin Bieber (3 songs)
        {
          id: 36,
          title: "Sorry",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: 37,
          title: "Love Yourself",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: 38,
          title: "Stay",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },

        // Additional popular songs to reach 50
        {
          id: 39,
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: 40,
          title: "Watermelon Sugar",
          artist: "Harry Styles",
          album: "Fine Line",
          year: 2019,
          genre: "Pop",
          artistImage: "https://i.imgur.com/HarryStyles.jpg",
        },
        {
          id: 41,
          title: "Stay",
          artist: "The Kid LAROI",
          album: "F*CK LOVE 3",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/TheKidLAROI.jpg",
        },
        {
          id: 42,
          title: "Montero",
          artist: "Lil Nas X",
          album: "Montero",
          year: 2021,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/LilNasX.jpg",
        },
        {
          id: 43,
          title: "Good 4 U",
          artist: "Olivia Rodrigo",
          album: "SOUR",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/OliviaRodrigo.jpg",
        },
        {
          id: 44,
          title: "Peaches",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: 45,
          title: "Kiss Me More",
          artist: "Doja Cat",
          album: "Planet Her",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/DojaCat.jpg",
        },
        {
          id: 46,
          title: "Industry Baby",
          artist: "Lil Nas X",
          album: "Montero",
          year: 2021,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/LilNasX.jpg",
        },
        {
          id: 47,
          title: "Stay",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: 48,
          title: "Mood",
          artist: "24kGoldn",
          album: "El Dorado",
          year: 2020,
          genre: "Hip-Hop",
          artistImage: "https://i.imgur.com/24kGoldn.jpg",
        },
        {
          id: 49,
          title: "Drivers License",
          artist: "Olivia Rodrigo",
          album: "SOUR",
          year: 2021,
          genre: "Pop",
          artistImage: "https://i.imgur.com/OliviaRodrigo.jpg",
        },
        {
          id: 50,
          title: "Save Your Tears (Remix)",
          artist: "The Weeknd",
          album: "After Hours (Deluxe)",
          year: 2021,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
      ];

      // Seed all 50 songs
      songs.forEach(song => {
        server.create("song",{
          ...song,
          id: String(song.id), // Ensure ID is a string for Mirage
         });
      });
    },

    routes() {
      this.namespace = "api";

      // CRUD OPERATIONS

      // 1. CREATE - Add new song
      this.post("/songs", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('song',attrs);
      });

      // 2. READ
      // Get all songs (with filters)
      this.get("/songs", (schema, request) => {
        const { artist, album, genre, year, q } = request.queryParams;
        let songs = schema.all('song');

        if (q) {
          const query =
            typeof q === "string"
              ? q.toLowerCase()
              : Array.isArray(q)
              ? q.join(" ").toLowerCase()
              : "";
          songs = songs.filter(
            (song) =>
              song.title.toLowerCase().includes(query) ||
              song.artist.toLowerCase().includes(query) ||
              song.album.toLowerCase().includes(query)
          );
        }

        if (artist) songs = songs.filter((song) => song.artist === artist);
        if (album) songs = songs.filter((song) => song.album === album);
        if (genre) songs = songs.filter((song) => song.genre === genre);
        if (year) songs = songs.filter((song) => song.year == year);

        return songs;
      });

      // Get single song
      this.get("/songs/:id", (schema, request) => {
        return schema.find('song',request.params.id);
      });

      // 3. UPDATE - Edit song
      this.patch("/songs/:id", (schema, request) => {
  const attrs = JSON.parse(request.requestBody);
  const song = schema.songs.find(request.params.id); // Fixed: schema.songs.find()
  
  if (!song) {
    return new Response(
      404,
      { "Content-Type": "application/json" },
      { error: "Song not found" }
    );
  }
  
  return song.update(attrs);
});

      // 4. DELETE - Remove song
      this.delete("/songs/:id", (schema, request) => {
        return schema.find('song', request.params.id).destroy();
      });
    },
  });
}
