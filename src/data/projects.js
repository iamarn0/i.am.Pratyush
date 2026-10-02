import { projectShots } from "../generated/assets"

// Screenshot files are optional. Drop a real capture at
// public/images/projects/{project}/{name}.webp and the frame fills itself.
function shot(id, kind, slot, alt, file) {
  return {
    id,
    kind,
    slot,
    alt,
    file,
    src: projectShots[file] || "",
    label: "Project screenshot",
    width: kind === "mobile" ? 390 : 1440,
    height: kind === "mobile" ? 844 : 900,
  }
}

export const projects = [
  {
    slug: "rocketrybox",
    tier: "main",
    title: "Rocketry Box",
    category: "Production Logistics Platform",
    theme: "logistics",
    statusLabel: "Production project",
    description:
      "A production logistics aggregation platform built around shipment management, logistics services, tracking, fulfillment, and connected shipping workflows.",
    liveUrl: "https://rocketrybox.com/",
    liveLabel: "View Production Platform",
    githubUrl: "",
    bridge: "The production system.",
    capabilities: [
      { title: "Shipment management", text: "The operational work of moving a shipment through the platform." },
      { title: "Tracking", text: "A shipment can be followed after it enters the network." },
      { title: "Logistics partners", text: "Multiple carriers and logistics services sit inside one aggregation platform." },
      { title: "Hyperlocal, B2C, and B2B", text: "The product covers local delivery and business logistics." },
      { title: "Fulfillment and warehousing", text: "Orders can pass through fulfillment, not only a shipping label." },
      { title: "Order management", text: "Orders stay attached to the logistics workflow." },
      { title: "Rate calculation", text: "Shipping options can be compared before a shipment is committed." },
      { title: "Channel integrations", text: "Orders can arrive from connected sales channels." },
      { title: "NDR workflows", text: "Non-delivery has its own path, instead of collapsing into a single status." },
      { title: "Analytics", text: "Operations can be read back from the platform." },
    ],
    system: ["Orders", "Rates", "Partners", "Shipment", "Tracking", "Fulfillment", "NDR", "Analytics"],
    systemNote:
      "A public map of the product. It is not an internal architecture diagram, and it does not describe private services.",
    screensIntro:
      "The public site, seller home, and tracking screen are shown here. Admin reports stay off this page because they contain live operational data. There is no fulfillment screen to show.",
    study: [
      {
        kind: "prose",
        id: "does",
        title: "What the product does",
        paragraphs: [
          "Rocketry Box is a live logistics aggregation platform. Shipment management, logistics services, tracking, fulfillment, and the workflows around an order sit in one production product.",
        ],
      },
      {
        kind: "capabilities",
        id: "capabilities",
        title: "Key product capabilities",
        intro: "Public product areas, drawn from the live platform. Not a list of private responsibilities.",
      },
      { kind: "gallery", id: "screens", title: "Selected screens" },
      {
        kind: "prose",
        id: "domain",
        title: "The domain",
        paragraphs: [
          "A shipment is rarely one screen. It can involve a partner, a rate, a warehouse, a tracking update, and a path for when delivery fails. The product exists so those pieces can be operated together.",
        ],
      },
      { kind: "system", id: "system", title: "Product system" },
      {
        kind: "prose",
        id: "contribution",
        title: "What this case study includes",
        paragraphs: [
          "Rocketry Box is presented as a production platform. This page stays with the public product: what it is for, and the kinds of workflows it contains. It does not list private responsibilities, source code, internal architecture, credentials, customer information, or private metrics.",
        ],
      },
      {
        kind: "notes",
        id: "challenges",
        title: "Technical challenges",
        items: [
          {
            title: "Many partners, one operation",
            text: "Aggregation only works when different logistics services still feel like one shipment flow.",
          },
          {
            title: "A long lifecycle",
            text: "Tracking, fulfillment, delivery, and non-delivery are stages of the same shipment.",
          },
          {
            title: "A live system",
            text: "The platform is in production. The public story has to stay useful without exposing the private system.",
          },
        ],
      },
      {
        kind: "prose",
        id: "production",
        title: "Production considerations",
        paragraphs: [
          "The platform is live at rocketrybox.com. The repository is private. Reports and analytics are part of the product, and they are not shown here because they contain live admin data.",
        ],
      },
      {
        kind: "prose",
        id: "learned",
        title: "What I learned",
        paragraphs: [
          "Production logistics is a system of workflows. The interface matters because people have to operate the shipment, not because the screen needs to look like a marketing site.",
        ],
      },
    ],
    screenshots: [
      shot("platform", "hero", "Public site", "Rocketry Box public site", "rocketrybox/rocketrybox-platform"),
      shot("seller", "gallery", "Seller home", "Rocketry Box seller home", "rocketrybox/rocketrybox-seller"),
      shot("tracking", "gallery", "Tracking", "Rocketry Box shipment tracking", "rocketrybox/rocketrybox-tracking"),
    ],
  },
  {
    slug: "predix-route",
    tier: "main",
    title: "PREDIX ROUTE",
    category: "AI-Powered Logistics Intelligence",
    tagline: "AI-Powered Logistics Intelligence Platform",
    theme: "analytical",
    statusLabel: "Machine learning",
    description:
      "A multi-tenant logistics intelligence platform that predicts shipment RTO risk, analyzes shipment and address signals, evaluates courier performance, recommends suitable courier options, and exposes logistics intelligence through dashboards and APIs.",
    liveUrl: "",
    githubUrl: "https://github.com/iamarn0/PredixRoute",
    bridge: "From production logistics software to logistics intelligence.",
    signalFlow: [
      "Shipment",
      "Feature and signal processing",
      "Pincode, address, courier, and order signals",
      "ML prediction",
      "RTO risk",
      "Explainability",
      "Courier recommendation",
    ],
    signalNote: "RTO means return to origin. This is the decision path, not a measured result.",
    architecture: [
      "React / Vite",
      "Node / Express API",
      "MongoDB + Redis",
      "BullMQ workers",
      "Python FastAPI AI service",
      "ML models",
    ],
    architectureNote: "The interface talks to the API. The API talks to the model service. Accuracy, dataset size, and production scale are not claimed.",
    system: [
      "Shipment",
      "Feature and signal processing",
      "Pincode, address, courier, and order signals",
      "ML prediction",
      "RTO risk",
      "Explainability",
      "Courier recommendation",
    ],
    systemNote: "The same path as the homepage diagram. It describes the repository, not a published score.",
    visualFirst: true,
    capabilities: [
      { title: "Risk API", text: "A shipment can be scored through the public risk endpoint." },
      { title: "API keys", text: "Access is issued per key, with usage tracked against the organization." },
      { title: "Pincode and courier reads", text: "Intelligence for a pincode or a courier is available beside the prediction." },
      { title: "Webhooks", text: "Events can leave the platform through a webhook queue." },
      { title: "Organizations and roles", text: "Predictions stay inside an organization. Roles are super admin, organization admin, and analyst." },
      { title: "Bulk prediction", text: "A batch can be queued instead of scored one shipment at a time." },
    ],
    stackGroups: [
      { title: "Frontend", items: ["React", "Vite"] },
      { title: "Backend", items: ["Node", "Express"] },
      { title: "Data", items: ["MongoDB", "Redis"] },
      { title: "Workers", items: ["BullMQ"] },
      { title: "ML", items: ["Python", "FastAPI", "XGBoost", "SHAP"] },
    ],
    screensIntro: "The organization dashboard, a shipment risk evaluation, and the home page are from Predix Route.",
    study: [
      {
        kind: "prose",
        id: "does",
        title: "What the product does",
        paragraphs: [
          "PredixRoute turns shipment, address, pincode and courier signals into actionable logistics intelligence.",
          "Instead of treating RTO as a post-delivery metric, the system attempts to identify risk before fulfillment decisions are made.",
        ],
      },
      { kind: "feature", id: "inside", title: "Inside PredixRoute" },
      { kind: "flow", id: "workflow", title: "How the intelligence works" },
      { kind: "decision", id: "signals", title: "What a prediction explains" },
      { kind: "architecture", id: "architecture", title: "Under the hood" },
      {
        kind: "capabilities",
        id: "platform",
        title: "API and platform",
        intro: "The same intelligence is available through the dashboard and the API. Accuracy, dataset size, and production scale are not claimed.",
      },
      { kind: "stack", id: "stack", title: "Technologies" },
      {
        kind: "prose",
        id: "learned",
        title: "What I learned",
        paragraphs: [
          "The model is only useful if a shipment, an address, and a courier choice can meet it in the same product. Predix Route is that path: a prediction, an explanation, and a recommendation, with the platform around them.",
        ],
      },
    ],
    screenshots: [
      shot("dashboard", "hero", "Dashboard", "PredixRoute organization dashboard", "predixroute/predix-dashboard"),
      shot("evaluation", "gallery", "Risk evaluation", "PredixRoute shipment risk evaluation", "predixroute/predix-evaluation"),
      shot("home", "mobile", "Home", "PredixRoute home", "predixroute/predix-home"),
    ],
  },
  {
    slug: "roadvision",
    tier: "main",
    title: "ROADVISION",
    category: "Computer Vision",
    theme: "vision",
    statusLabel: "Currently building",
    description: "A computer-vision-based number-plate capture system.",
    liveUrl: "https://unikorncam.tech/",
    liveLabel: "Visit RoadVision",
    githubUrl: "",
    bridge: "The current step into computer vision.",
    system: ["Camera", "Frame", "Plate region", "Capture"],
    systemNote: "The public site describes the direction: existing cameras, traffic intelligence, and number-plate recognition. Accuracy and deployment scale are not claimed here.",
    screensIntro: "The first screen is the public site. The second is the live detection view from video upload.",
    study: [
      {
        kind: "prose",
        id: "problem",
        title: "The problem",
        paragraphs: [
          "A number plate is a small target in a real camera view. Capturing it is a different kind of problem from building a web application.",
        ],
      },
      {
        kind: "prose",
        id: "direction",
        title: "Current direction",
        paragraphs: [
          "RoadVision is a number-plate capture system, currently being developed. The work is aimed at taking a camera view and holding onto the plate in that view.",
        ],
      },
      { kind: "system", id: "exploration", title: "Technical exploration" },
      { kind: "gallery", id: "screens", title: "Development visuals" },
      {
        kind: "prose",
        id: "stands",
        title: "Where it stands",
        paragraphs: [
          "This is a development story. Detection accuracy, OCR accuracy, model architecture, dataset, supported vehicles, and production usage are not claimed, because the project is still being built.",
        ],
      },
      {
        kind: "prose",
        id: "learned",
        title: "What I'm learning",
        paragraphs: [
          "Computer vision starts from what a camera actually sees. The portfolio step is to treat that as a system under construction, not as a finished product.",
        ],
      },
    ],
    screenshots: [
      shot("home", "hero", "Public site", "RoadVision public site", "roadvision/roadvision-home"),
      shot("detection", "gallery", "Live detection", "RoadVision live detection from a video upload", "roadvision/roadvision-detection"),
    ],
  },
  {
    slug: "neare",
    tier: "supporting",
    title: "NEARE",
    category: "Hyperlocal Marketplace · Geospatial · Multi-role",
    tagline: "Everything you need, near you.",
    theme: "spatial",
    statusLabel: "Live",
    description:
      "An India-first hyperlocal marketplace connecting customers with nearby shops for pickup and local delivery.",
    demonstrates: "Complex full-stack product architecture.",
    role: "Product design and engineering",
    liveUrl: "https://neary.onrender.com/",
    liveLabel: "Visit NEARE",
    githubUrl: "",
    stackGroups: [
      { title: "Frontend", items: ["React", "JavaScript"] },
      { title: "Backend", items: ["Node.js"] },
      { title: "Data", items: ["MongoDB", "Geospatial queries"] },
    ],
    roles: ["Customer", "Shop owner", "Delivery partner", "Admin"],
    system: [
      "Customer location",
      "Nearby shops",
      "Products",
      "Cart",
      "Checkout",
      "Order",
      "Shop fulfillment",
      "Delivery assignment",
      "Tracking",
      "Completion",
    ],
    systemNote: "An order is a path. Delivery and pickup share the early states, then diverge.",
    screensIntro: "The public site, phone view, sign-in, and customer home are from the product. Empty frames are reserved for shop, order, and delivery screens.",
    study: [
      {
        kind: "prose",
        id: "what",
        title: "What it is",
        paragraphs: [
          "NEARE connects a customer with nearby shops for pickup or local delivery. Shop owners, delivery partners, and admins continue the same order from their own tools.",
        ],
      },
      {
        kind: "prose",
        id: "why",
        title: "Why it exists",
        paragraphs: [
          "A neighbourhood shop is easy to miss inside a national delivery app, and invisible if you do not already know the name. Discovery here starts from where the customer is.",
        ],
      },
      {
        kind: "prose",
        id: "built",
        title: "What I built",
        paragraphs: [
          "A multi-role marketplace: nearby discovery, shop and customer flows, delivery or pickup, inventory that follows the order, and admin oversight. The point of the project is the architecture, not a single CRUD screen.",
        ],
      },
      { kind: "gallery", id: "screens", title: "Product screens" },
      { kind: "roles", id: "roles", title: "Four roles, one order" },
      { kind: "system", id: "system", title: "Order path" },
      { kind: "machine", id: "states", title: "Order state machine" },
      { kind: "technical", id: "engineering", title: "What was technically interesting" },
      { kind: "security", id: "security", title: "Around the API" },
      { kind: "stack", id: "stack", title: "Technologies" },
      {
        kind: "prose",
        id: "learned",
        title: "What I learned",
        paragraphs: [
          "A marketplace gets complicated at the order, not at the catalog. Four people can touch one order, and the product has to know which actions belong to whom.",
        ],
      },
    ],
    flows: {
      delivery: [
        { code: "PLACED", label: "Placed" },
        { code: "ACCEPTED", label: "Accepted" },
        { code: "PREPARING", label: "Preparing" },
        { code: "READY", label: "Ready" },
        { code: "OUT_FOR_DELIVERY", label: "Out for delivery" },
        { code: "DELIVERED", label: "Delivered" },
      ],
      pickup: [
        { code: "PLACED", label: "Placed" },
        { code: "ACCEPTED", label: "Accepted" },
        { code: "PREPARING", label: "Preparing" },
        { code: "READY", label: "Ready" },
        { code: "PICKED_UP", label: "Picked up" },
      ],
    },
    technicalCards: [
      {
        title: "Geospatial discovery",
        text: "MongoDB geospatial queries find nearby shops from the customer’s location.",
      },
      {
        title: "Multi-role architecture",
        text: "Customer, shop owner, delivery partner, and admin share one order, with different permissions.",
      },
      {
        title: "Order state machine",
        text: "Delivery runs through to delivered. Pickup ends at picked up. The interface and the API agree on the next legal step.",
      },
      {
        title: "Inventory consistency",
        text: "Placing an order reserves stock. Cancelling it restores stock.",
      },
      {
        title: "Delivery assignment",
        text: "Assignment considers nearby delivery partners who are approved and online.",
      },
      {
        title: "Location tracking",
        text: "A live location session is distinct from a demo mode that can show the journey without an active GPS run.",
      },
      {
        title: "Notifications",
        text: "Order and delivery events reach the customer, the shop, and the partner.",
      },
      {
        title: "Security",
        text: "Authentication, authorization, validation, rate limiting, Helmet, file validation, and error sanitization sit around the API.",
      },
    ],
    security: [
      ["Authentication", "Each role signs in before reaching their tools."],
      ["Authorization", "Actions are limited to the role that should perform them."],
      ["Validation", "Incoming data is checked before it is stored."],
      ["Rate limiting", "Abusive bursts against public endpoints are throttled."],
      ["Helmet", "Security headers are set on HTTP responses."],
      ["File validation", "Uploaded files are checked before they are used."],
      ["Error sanitization", "Clients receive safe errors, without internal details."],
    ],
    screenshots: [
      shot("discover", "hero", "Nearby shops", "NEARE nearby shops", "neare/neare-home"),
      shot("signin", "gallery", "Role sign-in", "NEARE sign-in for customer, shop, delivery, and admin", "neare/neare-signin"),
      shot("shop", "gallery", "Shop products", "NEARE shop products", "neare/neare-shop"),
      shot("cart", "gallery", "Cart and checkout", "NEARE cart and checkout", "neare/neare-cart"),
      shot("order", "mobile", "Customer home", "NEARE customer home in Salt Lake, Kolkata", "neare/neare-customer"),
      shot("merchant", "gallery", "Shop owner", "NEARE shop owner view", "neare/neare-merchant"),
      shot("partner", "gallery", "Delivery partner", "NEARE delivery partner view", "neare/neare-partner"),
      shot("admin", "gallery", "Admin", "NEARE admin view", "neare/neare-admin"),
      shot("customer-mobile", "mobile", "Customer on a phone", "NEARE customer app on a phone", "neare/neare-mobile"),
      shot("delivery-mobile", "mobile", "Delivery on a phone", "NEARE delivery view on a phone", "neare/neare-delivery-mobile"),
    ],
  },
  {
    slug: "lekha",
    tier: "supporting",
    title: "LEKHA",
    category: "Business SaaS · Invoicing · Analytics",
    tagline: "Smart invoicing for modern Indian businesses.",
    theme: "ledger",
    statusLabel: "SaaS product",
    description:
      "An invoicing product for tax invoices, quotations, and proformas, with clients, payments, and a view of revenue.",
    demonstrates: "SaaS architecture and business workflows.",
    role: "Product design and engineering",
    liveUrl: "https://lekha-an-invoice-generation-applica.vercel.app/",
    liveLabel: "Visit LEKHA",
    githubUrl: "",
    pendingSource: true,
    stackGroups: [
      {
        title: "Frontend",
        items: ["React", "Vite", "Tailwind", "TanStack Query", "Axios", "Framer Motion", "Recharts"],
      },
      { title: "Backend", items: ["Node.js", "Express", "MongoDB", "Mongoose"] },
      { title: "Systems", items: ["JWT", "bcrypt", "GST calculations", "PDF generation"] },
    ],
    system: ["Business", "Clients", "Invoices", "Payments", "Analytics"],
    systemNote: "The document and the dashboard describe the same invoice.",
    screensIntro: "The homepage, features, and pricing are the public site. Overview, invoices, clients, analytics, and settings are the demo workspace.",
    study: [
      {
        kind: "prose",
        id: "what",
        title: "What it is",
        paragraphs: [
          "LEKHA is a business SaaS product for Indian invoicing. The daily work is the business profile, clients, invoices, payments, and a view of revenue.",
        ],
      },
      {
        kind: "prose",
        id: "why",
        title: "Why it exists",
        paragraphs: [
          "GST belongs on the document, clients have to stay in sync, and payments arrive later. Revenue should be readable without exporting a spreadsheet.",
        ],
      },
      {
        kind: "prose",
        id: "built",
        title: "What I built",
        paragraphs: [
          "Authenticated business workflows: clients, invoices with GST totals, PDF output, payments, analytics, and settings. The product is the workflow and the document, not only a dashboard layout.",
        ],
      },
      { kind: "gallery", id: "screens", title: "Product screens" },
      { kind: "system", id: "system", title: "How the work moves" },
      {
        kind: "notes",
        id: "interesting",
        title: "What was technically interesting",
        items: [
          {
            title: "One set of totals",
            text: "The form, the saved invoice, and the PDF have to describe the same GST and the same total.",
          },
          {
            title: "Server state",
            text: "TanStack Query keeps clients, invoices, and payments aligned with the API.",
          },
          {
            title: "A document that can leave",
            text: "PDF generation lets the invoice exist outside the dashboard.",
          },
        ],
      },
      { kind: "stack", id: "stack", title: "Technologies" },
      {
        kind: "prose",
        id: "learned",
        title: "What I learned",
        paragraphs: [
          "Business software is a sequence. Authentication, the business profile, the client, the invoice, the payment, and the chart are one product if the numbers never drift.",
        ],
      },
    ],
    screenshots: [
      shot("home", "hero", "Product site", "LEKHA homepage", "lekha/lekha-home"),
      shot("features", "gallery", "Features", "LEKHA features", "lekha/lekha-features"),
      shot("pricing", "gallery", "Pricing", "LEKHA pricing", "lekha/lekha-pricing"),
      shot("dashboard", "gallery", "Overview", "LEKHA overview", "lekha/lekha-dashboard"),
      shot("invoices", "gallery", "Invoices", "LEKHA invoice list", "lekha/lekha-invoices"),
      shot("create", "gallery", "New invoice", "LEKHA new invoice form", "lekha/lekha-invoice"),
      shot("detail", "gallery", "Invoice", "LEKHA tax invoice", "lekha/lekha-invoice-detail"),
      shot("clients", "gallery", "Clients", "LEKHA clients", "lekha/lekha-clients"),
      shot("analytics", "gallery", "Analytics", "LEKHA analytics", "lekha/lekha-analytics"),
      shot("settings", "gallery", "Settings", "LEKHA business settings", "lekha/lekha-settings"),
    ],
  },
  {
    slug: "riwayat",
    tier: "supporting",
    title: "RIWAYAT",
    category: "Premium Web Experience · Restaurant",
    theme: "heritage",
    statusLabel: "Live",
    description:
      "A heritage restaurant experience: story, menu, gallery, and reservations in one editorial interface.",
    demonstrates: "Frontend architecture and product storytelling.",
    role: "Product design and engineering",
    liveUrl: "https://riwayat-two.vercel.app/",
    liveLabel: "Visit RIWAYAT",
    githubUrl: "https://github.com/iamarn0/RIWAYAT-",
    stackGroups: [
      { title: "Frontend", items: ["React", "Vite", "Tailwind", "React Router", "Framer Motion"] },
      { title: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    ],
    system: ["Story", "Menu", "Gallery", "Reservation", "API", "MongoDB"],
    systemNote: "The booking is stored. The visit does not end in an email link.",
    screensIntro: "Homepage, menu, heritage, gallery, contact, and the phone menu are from the live site.",
    study: [
      {
        kind: "prose",
        id: "what",
        title: "What it is",
        paragraphs: [
          "RIWAYAT is a restaurant product with an editorial pace. Heritage, the menu, the gallery, and a reservation share one visual system.",
        ],
      },
      {
        kind: "prose",
        id: "why",
        title: "Why it exists",
        paragraphs: [
          "The story, the menu, and the booking are often three different sites. Here they are one visit.",
        ],
      },
      {
        kind: "prose",
        id: "built",
        title: "What I built",
        paragraphs: [
          "The public experience and the reservation path behind it: a React interface, client-side routing, and an Express API that stores bookings in MongoDB.",
        ],
      },
      { kind: "gallery", id: "screens", title: "The experience" },
      { kind: "system", id: "system", title: "The visit" },
      {
        kind: "notes",
        id: "interesting",
        title: "What was technically interesting",
        items: [
          {
            title: "One visual system",
            text: "Story, menu, gallery, and booking share type, space, and color so the product does not fall back to a template.",
          },
          {
            title: "Motion with a job",
            text: "Framer Motion paces the story. The menu and the form stay calm.",
          },
          {
            title: "A stored reservation",
            text: "The form continues into the API. A booking is a record, not a mailto link.",
          },
        ],
      },
      { kind: "stack", id: "stack", title: "Technologies" },
      {
        kind: "prose",
        id: "learned",
        title: "What I learned",
        paragraphs: [
          "A polished interface is still a product. The editorial surface had to survive a phone, and the reservation had to be real.",
        ],
      },
    ],
    screenshots: [
      shot("home", "hero", "Homepage", "RIWAYAT homepage", "riwayat/riwayat-hero"),
      shot("menu", "gallery", "Menu", "RIWAYAT menu", "riwayat/riwayat-menu"),
      shot("story", "gallery", "Heritage", "RIWAYAT heritage story", "riwayat/riwayat-story"),
      shot("gallery", "gallery", "Gallery", "RIWAYAT gallery", "riwayat/riwayat-gallery"),
      shot("contact", "gallery", "Contact", "RIWAYAT contact", "riwayat/riwayat-contact"),
      shot("menu-mobile", "mobile", "Menu on a phone", "RIWAYAT menu on a phone", "riwayat/riwayat-mobile"),
      shot("reserve-mobile", "mobile", "Reservation on a phone", "RIWAYAT reservation on a phone", "riwayat/riwayat-reserve-mobile"),
    ],
  },
]

export function projectTone(project) {
  return project?.theme || "light"
}

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? null
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0 || index >= projects.length - 1) return null
  return projects[index + 1]
}

export function projectsByTier(tier) {
  return projects.filter((project) => project.tier === tier)
}

export function heroShot(project) {
  return project.screenshots.find((item) => item.kind === "hero") ?? project.screenshots[0] ?? null
}

export function galleryShots(project) {
  const hero = heroShot(project)
  return project.screenshots.filter((item) => item !== hero)
}

export function shotById(project, id) {
  return project.screenshots.find((item) => item.id === id) ?? null
}
