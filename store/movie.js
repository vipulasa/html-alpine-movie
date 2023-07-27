console.info("Movie store loaded!");

document.addEventListener("alpine:init", () => {
  Alpine.store("movie", {
    movies: [
      {
        Title: "The Shawshank Redemption",
        Cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        Runtime: "142 minutes",
        Genre: "Drama",
        Ratings: 9.3,
        Description:
          "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
        Image: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
        Trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4",
        ReleaseDate: "September 23, 1994",
      },
      {
        Title: "The Dark Knight",
        Cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        Runtime: "152 minutes",
        Genre: "Action, Crime, Drama",
        Ratings: 9.0,
        Description:
          "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        Image: "https://i.ytimg.com/vi/94TAFSMdkvk/maxresdefault.jpg",
        Trailer: "https://www.youtube.com/watch?v=1T__uN5xmC0",
        ReleaseDate: "July 18, 2008",
      },
    ],
  });
});
