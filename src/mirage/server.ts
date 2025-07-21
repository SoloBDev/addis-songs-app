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
        "Ed Sheeran": "https://i.ibb.co/LDYvJkzG/sheeran.webp",
        "The Weeknd": "https://i.ibb.co/fVRwJfsL/the-weekend.webp",
        Adele: "https://i.ibb.co/HfNQqnws/adele.webp",
        Coldplay: "https://i.ibb.co/4gtpMfRw/coldplay.webp",
        "Dua Lipa": "https://i.ibb.co/VkNgv8D/dua.webp",
        "Bruno Mars": "https://i.ibb.co/Z1Xpfdtf/bruno.webp",
        "Taylor Swift": "https://i.ibb.co/20ThZjvw/taylor.webp",
        Drake: "https://i.ibb.co/PssCqZSJ/drakeorg.webp",
        "Post Malone": "https://i.ibb.co/0VvJhwrc/postmalone.webp",
        "Justin Bieber": "https://i.ibb.co/v6N69bzp/justinorg.webp",
      };

      // 60 REALISTIC SONGS (NO PLACEHOLDERS)
      const songs: Song[] = [
        // Ed Sheeran (6 songs)
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
          title: "Thinking Out Loud",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "3",
          title: "Perfect",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Rock",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "4",
          title: "Photograph",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "5",
          title: "Castle on the Hill",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },
        {
          id: "6",
          title: "Bad Habits",
          artist: "Ed Sheeran",
          album: "=",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Ed Sheeran"],
        },

        // The Weeknd (7 songs)
        {
          id: "7",
          title: "Starboy",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "8",
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "9",
          title: "Save Your Tears",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "10",
          title: "Reminders",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "Rock",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "11",
          title: "Call Out My Name",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "12",
          title: "Save Your Tears (Remix)",
          artist: "The Weeknd",
          album: "After Hours (Deluxe)",
          year: 2021,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },
        {
          id: "13",
          title: "The Hills",
          artist: "The Weeknd",
          album: "Beauty Behind the Madness",
          year: 2015,
          genre: "R&B",
          artistImage: artistImages["The Weeknd"],
        },

        // Adele (4 songs)
        {
          id: "14",
          title: "Hello",
          artist: "Adele",
          album: "25",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },
        {
          id: "15",
          title: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },
        {
          id: "16",
          title: "Someone Like You",
          artist: "Adele",
          album: "21",
          year: 2011,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },
        {
          id: "17",
          title: "Easy On Me",
          artist: "Adele",
          album: "30",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Adele"],
        },

        // Coldplay (5 songs)
        {
          id: "18",
          title: "Yellow",
          artist: "Coldplay",
          album: "Parachutes",
          year: 2000,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: "19",
          title: "Viva La Vida",
          artist: "Coldplay",
          album: "Viva la Vida or Death and All His Friends",
          year: 2008,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: "20",
          title: "The Scientist",
          artist: "Coldplay",
          album: "A Rush of Blood to the Head",
          year: 2002,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: "21",
          title: "Paradise",
          artist: "Coldplay",
          album: "Mylo Xyloto",
          year: 2011,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },
        {
          id: "22",
          title: "Fix You",
          artist: "Coldplay",
          album: "X&Y",
          year: 2005,
          genre: "Rock",
          artistImage: artistImages["Coldplay"],
        },

        // Dua Lipa (5 songs)
        {
          id: "23",
          title: "Don't Start Now",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "24",
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "25",
          title: "New Rules",
          artist: "Dua Lipa",
          album: "Dua Lipa",
          year: 2017,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "26",
          title: "Physical",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },
        {
          id: "27",
          title: "Break My Heart",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Dua Lipa"],
        },

        // Bruno Mars (6 songs)
        {
          id: "28",
          title: "Uptown Funk",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Rock",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "29",
          title: "Just the Way You Are",
          artist: "Bruno Mars",
          album: "Doo-Wops & Hooligans",
          year: 2010,
          genre: "Pop",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "30",
          title: "24K Magic",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "Rock",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "31",
          title: "Billionaire",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Funk",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "32",
          title: "Street of Gold",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["Bruno Mars"],
        },
        {
          id: "33",
          title: "That's What I Like",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "R&B",
          artistImage: artistImages["Bruno Mars"],
        },

        // Taylor Swift (5 songs)
        {
          id: "34",
          title: "Blank Space",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "35",
          title: "Love Story",
          artist: "Taylor Swift",
          album: "Fearless",
          year: 2008,
          genre: "Country",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "36",
          title: "Shake It Off",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "37",
          title: "Cardigan",
          artist: "Taylor Swift",
          album: "Folklore",
          year: 2020,
          genre: "Indie",
          artistImage: artistImages["Taylor Swift"],
        },
        {
          id: "38",
          title: "Anti-Hero",
          artist: "Taylor Swift",
          album: "Midnights",
          year: 2022,
          genre: "Pop",
          artistImage: artistImages["Taylor Swift"],
        },

        // Drake (6 songs)
        {
          id: "39",
          title: "God's Plan",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "40",
          title: "Hotline Bling",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "41",
          title: "One Dance",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Electronic",
          artistImage: artistImages["Drake"],
        },
        {
          id: "42",
          title: "In My Feelings",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "43",
          title: "Started From the Bottom",
          artist: "Drake",
          album: "Nothing Was the Same",
          year: 2013,
          genre: "Hip-Hop",
          artistImage: artistImages["Drake"],
        },
        {
          id: "44",
          title: "Hold On, We're Going Home",
          artist: "Drake",
          album: "Nothing Was the Same",
          year: 2013,
          genre: "R&B",
          artistImage: artistImages["Drake"],
        },

        // Post Malone (6 songs)
        {
          id: "45",
          title: "Circles",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "46",
          title: "Sunflower",
          artist: "Post Malone",
          album: "Spider-Man: Into the Spider-Verse",
          year: 2018,
          genre: "Electronic",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "47",
          title: "Rockstar",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "48",
          title: "Stay",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "49",
          title: "Better Now",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2018,
          genre: "Pop",
          artistImage: artistImages["Post Malone"],
        },
        {
          id: "50",
          title: "Congratulations",
          artist: "Post Malone",
          album: "Stoney",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistImages["Post Malone"],
        },

        // Justin Bieber (6 songs)
        {
          id: "51",
          title: "Sorry",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "R&B",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "52",
          title: "Love Yourself",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "53",
          title: "Stay",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "54",
          title: "Peaches",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "55",
          title: "What Do You Mean?",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "56",
          title: "Yummy",
          artist: "Justin Bieber",
          album: "Changes",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "57",
          title: "Ghost",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "58",
          title: "Company",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "R&B",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "59",
          title: "Holy",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2020,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
        {
          id: "60",
          title: "Lonely",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistImages["Justin Bieber"],
        },
      ];

      // Function to shuffle array randomly
      function shuffleArray(array: Song[]) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      }

      // Create the shuffled songs array
      const shuffledSongs = shuffleArray(songs);

      // Seed all 60 songs in random order
      shuffledSongs.forEach((song, index) => {
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
