class Song {
  constructor(title, artist, src, cover) {
    this.title = title;
    this.artist = artist;
    this.src = src;
    this.cover = cover;
  }
}

class MusicPlayer {
  constructor(
    audioElement,
    titleElement,
    artistElement,
    progressBar,
    coverElement
  ) {
    this.audio = audioElement;
    this.titleElement = titleElement;
    this.artistElement = artistElement;
    this.progressBar = progressBar;
    this.coverElement = coverElement;
    this.songs = []; // array for playlist
    this.currentIndex = 0;
  }

  loadSongs(songList) {
    this.songs = songList;
    this.loadSong(this.songs[this.currentIndex]);
  }

  loadSong(song) {
    this.audio.src = song.src;
    this.titleElement.textContent = song.title;
    this.artistElement.textContent = song.artist;
    this.coverElement.src = song.cover;
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.loadSong(this.songs[this.currentIndex]);
    this.play();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.loadSong(this.songs[this.currentIndex]);
    this.play();
  }
}

// DOM references
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cover = document.getElementById("album-cover");

// Initialize player
const player = new MusicPlayer(audio, title, artist, progress, cover);

const songs = [
  new Song(
    "Song One",
    "Artist One",
    "Music/m1.mp3",
    "https://c.saavncdn.com/414/Russian-Bandana-Lo-Fi-Hindi-2024-20241016121647-500x500.jpg" // Replace with actual cover image URLs
  ),
  new Song(
    "Song Two",
    "Artist Two",
    "Music/m2.mp3",
    "https://c.saavncdn.com/741/Jhol-Punjabi-2024-20250327163230-500x500.jpg"
  ),
  new Song(
    "Song Three",
    "Artist Three",
    "Music/m3.mp3",
    "https://c.saavncdn.com/256/Safar-Hindi-2024-20241212193202-500x500.jpg"
  ),
];

player.loadSongs(songs);

// Play/Pause toggle
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    player.pause();
    playBtn.textContent = "▶️";
  } else {
    player.play();
    playBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});

// Next/Prev controls
nextBtn.addEventListener("click", () => player.next());
prevBtn.addEventListener("click", () => player.prev());

// Progress bar update
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
