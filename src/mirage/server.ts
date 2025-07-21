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

      const artistData = {
        "Ed Sheeran": {
          image: "https://i.ibb.co/LDYvJkzG/sheeran.webp",
          profile: "https://i.ibb.co/zVRfBBqN/ed-pp.jpg",
        },
        "The Weeknd": {
          image: "https://i.ibb.co/fVRwJfsL/the-weekend.webp",
          profile: "https://i.ibb.co/hRD2LZS3/abel-pp.jpg",
        },
        "Adele": {
          image: "https://i.ibb.co/HfNQqnws/adele.webp",
          profile: "https://i.ibb.co/WvL5hVqT/adele-pp.jpg",
        },
        "Coldplay": {
          image: "https://i.ibb.co/4gtpMfRw/coldplay.webp",
          profile: "https://i.ibb.co/WWFNQfgp/cold-pp.jpg",
        },
        "Dua Lipa": {
          image: "https://i.ibb.co/VkNgv8D/dua.webp",
          profile: "https://i.ibb.co/3m4DFtnZ/dua-pp.jpg",
        },
        "Bruno Mars": {
          image: "https://i.ibb.co/Z1Xpfdtf/bruno.webp",
          profile: "https://i.ibb.co/C5HWkWQ1/bruno-pp.jpg",
        },
        "Taylor Swift": {
          image: "https://i.ibb.co/1Ydnvp4B/taylor.jpg",
          profile: "https://i.ibb.co/DPnN5fht/taylor-pp.jpg",
        },
        Drake: {
          image: "https://i.ibb.co/PssCqZSJ/drakeorg.webp",
          profile: "https://i.ibb.co/SXFcXmkV/barca.jpg",
        },
        "Post Malone": {
          image: "https://i.ibb.co/0VvJhwrc/postmalone.webp",
          profile: "https://i.ibb.co/nTL5xTd/postM.jpg",
        },
        "Justin Bieber": {
          image: "https://i.ibb.co/v6N69bzp/justinorg.webp",
          profile: "https://i.ibb.co/274NmbZ9/justin-pp.jpg",
        },
      };

      const songs: Song[] = [
        // Ed Sheeran (6 songs)
        {
          id: "1",
          title: "Shape of You",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistData["Ed Sheeran"].image,
          views: "5.6B",
        },
        {
          id: "2",
          title: "Thinking Out Loud",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistData["Ed Sheeran"].image,
          views: "2.8B",
        },
        {
          id: "3",
          title: "Perfect",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Rock",
          artistImage: artistData["Ed Sheeran"].image,
          views: "2.5B",
        },
        {
          id: "4",
          title: "Photograph",
          artist: "Ed Sheeran",
          album: "x (Multiply)",
          year: 2014,
          genre: "Pop",
          artistImage: artistData["Ed Sheeran"].image,
          views: "1.2B",
        },
        {
          id: "5",
          title: "Castle on the Hill",
          artist: "Ed Sheeran",
          album: "÷ (Divide)",
          year: 2017,
          genre: "Pop",
          artistImage: artistData["Ed Sheeran"].image,
          views: "1.8B",
        },
        {
          id: "6",
          title: "Bad Habits",
          artist: "Ed Sheeran",
          album: "=",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Ed Sheeran"].image,
          views: "1.1B",
        },

        // The Weeknd (7 songs)
        {
          id: "7",
          title: "Starboy",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "2.3B",
        },
        {
          id: "8",
          title: "Blinding Lights",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "3.5B",
        },
        {
          id: "9",
          title: "Save Your Tears",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "2.1B",
        },
        {
          id: "10",
          title: "Reminders",
          artist: "The Weeknd",
          album: "After Hours",
          year: 2020,
          genre: "Rock",
          artistImage: artistData["The Weeknd"].image,
          views: "750M",
        },
        {
          id: "11",
          title: "Call Out My Name",
          artist: "The Weeknd",
          album: "Starboy",
          year: 2016,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "1.4B",
        },
        {
          id: "12",
          title: "Save Your Tears (Remix)",
          artist: "The Weeknd",
          album: "After Hours (Deluxe)",
          year: 2021,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "900M",
        },
        {
          id: "13",
          title: "The Hills",
          artist: "The Weeknd",
          album: "Beauty Behind the Madness",
          year: 2015,
          genre: "R&B",
          artistImage: artistData["The Weeknd"].image,
          views: "1.9B",
        },

        // Adele (4 songs)
        {
          id: "14",
          title: "Hello",
          artist: "Adele",
          album: "25",
          year: 2015,
          genre: "Pop",
          artistImage: artistData["Adele"].image,
          views: "3.2B",
        },
        {
          id: "15",
          title: "Rolling in the Deep",
          artist: "Adele",
          album: "21",
          year: 2010,
          genre: "Pop",
          artistImage: artistData["Adele"].image,
          views: "2.1B",
        },
        {
          id: "16",
          title: "Someone Like You",
          artist: "Adele",
          album: "21",
          year: 2011,
          genre: "Pop",
          artistImage: artistData["Adele"].image,
          views: "1.8B",
        },
        {
          id: "17",
          title: "Easy On Me",
          artist: "Adele",
          album: "30",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Adele"].image,
          views: "1.5B",
        },

        // Coldplay (5 songs)
        {
          id: "18",
          title: "Yellow",
          artist: "Coldplay",
          album: "Parachutes",
          year: 2000,
          genre: "Rock",
          artistImage: artistData["Coldplay"].image,
          views: "1.2B",
        },
        {
          id: "19",
          title: "Viva La Vida",
          artist: "Coldplay",
          album: "Viva la Vida or Death and All His Friends",
          year: 2008,
          genre: "Rock",
          artistImage: artistData["Coldplay"].image,
          views: "1.6B",
        },
        {
          id: "20",
          title: "The Scientist",
          artist: "Coldplay",
          album: "A Rush of Blood to the Head",
          year: 2002,
          genre: "Rock",
          artistImage: artistData["Coldplay"].image,
          views: "850M",
        },
        {
          id: "21",
          title: "Paradise",
          artist: "Coldplay",
          album: "Mylo Xyloto",
          year: 2011,
          genre: "Rock",
          artistImage: artistData["Coldplay"].image,
          views: "1.3B",
        },
        {
          id: "22",
          title: "Fix You",
          artist: "Coldplay",
          album: "X&Y",
          year: 2005,
          genre: "Rock",
          artistImage: artistData["Coldplay"].image,
          views: "1.1B",
        },

        // Dua Lipa (5 songs)
        {
          id: "23",
          title: "Don't Start Now",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2019,
          genre: "Pop",
          artistImage: artistData["Dua Lipa"].image,
          views: "2.4B",
        },
        {
          id: "24",
          title: "Levitating",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistData["Dua Lipa"].image,
          views: "1.8B",
        },
        {
          id: "25",
          title: "New Rules",
          artist: "Dua Lipa",
          album: "Dua Lipa",
          year: 2017,
          genre: "Pop",
          artistImage: artistData["Dua Lipa"].image,
          views: "2.1B",
        },
        {
          id: "26",
          title: "Physical",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistData["Dua Lipa"].image,
          views: "750M",
        },
        {
          id: "27",
          title: "Break My Heart",
          artist: "Dua Lipa",
          album: "Future Nostalgia",
          year: 2020,
          genre: "Pop",
          artistImage: artistData["Dua Lipa"].image,
          views: "1.2B",
        },

        // Bruno Mars (6 songs)
        {
          id: "28",
          title: "Uptown Funk",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Rock",
          artistImage: artistData["Bruno Mars"].image,
          views: "4.5B",
        },
        {
          id: "29",
          title: "Just the Way You Are",
          artist: "Bruno Mars",
          album: "Doo-Wops & Hooligans",
          year: 2010,
          genre: "Pop",
          artistImage: artistData["Bruno Mars"].image,
          views: "2.2B",
        },
        {
          id: "30",
          title: "24K Magic",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "Rock",
          artistImage: artistData["Bruno Mars"].image,
          views: "1.9B",
        },
        {
          id: "31",
          title: "Billionaire",
          artist: "Bruno Mars",
          album: "Uptown Special",
          year: 2014,
          genre: "Funk",
          artistImage: artistData["Bruno Mars"].image,
          views: "1.1B",
        },
        {
          id: "32",
          title: "Street of Gold",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "R&B",
          artistImage: artistData["Bruno Mars"].image,
          views: "850M",
        },
        {
          id: "33",
          title: "That's What I Like",
          artist: "Bruno Mars",
          album: "24K Magic",
          year: 2016,
          genre: "R&B",
          artistImage: artistData["Bruno Mars"].image,
          views: "1.7B",
        },

        // Taylor Swift (5 songs)
        {
          id: "34",
          title: "Blank Space",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistData["Taylor Swift"].image,
          views: "3.1B",
        },
        {
          id: "35",
          title: "Love Story",
          artist: "Taylor Swift",
          album: "Fearless",
          year: 2008,
          genre: "Country",
          artistImage: artistData["Taylor Swift"].image,
          views: "1.5B",
        },
        {
          id: "36",
          title: "Shake It Off",
          artist: "Taylor Swift",
          album: "1989",
          year: 2014,
          genre: "Pop",
          artistImage: artistData["Taylor Swift"].image,
          views: "2.8B",
        },
        {
          id: "37",
          title: "Cardigan",
          artist: "Taylor Swift",
          album: "Folklore",
          year: 2020,
          genre: "Indie",
          artistImage: artistData["Taylor Swift"].image,
          views: "450M",
        },
        {
          id: "38",
          title: "Anti-Hero",
          artist: "Taylor Swift",
          album: "Midnights",
          year: 2022,
          genre: "Pop",
          artistImage: artistData["Taylor Swift"].image,
          views: "600M",
        },

        // Drake (6 songs)
        {
          id: "39",
          title: "God's Plan",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistData["Drake"].image,
          views: "2.3B",
        },
        {
          id: "40",
          title: "Hotline Bling",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistData["Drake"].image,
          views: "1.9B",
        },
        {
          id: "41",
          title: "One Dance",
          artist: "Drake",
          album: "Views",
          year: 2016,
          genre: "Electronic",
          artistImage: artistData["Drake"].image,
          views: "2.7B",
        },
        {
          id: "42",
          title: "In My Feelings",
          artist: "Drake",
          album: "Scorpion",
          year: 2018,
          genre: "Hip-Hop",
          artistImage: artistData["Drake"].image,
          views: "1.5B",
        },
        {
          id: "43",
          title: "Started From the Bottom",
          artist: "Drake",
          album: "Nothing Was the Same",
          year: 2013,
          genre: "Hip-Hop",
          artistImage: artistData["Drake"].image,
          views: "1.2B",
        },
        {
          id: "44",
          title: "Hold On, We're Going Home",
          artist: "Drake",
          album: "Nothing Was the Same",
          year: 2013,
          genre: "R&B",
          artistImage: artistData["Drake"].image,
          views: "1.1B",
        },

        // Post Malone (6 songs)
        {
          id: "45",
          title: "Circles",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistData["Post Malone"].image,
          views: "2.1B",
        },
        {
          id: "46",
          title: "Sunflower",
          artist: "Post Malone",
          album: "Spider-Man: Into the Spider-Verse",
          year: 2018,
          genre: "Electronic",
          artistImage: artistData["Post Malone"].image,
          views: "2.8B",
        },
        {
          id: "47",
          title: "Rockstar",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2017,
          genre: "Hip-Hop",
          artistImage: artistData["Post Malone"].image,
          views: "1.9B",
        },
        {
          id: "48",
          title: "Stay",
          artist: "Post Malone",
          album: "Hollywood's Bleeding",
          year: 2019,
          genre: "Pop",
          artistImage: artistData["Post Malone"].image,
          views: "1.3B",
        },
        {
          id: "49",
          title: "Better Now",
          artist: "Post Malone",
          album: "Beerbongs & Bentleys",
          year: 2018,
          genre: "Pop",
          artistImage: artistData["Post Malone"].image,
          views: "1.7B",
        },
        {
          id: "50",
          title: "Congratulations",
          artist: "Post Malone",
          album: "Stoney",
          year: 2016,
          genre: "Hip-Hop",
          artistImage: artistData["Post Malone"].image,
          views: "1.4B",
        },

        // Justin Bieber (6 songs)
        {
          id: "51",
          title: "Sorry",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "R&B",
          artistImage: artistData["Justin Bieber"].image,
        },
        {
          id: "52",
          title: "Love Yourself",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
        },
        {
          id: "53",
          title: "Stay",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.3B",
        },
        {
          id: "54",
          title: "Peaches",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.6B",
        },
        {
          id: "55",
          title: "What Do You Mean?",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.8B",
        },
        {
          id: "56",
          title: "Yummy",
          artist: "Justin Bieber",
          album: "Changes",
          year: 2020,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "900M",
        },
        {
          id: "57",
          title: "Ghost",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.2B",
        },
        {
          id: "58",
          title: "Company",
          artist: "Justin Bieber",
          album: "Purpose",
          year: 2015,
          genre: "R&B",
          artistImage: artistData["Justin Bieber"].image,
          views: "800M",
        },
        {
          id: "59",
          title: "Holy",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2020,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.4B",
        },
        {
          id: "60",
          title: "Lonely",
          artist: "Justin Bieber",
          album: "Justice",
          year: 2021,
          genre: "Pop",
          artistImage: artistData["Justin Bieber"].image,
          views: "1.1B",
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
