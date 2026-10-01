export const evolution = [
  {
    title: "Products",
    text: "A complete visit: story, interface, and a path through the product.",
    links: [{ label: "RIWAYAT", to: "/work/riwayat" }],
  },
  {
    title: "Full-stack systems",
    text: "Multi-role products and business workflows, with real operational paths.",
    links: [
      { label: "NEARE", to: "/work/neare" },
      { label: "LEKHA", to: "/work/lekha" },
    ],
  },
  {
    title: "Production logistics",
    text: "A live platform for shipment operations, not a local demo.",
    links: [{ label: "RocketryBox", to: "/work/rocketrybox" }],
  },
  {
    title: "Machine learning",
    text: "Logistics intelligence for whether a shipment is likely to return to origin.",
    links: [{ label: "Predix Route", to: "/work/predix-route" }],
  },
  {
    title: "Computer vision",
    text: "Number-plate capture. Still being built.",
    links: [{ label: "RoadVision", to: "/work/roadvision" }],
  },
]

export const builds = [
  {
    title: "Production systems",
    project: "RocketryBox",
    to: "/work/rocketrybox",
    text: "Live operational software, where the product has to hold up outside a demo.",
    wide: true,
  },
  {
    title: "Full-stack applications",
    project: "NEARE · LEKHA · RIWAYAT",
    to: "/work/neare",
    text: "Interfaces, APIs, data, and the business logic that connects them.",
    wide: true,
  },
  {
    title: "Logistics platforms",
    project: "RocketryBox",
    to: "/work/rocketrybox",
    text: "Shipment operations, partners, tracking, and fulfillment workflows.",
  },
  {
    title: "SaaS products",
    project: "LEKHA",
    to: "/work/lekha",
    text: "Business software for invoices, clients, payments, and revenue.",
  },
  {
    title: "Marketplaces",
    project: "NEARE",
    to: "/work/neare",
    text: "Nearby discovery, multiple roles, and an order that moves between them.",
  },
  {
    title: "Machine learning systems",
    project: "Predix Route",
    to: "/work/predix-route",
    text: "Logistics intelligence aimed at return-to-origin risk.",
    wide: true,
  },
  {
    title: "Computer vision applications",
    project: "RoadVision",
    to: "/work/roadvision",
    text: "A number-plate capture system, currently in development.",
    wide: true,
  },
]

export const clusters = [
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Mongoose", "Data modeling"],
  },
  {
    title: "APIs",
    items: ["Resource design", "Validation", "Server state"],
  },
  {
    title: "Authentication",
    items: ["JWT", "Password hashing", "Role-aware access"],
  },
  {
    title: "Business logic",
    items: ["Order lifecycles", "GST totals", "Inventory movement"],
  },
  {
    title: "Maps / geospatial",
    items: ["Nearby discovery", "Location-aware search", "Delivery tracking"],
  },
  {
    title: "Analytics",
    items: ["Operational dashboards", "Revenue views", "Recharts"],
  },
  {
    title: "Machine learning",
    items: ["RTO prediction", "XGBoost", "SHAP"],
    note: "Predix Route. No accuracy, dataset size, or scale is claimed.",
  },
  {
    title: "Computer vision",
    items: ["Number-plate capture"],
    note: "RoadVision. Currently being built.",
  },
]

export const process = [
  { title: "Understand", text: "The problem, who it is for, and what done looks like." },
  { title: "Model", text: "The workflow, the data, and the boundaries between them." },
  { title: "Build", text: "The interface, the API, and the logic in between." },
  { title: "Test", text: "The paths that matter, including the ones that fail." },
  { title: "Deploy", text: "A real environment, not only a local session." },
  { title: "Improve", text: "What the product teaches after people use it." },
]
