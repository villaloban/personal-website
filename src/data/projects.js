const projects = [
  {
    id: 1,
    title: "CrossFade",
    status: "In progress",
    description:
      "A web app that moves your music library from Apple Music to Spotify. It imports the Mac Music app's library export, matches each track against Spotify's catalog, and rebuilds your playlists through Spotify OAuth.",
    stack: ["Node.js", "Express", "React", "Spotify API", "OAuth"],
    github: "https://github.com/villaloban", 
  },
  {
    id: 2,
    title: "Kotoba",
    status: "In progress",
    description:
      "A Japanese learning app built around content you already enjoy. Paste in song lyrics or subtitles and it breaks them down with furigana and grammar explanations, then turns them into flashcards.",
    stack: ["React", "Node.js", "Google Gemini API"],
    github: "https://github.com/villaloban",
  },
  {
    id: 3,
    title: "JAMM",
    status: "Completed",
    description:
      "A 2D RPG co-developed in Godot 4, with a world map, NPC dialogue, scene transitions, chest interactions, and a boss room, all tied together by a GameState singleton. Playable in the browser.",
    stack: ["Godot 4", "GDScript", "Git"],
    github: "https://github.com/villaloban", 
    live: "https://villaloban.itch.io/jaam-rpg",
  },
  {
    id: 4,
    title: "Virtual Network Router Configuration",
    status: "Completed",
    description:
      "Built virtual LANs with working routers on both Ubuntu and Windows Server 2022, configuring DHCP and NAT, then verified the DHCP handshake with Wireshark packet captures.",
    stack: ["Ubuntu", "Windows Server", "VMware Fusion", "VirtualBox", "Wireshark"],
    github: "https://github.com/villaloban", 
  },
]

export default projects