
import React, { useState, useEffect } from 'react';
import './App.css';

const experiences = [
  {
    id: 1,
    name: "Discover Old Tbilisi",
    country: "Georgia",
    category: "Culture",
    price: 25,
    rating: 4.9,
    emoji: "🏘️",
    color: "#e8d8c3",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=85",
    description:
      "Walk through charming streets, discover hidden courtyards, and experience the history of Georgia with a local guide.",
  },
  {
    id: 2,
    name: "Taste Italian Traditions",
    country: "Italy",
    category: "Food",
    price: 45,
    rating: 4.8,
    emoji: "🍝",
    color: "#f0d8c7",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&q=85",
    description:
      "Explore local food traditions and discover the flavors that make Italian cuisine special.",
  },
  {
    id: 3,
    name: "Mountain Escape",
    country: "Georgia",
    category: "Nature",
    price: 60,
    rating: 5.0,
    emoji: "🏔️",
    color: "#d5e2d5",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85",
    description:
      "Discover mountain scenery, beautiful trails, and the welcoming hospitality of local communities.",
  },
  {
    id: 4,
    name: "Explore Kyoto",
    country: "Japan",
    category: "Culture",
    price: 35,
    rating: 4.9,
    emoji: "⛩️",
    color: "#e6d8e5",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=85",
    description:
      "Discover traditional architecture, peaceful gardens, and the cultural heritage of Kyoto.",
  },
  {
    id: 5,
    name: "A Day by the Sea",
    country: "Greece",
    category: "Nature",
    price: 40,
    rating: 4.7,
    emoji: "🌊",
    color: "#d5e7eb",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=85",
    description:
      "Spend a relaxing day discovering coastal scenery and local seaside traditions.",
  },
  {
    id: 6,
    name: "Moroccan Market Walk",
    country: "Morocco",
    category: "Culture",
    price: 30,
    rating: 4.8,
    emoji: "🕌",
    color: "#f0dfbd",
    image:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=900&q=85",
    description:
      "Explore colorful markets, traditional crafts, and the stories behind local products.",
  },
];

const translations = {
  English: {
    home: "Home",
    countries: "Countries",
    experiences: "Experiences",
    becomeHost: "Become a host",
    signIn: "Sign in",
    heroEyebrow: "TRAVEL DIFFERENTLY",
    heroTitle: "Discover the world through local eyes.",
    heroDescription:
      "Authentic experiences, hidden places, and unforgettable stories — shared by the people who know them best.",
    explore: "Explore experiences",
    exploreCountries: "Explore countries",
    countriesTitle: "Where will you go?",
    countriesDescription:
      "Explore destinations and find your next adventure.",
    searchCountry: "Search countries...",
    experiencesTitle: "Experiences worth remembering",
    experiencesDescription:
      "Discover meaningful experiences hosted by people who call these places home.",
    searchExperience: "Search experiences or countries...",
    all: "All",
    Culture: "Culture",
    Nature: "Nature",
    Food: "Food",
    perPerson: "person",
    book: "Book experience",
    noResults: "No experiences found. Try another search.",
    loading: "Discovering countries...",
    countryError: "Countries couldn't load. You can still explore experiences.",
    capital: "Capital",
    region: "Region",
    whyTitle: "Travel with a deeper connection",
    whyOneTitle: "Local knowledge",
    whyOne: "Discover places and stories you won't find in ordinary guidebooks.",
    whyTwoTitle: "Real experiences",
    whyTwo: "Meet local people and experience the culture beyond the tourist trail.",
    whyThreeTitle: "Travel thoughtfully",
    whyThree: "Support local hosts and the communities you visit.",
    hostTitle: "Share your world with travelers",
    hostDescription:
      "Turn your knowledge, passions, and local traditions into memorable experiences.",
    hostButton: "Become a host",
    footerText: "Find your own way around the world.",
    bookingTitle: "Book your experience",
    date: "Choose a date",
    travelers: "Travelers",
    total: "Total",
    confirm: "Confirm booking",
    cancel: "Cancel",
    bookingSuccess: "Your demo booking is confirmed!",
    bookingNote:
      "This is a demonstration. No payment has been taken and no real reservation was made.",
    hostModalTitle: "Become a Roamly host",
    hostName: "Your name",
    hostEmail: "Your email",
    hostIdea: "Describe your experience",
    send: "Submit interest",
    hostSuccess: "Thanks! Your demo application has been received.",
    close: "Close",
    saved: "Saved",
    favorites: "Saved experiences",
    showAll: "Show all experiences",
  },
  Georgian: {
    home: "მთავარი",
    countries: "ქვეყნები",
    experiences: "გამოცდილებები",
    becomeHost: "გახდი მასპინძელი",
    signIn: "შესვლა",
    heroEyebrow: "იმოგზაურე განსხვავებულად",
    heroTitle: "აღმოაჩინე სამყარო ადგილობრივების თვალით.",
    heroDescription:
      "ნამდვილი გამოცდილებები, დამალული ადგილები და დაუვიწყარი ისტორიები.",
    explore: "გამოცდილებების ნახვა",
    exploreCountries: "ქვეყნების ნახვა",
    countriesTitle: "სად გაემგზავრები?",
    countriesDescription: "აღმოაჩინე მიმართულებები და დაგეგმე თავგადასავალი.",
    searchCountry: "ქვეყნის ძიება...",
    experiencesTitle: "გამოცდილებები, რომლებიც დაგამახსოვრდება",
    experiencesDescription: "აღმოაჩინე ადგილობრივების მიერ შემოთავაზებული გამოცდილებები.",
    searchExperience: "მოძებნე გამოცდილება ან ქვეყანა...",
    all: "ყველა",
    Culture: "კულტურა",
    Nature: "ბუნება",
    Food: "საკვები",
    perPerson: "ადამიანზე",
    book: "დაჯავშნა",
    noResults: "გამოცდილება ვერ მოიძებნა. სცადე სხვა ძიება.",
    loading: "ქვეყნები იტვირთება...",
    countryError: "ქვეყნების ჩატვირთვა ვერ მოხერხდა.",
    capital: "დედაქალაქი",
    region: "რეგიონი",
    whyTitle: "იმოგზაურე უფრო ღრმა კავშირით",
    whyOneTitle: "ადგილობრივი ცოდნა",
    whyOne: "აღმოაჩინე ისტორიები და ადგილები.",
    whyTwoTitle: "ნამდვილი გამოცდილებები",
    whyTwo: "გაიცანი ადგილობრივი ადამიანები და კულტურა.",
    whyThreeTitle: "პასუხისმგებლიანი მოგზაურობა",
    whyThree: "მხარი დაუჭირე ადგილობრივ მასპინძლებს.",
    hostTitle: "გაუზიარე შენი სამყარო მოგზაურებს",
    hostDescription: "აქციე შენი ცოდნა და ტრადიციები დასამახსოვრებელ გამოცდილებად.",
    hostButton: "გახდი მასპინძელი",
    footerText: "იპოვე შენი გზა სამყაროში.",
    bookingTitle: "გამოცდილების დაჯავშნა",
    date: "აირჩიე თარიღი",
    travelers: "მოგზაურები",
    total: "სულ",
    confirm: "დაჯავშნის დადასტურება",
    cancel: "გაუქმება",
    bookingSuccess: "საცდელი ჯავშანი დადასტურებულია!",
    bookingNote: "ეს მხოლოდ დემონსტრაციაა. თანხა არ ჩამოგეჭრება.",
    hostModalTitle: "გახდი Roamly-ის მასპინძელი",
    hostName: "შენი სახელი",
    hostEmail: "შენი ელფოსტა",
    hostIdea: "აღწერე შენი გამოცდილება",
    send: "განაცხადის გაგზავნა",
    hostSuccess: "გმადლობთ! საცდელი განაცხადი მიღებულია.",
    close: "დახურვა",
    saved: "შენახული",
    favorites: "შენახული გამოცდილებები",
    showAll: "ყველა გამოცდილება",
  },
  Spanish: {
    home: "Inicio",
    countries: "Países",
    experiences: "Experiencias",
    becomeHost: "Ser anfitrión",
    signIn: "Iniciar sesión",
    heroEyebrow: "VIAJA DE OTRA MANERA",
    heroTitle: "Descubre el mundo con ojos locales.",
    heroDescription: "Experiencias auténticas, lugares escondidos e historias inolvidables.",
    explore: "Explorar experiencias",
    exploreCountries: "Explorar países",
    countriesTitle: "¿Adónde irás?",
    countriesDescription: "Descubre destinos y encuentra tu próxima aventura.",
    searchCountry: "Buscar países...",
    experiencesTitle: "Experiencias para recordar",
    experiencesDescription: "Descubre experiencias de quienes conocen estos lugares.",
    searchExperience: "Buscar experiencias o países...",
    all: "Todas",
    Culture: "Cultura",
    Nature: "Naturaleza",
    Food: "Comida",
    perPerson: "persona",
    book: "Reservar experiencia",
    noResults: "No se encontraron experiencias.",
    loading: "Cargando países...",
    countryError: "No se pudieron cargar los países.",
    capital: "Capital",
    region: "Región",
    whyTitle: "Viaja con una conexión más profunda",
    whyOneTitle: "Conocimiento local",
    whyOne: "Descubre lugares e historias especiales.",
    whyTwoTitle: "Experiencias reales",
    whyTwo: "Conoce a la gente y la cultura local.",
    whyThreeTitle: "Viaja con conciencia",
    whyThree: "Apoya a los anfitriones locales.",
    hostTitle: "Comparte tu mundo con viajeros",
    hostDescription: "Convierte tus conocimientos en experiencias memorables.",
    hostButton: "Ser anfitrión",
    footerText: "Encuentra tu propio camino por el mundo.",
    bookingTitle: "Reservar experiencia",
    date: "Elige una fecha",
    travelers: "Viajeros",
    total: "Total",
    confirm: "Confirmar reserva",
    cancel: "Cancelar",
    bookingSuccess: "¡Reserva de demostración confirmada!",
    bookingNote: "Esto es una demostración. No se ha realizado ningún pago.",
    hostModalTitle: "Conviértete en anfitrión de Roamly",
    hostName: "Tu nombre",
    hostEmail: "Tu correo electrónico",
    hostIdea: "Describe tu experiencia",
    send: "Enviar solicitud",
    hostSuccess: "¡Gracias! Hemos recibido tu solicitud de demostración.",
    close: "Cerrar",
    saved: "Guardado",
    favorites: "Experiencias guardadas",
    showAll: "Mostrar todas",
  },
  French: {
    home: "Accueil",
    countries: "Pays",
    experiences: "Expériences",
    becomeHost: "Devenir hôte",
    signIn: "Se connecter",
    heroEyebrow: "VOYAGEZ AUTREMENT",
    heroTitle: "Découvrez le monde avec un regard local.",
    heroDescription: "Des expériences authentiques, des lieux cachés et des histoires inoubliables.",
    explore: "Explorer les expériences",
    exploreCountries: "Explorer les pays",
    countriesTitle: "Où irez-vous ?",
    countriesDescription: "Découvrez des destinations et votre prochaine aventure.",
    searchCountry: "Rechercher des pays...",
    experiencesTitle: "Des expériences inoubliables",
    experiencesDescription: "Découvrez des expériences proposées par des habitants.",
    searchExperience: "Rechercher des expériences ou des pays...",
    all: "Tout",
    Culture: "Culture",
    Nature: "Nature",
    Food: "Cuisine",
    perPerson: "personne",
    book: "Réserver",
    noResults: "Aucune expérience trouvée.",
    loading: "Chargement des pays...",
    countryError: "Impossible de charger les pays.",
    capital: "Capitale",
    region: "Région",
    whyTitle: "Voyagez avec un lien plus profond",
    whyOneTitle: "Connaissance locale",
    whyOne: "Découvrez des lieux et des histoires uniques.",
    whyTwoTitle: "Expériences réelles",
    whyTwo: "Rencontrez les habitants et découvrez leur culture.",
    whyThreeTitle: "Voyager autrement",
    whyThree: "Soutenez les hôtes locaux.",
    hostTitle: "Partagez votre monde avec les voyageurs",
    hostDescription: "Transformez vos connaissances en expériences mémorables.",
    hostButton: "Devenir hôte",
    footerText: "Trouvez votre propre chemin dans le monde.",
    bookingTitle: "Réserver une expérience",
    date: "Choisir une date",
    travelers: "Voyageurs",
    total: "Total",
    confirm: "Confirmer la réservation",
    cancel: "Annuler",
    bookingSuccess: "Réservation de démonstration confirmée !",
    bookingNote: "Ceci est une démonstration. Aucun paiement effectué.",
    hostModalTitle: "Devenir hôte Roamly",
    hostName: "Votre nom",
    hostEmail: "Votre e-mail",
    hostIdea: "Décrivez votre expérience",
    send: "Envoyer la demande",
    hostSuccess: "Merci ! Votre demande de démonstration a été reçue.",
    close: "Fermer",
    saved: "Enregistré",
    favorites: "Expériences enregistrées",
    showAll: "Tout afficher",
  },
};

function App() {
  const [language, setLanguage] = useState("English");
  const [countries, setCountries] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countriesError, setCountriesError] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [experienceSearch, setExperienceSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [saved, setSaved] = useState([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [booking, setBooking] = useState(null);
  const [hostOpen, setHostOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [bookingMessage, setBookingMessage] = useState("");
  const [hostMessage, setHostMessage] = useState("");

  const t = translations[language];

  useEffect(() => {
    let cancelled = false;

    async function loadCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,cca3"
        );

        if (!response.ok) {
          throw new Error("Could not load countries");
        }

        const data = await response.json();

        if (!cancelled) {
          const sorted = data
            .filter((country) => country.name?.common)
            .sort((a, b) =>
              a.name.common.localeCompare(b.name.common)
            );
          setCountries(sorted);
        }
      } catch (error) {
        console.error("Country loading error:", error);
        if (!cancelled) setCountriesError(true);
      } finally {
        if (!cancelled) setCountriesLoading(false);
      }
    }

    loadCountries();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(countrySearch.toLowerCase().trim())
  );

  const filtered = experiences.filter((place) => {
    const search = experienceSearch.toLowerCase().trim();
    const matchesSearch =
      place.name.toLowerCase().includes(search) ||
      place.country.toLowerCase().includes(search) ||
      place.description.toLowerCase().includes(search);

    const matchesCategory =
      category === "All" || place.category === category;

    const matchesSaved =
      !showSavedOnly || saved.includes(place.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  function toggleSaved(id) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }

  function openBooking(place) {
    setBooking(place);
    setBookingDate("");
    setTravellers(1);
    setBookingMessage("");
  }

  function confirmBooking(event) {
    event.preventDefault();
    if (!bookingDate) return;
    setBookingMessage(t.bookingSuccess);
  }

  function submitHost(event) {
    event.preventDefault();
    setHostMessage(t.hostSuccess);
  }

  return (
    <div className="roamly-app">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Roamly home">
          <span className="brand-icon">r.</span>
          <span>roamly</span>
        </a>

        <nav className="main-nav">
          <a href="#home">{t.home}</a>
          <a href="#countries">{t.countries}</a>
          <a href="#experiences">{t.experiences}</a>
        </nav>

        <div className="header-actions">
          <select
            className="language-select"
            aria-label="Choose language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="English">EN</option>
            <option value="Georgian">ქართული</option>
            <option value="Spanish">ES</option>
            <option value="French">FR</option>
          </select>

          <button
            className="button button-outline header-host-button"
            onClick={() => {
              setHostOpen(true);
              setHostMessage("");
            }}
          >
            {t.becomeHost}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroDescription}</p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#experiences">
                {t.explore}
                <span aria-hidden="true"> ↗</span>
              </a>
              <a className="button button-light" href="#countries">
                {t.exploreCountries}
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars" aria-hidden="true">
                <span>🌿</span>
                <span>🌍</span>
                <span>☀️</span>
              </div>
              <p>
                <strong>Local stories. Real people.</strong>
                <br />
                Meaningful travel starts here.
              </p>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-photo hero-photo-main">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1100&q=85"
                alt="Beautiful mountain lake and travel scenery"
              />
            </div>
            <div className="hero-photo hero-photo-small">
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=85"
                alt="Colorful Italian village"
              />
            </div>
            <div className="hero-note">
              <span className="hero-note-icon">✳</span>
              <div>
                <strong>Go beyond the usual.</strong>
                <p>Find your kind of adventure.</p>
              </div>
            </div>
            <span className="hero-sparkle sparkle-one">✳</span>
            <span className="hero-sparkle sparkle-two">✦</span>
          </div>
        </section>

        <section className="countries-section section-wrap" id="countries">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A WORLD TO EXPLORE</span>
              <h2>{t.countriesTitle}</h2>
              <p>{t.countriesDescription}</p>
            </div>

            <div className="country-search search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder={t.searchCountry}
                value={countrySearch}
                onChange={(event) => setCountrySearch(event.target.value)}
                aria-label={t.searchCountry}
              />
            </div>
          </div>

          {countriesLoading && (
            <p className="status-message">{t.loading}</p>
          )}

          {countriesError && !countriesLoading && (
            <p className="status-message">{t.countryError}</p>
          )}

          {!countriesLoading && !countriesError && (
            <>
              <div className="country-grid">
                {filteredCountries.slice(0, 12).map((country) => (
                  <article
                    className="country-card"
                    key={country.cca3}
                  >
                    <div className="country-flag">
                      {country.flags?.svg || country.flags?.png ? (
                        <img
                          src={country.flags.svg || country.flags.png}
                          alt={`Flag of ${country.name.common}`}
                          loading="lazy"
                        />
                      ) : (
                        <span>🌍</span>
                      )}
                    </div>
                    <div className="country-card-info">
                      <h3>{country.name.common}</h3>
                      <p>
                        {country.capital?.[0] || country.region || "Explore"}
                      </p>
                    </div>
                    <span className="country-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </article>
                ))}
              </div>

              {filteredCountries.length === 0 && (
                <p className="empty-state">
                  No countries found. Try another search.
                </p>
              )}

              {filteredCountries.length > 12 && (
                <p className="country-count">
                  Showing 12 of {filteredCountries.length} countries. Use
                  search to find another destination.
                </p>
              )}
            </>
          )}
        </section>

        <section
          className="experiences-section section-wrap"
          id="experiences"
        >
          <div className="section-heading experiences-heading">
            <div>
              <span className="eyebrow">MADE FOR THE CURIOUS</span>
              <h2>{t.experiencesTitle}</h2>
              <p>{t.experiencesDescription}</p>
            </div>

            <button
              className={`button ${
                showSavedOnly ? "button-primary" : "button-outline"
              } saved-filter-button`}
              onClick={() => setShowSavedOnly((value) => !value)}
            >
              <span aria-hidden="true">♡</span>{" "}
              {showSavedOnly ? t.showAll : `${t.favorites} (${saved.length})`}
            </button>
          </div>

          <div className="experience-controls">
            <div className="experience-search search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder={t.searchExperience}
                value={experienceSearch}
                onChange={(event) =>
                  setExperienceSearch(event.target.value)
                }
                aria-label={t.searchExperience}
              />
            </div>

            <div className="category-filters" aria-label="Filter experiences">
              {["All", "Culture", "Nature", "Food"].map((item) => (
                <button
                  key={item}
                  className={`filter-chip ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item === "All" ? t.all : t[item]}
                </button>
              ))}
            </div>
          </div>

          <div className="experience-grid">
            {filtered.map((place, index) => (
              <article className="experience-card" key={place.id}>
                <div
                  className={`card-art card-art-${index % 6}`}
                  style={{ backgroundColor: place.color }}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="experience-image"
                    loading="lazy"
                  />

                  <span className="card-category">
                    {t[place.category]}
                  </span>

                  <button
                    className={`save-button ${
                      saved.includes(place.id) ? "is-saved" : ""
                    }`}
                    onClick={() => toggleSaved(place.id)}
                    aria-label={
                      saved.includes(place.id)
                        ? `Remove ${place.name} from saved experiences`
                        : `Save ${place.name}`
                    }
                    title={
                      saved.includes(place.id) ? t.saved : "Save experience"
                    }
                  >
                    {saved.includes(place.id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="card-details">
                  <div className="card-location">
                    <span>{place.country}</span>
                    <span className="card-rating">
                      <span aria-hidden="true">★</span> {place.rating}
                    </span>
                  </div>

                  <h3>{place.name}</h3>
                  <p className="card-description">{place.description}</p>

                  <div className="card-bottom">
                    <p className="card-price">
                      <strong>€{place.price}</strong>
                      <span> / {t.perPerson}</span>
                    </p>
                    <button
                      className="button button-primary card-book-button"
                      onClick={() => openBooking(place)}
                    >
                      {t.book} <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <span className="empty-state-icon">⌕</span>
              <h3>{t.noResults}</h3>
              <button
                className="button button-outline"
                onClick={() => {
                  setExperienceSearch("");
                  setCategory("All");
                  setShowSavedOnly(false);
                }}
              >
                {t.showAll}
              </button>
            </div>
          )}
        </section>

        <section className="why-section">
          <div className="section-wrap">
            <div className="why-heading">
              <span className="eyebrow">THE ROAMLY DIFFERENCE</span>
              <h2>{t.whyTitle}</h2>
            </div>

            <div className="why-grid">
              <article className="why-card">
                <span className="why-icon">⌖</span>
                <h3>{t.whyOneTitle}</h3>
                <p>{t.whyOne}</p>
              </article>

              <article className="why-card">
                <span className="why-icon">✳</span>
                <h3>{t.whyTwoTitle}</h3>
                <p>{t.whyTwo}</p>
              </article>

              <article className="why-card">
                <span className="why-icon">♡</span>
                <h3>{t.whyThreeTitle}</h3>
                <p>{t.whyThree}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="host-section section-wrap">
          <div className="host-panel">
            <div className="host-panel-art" aria-hidden="true">
              <span className="host-sun">☼</span>
              <span className="host-art-house">⌂</span>
              <span className="host-art-leaf">❋</span>
            </div>

            <div className="host-panel-content">
              <span className="eyebrow">YOUR PLACE, YOUR STORY</span>
              <h2>{t.hostTitle}</h2>
              <p>{t.hostDescription}</p>
              <button
                className="button button-light"
                onClick={() => {
                  setHostOpen(true);
                  setHostMessage("");
                }}
              >
                {t.hostButton} <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">r.</span>
          <span>roamly</span>
        </a>
        <p>{t.footerText}</p>
        <div className="footer-links">
          <a href="#countries">{t.countries}</a>
          <a href="#experiences">{t.experiences}</a>
          <button
            onClick={() => {
              setHostOpen(true);
              setHostMessage("");
            }}
          >
            {t.becomeHost}
          </button>
        </div>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Roamly
        </span>
      </footer>

      {booking && (
        <div
          className="modal-backdrop"
          onClick={() => setBooking(null)}
          role="presentation"
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setBooking(null)}
              aria-label={t.close}
            >
              ×
            </button>

            {bookingMessage ? (
              <div className="modal-success">
                <span className="success-icon">✓</span>
                <h2>{bookingMessage}</h2>
                <p>{t.bookingNote}</p>
                <button
                  className="button button-primary modal-submit"
                  onClick={() => setBooking(null)}
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">YOUR NEXT ADVENTURE</span>
                <h2 id="booking-modal-title">{t.bookingTitle}</h2>

                <div className="modal-experience">
                  <img src={booking.image} alt={booking.name} />
                  <div>
                    <h3>{booking.name}</h3>
                    <p>{booking.country}</p>
                    <strong>€{booking.price}</strong> / {t.perPerson}
                  </div>
                </div>

                <form onSubmit={confirmBooking} className="modal-form">
                  <label htmlFor="booking-date">{t.date}</label>
                  <input
                    id="booking-date"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={bookingDate}
                    onChange={(event) => setBookingDate(event.target.value)}
                    required
                  />

                  <label htmlFor="travellers">{t.travelers}</label>
                  <select
                    id="travellers"
                    value={travellers}
                    onChange={(event) =>
                      setTravellers(Number(event.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>

                  <div className="booking-total">
                    <span>{t.total}</span>
                    <strong>€{booking.price * travellers}</strong>
                  </div>

                  <p className="demo-notice">
                    Demo only — this does not make a real reservation or
                    process a payment.
                  </p>

                  <button
                    className="button button-primary modal-submit"
                    type="submit"
                  >
                    {t.confirm}
                  </button>

                  <button
                    className="modal-cancel"
                    type="button"
                    onClick={() => setBooking(null)}
                  >
                    {t.cancel}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {hostOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setHostOpen(false)}
          role="presentation"
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="host-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setHostOpen(false)}
              aria-label={t.close}
            >
              ×
            </button>

            {hostMessage ? (
              <div className="modal-success">
                <span className="success-icon">✓</span>
                <h2>{hostMessage}</h2>
                <p>
                  This is a demo form. Your details have not been sent to a
                  real service.
                </p>
                <button
                  className="button button-primary modal-submit"
                  onClick={() => setHostOpen(false)}
                >
                  {t.close}
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">SHARE YOUR PASSION</span>
                <h2 id="host-modal-title">{t.hostModalTitle}</h2>
                <p className="modal-intro">{t.hostDescription}</p>

                <form onSubmit={submitHost} className="modal-form">
                  <label htmlFor="host-name">{t.hostName}</label>
                  <input id="host-name" name="name" required />

                  <label htmlFor="host-email">{t.hostEmail}</label>
                  <input
                    id="host-email"
                    name="email"
                    type="email"
                    required
                  />

                  <label htmlFor="host-idea">{t.hostIdea}</label>
                  <textarea
                    id="host-idea"
                    name="idea"
                    rows="4"
                    required
                  />

                  <p className="demo-notice">
                    Demo only. This form will not send your information
                    anywhere.
                  </p>

                  <button
                    className="button button-primary modal-submit"
                    type="submit"
                  >
                    {t.send}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
