export interface Project {
  title: string;
  blurb: string;
  detail: string;
  year: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  collab?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Roman Urdu Hate-Speech Detector',
    blurb:
      'A deep-learning model that catches both the obvious and the sneaky — implicit and explicit hate speech written in Roman Urdu.',
    detail:
      'Roman Urdu has no fixed spelling, so the same word shows up a dozen ways. I built a transformer-based pipeline with heavy text normalization to handle that mess, and it beats the previous benchmarks — especially on the implicit cases everyone usually misses.',
    year: '2026',
    tags: ['Deep Learning', 'NLP', 'Transformers', 'Python'],
    image: '/thumbnails/roman-urdu.png',
    github: 'https://github.com/ARFAABDULNASIR/Roman-Urdu-Hate-speech-Detection',
    collab: 'Team project',
    featured: true,
  },
  {
    title: 'NUST UG Admissions RAG Assistant',
    blurb:
      'A retrieval-augmented assistant that answers admission questions straight from the official NUST handbooks.',
    detail:
      'Every admission season the same questions get asked a hundred times. I turned the official handbooks into a vector store and wired up a RAG pipeline so the answers are grounded in the real documents — not hallucinated.',
    year: '2026',
    tags: ['RAG', 'LLMs', 'Vector DB', 'Python'],
    image: '/thumbnails/rag.png',
    github: 'https://github.com/ARFAABDULNASIR/NUST_UGHandbook_RAG-system',
    collab: 'Team project',
    featured: true,
  },
  {
    title: 'Qaswa Café',
    blurb:
      'A warm, immersive website for a continental café in Sadiqabad — browse the story, the menu, and book a table.',
    detail:
      'A real client build for Qaswa Café. Visitors can explore the café\u2019s story, scroll the full menu, make reservations and get directions — all wrapped in a glowing, responsive design with smooth motion that matches the late-night dining mood.',
    year: '2026',
    tags: ['Web', 'UI/UX', 'Next.js', 'Frontend'],
    image: '/thumbnails/qaswa.png',
    demo: 'https://qaswa-cafe.vercel.app/',
    featured: true,
  },
  {
    title: 'NET-OPT — Network Bottleneck Detection',
    blurb:
      'OMNeT++ simulation + interface that pinpoints where a WiFi network chokes during peak load, like registration day.',
    detail:
      'Built in C++ on OMNeT++ to model realistic traffic, then visualized where throughput collapses under stress. It finds the exact bottleneck instead of leaving you guessing why the network died at 9am.',
    year: '2026',
    tags: ['OMNeT++', 'C++', 'Networks', 'Simulation'],
    image: '/thumbnails/netopt.png',
    github: 'https://github.com/ARFAABDULNASIR/NET-OPT',
    collab: 'Team project',
    featured: true,
  },
  {
    title: 'Crop Yield Volatility Dashboard',
    blurb:
      'A Streamlit app analyzing how climate change threatens US crop stability across 1,922 counties.',
    detail:
      'Combined NASA climate feeds, satellite vegetation indices and USDA yield records (2005–2023). The headline finding: temperature *variability*, not just warming, is the #1 driver of yield volatility. Best model (XGBoost) hit R² = 0.57.',
    year: '2025',
    tags: ['ML', 'XGBoost', 'Geospatial', 'Streamlit'],
    image: '/thumbnails/crop.png',
    github: 'https://github.com/emaankhuram/crop-risk-dashboard',
    collab: 'Team project',
  },
  {
    title: 'Smart News Dashboard',
    blurb:
      'A full-stack news aggregator with live sentiment tagging, bookmarks, and scheduled scraping.',
    detail:
      'Express + React + MongoDB. Pulls live news, tags every article as positive / neutral / negative, and lets you filter by category and region. A node-cron job keeps the feed fresh in the background.',
    year: '2025',
    tags: ['React', 'Node.js', 'MongoDB', 'NLP'],
    image: '/thumbnails/news.png',
    github: 'https://github.com/emaankhuram/smart-news-dashboard',
    collab: 'Team project',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    blurb:
      'An interactive playground that animates how sorting algorithms actually move data, step by step.',
    detail:
      'Bubble, quick, merge, heap — side by side, with adjustable array size and speed. I built it because watching a sort run beats reading pseudocode any day.',
    year: '2025',
    tags: ['JavaScript', 'DSA', 'Visualization'],
    image: '/thumbnails/sort.png',
    github: 'https://github.com/emaankhuram/DSA-PROJECT-sorting_algo_visualiser',
    collab: 'Team project',
  },
  {
    title: 'Hostel Management System',
    blurb:
      'A full-stack app for room allocation, student records, and fee tracking — the boring admin made painless.',
    detail:
      'Vue front end with an admin dashboard for allocations, student data and automated fee tracking. Built to replace the spreadsheet chaos that runs most hostels.',
    year: '2024',
    tags: ['Vue', 'Full-Stack', 'Dashboard'],
    image: '/thumbnails/hostel.png',
    github: 'https://github.com/ARFAABDULNASIR/HostelManagement',
    collab: 'Team project',
  },
  {
    title: 'AI Snake Game',
    blurb:
      'The classic snake — but with a pathfinding AI that plays itself and rarely loses.',
    detail:
      'A Python take on Snake with an AI agent that uses pathfinding to chase food without trapping itself. Equal parts nostalgia and a tidy demo of decision-making algorithms.',
    year: '2025',
    tags: ['Python', 'AI', 'Pathfinding', 'Game'],
    image: '/thumbnails/snake.png',
    github: 'https://github.com/ARFAABDULNASIR/Snake-Game-Python',
    collab: 'Team project',
  },
];
