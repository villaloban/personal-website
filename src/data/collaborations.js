const collaborations = [
  {
    id: 1,
    title: "Lobo Shell",
    status: "Completed",
    description:
      "A Unix shell written in C by a team of three. It runs commands, chains them with pipes, and redirects input and output to files.",
    role:
      "Implemented support for an arbitrary number of pipes (an extra-credit feature) and the redirection operators <, >, and >>.",
    team: "3 developers",
    stack: ["C", "fork/exec", "pipes", "Unix"],
  },
  {
    id: 2,
    title: "Lobo-VM-SIM",
    status: "Completed",
    description:
      "A virtual-memory simulator in Python that models address translation, page faults, and page replacement.",
    role: "TODO: what you built",
    team: "TODO",
    stack: ["Python", "Operating Systems"],
  },
  {
    id: 3,
    title: "Lobo Work",
    status: "In progress",
    description:
      "A batch job system in C with a fixed pool of worker threads pulling jobs from a bounded queue.",
    role: "TODO: what you built",
    team: "3 developers",
    stack: ["C", "pthreads", "Concurrency"],
  },
  {
    id: 4,
    title: "Online Auction Site",
    status: "Completed",
    description:
      "A multi-user auction website with accounts, item listings, bidding, and auction timers, backed by a MySQL database.",
    role: "Built the home dashboard, the guest view page, and the site's routing logic.",
    team: "3 developers",
    stack: ["Python CGI", "MySQL", "HTML5", "Git"],
  },
  {
    id: 5,
    title: "Huminal",
    status: "In progress",
    description:
      "A robot dog art piece that picks one person out of a crowd and follows them until it loses them, then picks someone new.",
    role: "Person detection and tracking with YOLO on a Raspberry Pi.",
    team: "Group project (continuing a previous team's work)",
    stack: ["Python", "YOLO", "Raspberry Pi", "Computer Vision"],
  },
]

export default collaborations