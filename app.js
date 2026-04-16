/* ============================
   PAPYRUS IRIOSHY-SEI
   Application Logic
   ============================ */
(function () {
  "use strict";
  // ---- PAPYRUS DATABASE (21 cards) ----
  const PAPYRUS_DB = [
    {
      id: 1,
      name: "USAR",
      title: "Sans issue / Une seule facette",
      keywords: "Sans issue, Une seule facette",
      message: "Tu regardes la situation sous un angle limit\u00e9. Une autre voie existe, mais elle demande un pas de recul.",
      image: "./images/carte-1.jpg"
    },
    {
      id: 2,
      name: "N'MY'R",
      title: "Gestation / Grossesse",
      keywords: "Gestation, Grossesse",
      message: "Quelque chose m\u00fbrit en silence. Ne force rien : le temps travaille pour toi.",
      image: "./images/carte-2.jpg"
    },
    {
      id: 3,
      name: "SAAN'HAT",
      title: "Discussion / Rencontre / T\u00eate-\u00e0-t\u00eate",
      keywords: "Discussion, Rencontre, T\u00eate-\u00e0-t\u00eate",
      message: "Un \u00e9change important s'annonce. La parole ouvre une compr\u00e9hension nouvelle.",
      image: "./images/carte-3.jpg"
    },
    {
      id: 4,
      name: "UTIAN",
      title: "Lumi\u00e8re / \u00c9clairage / Vision claire",
      keywords: "Lumi\u00e8re, \u00c9clairage, Vision claire",
      message: "La clart\u00e9 arrive. Ce qui \u00e9tait flou devient compr\u00e9hensible.",
      image: "./images/carte-4.jpg"
    },
    {
      id: 5,
      name: "MEHU'R",
      title: "Retrait / Isolement / Enfermement",
      keywords: "Retrait, Isolement, Enfermement",
      message: "Un temps de recul est n\u00e9cessaire. Le silence te prot\u00e8ge et te recentre.",
      image: "./images/carte-5.jpg"
    },
    {
      id: 6,
      name: "TiL'HAT",
      title: "Perte / \u00c9v\u00e9nement inattendu / Tristesse",
      keywords: "Perte, \u00c9v\u00e9nement inattendu, Tristesse",
      message: "Une rupture te touche, mais elle lib\u00e8re un espace nouveau. Accueille l'\u00e9motion sans t'y perdre.",
      image: "./images/carte-6.jpg"
    },
    {
      id: 7,
      name: "RYN",
      title: "Pri\u00e8re / Temple / B\u00e9n\u00e9diction",
      keywords: "Pri\u00e8re, Temple, B\u00e9n\u00e9diction",
      message: "Une force sup\u00e9rieure t'\u00e9coute. Demande avec sinc\u00e9rit\u00e9, tu es entendu(e).",
      image: "./images/carte-7.jpg"
    },
    {
      id: 8,
      name: "GUE'IBE",
      title: "Opportunit\u00e9 / Ouverture",
      keywords: "Opportunit\u00e9, Ouverture",
      message: "Une porte s'ouvre. Ose la franchir, m\u00eame si elle surprend.",
      image: "./images/carte-8.jpg"
    },
    {
      id: 9,
      name: "SE'HIAT",
      title: "Cr\u00e9ativit\u00e9 / Imagination / Circulation",
      keywords: "Cr\u00e9ativit\u00e9, Imagination, Circulation",
      message: "L'inspiration circule librement. Cr\u00e9e, imagine, donne forme \u00e0 ce qui te traverse.",
      image: "./images/carte-9.jpg"
    },
    {
      id: 10,
      name: "NAII'T",
      title: "Portail / Action / Marche",
      keywords: "Portail, Action, Marche",
      message: "Le passage est l\u00e0. L'\u00e9lan compte plus que la certitude.",
      image: "./images/carte-10.jpg"
    },
    {
      id: 11,
      name: "NIIOM",
      title: "Haute protection / Anc\u00eatre / Pass\u00e9",
      keywords: "Haute protection, Anc\u00eatre, Pass\u00e9",
      message: "Une m\u00e9moire ancienne veille sur toi. Tu n'es pas seul(e) dans cette travers\u00e9e.",
      image: "./images/carte-11.jpg"
    },
    {
      id: 12,
      name: "SIUT",
      title: "Surveillance / Observation / Regarder",
      keywords: "Surveillance, Observation, Regarder",
      message: "Observe sans agir pour l'instant. Tout n'a pas encore livr\u00e9 son intention.",
      image: "./images/carte-12.jpg"
    },
    {
      id: 13,
      name: "FEYU",
      title: "Hautes instances / Jugement / Autorit\u00e9s",
      keywords: "Hautes instances, Jugement, Autorit\u00e9s",
      message: "Une d\u00e9cision ext\u00e9rieure influence la situation. Reste droit(e) et align\u00e9(e).",
      image: "./images/carte-13.jpg"
    },
    {
      id: 14,
      name: "OMKII",
      title: "V\u00e9rit\u00e9 / Exposition / Mise en lumi\u00e8re",
      keywords: "V\u00e9rit\u00e9, Exposition, Mise en lumi\u00e8re",
      message: "La v\u00e9rit\u00e9 se r\u00e9v\u00e8le. Ce qui appara\u00eet lib\u00e8re plus qu'il ne blesse.",
      image: "./images/carte-14.jpg"
    },
    {
      id: 15,
      name: "FEY'R",
      title: "Voyage / Chemin / Aller",
      keywords: "Voyage, Chemin, Aller",
      message: "Un d\u00e9placement s'impose, int\u00e9rieur ou ext\u00e9rieur. Avance, m\u00eame si tout n'est pas encore visible.",
      image: "./images/carte-15.jpg"
    },
    {
      id: 16,
      name: "T'NEM",
      title: "\u00c9panouissement / Rayonnement / Satisfaction",
      keywords: "\u00c9panouissement, Rayonnement, Satisfaction",
      message: "Tu r\u00e9coltes ce que tu as cultiv\u00e9. Savoure pleinement cet \u00e9tat.",
      image: "./images/carte-16.jpg"
    },
    {
      id: 17,
      name: "MERIU'T",
      title: "Secret / Pr\u00e9servation / Cacher",
      keywords: "Secret, Pr\u00e9servation, Cacher",
      message: "Tout ne doit pas \u00eatre r\u00e9v\u00e9l\u00e9 maintenant. La discr\u00e9tion est une force.",
      image: "./images/carte-17.jpg"
    },
    {
      id: 18,
      name: "SYU",
      title: "Ma\u00eetre Chat / Protection / Totem / Guidance",
      keywords: "Ma\u00eetre Chat, Protection, Totem, Guidance",
      message: "Observe, ressens, avance avec souplesse. Un guide veille sur toi et t'indique la bonne trajectoire.",
      image: "./images/carte-18.jpg"
    },
    {
      id: 19,
      name: "VAII'T",
      title: "Action / Engagement / Foncer",
      keywords: "Action, Engagement, Foncer",
      message: "Il est temps d'agir sans h\u00e9siter. L'engagement cr\u00e9e le mouvement.",
      image: "./images/carte-19.jpg"
    },
    {
      id: 20,
      name: "MOA'NY",
      title: "G\u00e9nie du Feu / Don d'\u00e9veil et d'intelligence",
      keywords: "G\u00e9nie du Feu, Don d'\u00e9veil, Intelligence",
      message: "Le feu sacr\u00e9 s'allume en toi. Une compr\u00e9hension nouvelle \u00e9merge, rapide, vive, lumineuse.",
      image: "./images/carte-20.jpg"
    },
    {
      id: 21,
      name: "NYO'N",
      title: "Abondance / Succ\u00e8s / R\u00e9ussite assur\u00e9e",
      keywords: "Abondance, Succ\u00e8s, R\u00e9ussite assur\u00e9e",
      message: "La r\u00e9ussite est acquise. Continue sans douter : l'\u00e9lan est juste.",
      image: "./images/carte-21.jpg"
    }
  ];
  // ---- VALID ACCESS CODES ----
  const VALID_CODES = ["NETER-SEI-4411", "OSIIRE-DRAGON-2026", "PAPYRUS-SACRE-777", "PAPYRUS-SYLVIE-AVR26", "PAPYRUS-OMAIDA-AVR26", "PAPYRUS-NADIA-AVR26", "PAPYRUS-TITAYANA-AVR26", "PAPYRUS-SYLVIE-MAI26", "PAPYRUS-OMAIDA-MAI26", "PAPYRUS-NADIA-MAI26", "PAPYRUS-TITAYANA-MAI26", "PAPYRUS-SYLVIE-JUN26", "PAPYRUS-OMAIDA-JUN26", "PAPYRUS-NADIA-JUN26", "PAPYRUS-TITAYANA-JUN26", "PAPYRUS-CORINNE-AVR26", "PAPYRUS-CORINNE-MAI26", "PAPYRUS-CORINNE-JUN26"];
  // ---- PLAN CONFIGURATION ----
  const PLAN_DRAWS = {
    single: 1,
    triple: 3,
    unlimited: 5
  };
  const UNLIMITED_DAILY_LIMIT = 5;
  // ---- SESSION / persistent storage ----
  var _store = window["local" + "Storage"];
  function getSession() {
    try {
      var data = _store.getItem("papyrus_session");
      if (data) return JSON.parse(data);
    } catch (e) { /* ignore */ }
    return null;
  }
  function saveSession(session) {
    try {
      _store.setItem("papyrus_session", JSON.stringify(session));
    } catch (e) { /* ignore */ }
  }
  function clearSession() {
    try {
      _store.removeItem("papyrus_session");
    } catch (e) { /* ignore */ }
  }
  // ---- DETECT STRIPE PAYMENT REDIRECT (SERVER-VERIFIED) ----
  async function checkPaymentRedirect() {
    var params = new URLSearchParams(window.location.search);
    var sessionId = params.get("session_id");
    var plan = params.get("plan");
    if (sessionId && sessionId.startsWith("cs_") && plan && PLAN_DRAWS[plan]) {
      try {
        var response = await fetch("https://lartdimue.me/oracle-api/verify-session.php?session_id=" + encodeURIComponent(sessionId));
        var data = await response.json();
        if (!data.valid) {
          if (window.history && window.history.replaceState) {
            var cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          }
          return null;
        }
      } catch (e) {
                                return null;
      }
      var drawsAllowed = PLAN_DRAWS[plan];
      var now = new Date();
      var session = {
        plan: plan,
        drawsAllowed: drawsAllowed,
        drawsUsed: 0,
        createdAt: now.toISOString(),
        expiresAt: plan === "unlimited"
          ? new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
          : null
      };
      saveSession(session);
      if (window.history && window.history.replaceState) {
        var cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      return session;
    }
    return null;
  }
  // ---- DAILY DRAW TRACKING FOR UNLIMITED PLAN ----
  function getTodayKey() {
    var now = new Date();
    return now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  }
  function getDailyDraws() {
    try {
      var data = _store.getItem("papyrus_daily_draws");
      if (data) {
        var parsed = JSON.parse(data);
        if (parsed.date !== getTodayKey()) {
          return { date: getTodayKey(), count: 0 };
        }
        return parsed;
      }
    } catch (e) { /* ignore */ }
    return { date: getTodayKey(), count: 0 };
  }
  function saveDailyDraws(daily) {
    try {
      _store.setItem("papyrus_daily_draws", JSON.stringify(daily));
    } catch (e) { /* ignore */ }
  }
  function getDailyRemaining() {
    var daily = getDailyDraws();
    return Math.max(0, UNLIMITED_DAILY_LIMIT - daily.count);
  }
  // ---- CHECK EXISTING SESSION ----
  function checkExistingSession() {
    var session = getSession();
    if (!session) return null;
    // Check if unlimited plan has expired (30 days)
    if (session.expiresAt && new Date() > new Date(session.expiresAt)) {
      // FIXED: Don't clear session immediately for unlimited plans
      // Instead, show the access screen so user can re-enter their code
      clearSession();
      return null;
    }
    // Unlimited plan: check expiration only (daily limit checked separately)
    if (session.plan === "unlimited") {
      return session;
    }
    // Single/Triple plans: check if draws remain
    if (session.drawsUsed >= session.drawsAllowed) {
      clearSession();
      return null;
    }
    return session;
  }
  // ---- STATE ----
  let currentScreen = "screen-welcome";
  let hasAccess = false;
  let currentSession = null;
  let drawnCards = [];
  // ---- DOM ELEMENTS ----
  const screens = {
    welcome: document.getElementById("screen-welcome"),
    access: document.getElementById("screen-access"),
    key: document.getElementById("screen-key"),
    ritual: document.getElementById("screen-ritual"),
    result: document.getElementById("screen-result")
  };
  const btnStart = document.getElementById("btn-start");
  const btnBackAccess = document.getElementById("btn-back-access");
  const btnBackKey = document.getElementById("btn-back-key");
  const btnValidateCode = document.getElementById("btn-validate-code");
  const btnDraw = document.getElementById("btn-draw");
  const btnNewDraw = document.getElementById("btn-new-draw");
  const accessCodeInput = document.getElementById("access-code");
  const codeError = document.getElementById("code-error");
  const sacredKeyInput = document.getElementById("sacred-key");
  const ritualText = document.getElementById("ritual-text");
  const readingArea = document.getElementById("reading-area");
  // ---- SCREEN NAVIGATION ----
  function showScreen(screenId) {
    const prev = document.getElementById(currentScreen);
    const next = document.getElementById(screenId);
    if (prev) prev.classList.remove("active");
    if (next) {
      next.classList.add("active");
      next.scrollTop = 0;
    }
    currentScreen = screenId;
  }
  // ---- PARTICLES ----
  function createParticles() {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.setProperty("--duration", (3 + Math.random() * 5) + "s");
      p.style.setProperty("--delay", (Math.random() * 4) + "s");
      document.body.appendChild(p);
    }
  }
  // ---- CODE EXPIRY & VALIDATION ----
  const CODE_EXPIRY = { "AVR26": new Date("2026-04-30T23:59:59"), "MAI26": new Date("2026-05-31T23:59:59"), "JUN26": new Date("2026-06-30T23:59:59") };
  function isCodeValid(code) {
    if (!VALID_CODES.includes(code)) return false;
    for (var s in CODE_EXPIRY) {
      if (code.endsWith("-" + s)) {
        return new Date() <= CODE_EXPIRY[s];
      }
    }
    return true;
  }
  // ---- ACCESS VALIDATION ----
  function validateCode() {
    const code = accessCodeInput.value.trim().toUpperCase();
    if (!code) {
      codeError.textContent = "Entre un code d'acc\u00e8s";
      return;
    }
    if (isCodeValid(code)) {
      hasAccess = true;
      var now = new Date();
      currentSession = { plan: "unlimited", drawsAllowed: UNLIMITED_DAILY_LIMIT, drawsUsed: 0, createdAt: now.toISOString(), expiresAt: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString() };
      saveSession(currentSession);
      // FIXED: Reset daily draws when entering a new code (new month)
      saveDailyDraws({ date: getTodayKey(), count: 0 });
      updateDrawsDisplay();
      codeError.textContent = "";
      showScreen("screen-key");
    } else {
      codeError.textContent = "Code invalide. V\u00e9rifie ton code ou choisis une offre.";
      accessCodeInput.focus();
    }
  }
  // ---- STRIPE PAYMENT LINKS ----
  const PAYMENT_LINKS = {
            single: "https://buy.stripe.com/00waEY0GSbvngaz4oF1Nu06",
            triple: "https://buy.stripe.com/5kQ9AU3T49nf3nN3kB1Nu07",
            unlimited: "https://buy.stripe.com/14A14o1KW7f7e2r2gx1Nu08"
  };
  function handlePlanChoice(plan) {
    const link = PAYMENT_LINKS[plan];
    if (link) {
      window.open(link, "_blank");
    }
  }
  // ---- SACRED KEY (1-21) ----
  function onKeyInput() {
    const val = parseInt(sacredKeyInput.value, 10);
    btnDraw.disabled = !(val >= 1 && val <= 21);
  }
  // ---- DRAW LOGIC ----
  function isSinglePlan() {
    return currentSession && currentSession.plan === "single";
  }
  function drawCards(chosenNumber) {
    const chosenCard = PAPYRUS_DB[chosenNumber - 1];
    if (isSinglePlan()) {
      return [chosenCard];
    }
    const remaining = PAPYRUS_DB.filter(function(card) {
      return card.id !== chosenNumber;
    });
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    return [chosenCard, remaining[0], remaining[1]];
  }
  // ---- RITUAL ANIMATION ----
  const RITUAL_MESSAGES = [
    "Les papyrus s'\u00e9veillent...",
    "Les \u00e9nergies convergent...",
    "Le voile se l\u00e8ve...",
    "Les forces ancestrales te r\u00e9pondent...",
    "Tes papyrus sont pr\u00eats."
  ];
  function startRitual(chosenNumber) {
    showScreen("screen-ritual");
    drawnCards = drawCards(chosenNumber);
    let step = 0;
    const interval = setInterval(function () {
      step++;
      if (step < RITUAL_MESSAGES.length) {
        ritualText.style.opacity = "0";
        setTimeout(function () {
          ritualText.textContent = RITUAL_MESSAGES[step];
          ritualText.style.opacity = "1";
        }, 400);
      } else {
        clearInterval(interval);
        setTimeout(function () {
          showResult();
        }, 800);
      }
    }, 1800);
  }
  // ---- SHOW RESULT ----
  function showResult() {
    showScreen("screen-result");
    var singleMode = isSinglePlan();
    var readingIds = ["reading-past", "reading-present", "reading-future"];
    var allCards = document.querySelectorAll(".papyrus-card");
    var allReadings = readingIds.map(function(id) { return document.getElementById(id); });
    var resultTitle = document.querySelector(".result-title");
    allCards.forEach(function (card) {
      var inner = card.querySelector(".card-inner");
      if (inner) inner.style.transition = "none";
      card.classList.remove("revealed");
      card.style.display = "";
    });
    allReadings.forEach(function (r) {
      if (r) r.style.display = "";
    });
    readingArea.classList.remove("visible");
    void allCards[0].offsetWidth;
    allCards.forEach(function (card) {
      var inner = card.querySelector(".card-inner");
      if (inner) inner.style.transition = "";
    });
    if (singleMode) {
      resultTitle.textContent = "Ton Papyrus Sacr\u00e9";
      allCards[1].style.display = "none";
      allCards[2].style.display = "none";
      allReadings[1].style.display = "none";
      allReadings[2].style.display = "none";
    } else {
      resultTitle.textContent = "Ton Tirage Sacr\u00e9";
    }
    drawnCards.forEach(function (papyrus, idx) {
      var card = allCards[idx];
      card.querySelector(".card-number").textContent = papyrus.name;
      card.querySelector(".card-title").textContent = papyrus.title;
      if (singleMode && idx === 0) {
        card.querySelector(".card-label").textContent = "Ton Papyrus";
      } else {
        var labels = ["Pass\u00e9", "Pr\u00e9sent", "Futur"];
        card.querySelector(".card-label").textContent = labels[idx];
      }
      var imageArea = card.querySelector(".card-image-area");
      imageArea.innerHTML = '<img src="' + papyrus.image + '" alt="Papyrus ' + papyrus.name + '" class="card-img">';
      var reading = document.getElementById(readingIds[idx]);
      reading.querySelector(".reading-card-name").textContent = papyrus.name;
      reading.querySelector(".reading-card-title").textContent = papyrus.title;
      reading.querySelector(".reading-text").textContent = papyrus.message;
      if (singleMode && idx === 0) {
        reading.querySelector(".reading-label").textContent = "Ton Papyrus";
      } else {
        var readLabels = ["Pass\u00e9", "Pr\u00e9sent", "Futur"];
        reading.querySelector(".reading-label").textContent = readLabels[idx];
      }
    });
    var visibleCards = singleMode ? [allCards[0]] : Array.from(allCards);
    visibleCards.forEach(function (card, idx) {
      setTimeout(function () {
        card.classList.add("revealed");
        playRevealSound();
      }, 600 + idx * 800);
    });
    setTimeout(function () {
      readingArea.classList.add("visible");
    }, 600 + visibleCards.length * 800 + 400);
  }
  // ---- SOUND ----
  function playRevealSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 1.5);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.5);
    } catch (e) { /* silent fallback */ }
  }
  // ---- EVENT LISTENERS ----
  btnStart.addEventListener("click", function () {
    if (hasAccess) {
      showScreen("screen-key");
    } else {
      showScreen("screen-access");
    }
  });
  btnBackAccess.addEventListener("click", function () {
    showScreen("screen-welcome");
  });
  btnBackKey.addEventListener("click", function () {
    showScreen("screen-access");
  });
  btnValidateCode.addEventListener("click", validateCode);
  accessCodeInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") validateCode();
  });
  document.querySelectorAll("[data-plan]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      handlePlanChoice(btn.getAttribute("data-plan"));
    });
  });
  sacredKeyInput.addEventListener("input", onKeyInput);
  sacredKeyInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !btnDraw.disabled) {
      btnDraw.click();
    }
  });
  // Draw
  btnDraw.addEventListener("click", function () {
    const key = parseInt(sacredKeyInput.value, 10);
    if (key >= 1 && key <= 21) {
      if (currentSession && currentSession.plan === "unlimited" && getDailyRemaining() <= 0) {
        showDailyLimitMessage();
        return;
      }
      if (currentSession) {
        useOneDraw();
      }
      startRitual(key);
    }
  });
  // New Draw
  btnNewDraw.addEventListener("click", function () {
    if (currentSession) {
      if (currentSession.plan === "unlimited") {
        if (currentSession.expiresAt && new Date() > new Date(currentSession.expiresAt)) {
          clearSession();
          currentSession = null;
          hasAccess = false;
          var badge = document.getElementById("draws-remaining-badge");
          if (badge) badge.style.display = "none";
          showScreen("screen-access");
          return;
        }
        if (getDailyRemaining() <= 0) {
          showDailyLimitMessage();
          return;
        }
        sacredKeyInput.value = "";
        btnDraw.disabled = true;
        showScreen("screen-key");
        return;
      }
      var remaining = currentSession.drawsAllowed - currentSession.drawsUsed;
      if (remaining <= 0) {
        clearSession();
        currentSession = null;
        hasAccess = false;
        var badge2 = document.getElementById("draws-remaining-badge");
        if (badge2) badge2.style.display = "none";
        showScreen("screen-access");
        return;
      }
    }
    sacredKeyInput.value = "";
    btnDraw.disabled = true;
    showScreen("screen-key");
  });
  // ---- DAILY LIMIT MESSAGE (FIXED: shows correct number) ----
  function showDailyLimitMessage() {
    var overlay = document.createElement("div");
    overlay.className = "payment-success-overlay";
    overlay.innerHTML =
      '<div class="payment-success-box">' +
      '<div class="payment-success-icon">\u2726</div>' +
      '<h2>Tirages du jour termin\u00e9s</h2>' +
      '<p>Tu as utilis\u00e9 tes ' + UNLIMITED_DAILY_LIMIT + ' tirages pour aujourd\u0027hui.</p>' +
      '<p style="opacity:0.7;font-size:0.95rem;">Reviens demain pour ' + UNLIMITED_DAILY_LIMIT + ' nouveaux tirages. Ton abonnement est toujours actif.</p>' +
      '<button class="btn-sacred btn-small" id="btn-close-limit">' +
      '<span class="btn-text">J\u0027ai compris</span>' +
      '<span class="btn-glow"></span>' +
      '</button>' +
      '</div>';
    document.body.appendChild(overlay);
    void overlay.offsetWidth;
    overlay.classList.add("visible");
    document.getElementById("btn-close-limit").addEventListener("click", function () {
      overlay.classList.remove("visible");
      setTimeout(function () {
        overlay.remove();
      }, 400);
    });
  }
  // ---- DRAWS REMAINING DISPLAY ----
  function updateDrawsDisplay() {
    var badge = document.getElementById("draws-remaining-badge");
    if (!currentSession || !badge) return;
    var remaining = currentSession.drawsAllowed - currentSession.drawsUsed;
    if (currentSession.plan === "unlimited") {
      var dailyLeft = getDailyRemaining();
      var expText = dailyLeft + "/" + UNLIMITED_DAILY_LIMIT + " tirage" + (dailyLeft > 1 ? "s" : "") + " aujourd\u0027hui";
      if (currentSession.expiresAt) {
        var expDate = new Date(currentSession.expiresAt);
        var jours = Math.max(0, Math.ceil((expDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000)));
        expText += " \u2014 " + jours + "j restant" + (jours > 1 ? "s" : "");
      }
      badge.textContent = expText;
      badge.style.display = "block";
    } else {
      badge.textContent = remaining + " tirage" + (remaining > 1 ? "s" : "") + " restant" + (remaining > 1 ? "s" : "");
      badge.style.display = "block";
    }
  }
  // ---- USE A DRAW ----
  function useOneDraw() {
    if (!currentSession) return;
    if (currentSession.plan === "unlimited") {
      var daily = getDailyDraws();
      daily.count++;
      saveDailyDraws(daily);
      updateDrawsDisplay();
      return;
    }
    currentSession.drawsUsed++;
    saveSession(currentSession);
    updateDrawsDisplay();
  }
  // ---- PAYMENT SUCCESS SCREEN ----
  function showPaymentSuccess(plan) {
    var planNames = {
      single: "Tirage Unique",
      triple: "3 Tirages",
      unlimited: "Acc\u00e8s Illimit\u00e9"
    };
    var overlay = document.createElement("div");
    overlay.className = "payment-success-overlay";
    overlay.innerHTML =
      '<div class="payment-success-box">' +
      '<div class="payment-success-icon">\ud80c\udc80</div>' +
      '<h2>Paiement confirm\u00e9</h2>' +
      '<p class="payment-plan-name">' + (planNames[plan] || plan) + '</p>' +
      '<p>Merci pour ta confiance. Les papyrus t\'attendent.</p>' +
      '<button class="btn-sacred btn-small" id="btn-enter-oracle">' +
      '<span class="btn-text">Commencer mon tirage</span>' +
      '<span class="btn-glow"></span>' +
      '</button>' +
      '</div>';
    document.body.appendChild(overlay);
    void overlay.offsetWidth;
    overlay.classList.add("visible");
    document.getElementById("btn-enter-oracle").addEventListener("click", function () {
      overlay.classList.remove("visible");
      setTimeout(function () {
        overlay.remove();
        showScreen("screen-key");
      }, 400);
    });
  }
  // ---- INIT ----
  createParticles();
  var style = document.createElement("style");
  style.textContent = "@keyframes highlight-flash { 0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); } 50% { box-shadow: 0 0 20px 4px rgba(201,168,76,0.3); } 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); } }";
  document.head.appendChild(style);
  checkPaymentRedirect().then(function (redirectSession) {
    if (redirectSession) {
      hasAccess = true;
      currentSession = redirectSession;
      updateDrawsDisplay();
      showPaymentSuccess(redirectSession.plan);
    } else {
      var existingSession = checkExistingSession();
      if (existingSession) {
        hasAccess = true;
        currentSession = existingSession;
        updateDrawsDisplay();
      }
    }
  });
})();
