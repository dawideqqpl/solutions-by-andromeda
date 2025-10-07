// src/pages/PortfolioPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";
import projectYoutuber from "../assets/project-youtuber.webp"; // <-- dodane
import gameDaomation from "../assets/game-daomation.png";
import gamePesseJollak from "../assets/game-pesse-jollak.png";
import gameSuperFlare from "../assets/game-superflare.png";
import gameBuddyDice from "../assets/game-buddy-dice.png";
import gameTankOnline from "../assets/game-tank-online.png";
import gameFatman from "../assets/game-fatman.png";
import video1 from "../assets/videos/video-1.mp4";
import video2 from "../assets/videos/video-2.mp4";
import video3 from "../assets/videos/video-3.mp4";
import video4 from "../assets/videos/video-4.mp4";
import video5 from "../assets/videos/video-5.mp4";

// Prosty placeholder dla pozycji bez miniatury
const Placeholder = ({ title }) => (
  <div className="w-full h-56 flex items-center justify-center bg-gradient-to-b from-[#322a4f] to-[#2a2440]">
    <span className="text-white/85 font-semibold px-4 text-center">
      {title}
    </span>
  </div>
);

/* ==================== TŁUMACZENIA ==================== */
const translations = {
  pl: {
    pageTitle: "Dawid Zieliński - Portfolio",
    pageSubtitle:
      "Poznaj przykłady projektów, które stworzyłem — od stron wizytówkowych po zaawansowane aplikacje webowe.",
    aboutTitle: "Kilka słów o mnie",
    aboutText: `Cześć! Nazywam się Dawid, w tym roku skończyłem 22 lata.
Od 7 lat zajmuję się tworzeniem gier, a od 4 lat robię to profesjonalnie.
Zaczynałem hobbystycznie, tworząc swoje pierwsze gry, a jedna z nich osiągnęła spory sukces na Google Play,
gdzie została pobrana ponad 100 tysięcy razy! Od 4 lat działam jako freelancer na platformie Fiverr,
gdzie zrealizowałem ponad 50 projektów ze średnią oceną 5.0.
Tworzę gry mobilne, desktopowe, webowe oraz aplikacje.
Specjalizuję się w grach web3, czyli w połączeniu ze światem kryptowalut.`,
    skillsTitle: "Umiejętności",
    viewFull: "Powiększ",
    open: "Otwórz",
    contactTitle: "Kontakt",
    contactText: "Możesz się ze mną skontaktować przez LinkedIn lub e-mail:",
    skills: [
  { name: "Unity", value: 4, of: 5 },
  { name: "C#", value: 4, of: 5 },
  { name: "Gry", value: 4, of: 5 },
  { name: "Krypto", value: 5, of: 5 },
  { name: "Komunikacja", value: 5, of: 5 },
  { name: "JavaScript", value: 3, of: 5 },
  { name: "Python", value: 4, of: 5 },
  { name: "PlayFab", value: 4, of: 5 },

  { name: "Język angielski", value: "B2", type: "language" },
],
items: [
  // === WIDEO 1 (YouTube) ===
   {
    id: "v1",
    type: "video",
    title: "Video z Gry WEB3 Oscar Jump",
    sources: [{ src: video1, type: "video/mp4" }],
  },
  // === WIDEO 2 (natywne MP4) ===
   {
    id: "v2",
    type: "video",
    title: "Video z Gry WEB3 Crash Game",
    sources: [{ src: video2, type: "video/mp4" }],
  },
  // === WIDEO 2 (natywne MP4) ===
   {
    id: "v3",
    type: "video",
    title: "Video z Gry WEB3 Green Candle",
    sources: [{ src: video3, type: "video/mp4" }],
  },
    {
    id: "v4",
    type: "video",
    title: "Video z Gry WEB3 Coin Pusher",
    sources: [{ src: video4, type: "video/mp4" }],
  },
     {
    id: "v5",
    type: "video",
    title: "Video z Gry WEB3 Racing Game",
    sources: [{ src: video4, type: "video/mp4" }],
  },
  {
    id: "p7",
    image: projectYoutuber,
    title: "Project YouTuber — gra mobilna",
    description: "Gra na Android (100 000+ pobrań).",
    link: "https://play.google.com/store/apps/details?id=com.dawidzielinski.projectyoutuber&pcampaignid=web_share",
    linkLabel: "Zobacz w Google Play",
    clickImageToLink: true,
  },
  {
    id: "p8",
    image: gameDaomation,
    title: "Daomation — gra WEB3",
    description: "Gra oparta o blockchain, integracja z tokenem $DAO.",
  },
  {
    id: "p9",
    image: gamePesseJollak,
    title: "Pesse Jollak — gra WEB3",
    description: "Gra z własnym tokenem i ekonomią Play2Earn.",
  },
  {
    id: "p10",
    image: gameSuperFlare,
    title: "Super Flare — gra WEB3",
    description: "Dynamiczna gra mobilna z integracją NFT.",
  },
  {
    id: "p11",
    image: gameBuddyDice,
    title: "Buddy Dice — gra WEB3",
    description: "Gra na blockchainie Ethereum.",
  },
  {
    id: "p12",
    image: gameTankOnline,
    title: "Tank Online — gra WEB3",
    description: "Gra multiplayer 2D z integracją walleta.",
  },
  {
    id: "p13",
    image: gameFatman,
    title: "Fatman — gra WEB3",
    description: "Gra inspirowana klasycznym Pac-Manem z rankingiem online.",
  },
  {
    id: "p14",
    image: portfolio6,
    title: "Gra WEB3",
    description: "Gra mobilna WEB3 z integracją NFT + tokena",
  },
],


    langLabel: "Język",
    pl: "PL",
    en: "EN",
  },
  en: {
    pageTitle: "Dawid Zieliński - Portfolio",
    pageSubtitle:
      "See examples of projects I’ve created — from simple business-card sites to advanced web applications.",
    aboutTitle: "A few words about me",
    aboutText: `Hi! My name is Dawid, I’m 22 years old.
I’ve been making games for 7 years, and for the last 4 years I’ve been doing it professionally.
I started as a hobbyist, creating my first games, and one of them reached significant success on Google Play
with over 100,000 downloads! For the past 4 years I’ve been a freelancer on Fiverr,
completing 50+ projects with an average rating of 5.0.
I build mobile, desktop and web games and applications.
I specialize in Web3 games that connect gaming with the crypto world.`,
    skillsTitle: "Skills",
    viewFull: "View",
    open: "Open",
    contactTitle: "Contact",
contactText: "You can reach me via LinkedIn or e-mail:",
skills: [
  { name: "Unity", value: 4, of: 5 },
  { name: "C#", value: 4, of: 5 },
  { name: "Games", value: 4, of: 5 },
  { name: "Crypto", value: 5, of: 5 },
  { name: "Communication", value: 5, of: 5 },
  { name: "JavaScript", value: 3, of: 5 },
  { name: "Python", value: 4, of: 5 },
{ name: "PlayFab", value: 4, of: 5 },

  { name: "English language", value: "B2", type: "language" },
],
    items: [
         {
    id: "v1",
    type: "video",
    title: "Video of WEB3 Game Oscar Jump",
    sources: [{ src: video1, type: "video/mp4" }],
  },
  // === WIDEO 2 (natywne MP4) ===
   {
    id: "v2",
    type: "video",
    title: "Video of WEB3 Game Crash Game",
    sources: [{ src: video2, type: "video/mp4" }],
  },
  // === WIDEO 2 (natywne MP4) ===
   {
    id: "v3",
    type: "video",
    title: "Video of WEB3 Game Green Candle",
    sources: [{ src: video3, type: "video/mp4" }],
  },
    {
    id: "v4",
    type: "video",
    title: "Video of WEB3 Game Coin Pusher",
    sources: [{ src: video4, type: "video/mp4" }],
  },
    {
    id: "v5",
    type: "video",
    title: "Video of WEB3 Racing Game",
    sources: [{ src: video5, type: "video/mp4" }],
  },
  {
    id: "p7",
    image: projectYoutuber,
    title: "Project YouTuber — mobile game",
    description: "Android game (100,000+ installs).",
    link: "https://play.google.com/store/apps/details?id=com.dawidzielinski.projectyoutuber&pcampaignid=web_share",
    linkLabel: "View on Google Play",
    clickImageToLink: true,
  },
  {
    id: "p8",
    image: gameDaomation,
    title: "Daomation — WEB3 game",
    description: "Blockchain-based game integrated with $DAO token.",
  },
  {
    id: "p9",
    image: gamePesseJollak,
    title: "Pesse Jollak — WEB3 game",
    description: "Play2Earn game with its own crypto token.",
  },
  {
    id: "p10",
    image: gameSuperFlare,
    title: "Super Flare — WEB3 game",
    description: "Dynamic mobile game with NFT integration.",
  },
  {
    id: "p11",
    image: gameBuddyDice,
    title: "Buddy Dice - WEB3 game",
    description: "Blockchain game built on Ethereum.",
  },
  {
    id: "p12",
    image: gameTankOnline,
    title: "Tank Online — WEB3 game",
    description: "2D multiplayer game with wallet integration.",
  },
  {
    id: "p13",
    image: gameFatman,
    title: "Fatman — WEB3 game",
    description: "Pac-Man inspired blockchain game with online leaderboard.",
  },
  {
    id: "p14",
    image: portfolio6,
    title: "WEB3 Game",
    description: "Web game with NFT + token integration",
  },
  
],
    langLabel: "Language",
    pl: "PL",
    en: "EN",
  },
};

/* ==================== KOMPONENTY ==================== */

// Kafelki umiejętności (obsługuje też wersję językową A1–C2)
const SkillTiles = ({ label, value, of = 5, type }) => {
  if (type === "language") {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-medium">{label}</span>
          <span className="text-brand-muted text-sm">{value}</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {levels.map((level) => (
            <motion.div
              key={level}
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{
                scale: level === value ? 1.1 : 1,
                opacity: level === value ? 1 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`h-8 flex items-center justify-center rounded-md border font-medium text-sm ${
                level === value
                  ? "bg-brand-orange border-brand-orange text-black"
                  : "bg-transparent border-brand-purple/50 text-white"
              }`}
            >
              {level}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // klasyczna wersja (1–5)
  const cells = Array.from({ length: of }, (_, i) => i < Number(value));
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-medium">{label}</span>
        <span className="text-brand-muted text-sm">
          {typeof value === "number" ? `${value}/${of}` : ""}
        </span>
      </div>

      <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${of}, minmax(0, 1fr))` }}>
        {cells.map((filled, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.85, opacity: 0.2 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.05 * idx, duration: 0.25, type: "spring", stiffness: 200 }}
            className={`h-8 rounded-md border ${
              filled ? "bg-brand-orange border-brand-orange" : "bg-transparent border-brand-purple/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Lightbox (pełny ekran)
const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        aria-label="Close"
        className="absolute top-4 right-4 text-white/90 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

/* ==================== STRONA ==================== */
const VideoPlayer = ({ sources = [], poster, title }) => (
  <video
    className="w-full h-56 object-cover bg-black"
    poster={poster}
    controls
    playsInline
    preload="metadata"
  >
    {sources.map((s, i) => (
      <source key={i} src={s.src} type={s.type} />
    ))}
    Twoja przeglądarka nie obsługuje tagu video.
  </video>
);

const PortfolioPage = () => {
  const [lang, setLang] = useState("pl");
  const t = useMemo(() => translations[lang], [lang]);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  // Tytuł karty przeglądarki
  useEffect(() => {
    document.title = "Dawid Zieliński - Portfolio";
  }, []);

  const openLightbox = (src, alt) => {
    if (!src) return;
    setLightboxSrc(src);
    setLightboxAlt(alt || "");
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section className="min-h-screen py-24 bg-brand-blue bg-opacity-20 text-center">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Pasek języka */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center gap-2 bg-brand-dark border border-brand-purple rounded-full px-3 py-1">
            <span className="text-brand-muted text-sm">{t.langLabel}:</span>
            <button
              className={`text-sm font-semibold px-2 py-1 rounded-full ${
                lang === "pl" ? "bg-brand-orange text-black" : "text-white"
              }`}
              onClick={() => setLang("pl")}
            >
              {t.pl}
            </button>
            <button
              className={`text-sm font-semibold px-2 py-1 rounded-full ${
                lang === "en" ? "bg-brand-orange text-black" : "text-white"
              }`}
              onClick={() => setLang("en")}
            >
              {t.en}
            </button>
          </div>
        </div>

        {/* Nagłówek */}
        <h1 className="text-4xl font-bold mb-6 text-white">{t.pageTitle}</h1>
        <p className="text-brand-muted mb-12 max-w-2xl mx-auto">{t.pageSubtitle}</p>

        {/* Kilka słów o mnie */}
        <div className="max-w-3xl mx-auto text-left bg-brand-dark/60 border border-brand-purple rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">{t.aboutTitle}</h2>
          <p className="text-brand-muted leading-relaxed whitespace-pre-line">
            {t.aboutText}
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
 {(t.items ?? []).map((item) => (
  <motion.div
    key={item.id}
    className="group bg-brand-dark border border-brand-purple rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-brand-orange transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    {/* === MEDIA (video lub obrazek) === */}
    {item.type === "video" ? (
      <VideoPlayer
        sources={item.sources}
        poster={item.poster}
        title={item.title}
      />
    ) : item.image ? (
      item.clickImageToLink && item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          title={item.linkLabel || t.open}
          className="block w-full"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </a>
      ) : (
        <button
          className="block w-full"
          onClick={() => openLightbox(item.image, item.title)}
          title={t.viewFull}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </button>
      )
    ) : (
      <div className="w-full h-56 flex items-center justify-center bg-gradient-to-b from-[#322a4f] to-[#2a2440]">
        <span className="text-white/85 font-semibold px-4 text-center">
          {item.title}
        </span>
      </div>
    )}

    {/* === TEKST POD MEDIAMI === */}
    <div className="p-6 text-left">
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-brand-muted text-sm mb-3">{item.description}</p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-orange text-black hover:opacity-90"
        >
          {item.linkLabel || t.open}
        </a>
      )}
    </div>
  </motion.div>
))}
        </div>
{/* Skills */}
{/* Skills */}
<div className="max-w-3xl mx-auto text-left bg-brand-dark/60 border border-brand-purple rounded-xl p-6">
  <h2 className="text-2xl font-semibold text-white mb-4">{t.skillsTitle}</h2>

  {(t.skills ?? []).length > 0 ? (
    (t.skills ?? []).map((s) => (
      <SkillTiles
        key={s.name}
        label={s.name}
        value={s.value}
        of={s.of}
        type={s.type}
      />
    ))
  ) : (
    <p className="text-brand-muted">—</p>
  )}
</div>


{/* Kontakt */}
<div className="max-w-3xl mx-auto text-center mt-12">
 <h2 className="text-2xl font-semibold text-white mb-4">{t.contactTitle}</h2>
<p className="text-brand-muted mb-4">{t.contactText}</p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <a
      href="https://www.linkedin.com/in/dawid-zieli%C5%84ski-468513184/"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-full bg-[#0077b5] text-white font-semibold hover:bg-[#0a66c2] transition"
    >
      LinkedIn
    </a>
    <a
      href="mailto:dawidzielinski.programmer@gmail.com"
      className="px-4 py-2 rounded-full bg-brand-orange text-black font-semibold hover:opacity-90 transition"
    >
      dawidzielinski.programmer@gmail.com
    </a>
  </div>
</div>
</motion.div>

{/* Lightbox */}
<Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
</section>
);
};

export default PortfolioPage;