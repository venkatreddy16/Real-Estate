(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeKey = "luxestate-theme";
  const dirKey = "luxestate-dir";
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem(themeKey);
  const savedDir = localStorage.getItem(dirKey);
  const initialTheme = savedTheme || (mediaQuery.matches ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);
  root.setAttribute("dir", savedDir || "ltr");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navWrap = document.querySelector(".nav-wrap");
  const navItems = document.querySelectorAll(".menu-item.has-submenu > .menu-button");
  const dashboardSidebar = document.querySelector(".dashboard-sidebar");
  const dashboardSidebarToggle = document.querySelector("[data-dashboard-sidebar-toggle]");
  const authSwitchButtons = document.querySelectorAll("[data-auth-target]");
  const passwordToggles = document.querySelectorAll("[data-password-toggle]");
  const forms = document.querySelectorAll("[data-validate]");
  const revealItems = document.querySelectorAll("[data-reveal]");
  const yearSlot = document.querySelector("[data-year]");
  const propertyGrid = document.querySelector("[data-property-grid]");
  const propertyToggle = document.querySelector("[data-property-toggle]");
  const loadMoreGrids = document.querySelectorAll("[data-load-more-grid]");
  const testimonialSliders = document.querySelectorAll("[data-testimonial-slider]");
  const aboutAccordion = document.querySelector("[data-about-accordion]");
  const accordions = document.querySelectorAll("[data-accordion]");
  const countUpItems = document.querySelectorAll("[data-count-up]");
  const agentDetailPage = document.querySelector(".agent-detail-page");
  const propertyOverviewPage = document.querySelector(".property-overview-page");
  const propertyListingGrid = document.querySelector("[data-property-grid]");
  const blogListingPage = document.querySelector(".blog-listing-page");
  const blogArticlePage = document.querySelector(".blog-article-page");
  const agentsPage = document.querySelector(".agents-page");
  const agentProfiles = {
    "michael-carter": {
      name: "Michael Carter",
      role: "Senior Luxury Advisor",
      heroLead: "Senior luxury advisor helping buyers secure landmark residences and discreet off-market opportunities.",
      profileLead: "Known for calm negotiation, precise market reading, and a white-glove process tailored to high-value buyers and sellers.",
      asideStat: "14+ years in luxury sales",
      asideNote: "Known for calm, data-backed negotiation and a high-touch client experience.",
      metric1Value: "14+",
      metric1Label: "Years in luxury sales",
      metric2Value: "$38M",
      metric2Label: "Closed in the last 12 months",
      metric3Value: "91%",
      metric3Label: "Referral-led business",
      specialties: ["Waterfront villas", "Skyline penthouses", "Private compounds", "Investor advisory"],
      aboutTitle: "Experienced, discreet, and detail-driven.",
      aboutParagraph1: "Michael Carter helps clients navigate premium real estate transactions with confidence. His approach blends local market intelligence, structured negotiation, and clear communication so buyers and sellers can move decisively.",
      aboutParagraph2: "From private tours to pricing strategy and due diligence, he manages each stage with precision. Clients rely on him for thoughtful advice, strong advocacy, and a level of service that reflects the value of the properties involved.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Michael operates with transparency, honesty, and discretion in every engagement, ensuring clients feel informed and protected throughout the process.",
      valuesList: ["Honest pricing and market guidance", "Ethical representation and negotiation", "Strong client advocacy in complex deals", "Clear communication from search to closing"],
      expertiseTitle: "Expertise",
      expertiseLead: "With years of luxury-market experience, Michael brings a deep understanding of neighborhoods, valuation signals, and buyer expectations across premium inventory.",
      expertiseList: ["Luxury market and neighborhood insight", "Strategic negotiations for buyers and sellers", "Transaction management across high-value homes", "Consistent client satisfaction and repeat business"],
      contactTitle: "Discuss your next move with Michael.",
      contactLead: "Whether you are buying your first luxury home, expanding an investment portfolio, or preparing a signature listing for market, Michael can help you plan the next step.",
      email: "michael.carter@luxestate.com",
      image: "assets/images/pexels-rdne-10376221.jpg"
    },
    "sophia-bennett": {
      name: "Sophia Bennett",
      role: "Investment Property Strategist",
      heroLead: "Investment-grade residential strategist for global buyers seeking resilient premium assets.",
      profileLead: "Sophia blends sharp underwriting instincts with elegant client communication for buyers focused on returns, portfolio balance, and long-term market strength.",
      asideStat: "11+ years in global advisory",
      asideNote: "Trusted by cross-border buyers for disciplined analysis and clear, risk-aware recommendations.",
      metric1Value: "11+",
      metric1Label: "Years advising investors",
      metric2Value: "$29M",
      metric2Label: "Annual transaction volume",
      metric3Value: "87%",
      metric3Label: "Repeat and referral clients",
      specialties: ["Portfolio acquisitions", "Branded residences", "Rental yield reviews", "Cross-border buying"],
      aboutTitle: "Analytical, composed, and globally minded.",
      aboutParagraph1: "Sophia Bennett supports investors and globally mobile buyers who need more than a polished tour. She helps clients compare assets through rental outlook, market resilience, exit flexibility, and neighborhood trajectory.",
      aboutParagraph2: "Her process is especially valuable for buyers who want strategic clarity before moving capital. She keeps complex decisions structured, practical, and aligned with long-term ownership goals.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Sophia emphasizes disciplined advice, transparent numbers, and calm decision support for clients making significant commitments.",
      valuesList: ["Clear investment framing before offer stage", "Transparent risk and return conversations", "Structured due diligence for premium assets", "High responsiveness across time zones"],
      expertiseTitle: "Expertise",
      expertiseLead: "She specializes in premium urban stock, branded residences, and investment-caliber homes with strong resale and leasing narratives.",
      expertiseList: ["Investment-oriented luxury analysis", "Neighborhood growth and supply review", "Cross-border transaction coordination", "Portfolio-fit decision support"],
      contactTitle: "Plan your next acquisition with Sophia.",
      contactLead: "If you are comparing premium assets, entering a new market, or balancing lifestyle with return, Sophia can help structure the right move.",
      email: "sophia.bennett@luxestate.com",
      image: "assets/images/pexels-mart-production-7709222.jpg"
    },
    "daniel-ross": {
      name: "Daniel Ross",
      role: "Country Estate Specialist",
      heroLead: "Niche-market advisor covering golf estates, country retreats, and legacy lifestyle properties.",
      profileLead: "Daniel is known for matching buyers with low-density, lifestyle-rich homes that balance privacy, land value, and long-hold appeal.",
      asideStat: "12+ years in niche markets",
      asideNote: "A steady advisor for clients prioritizing space, land quality, and destination-driven living.",
      metric1Value: "12+",
      metric1Label: "Years in specialty estates",
      metric2Value: "$24M",
      metric2Label: "Closed across retreat markets",
      metric3Value: "89%",
      metric3Label: "Client satisfaction rate",
      specialties: ["Golf estates", "Country homes", "Retreat properties", "Legacy purchases"],
      aboutTitle: "Grounded, patient, and lifestyle-focused.",
      aboutParagraph1: "Daniel Ross works with buyers searching beyond city-core inventory. He helps clients evaluate estate homes for privacy, land usability, membership value, and year-round ownership practicality.",
      aboutParagraph2: "His advisory style is calm and thorough, making him especially effective with clients who want to weigh emotional fit alongside financial logic.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Daniel prioritizes realistic guidance and detailed property context so buyers make confident decisions without pressure.",
      valuesList: ["Thoughtful property matching", "Transparent tradeoff discussions", "Strong diligence around operations and upkeep", "Respectful, low-pressure guidance"],
      expertiseTitle: "Expertise",
      expertiseLead: "He understands the nuances of destination-driven ownership, from amenity networks to estate maintenance and future value positioning.",
      expertiseList: ["Golf and club community insight", "Estate land-use evaluation", "Lifestyle-versus-cost decision support", "Retreat and second-home planning"],
      contactTitle: "Explore estate living with Daniel.",
      contactLead: "Whether you want a golf estate, a countryside retreat, or a family legacy property, Daniel can help narrow the right fit.",
      email: "daniel.ross@luxestate.com",
      image: "assets/images/pexels-yankrukov-8867244.jpg"
    },
    "olivia-hayes": {
      name: "Olivia Hayes",
      role: "Luxury Relocation Specialist",
      heroLead: "Luxury relocation specialist helping executive buyers move with confidence, speed, and local clarity.",
      profileLead: "Olivia coordinates high-touch moves for professionals and families who need neighborhood fit, logistics support, and premium service continuity.",
      asideStat: "9+ years in relocation advisory",
      asideNote: "Known for making complex moves feel organized, personal, and low-friction.",
      metric1Value: "9+",
      metric1Label: "Years in relocation",
      metric2Value: "160+",
      metric2Label: "Family and executive moves",
      metric3Value: "93%",
      metric3Label: "Relocation referral rate",
      specialties: ["Executive moves", "School-focused searches", "Luxury rentals", "Family relocation"],
      aboutTitle: "Organized, warm, and highly responsive.",
      aboutParagraph1: "Olivia Hayes supports clients who need more than property tours. She helps them evaluate commute patterns, school access, neighborhood rhythm, and the practical details that determine whether a move feels successful.",
      aboutParagraph2: "Her strength lies in reducing friction during time-sensitive transitions while preserving the standard of service premium buyers expect.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Olivia leads with empathy, structure, and dependable follow-through across every stage of the move.",
      valuesList: ["Clear relocation planning", "Neighborhood fit over guesswork", "Fast and thoughtful communication", "High-touch support during compressed timelines"],
      expertiseTitle: "Expertise",
      expertiseLead: "She specializes in premium relocation journeys that require speed, trust, and strong local interpretation.",
      expertiseList: ["Executive and family relocation", "Lifestyle and school-area matching", "Temporary-to-permanent housing strategy", "Move-readiness coordination"],
      contactTitle: "Make your next move easier with Olivia.",
      contactLead: "If you are relocating for work, family, or lifestyle reasons, Olivia can help you find the right home with less friction.",
      email: "olivia.hayes@luxestate.com",
      image: "assets/images/pexels-olly-864994.jpg"
    },
    "ethan-brooks": {
      name: "Ethan Brooks",
      role: "Pricing and Negotiation Advisor",
      heroLead: "High-value pricing strategist focused on family estates, gated communities, and long-hold assets.",
      profileLead: "Ethan combines pricing discipline with strong negotiation instincts for buyers and sellers navigating premium suburban and estate inventory.",
      asideStat: "13+ years in pricing strategy",
      asideNote: "Respected for clear valuation framing and composed negotiation under pressure.",
      metric1Value: "13+",
      metric1Label: "Years in negotiation",
      metric2Value: "$34M",
      metric2Label: "Recent luxury deal volume",
      metric3Value: "90%",
      metric3Label: "Client retention score",
      specialties: ["Family estates", "Gated communities", "Pricing strategy", "Long-hold assets"],
      aboutTitle: "Measured, strategic, and outcome-focused.",
      aboutParagraph1: "Ethan Brooks helps clients make sense of value in markets where comparable sales do not always tell the full story. He is especially effective where property quality, land position, and buyer psychology shape the outcome.",
      aboutParagraph2: "Clients work with him when they want disciplined pricing logic, sharp negotiation, and a practical path through high-value transactions.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Ethan believes premium deals still need straightforward advice, realistic expectations, and disciplined client advocacy.",
      valuesList: ["Evidence-based pricing guidance", "Strong negotiation planning", "Clear communication around leverage", "Practical support through closing"],
      expertiseTitle: "Expertise",
      expertiseLead: "His focus spans premium suburban inventory, large-format family homes, and estate properties with nuanced valuation patterns.",
      expertiseList: ["Luxury pricing strategy", "Negotiation positioning", "Family estate market analysis", "Value framing for long-term buyers"],
      contactTitle: "Discuss pricing and value with Ethan.",
      contactLead: "If you are weighing a premium purchase or preparing a high-value listing, Ethan can help define the right strategy.",
      email: "ethan.brooks@luxestate.com",
      image: "assets/images/pexels-kindelmedia-6774438.jpg"
    },
    "ava-sullivan": {
      name: "Ava Sullivan",
      role: "Private Client Waterfront Advisor",
      heroLead: "Private-client advisor for lifestyle-led buyers seeking resort homes and waterfront access.",
      profileLead: "Ava serves buyers who care deeply about arrival experience, amenity quality, and the emotional value of premium coastal living.",
      asideStat: "10+ years in private client advisory",
      asideNote: "Known for pairing elevated service with sharp understanding of lifestyle-driven purchases.",
      metric1Value: "10+",
      metric1Label: "Years with private clients",
      metric2Value: "$31M",
      metric2Label: "Waterfront and resort sales",
      metric3Value: "92%",
      metric3Label: "Client referral rate",
      specialties: ["Resort homes", "Waterfront access", "Lifestyle purchases", "Private client services"],
      aboutTitle: "Elegant, intuitive, and service-led.",
      aboutParagraph1: "Ava Sullivan advises buyers looking for more than square footage. She helps them evaluate how a property lives day to day, how it hosts, and how well it delivers on the lifestyle promise behind the listing.",
      aboutParagraph2: "Her work is especially valued by clients seeking coastal, resort-style, and wellness-oriented homes with a strong sense of experience.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Ava keeps the process calm, polished, and transparent while protecting her clients’ time and standards.",
      valuesList: ["High-touch private client service", "Lifestyle-first property guidance", "Clear coordination across showings and diligence", "Thoughtful communication at every stage"],
      expertiseTitle: "Expertise",
      expertiseLead: "She focuses on premium homes where view quality, amenity mix, privacy, and hospitality-style living all matter.",
      expertiseList: ["Waterfront lifestyle evaluation", "Resort and wellness home advisory", "Experience-led property matching", "Private client transaction support"],
      contactTitle: "Find the right lifestyle home with Ava.",
      contactLead: "If you are searching for a resort home, a waterfront property, or a private escape, Ava can guide the process with clarity.",
      email: "ava.sullivan@luxestate.com",
      image: "assets/images/pexels-olly-3762367.jpg"
    },
    "noah-bennett": {
      name: "Noah Bennett",
      role: "Architectural Homes Advisor",
      heroLead: "Negotiation-driven advisor serving architectural homes, penthouses, and discreet off-market searches.",
      profileLead: "Noah helps design-conscious buyers navigate premium inventory where rarity, architecture, and discretion all influence the purchase.",
      asideStat: "8+ years in architectural sales",
      asideNote: "A strong fit for buyers seeking unique design, privacy, and strategic dealmaking.",
      metric1Value: "8+",
      metric1Label: "Years in design-led sales",
      metric2Value: "$22M",
      metric2Label: "Architectural and penthouse volume",
      metric3Value: "88%",
      metric3Label: "Off-market client return rate",
      specialties: ["Architectural homes", "Penthouses", "Off-market search", "Design-led buying"],
      aboutTitle: "Discreet, design-aware, and negotiation-led.",
      aboutParagraph1: "Noah Bennett works with buyers who value originality and privacy. He is especially effective in design-led segments where emotional pull is high but disciplined selection is still essential.",
      aboutParagraph2: "He helps clients compare rare inventory carefully, balancing architecture, market value, and long-term ownership relevance.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Noah brings discretion, honesty, and sharp strategic thinking to high-sensitivity searches and negotiations.",
      valuesList: ["Respect for privacy and timing", "Disciplined evaluation of unique homes", "Direct negotiation guidance", "Balanced advice in emotionally driven searches"],
      expertiseTitle: "Expertise",
      expertiseLead: "His focus includes penthouses, design-led residences, and inventory that rarely fits standard comparison models.",
      expertiseList: ["Architectural property analysis", "Off-market buying support", "Penthouse and skyline inventory", "Rarity and premium positioning"],
      contactTitle: "Search distinctive homes with Noah.",
      contactLead: "If you are looking for something rare, private, or architecturally special, Noah can help you search with precision.",
      email: "noah.bennett@luxestate.com",
      image: "assets/images/pexels-mart-production-7709225.jpg"
    },
    "grace-turner": {
      name: "Grace Turner",
      role: "International Buyer Advocate",
      heroLead: "Buyer advocate for international clients balancing neighborhood fit, schools, and long-term value.",
      profileLead: "Grace supports globally mobile families who need trusted local context, careful decision support, and premium service through every stage.",
      asideStat: "10+ years with international buyers",
      asideNote: "Valued for translating local nuance into clear, practical guidance for cross-border decisions.",
      metric1Value: "10+",
      metric1Label: "Years in international advisory",
      metric2Value: "140+",
      metric2Label: "Cross-border buyer journeys",
      metric3Value: "94%",
      metric3Label: "Client confidence score",
      specialties: ["International relocation", "School-area searches", "Neighborhood fit", "Family advisory"],
      aboutTitle: "Thoughtful, informed, and highly client-centered.",
      aboutParagraph1: "Grace Turner works with international buyers who need more context than local buyers often do. She helps clients understand neighborhood culture, schooling options, commute patterns, and long-term market confidence before they commit.",
      aboutParagraph2: "Her strength is turning complexity into clarity, especially for families entering a new city or country for the first time.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Grace prioritizes patience, cultural awareness, and transparent guidance so clients feel supported, not rushed.",
      valuesList: ["Clear translation of local market signals", "Family-first neighborhood guidance", "Reliable communication across borders", "Decision support rooted in long-term fit"],
      expertiseTitle: "Expertise",
      expertiseLead: "She specializes in premium family-oriented searches with strong emphasis on fit, comfort, and long-range value.",
      expertiseList: ["International buyer onboarding", "Neighborhood and school-area analysis", "Long-term family fit evaluation", "Cross-border communication and support"],
      contactTitle: "Navigate a new market with Grace.",
      contactLead: "If you are buying from abroad or relocating your family, Grace can help you make the move with clarity and confidence.",
      email: "grace.turner@luxestate.com",
      image: "assets/images/pexels-mikhail-nilov-6894073.jpg"
    },
    "lucas-reed": {
      name: "Lucas Reed",
      role: "Urban Luxury Sales Consultant",
      heroLead: "Luxury sales consultant for branded residences, investor purchases, and premium urban inventory.",
      profileLead: "Lucas specializes in city-facing luxury homes where building quality, amenity profile, and resale liquidity all matter.",
      asideStat: "9+ years in urban luxury",
      asideNote: "A strong advisor for buyers who want premium city living with clear asset logic behind the purchase.",
      metric1Value: "9+",
      metric1Label: "Years in urban premium sales",
      metric2Value: "$27M",
      metric2Label: "Branded and city-residence closings",
      metric3Value: "86%",
      metric3Label: "Investor repeat business",
      specialties: ["Branded residences", "Urban inventory", "Investor purchases", "City penthouses"],
      aboutTitle: "Fast-moving, detail-aware, and city-market fluent.",
      aboutParagraph1: "Lucas Reed works at the intersection of premium city living and investment awareness. He helps clients compare buildings, amenities, service levels, and liquidity factors that shape true urban value.",
      aboutParagraph2: "His style suits buyers who want decisive support in faster-moving city markets without losing depth in the analysis.",
      valuesTitle: "Professionalism and Integrity",
      valuesLead: "Lucas believes city transactions should still feel personal, well-structured, and fully transparent.",
      valuesList: ["Quick, informed market guidance", "Transparent building and amenity comparisons", "Decisive negotiation support", "Strong execution in competitive urban stock"],
      expertiseTitle: "Expertise",
      expertiseLead: "He focuses on branded residences, premium towers, and investor-relevant urban homes with strong usability and resale narratives.",
      expertiseList: ["Luxury urban inventory analysis", "Building amenity and fee evaluation", "Investor-minded city purchases", "High-demand negotiation strategy"],
      contactTitle: "Explore premium city inventory with Lucas.",
      contactLead: "If you are considering a branded residence, a premium tower, or an investor-friendly urban home, Lucas can help you narrow the best options.",
      email: "lucas.reed@luxestate.com",
      image: "assets/images/pexels-tima-miroshnichenko-5198239.jpg"
    }
  };
  const propertyFallbacks = {
    "Maple Court Studio": {
      heroLead: "A compact city listing with efficient planning, strong walkability, and clear first-time buyer appeal.",
      showcaseTitle: "Bright city living with efficient design and walkable convenience.",
      showcaseLead: "A clean starter property profile built from the selected card data and adapted into the overview layout.",
      overviewTitle: "Compact, connected, and easy to maintain.",
      feature1: "Smart layout, built-in storage, and a bright living zone suited for urban routines.",
      feature2: "Close to cafes, transit, retail, and work hubs that reduce daily friction.",
      feature3: "Simple interior planning that keeps maintenance low and function high.",
      feature4: "A strong entry-level option in a location with consistent urban demand.",
      checklistTitle: "Why this property works well",
      checklist: [
        "Efficient plan for first-time buyers or investors",
        "Walkable surroundings that support daily convenience",
        "Low-maintenance layout with clear rental appeal",
        "Good candidate for a simple, practical city lifestyle"
      ]
    }
  };
  const blogFallbacks = {
    "Unseen expenses every buyer should know before stepping into the luxury market.": {
      heroLead: "A practical guide to the hidden operating costs that often matter more than buyers expect in premium transactions.",
      date: "March 13, 2026",
      readTime: "8 min read",
      author: "LuxEstate editorial team",
      takeawaysTitle: "Key takeaways",
      takeaways: [
        { title: "Staffing and upkeep", body: "Landscape, pool, smart-home, and security service layers can materially change monthly ownership cost." },
        { title: "Insurance complexity", body: "Waterfront and custom-architecture homes often require more specialized underwriting than buyers expect." },
        { title: "Lifestyle fees", body: "Memberships, concierge services, and marina access can reshape the full affordability picture." }
      ],
      section1Title: "Look beyond the headline purchase price",
      section1Body: "Prime homes often carry invisible obligations: service contracts, infrastructure upkeep, and specialist maintenance that do not show up in the list price alone.",
      quote: "The best luxury buyers underwrite lifestyle operations, not just acquisition cost.",
      checklistTitle: "Where hidden cost pressure usually appears",
      checklist: [
        "HOA or building reserves that may not fully cover future major works",
        "Insurance premiums shaped by coastlines, slope conditions, or custom construction",
        "Recurring service contracts for security, automation, pools, elevators, and grounds",
        "Membership or amenity fees tied to golf, marina, resort, or club access"
      ],
      section2Title: "Insurance can change faster than buyers expect",
      section2Body: "Premium buyers should review real policy structure early, including exclusions, replacement-cost assumptions, and specialty riders tied to the home’s location and build type.",
      inlineNote: "Waterfront and architecturally unique homes often need specialized underwriting early in the buying process.",
      section3Title: "Operating the home is part of the investment decision",
      section3Body: "The true ownership experience depends on how much support the home requires to preserve its promised lifestyle, from systems to staff to recurring maintenance.",
      numberListTitle: "A practical buyer checklist",
      numberList: [
        "Request the last 12 months of actual carrying costs, not just estimates.",
        "Review insurance declarations and exclusions before final negotiations.",
        "Ask which systems require specialist servicing or annual contracts.",
        "Stress-test ownership cost against your preferred usage pattern."
      ],
      highlightTitle: "Why this matters for conversions too",
      highlightBody: "Educational detail pages like this build trust before a consultation and improve the quality of conversations that follow."
    }
  };
  function syncThemeButtons(theme) {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const icon = button.querySelector("i");
      const label = button.querySelector(".visually-hidden");
      button.setAttribute("aria-pressed", String(theme === "dark"));
      if (icon) icon.className = theme === "dark" ? "ri-sun-line" : "ri-moon-clear-line";
      if (label) label.textContent = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    });
  }
  function syncDirButtons(dir) {
    document.querySelectorAll("[data-dir-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(dir === "rtl"));
      let visibleLabel = button.querySelector(".dir-toggle-label");
      if (!visibleLabel) {
        visibleLabel = document.createElement("span");
        visibleLabel.className = "dir-toggle-label";
        const hiddenLabel = button.querySelector(".visually-hidden");
        if (hiddenLabel) {
          button.insertBefore(visibleLabel, hiddenLabel);
        } else {
          button.appendChild(visibleLabel);
        }
      }

      visibleLabel.textContent = dir === "rtl" ? "LTR" : "RTL";
      const label = button.querySelector(".visually-hidden");
      if (label) label.textContent = dir === "rtl" ? "Switch to left to right" : "Switch to right to left";
    });
  }
  function setTheme(theme) { root.setAttribute("data-theme", theme); localStorage.setItem(themeKey, theme); syncThemeButtons(theme); }
  function setDir(dir) { root.setAttribute("dir", dir); localStorage.setItem(dirKey, dir); syncDirButtons(dir); }
  function bindThemeToggle(button) {
    if (!button || button.dataset.toggleBound === "true") return;
    button.dataset.toggleBound = "true";
    button.addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));
  }
  function bindDirToggle(button) {
    if (!button || button.dataset.toggleBound === "true") return;
    button.dataset.toggleBound = "true";
    button.addEventListener("click", () => setDir(root.getAttribute("dir") === "rtl" ? "ltr" : "rtl"));
  }
  syncThemeButtons(initialTheme);
  syncDirButtons(savedDir || "ltr");
  document.querySelectorAll("[data-theme-toggle]").forEach(bindThemeToggle);
  document.querySelectorAll("[data-dir-toggle]").forEach(bindDirToggle);

  function closeMobileMenu() {
    if (!body.classList.contains("menu-open")) return;
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".menu-item.has-submenu").forEach((item) => item.classList.remove("is-open"));
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const open = body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }
  navItems.forEach((button) => {
    button.addEventListener("click", () => {
      if (window.innerWidth >= 1024) return;
      const parent = button.parentElement;
      const isOpen = parent.classList.contains("is-open");
      document.querySelectorAll(".menu-item.has-submenu").forEach((item) => item.classList.remove("is-open"));
      if (!isOpen) parent.classList.add("is-open");
    });
  });
  if (navWrap) {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    navWrap.querySelectorAll(".menu-link, .submenu a").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const linkPath = href.split("/").pop();
      const isActive = linkPath === currentPath || (currentPath === "" && linkPath === "index.html");
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        const submenuParent = link.closest(".menu-item.has-submenu");
        const toggle = submenuParent?.querySelector(".menu-button");
        if (toggle) toggle.classList.add("is-active");
      }
    });

    navWrap.querySelectorAll(".submenu a, .menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth >= 1024 || !body.classList.contains("menu-open")) return;
        closeMobileMenu();
      });
    });

    navWrap.addEventListener("click", (event) => {
      const actionLink = event.target.closest(".mobile-header-actions a[data-mobile-menu-close]");
      if (!actionLink || window.innerWidth >= 1024) return;
      closeMobileMenu();
    });
  }
  document.addEventListener("click", (event) => {
    if (body.classList.contains("menu-open") && navWrap && menuToggle && !navWrap.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMobileMenu();
    }
  });
  if (dashboardSidebar && dashboardSidebarToggle) {
    const syncDashboardSidebar = (isOpen) => {
      body.classList.toggle("dashboard-sidebar-open", isOpen);
      dashboardSidebarToggle.setAttribute("aria-expanded", String(isOpen));
    };

    dashboardSidebarToggle.addEventListener("click", () => {
      if (window.innerWidth >= 640) return;
      syncDashboardSidebar(!body.classList.contains("dashboard-sidebar-open"));
    });

    dashboardSidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth >= 640) return;
        syncDashboardSidebar(false);
      });
    });

    document.addEventListener("click", (event) => {
      if (
        window.innerWidth >= 640 ||
        !body.classList.contains("dashboard-sidebar-open") ||
        dashboardSidebar.contains(event.target) ||
        dashboardSidebarToggle.contains(event.target)
      ) {
        return;
      }

      syncDashboardSidebar(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 640) {
        syncDashboardSidebar(false);
      }
    });
  }
  authSwitchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-auth-target");
      const tabs = document.querySelectorAll("[data-auth-panel]");
      const toggles = document.querySelectorAll("[data-auth-target]");
      tabs.forEach((panel) => { panel.hidden = panel.getAttribute("data-auth-panel") !== target; });
      toggles.forEach((toggle) => toggle.classList.toggle("is-active", toggle.getAttribute("data-auth-target") === target));
    });
  });
  passwordToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const fieldId = button.getAttribute("data-password-toggle");
      const field = fieldId ? document.getElementById(fieldId) : button.closest(".password-field-wrap")?.querySelector("input");
      const icon = button.querySelector("i");
      if (!field) return;
      const showPassword = field.type === "password";
      field.type = showPassword ? "text" : "password";
      button.setAttribute("aria-pressed", String(showPassword));
      button.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
      if (icon) icon.className = showPassword ? "ri-eye-off-line" : "ri-eye-line";
    });
  });
  function setFieldError(field, message) {
    const fieldWrap = field.closest(".form-field");
    if (!fieldWrap) return;
    const error = fieldWrap.querySelector(".error-text");
    field.setAttribute("aria-invalid", message ? "true" : "false");
    fieldWrap.toggleAttribute("data-error", Boolean(message));
    if (message) {
      fieldWrap.setAttribute("data-error", message);
      field.setAttribute("title", message);
    } else {
      fieldWrap.removeAttribute("data-error");
      field.removeAttribute("title");
    }
    if (error) error.textContent = message || "";
  }
  function validateForm(form) {
    let valid = true;
    const fields = form.querySelectorAll("[data-required]");
    fields.forEach((field) => {
      let message = "";
      if (!field.value.trim()) {
        message = "This field is required.";
      } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
        message = "Enter a valid email address.";
      } else if (field.dataset.minlength && field.value.trim().length < Number(field.dataset.minlength)) {
        message = `Use at least ${field.dataset.minlength} characters.`;
      }
      if (message) valid = false;
      setFieldError(field, message);
    });
    return valid;
  }
  function renderAgentProfile() {
    if (!agentDetailPage) return;

    const params = new URLSearchParams(window.location.search);
    const requestedAgent = params.get("agent") || "michael-carter";
    const profile = agentProfiles[requestedAgent] || agentProfiles["michael-carter"];
    const assetPrefix = body.dataset.prefix || "";

    document.querySelectorAll("[data-agent-field]").forEach((element) => {
      const field = element.getAttribute("data-agent-field");
      if (!field) return;

      if (field === "specialties") {
        element.innerHTML = profile.specialties.map((item) => `<span>${item}</span>`).join("");
        return;
      }

      if (field === "valuesList" || field === "expertiseList") {
        const items = profile[field] || [];
        element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
        return;
      }

      if (field === "aboutEyebrow") {
        element.textContent = `About ${profile.name}`;
        return;
      }

      if (field === "heroName" || field === "profileName") {
        element.textContent = profile.name;
        return;
      }

      element.textContent = profile[field] || "";
    });

    const pageTitle = document.querySelector("[data-agent-title]");
    if (pageTitle) {
      pageTitle.textContent = `${profile.name} | Agent Details`;
      document.title = pageTitle.textContent;
    }

    const metaDescription = document.querySelector('[data-agent-meta="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `${profile.name} profile page for luxury real estate advisory, specialties, experience, and contact details.`);
    }

    const profileImage = document.querySelector("[data-agent-image]");
    if (profileImage) {
      profileImage.src = assetPrefix + profile.image;
      profileImage.alt = `${profile.name} luxury advisor portrait`;
    }

    const contactButton = document.querySelector("[data-agent-contact]");
    if (contactButton) {
      contactButton.textContent = `Contact ${profile.name.split(" ")[0]}`;
      contactButton.href = `mailto:${profile.email}`;
    }
  }
  function hydrateAgentCards() {
    if (!agentsPage) return;

    const assetPrefix = body.dataset.prefix || "";
    const cards = agentsPage.querySelectorAll(".blog-card");
    cards.forEach((card) => {
      const link = card.querySelector('a[href*="agent-details.html?agent="]');
      const image = card.querySelector("img");
      if (!link || !image) return;

      const href = link.getAttribute("href") || "";
      const slug = href.split("agent=")[1]?.split("&")[0];
      const profile = slug ? agentProfiles[slug] : null;
      if (!profile) return;

      image.src = assetPrefix + profile.image;
      image.alt = `${profile.name} profile photo`;
    });
  }
  function setupBlogHeroVideo() {
    if (!blogArticlePage) return;

    const heroPanel = blogArticlePage.querySelector(".article-hero-panel");
    if (!heroPanel || heroPanel.querySelector(".article-hero-video")) return;

    const assetPrefix = body.dataset.prefix || "";
    const video = document.createElement("video");
    video.className = "article-hero-video";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("aria-hidden", "true");

    const source = document.createElement("source");
    source.src = `${assetPrefix}assets/images/1093662-hd_1920_1080_30fps.mp4`;
    source.type = "video/mp4";

    video.appendChild(source);
    heroPanel.prepend(video);
    heroPanel.classList.add("is-video-enhanced");
  }
  function slugify(value) {
    return (value || "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  function getPropertyPreset(name, tags, sizeText, description, location) {
    const explicit = propertyFallbacks[name];
    if (explicit) return explicit;

    const category = (tags[0] || "").toLowerCase();
    const type = tags[1] || "Residence";
    const sizeNumber = parseInt((sizeText || "").replace(/[^\d]/g, ""), 10) || 0;
    const locationShort = (location || "").split(",")[0];
    const bedCount = category === "small" ? 1 : category === "medium" ? 3 : 5;
    const bathCount = category === "small" ? 1 : category === "medium" ? 3 : 6;
    const lotValue = category === "large" ? "1.6" : category === "medium" ? "0.4" : "0.1";

    return {
      heroLead: `${type} in ${locationShort} with ${description.toLowerCase()}`,
      showcaseTitle: `${type} living shaped around ${locationShort.toLowerCase()} convenience and comfort.`,
      showcaseLead: "The shared property page reads the selected listing and turns it into a fuller overview without needing separate HTML files.",
      overviewTitle: `${name} brings space, clarity, and market-ready presentation together.`,
      overviewParagraph1: `${name} is presented as a more detailed property page using the data from the clicked card. This gives the buyer a stronger sense of the home, the location, and the value story without changing the rest of the site structure.`,
      overviewParagraph2: `The selected listing highlights ${type.toLowerCase()} positioning in ${locationShort}. The page keeps the layout premium and clean while using the original card details as the source of truth.`,
      feature1: `${bedCount} bedrooms, approximately ${bathCount} bathrooms, and a layout designed around ${type.toLowerCase()} comfort.`,
      feature2: `Located in ${locationShort}, with neighborhood positioning that supports lifestyle fit and practical daily access.`,
      feature3: `${description} The interior story can later expand with tours, floor plans, and amenity modules.`,
      feature4: sizeNumber >= 4000
        ? "Premium square footage and scarcity can support long-term desirability in its segment."
        : sizeNumber >= 1800
          ? "Balanced size, livability, and local demand create strong all-round appeal."
          : "Compact footprint and accessible pricing can support both lifestyle value and rental interest.",
      checklistTitle: "Why this property stands out",
      checklist: [
        `${type} format suited to ${category || "target"} buyers`,
        `Location context anchored in ${locationShort}`,
        `Clear card-to-detail flow without creating extra pages`,
        "Ready for later expansion into tours, inquiries, and saved comparisons"
      ],
      stat1Value: String(bedCount),
      stat1Label: "Bedrooms",
      stat2Value: String(bathCount),
      stat2Label: "Bathrooms",
      stat3Value: sizeText.replace(/ sq ft/i, ""),
      stat3Label: "Sq ft",
      stat4Value: lotValue,
      stat4Label: category === "large" ? "Acres" : "Lot est."
    };
  }
  function setupPropertyOverviewLinks() {
    if (!propertyListingGrid) return;

    const links = propertyListingGrid.querySelectorAll('.text-link[href*="property-overview.html"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const card = link.closest(".property-card");
        if (!card) return;

        const image = card.querySelector(".media-cover");
        const title = card.querySelector("h3")?.textContent.trim() || "Property Overview";
        const description = card.querySelector("p")?.textContent.trim() || "";
        const tags = Array.from(card.querySelectorAll(".tag-row .tag")).map((item) => item.textContent.trim()).filter(Boolean);
        const metaItems = Array.from(card.querySelectorAll(".meta-row span")).map((item) => item.textContent.trim());
        const price = metaItems[0] || "";
        const location = metaItems[1] || "";
        const size = metaItems[2] || "";
        const preset = getPropertyPreset(title, tags, size, description, location);
        const params = new URLSearchParams({
          slug: slugify(title),
          name: title,
          desc: description,
          price,
          location,
          size,
          tag1: tags[0] || "Featured",
          tag2: tags[1] || "For Sale",
          tag3: "Video Tour",
          image: image ? image.getAttribute("src") || "" : "",
          alt: image ? image.getAttribute("alt") || title : title,
          type: tags[1] || "Residence"
        });

        Object.entries(preset).forEach(([key, value]) => {
          params.set(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });

        event.preventDefault();
        window.location.href = `${link.href.split("?")[0]}?${params.toString()}`;
      });
    });
  }
  function renderPropertyOverview() {
    if (!propertyOverviewPage) return;

    const params = new URLSearchParams(window.location.search);
    const propertyName = params.get("name");
    if (!propertyName) return;

    const fallback = getPropertyPreset(
      propertyName,
      [params.get("tag1") || "", params.get("tag2") || ""],
      params.get("size") || "",
      params.get("desc") || "",
      params.get("location") || ""
    );

    const fieldValues = {
      name: propertyName,
      heroLead: params.get("heroLead") || fallback.heroLead,
      locationFull: params.get("location") || "",
      typeLabel: `${params.get("type") || "Residence"} ${params.get("tag1") ? params.get("tag1").toLowerCase() : "listing"}`.trim(),
      price: params.get("price") || "",
      showcaseTitle: params.get("showcaseTitle") || fallback.showcaseTitle,
      showcaseLead: params.get("showcaseLead") || fallback.showcaseLead,
      overviewTitle: params.get("overviewTitle") || fallback.overviewTitle,
      overviewParagraph1: params.get("overviewParagraph1") || fallback.overviewParagraph1,
      overviewParagraph2: params.get("overviewParagraph2") || fallback.overviewParagraph2,
      feature1: params.get("feature1") || fallback.feature1,
      feature2: params.get("feature2") || fallback.feature2,
      feature3: params.get("feature3") || fallback.feature3,
      feature4: params.get("feature4") || fallback.feature4,
      checklistTitle: params.get("checklistTitle") || fallback.checklistTitle,
      stat1Value: params.get("stat1Value") || fallback.stat1Value,
      stat1Label: params.get("stat1Label") || fallback.stat1Label,
      stat2Value: params.get("stat2Value") || fallback.stat2Value,
      stat2Label: params.get("stat2Label") || fallback.stat2Label,
      stat3Value: params.get("stat3Value") || fallback.stat3Value,
      stat3Label: params.get("stat3Label") || fallback.stat3Label,
      stat4Value: params.get("stat4Value") || fallback.stat4Value,
      stat4Label: params.get("stat4Label") || fallback.stat4Label,
      sidePrice: params.get("price") || "",
      sideType: params.get("type") || "Residence",
      sideLocation: params.get("location") || "",
      sideStatus: "Available now"
    };

    document.querySelectorAll("[data-property-field]").forEach((element) => {
      const field = element.getAttribute("data-property-field");
      if (!field) return;

      if (field === "checklist") {
        let items = fallback.checklist;
        const raw = params.get("checklist");
        if (raw) {
          try {
            items = JSON.parse(raw);
          } catch {
            items = fallback.checklist;
          }
        }
        element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
        return;
      }

      element.textContent = fieldValues[field] || "";
    });

    [1, 2, 3].forEach((index) => {
      const tagElement = document.querySelector(`[data-property-tag="${index}"]`);
      if (!tagElement) return;
      tagElement.textContent = params.get(`tag${index}`) || tagElement.textContent;
    });

    const propertyImage = document.querySelector("[data-property-image]");
    if (propertyImage && params.get("image")) {
      propertyImage.src = params.get("image");
      propertyImage.alt = params.get("alt") || `${propertyName} exterior`;
    }

    const titleElement = document.querySelector("[data-property-title]");
    const fullTitle = `${propertyName} | Property Overview`;
    if (titleElement) {
      titleElement.textContent = fullTitle;
    }
    document.title = fullTitle;

    const metaDescription = document.querySelector('[data-property-meta="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `${propertyName} in ${params.get("location") || "a premium location"} listed at ${params.get("price") || "market price"} with overview details and buyer actions.`);
    }
  }
  function getBlogPreset(title, description, tag, image) {
    const explicit = blogFallbacks[title];
    if (explicit) return explicit;

    const lowerTag = (tag || "insight").toLowerCase();
    const keyword = (title || "article").toLowerCase();
    return {
      heroLead: `${description} This article expands that topic into a cleaner long-form LuxEstate editorial page.`,
      date: "March 13, 2026",
      readTime: lowerTag === "guide" ? "6 min read" : lowerTag === "finance" ? "7 min read" : "5 min read",
      author: "LuxEstate editorial team",
      takeawaysTitle: "Key takeaways",
      takeaways: [
        { title: "Clear buyer context", body: `This piece turns "${title}" into a fuller advisory article rather than a short listing summary.` },
        { title: "Practical interpretation", body: "The detail page gives room for stronger explanation, objections handling, and trust-building content." },
        { title: "Lead quality support", body: "Longer editorial pages can improve readiness before the first consultation or inquiry." }
      ],
      section1Title: `Why ${lowerTag} content matters in luxury real estate`,
      section1Body: `${description} Strong editorial framing helps buyers understand not only what matters, but why it matters in a premium decision-making context.`,
      quote: `Well-structured ${lowerTag} content reduces hesitation and improves trust before the first call.`,
      checklistTitle: "Core points worth paying attention to",
      checklist: [
        "How the topic shapes buyer confidence and timing",
        "What signals or details deserve closer review",
        "Where stronger presentation improves understanding",
        "How the insight supports better-quality conversations"
      ],
      section2Title: "What buyers and sellers should notice first",
      section2Body: `When a topic like "${keyword}" appears simple at first glance, the real value usually comes from context, interpretation, and the decisions it supports.`,
      inlineNote: "A visual break like this helps the article feel more editorial and easier to scan.",
      section3Title: "How this translates into better decision-making",
      section3Body: "Better articles create a smoother path from attention to inquiry by answering practical questions before they become objections.",
      numberListTitle: "A practical reading checklist",
      numberList: [
        "Identify the core decision this article is helping with.",
        "Look for the specific signals or risks highlighted in the piece.",
        "Translate the advice into your own budget, timeline, or search criteria.",
        "Use the insight to ask better questions before moving forward."
      ],
      highlightTitle: "Why this article format works",
      highlightBody: "A single reusable blog details page can still feel specific and useful when it inherits the clicked article’s content cleanly."
    };
  }
  function setupBlogDetailLinks() {
    if (!blogListingPage) return;

    const links = blogListingPage.querySelectorAll('a[href*="blog-details.html"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const storyCard = link.closest(".blog-story-card");
        const featuredCard = link.closest(".blog-featured-card");
        let title = "";
        let description = "";
        let tag1 = "Insight";
        let tag2 = "Buyer strategy";
        let imageSrc = "../assets/images/pexels-mart-production-7709114.jpg";
        let imageAlt = "Blog article visual";

        if (featuredCard) {
          title = featuredCard.querySelector("h2")?.textContent.trim() || "";
          description = featuredCard.querySelector("p")?.textContent.trim() || "";
          const tags = Array.from(featuredCard.querySelectorAll(".tag-row .tag")).map((item) => item.textContent.trim());
          tag1 = tags[0] || "Featured story";
          tag2 = tags[1] || "Buyer strategy";
          const image = featuredCard.querySelector(".media-cover");
          imageSrc = image?.getAttribute("src") || imageSrc;
          imageAlt = image?.getAttribute("alt") || imageAlt;
        } else if (storyCard) {
          title = storyCard.querySelector("h3")?.textContent.trim() || "";
          description = storyCard.querySelector("p")?.textContent.trim() || "";
          const tags = Array.from(storyCard.querySelectorAll(".meta-row .tag")).map((item) => item.textContent.trim());
          tag1 = tags[0] || "Article";
          tag2 = "Buyer strategy";
          const image = storyCard.querySelector(".media-cover");
          imageSrc = image?.getAttribute("src") || imageSrc;
          imageAlt = image?.getAttribute("alt") || imageAlt;
        } else {
          return;
        }

        const preset = getBlogPreset(title, description, tag1, imageSrc);
        const params = new URLSearchParams({
          slug: slugify(title),
          title,
          heroLead: preset.heroLead,
          desc: description,
          date: preset.date,
          readTime: preset.readTime,
          author: preset.author,
          tag1,
          tag2,
          image: imageSrc,
          alt: imageAlt,
          section1Title: preset.section1Title,
          section1Body: preset.section1Body,
          quote: preset.quote,
          checklistTitle: preset.checklistTitle,
          section2Title: preset.section2Title,
          section2Body: preset.section2Body,
          inlineNote: preset.inlineNote,
          section3Title: preset.section3Title,
          section3Body: preset.section3Body,
          highlightTitle: preset.highlightTitle,
          highlightBody: preset.highlightBody,
          takeawaysTitle: preset.takeawaysTitle
        });

        params.set("takeaways", JSON.stringify(preset.takeaways));
        params.set("checklist", JSON.stringify(preset.checklist));
        params.set("numberListTitle", preset.numberListTitle);
        params.set("numberList", JSON.stringify(preset.numberList));
        params.set("paragraph1", preset.section1Body);
        params.set("paragraph2", description);
        params.set("paragraph3", preset.section3Body);

        event.preventDefault();
        window.location.href = `${link.href.split("?")[0]}?${params.toString()}`;
      });
    });
  }
  function renderBlogDetail() {
    if (!blogArticlePage) return;

    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    if (!title) return;

    const fallback = getBlogPreset(
      title,
      params.get("desc") || "",
      params.get("tag1") || "",
      params.get("image") || ""
    );

    const fieldValues = {
      title,
      heroLead: params.get("heroLead") || fallback.heroLead,
      date: params.get("date") || fallback.date,
      readTime: params.get("readTime") || fallback.readTime,
      author: params.get("author") || fallback.author,
      takeawaysTitle: params.get("takeawaysTitle") || fallback.takeawaysTitle,
      paragraph1: params.get("paragraph1") || fallback.section1Body,
      paragraph2: params.get("paragraph2") || params.get("desc") || fallback.heroLead,
      section1Title: params.get("section1Title") || fallback.section1Title,
      section1Body: params.get("section1Body") || fallback.section1Body,
      quote: params.get("quote") || fallback.quote,
      checklistTitle: params.get("checklistTitle") || fallback.checklistTitle,
      section2Title: params.get("section2Title") || fallback.section2Title,
      section2Body: params.get("section2Body") || fallback.section2Body,
      inlineNote: params.get("inlineNote") || fallback.inlineNote,
      section3Title: params.get("section3Title") || fallback.section3Title,
      section3Body: params.get("section3Body") || fallback.section3Body,
      paragraph3: params.get("paragraph3") || fallback.section3Body,
      numberListTitle: params.get("numberListTitle") || fallback.numberListTitle,
      highlightTitle: params.get("highlightTitle") || fallback.highlightTitle,
      highlightBody: params.get("highlightBody") || fallback.highlightBody
    };

    document.querySelectorAll("[data-blog-field]").forEach((element) => {
      const field = element.getAttribute("data-blog-field");
      if (!field) return;

      if (field === "takeaways") {
        let items = fallback.takeaways;
        const raw = params.get("takeaways");
        if (raw) {
          try {
            items = JSON.parse(raw);
          } catch {}
        }
        element.innerHTML = items.map((item) => `<div class="faq-item"><h4>${item.title}</h4><p>${item.body}</p></div>`).join("");
        return;
      }

      if (field === "checklist" || field === "numberList") {
        let items = field === "checklist" ? fallback.checklist : fallback.numberList;
        const raw = params.get(field);
        if (raw) {
          try {
            items = JSON.parse(raw);
          } catch {}
        }
        const tag = field === "checklist" ? "li" : "li";
        element.innerHTML = items.map((item) => `<${tag}>${item}</${tag}>`).join("");
        return;
      }

      element.textContent = fieldValues[field] || "";
    });

    [1, 2].forEach((index) => {
      const tagElement = document.querySelector(`[data-blog-tag="${index}"]`);
      if (tagElement) tagElement.textContent = params.get(`tag${index}`) || tagElement.textContent;
    });

    const image = document.querySelector("[data-blog-image]");
    if (image && params.get("image")) {
      image.src = params.get("image");
      image.alt = params.get("alt") || title;
    }

    const inlineImage = document.querySelector("[data-blog-inline-image]");
    if (inlineImage && params.get("image")) {
      inlineImage.src = params.get("image");
      inlineImage.alt = params.get("alt") || title;
    }

    const pageTitle = document.querySelector("[data-blog-title]");
    if (pageTitle) pageTitle.textContent = title;
    document.title = title;

    const metaDescription = document.querySelector('[data-blog-meta="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `${title} - ${params.get("desc") || fallback.heroLead}`);
    }
  }
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      if (!validateForm(form)) {
        if (status) status.textContent = "Please fix the highlighted fields.";
        return;
      }
      if (status) status.textContent = "Submitted successfully. This HTML demo is ready for backend integration.";
      form.reset();
    });
  });
  hydrateAgentCards();
  setupBlogHeroVideo();
  if (propertyGrid && propertyToggle) {
    const cards = Array.from(propertyGrid.querySelectorAll(".property-card"));
    const initialCount = Number(propertyGrid.getAttribute("data-initial-count")) || 12;
    const stepCount = Number(propertyGrid.getAttribute("data-step-count")) || 6;
    const assetPrefix = body.dataset.prefix || "";
    const propertyImagePool = [
      "assets/images/pexels-binyaminmellish-186077.jpg",
      "assets/images/pexels-binyaminmellish-1396122.jpg",
      "assets/images/pexels-binyaminmellish-1396132.jpg",
      "assets/images/pexels-robertkso-14672017.jpg",
      "assets/images/pexels-robertkso-14074835.jpg",
      "assets/images/pexels-michaelgaultphotos-5587932.jpg",
      "assets/images/pexels-michaelgaultphotos-6422928.jpg",
      "assets/images/pexels-michaelgaultphotos-6422937.jpg",
      "assets/images/pexels-deepak-dk-197763-4933643.jpg",
      "assets/images/pexels-krr023-816198.jpg",
      "assets/images/pexels-artbovich-7031608.jpg",
      "assets/images/pexels-ron-greenberg-1098633379-20708166.jpg",
      "assets/images/pexels-artbovich-8134745.jpg",
      "assets/images/pexels-artbovich-8143671.jpg",
      "assets/images/pexels-artbovich-8082322.jpg",
      "assets/images/pexels-artbovich-8143677.jpg",
      "assets/images/pexels-curtis-adams-1694007-5178034.jpg",
      "assets/images/pexels-diogo-miranda-2044514-26953738.jpg"
    ];
    let visibleCount = initialCount;

    function assignPropertyImages() {
      cards.forEach((card, index) => {
        const image = card.querySelector(".media-cover");
        if (!image) return;
        image.src = assetPrefix + propertyImagePool[index % propertyImagePool.length];
      });
    }

    function renderPropertyCards() {
      cards.forEach((card, index) => {
        card.classList.toggle("is-hidden", index >= visibleCount);
      });

      const allVisible = visibleCount >= cards.length;
      propertyToggle.hidden = cards.length <= initialCount;
      propertyToggle.textContent = allVisible ? "Read less" : "Read more";
      propertyToggle.setAttribute("aria-expanded", String(allVisible));
    }

    propertyToggle.addEventListener("click", () => {
      if (visibleCount >= cards.length) {
        visibleCount = initialCount;
        renderPropertyCards();
        propertyGrid.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      visibleCount = Math.min(visibleCount + stepCount, cards.length);
      renderPropertyCards();
    });

    assignPropertyImages();
    renderPropertyCards();
  }
  loadMoreGrids.forEach((grid) => {
    const gridName = grid.getAttribute("data-load-more-grid");
    const toggle = document.querySelector(`[data-load-more-toggle="${gridName}"]`);
    const items = Array.from(grid.querySelectorAll(".load-more-item"));
    const initialCount = Number(grid.getAttribute("data-initial-count")) || items.length;
    const stepCount = Number(grid.getAttribute("data-step-count")) || initialCount;
    let visibleCount = initialCount;

    if (!toggle || !items.length) return;

    function renderLoadMoreItems() {
      items.forEach((item, index) => {
        item.classList.toggle("is-hidden", index >= visibleCount);
      });

      const allVisible = visibleCount >= items.length;
      toggle.hidden = items.length <= initialCount;
      toggle.textContent = allVisible ? "Read less" : "Read more";
      toggle.setAttribute("aria-expanded", String(allVisible));
    }

    toggle.addEventListener("click", () => {
      if (visibleCount >= items.length) {
        visibleCount = initialCount;
        renderLoadMoreItems();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      visibleCount = Math.min(visibleCount + stepCount, items.length);
      renderLoadMoreItems();
    });

    renderLoadMoreItems();
  });
  testimonialSliders.forEach((testimonialSlider) => {
    const track = testimonialSlider.querySelector("[data-testimonial-track]");
    const prevButton = testimonialSlider.querySelector("[data-testimonial-prev]");
    const nextButton = testimonialSlider.querySelector("[data-testimonial-next]");
    const slides = track ? Array.from(track.children) : [];
    let currentIndex = 0;

    function getSlidesPerView() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function updateTestimonialSlider() {
      if (!track || !slides.length) return;
      const perView = getSlidesPerView();
      const maxIndex = Math.max(0, slides.length - perView);
      currentIndex = Math.min(currentIndex, maxIndex);
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || "0");
      track.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
      if (prevButton) prevButton.disabled = currentIndex === 0;
      if (nextButton) nextButton.disabled = currentIndex >= maxIndex;
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateTestimonialSlider();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const maxIndex = Math.max(0, slides.length - getSlidesPerView());
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateTestimonialSlider();
      });
    }

    window.addEventListener("resize", updateTestimonialSlider);
    updateTestimonialSlider();
  });
  if (aboutAccordion) {
    const accordionItems = Array.from(aboutAccordion.querySelectorAll(".home-two-accordion"));

    accordionItems.forEach((item) => {
      const button = item.querySelector("[data-accordion-toggle]");
      const panel = item.querySelector(".home-two-accordion-panel");
      if (!button || !panel) return;

      button.addEventListener("click", () => {
        const willOpen = !item.classList.contains("is-open");

        accordionItems.forEach((entry) => {
          const entryButton = entry.querySelector("[data-accordion-toggle]");
          const entryPanel = entry.querySelector(".home-two-accordion-panel");
          entry.classList.toggle("is-open", entry === item && willOpen);
          if (entryButton) entryButton.setAttribute("aria-expanded", String(entry === item && willOpen));
          if (entryPanel) entryPanel.hidden = !(entry === item && willOpen);
        });
      });
    });
  }
  accordions.forEach((accordion) => {
    const accordionItems = Array.from(accordion.querySelectorAll(".contact-faq-item"));

    accordionItems.forEach((item) => {
      const button = item.querySelector("[data-accordion-toggle]");
      const panel = item.querySelector(".contact-faq-panel");
      if (!button || !panel) return;

      button.addEventListener("click", () => {
        const willOpen = !item.classList.contains("is-open");

        accordionItems.forEach((entry) => {
          const entryButton = entry.querySelector("[data-accordion-toggle]");
          const entryPanel = entry.querySelector(".contact-faq-panel");
          const isActive = entry === item && willOpen;
          entry.classList.toggle("is-open", isActive);
          if (entryButton) entryButton.setAttribute("aria-expanded", String(isActive));
          if (entryPanel) entryPanel.hidden = !isActive;
        });
      });
    });
  });
  if (countUpItems.length) {
    const formatCountValue = (value) => {
      if (value >= 1000) {
        const shortValue = value / 1000;
        return Number.isInteger(shortValue) ? `${shortValue}k` : `${shortValue.toFixed(1)}k`;
      }
      return String(value);
    };

    const animateCount = (item) => {
      if (item.dataset.countAnimated === "true") return;
      item.dataset.countAnimated = "true";

      const target = Number(item.getAttribute("data-count-up")) || 0;
      const suffix = item.getAttribute("data-count-suffix") || "";
      const duration = 1400;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * eased);
        item.textContent = `${formatCountValue(currentValue)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    countUpItems.forEach((item) => countObserver.observe(item));
  }
  if (revealItems.length) {
    revealItems.forEach((item, index) => {
      const parent = item.parentElement;
      const siblingReveals = parent ? Array.from(parent.children).filter((child) => child.hasAttribute("data-reveal")) : [];
      const staggerIndex = siblingReveals.indexOf(item);
      const delay = staggerIndex >= 0 ? Math.min(staggerIndex * 70, 280) : Math.min(index * 20, 180);
      item.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealItems.forEach((item) => observer.observe(item));
  }

  const diversifiedMediaSets = {
    properties: [
      "assets/images/pexels-apartment-block-hd.jpg",
      "assets/images/pexels-city-building-night-hd.jpg",
      "assets/images/pexels-classic-apartment-hd.jpg",
      "assets/images/pexels-curved-apartment-hd.jpg",
      "assets/images/pexels-luxury-home-night-hd.jpg",
      "assets/images/pexels-modern-apartment-gold-hd.jpg",
      "assets/images/pexels-wood-facade-home-hd.jpg",
      "assets/images/apartment-balcony-modern.jpg",
      "assets/images/apartment-facade-color.jpg",
      "assets/images/luxury-villa-pool.jpg",
      "assets/images/modern-villa-twilight.jpg",
      "assets/images/pexels-villa-twilight-hd.jpg"
    ],
    agents: [
      "assets/images/pexels-mikhail-nilov-7681303.jpg",
      "assets/images/pexels-shkrabaanthony-8192000.jpg",
      "assets/images/pexels-mikhail-nilov-6592550.jpg",
      "assets/images/pexels-olly-864994.jpg",
      "assets/images/pexels-kindelmedia-6774438.jpg",
      "assets/images/pexels-olly-3762367.jpg",
      "assets/images/pexels-mart-production-7709225.jpg",
      "assets/images/pexels-mikhail-nilov-6894073.jpg",
      "assets/images/pexels-tima-miroshnichenko-5198239.jpg"
    ]
  };

  function diversifyCardMedia(selector, sources) {
    const cards = document.querySelectorAll(selector);
    if (!cards.length || !sources.length) return;

    cards.forEach((card, index) => {
      const image = card.querySelector("img");
      if (!image) return;
      const prefix = body.dataset.prefix || "";
      const nextSource = `${prefix}${sources[index % sources.length]}`;
      image.src = nextSource;
      image.loading = "lazy";
      image.decoding = "async";
    });
  }

  document.querySelectorAll("img").forEach((image, index) => {
    if (index > 1) image.loading = "lazy";
    image.decoding = "async";
  });

  diversifyCardMedia(".properties-page .property-card", diversifiedMediaSets.properties);
  diversifyCardMedia(".agents-page .blog-card", diversifiedMediaSets.agents);

  renderAgentProfile();
  setupPropertyOverviewLinks();
  renderPropertyOverview();
  setupBlogDetailLinks();
  renderBlogDetail();
  window.addEventListener("load", () => document.querySelectorAll(".skeleton").forEach((item) => item.classList.remove("skeleton")));
  if (yearSlot) yearSlot.textContent = new Date().getFullYear();
})();
