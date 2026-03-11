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
      message: "Tu regardes la situation sous un angle limité. Une autre voie existe, mais elle demande un pas de recul.",
      image: "./images/carte-1.jpg"
    },
    {
      id: 2,
      name: "N'MY'R",
      title: "Gestation / Grossesse",
      keywords: "Gestation, Grossesse",
      message: "Quelque chose mûrit en silence. Ne force rien : le temps travaille pour toi.",
      image: "./images/carte-2.jpg"
    },
    {
      id: 3,
      name: "SAAN'HAT",
      title: "Discussion / Rencontre / Tête-à-tête",
      keywords: "Discussion, Rencontre, Tête-à-tête",
      message: "Un échange important s'annonce. La parole ouvre une compréhension nouvelle.",
      image: "./images/carte-3.jpg"
    },
    {
      id: 4,
      name: "UTIAN",
      title: "Lumière / Éclairage / Vision claire",
      keywords: "Lumière, Éclairage, Vision claire",
      message: "La clarté arrive. Ce qui était flou devient compréhensible.",
      image: "./images/carte-4.jpg"
    },
    {
      id: 5,
      name: "MEHU'R",
      title: "Retrait / Isolement / Enfermement",
      keywords: "Retrait, Isolement, Enfermement",
      message: "Un temps de recul est nécessaire. Le silence te protège et te recentre.",
      image: "./images/carte-5.jpg"
    },
    {
      id: 6,
      name: "TiL'HAT",
      title: "Perte / Événement inattendu / Tristesse",
      keywords: "Perte, Événement inattendu, Tristesse",
      message: "Une rupture te touche, mais elle libère un espace nouveau. Accueille l'émotion sans t'y perdre.",
      image: "./images/carte-6.jpg"
    },
    {
      id: 7,
      name: "RYN",
      title: "Prière / Temple / Bénédiction",
      keywords: "Prière, Temple, Bénédiction",
      message: "Une force supérieure t'écoute. Demande avec sincérité, tu es entendu(e).",
      image: "./images/carte-7.jpg"
    },
    {
      id: 8,
      name: "GUE'IBE",
      title: "Opportunité / Ouverture",
      keywords: "Opportunité, Ouverture",
      message: "Une porte s'ouvre. Ose la franchir, même si elle surprend.",
      image: "./images/carte-8.jpg"
    },
    {
      id: 9,
      name: "SE'HIAT",
      title: "Créativité / Imagination / Circulation",
      keywords: "Créativité, Imagination, Circulation",
      message: "L'inspiration circule librement. Crée, imagine, donne forme à ce qui te traverse.",
      image: "./images/carte-9.jpg"
    },
    {
      id: 10,
      name: "NAII'T",
      title: "Portail / Action / Marche",
      keywords: "Portail, Action, Marche",
      message: "Le passage est là. L'élan compte plus que la certitude.",
      image: "./images/carte-10.jpg"
    },
    {
      id: 11,
      name: "NIIOM",
      title: "Haute protection / Ancêtre / Passé",
      keywords: "Haute protection, Ancêtre, Passé",
      message: "Une mémoire ancienne veille sur toi. Tu n'es pas seul(e) dans cette traversée.",
      image: "./images/carte-11.jpg"
    },
    {
      id: 12,
      name: "SIUT",
      title: "Surveillance / Observation / Regarder",
      keywords: "Surveillance, Observation, Regarder",
      message: "Observe sans agir pour l'instant. Tout n'a pas encore livré son intention.",
      image: "./images/carte-12.jpg"
    },
    {
      id: 13,
      name: "FEYU",
      title: "Hautes instances / Jugement / Autorités",
      keywords: "Hautes instances, Jugement, Autorités",
      message: "Une décision extérieure influence la situation. Reste droit(e) et aligné(e).",
      image: "./images/carte-13.jpg"
    },
    {
      id: 14,
      name: "OMKII",
      title: "Vérité / Exposition / Mise en lumière",
      keywords: "Vérité, Exposition, Mise en lumière",
      message: "La vérité se révèle. Ce qui apparaît libère plus qu'il ne blesse.",
      image: "./images/carte-14.jpg"
    },
    {
      id: 15,
      name: "FEY'R",
      title: "Voyage / Chemin / Aller",
      keywords: "Voyage, Chemin, Aller",
      message: "Un déplacement s'impose, intérieur ou extérieur. Avance, même si tout n'est pas encore visible.",
      image: "./images/carte-15.jpg"
    },
    {
      id: 16,
      name: "T'NEM",
      title: "Épanouissement / Rayonnement / Satisfaction",
      keywords: "Épanouissement, Rayonnement, Satisfaction",
      message: "Tu récoltes ce que tu as cultivé. Savoure pleinement cet état.",
      image: "./images/carte-16.jpg"
    },
    {
      id: 17,
      name: "MERIU'T",
      title: "Secret / Préservation / Cacher",
      keywords: "Secret, Préservation, Cacher",
      message: "Tout ne doit pas être révélé maintenant. La discrétion est une force.",
      image: "./images/carte-17.jpg"
    },
    {
      id: 18,
      name: "SYU",
      title: "Maître Chat / Protection / Totem / Guidance",
      keywords: "Maître Chat, Protection, Totem, Guidance",
      message: "Observe, ressens, avance avec souplesse. Un guide veille sur toi et t'indique la bonne trajectoire.",
      image: "./images/carte-18.jpg"
    },
    {
      id: 19,
      name: "VAII'T",
      title: "Action / Engagement / Foncer",
      keywords: "Action, Engagement, Foncer",
      message: "Il est temps d'agir sans hésiter. L'engagement crée le mouvement.",
      image: "./images/carte-19.jpg"
    },
    {
      id: 20,
      name: "MOA'NY",
      title: "Génie du Feu / Don d'éveil et d'intelligence",
      keywords: "Génie du Feu, Don d'éveil, Intelligence",
      message: "Le feu sacré s'allume en toi. Une compréhension nouvelle émerge, rapide, vive, lumineuse.",
      image: "./images/carte-20.jpg"
    },
    {
      id: 21,
      name: "NYO'N",
      title: "Abondance / Succès / Réussite assurée",
      keywords: "Abondance, Succès, Réussite assurée",
      message: "La réussite est acquise. Continue sans douter : l'élan est juste.",
      image: "./images/carte-21.jpg"
    }
  ];

  // ---- VALID ACCESS CODES (demo) ----
  const VALID_CODES = ["IRIOSHY2026", "PAPYRUS777", "OSIIRE888", "DEMO"];

  // ---- PLAN CONFIGURATION ----
  const PLAN_DRAWS = {
    single: 1,
    triple: 3,
    unlimited: 999
  };

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

  // ---- DETECT STRIPE PAYMENT REDIRECT ----
  function checkPaymentRedirect() {
    var params = new URLSearchParams(window.location.search);
    var paid = params.get("paid");
    var plan = params.get("plan");

    if (paid === "true" && plan && PLAN_DRAWS[plan]) {
      // Payment successful — create session
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

      // Clean URL (remove payment params)
      if (window.history && window.history.replaceState) {
        var cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }

      return session;
    }
    return null;
  }

  // ---- CHECK EXISTING SESSION ----
  function checkExistingSession() {
    var session = getSession();
    if (!session) return null;

    // Check if unlimited plan has expired (30 days)
    if (session.expiresAt && new Date() > new Date(session.expiresAt)) {
      clearSession();
      return null;
    }

    // Unlimited plan: only check expiration date, NOT draw count
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

  // ---- ACCESS VALIDATION ----
  function validateCode() {
    const code = accessCodeInput.value.trim().toUpperCase();
    if (!code) {
      codeError.textContent = "Entre un code d'accès";
      return;
    }
    if (VALID_CODES.includes(code)) {
      hasAccess = true;
      codeError.textContent = "";
      showScreen("screen-key");
    } else {
      codeError.textContent = "Code invalide. Vérifie ton code ou choisis une offre.";
      accessCodeInput.focus();
    }
  }

  // ---- STRIPE PAYMENT LINKS ----
  const PAYMENT_LINKS = {
    single: "https://buy.stripe.com/3cIdRa89kdDvbUj3kB1Nu00",
    triple: "https://buy.stripe.com/fZu28s89kbvnbUj9IZ1Nu01",
    unlimited: "https://buy.stripe.com/9B69AUexIeHz6zZbR71Nu02"
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
    // The chosen number (1-21) becomes the first card
    const chosenCard = PAPYRUS_DB[chosenNumber - 1];

    // Single plan = 1 card only
    if (isSinglePlan()) {
      return [chosenCard];
    }
    
    // Other plans = 3 cards (Passé, Présent, Futur)
    const remaining = PAPYRUS_DB.filter(function(card) {
      return card.id !== chosenNumber;
    });
    
    // Shuffle remaining cards (Fisher-Yates)
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    
    // Return 3 cards: chosen + 2 random
    return [chosenCard, remaining[0], remaining[1]];
  }

  // ---- RITUAL ANIMATION ----
  const RITUAL_MESSAGES = [
    "Les papyrus s'éveillent...",
    "Les énergies convergent...",
    "Le voile se lève...",
    "Les forces ancestrales te répondent...",
    "Tes papyrus sont prêts."
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

    // Reset all cards and readings
    allCards.forEach(function (card) {
      card.classList.remove("revealed");
      card.style.display = "";
    });
    allReadings.forEach(function (r) {
      if (r) r.style.display = "";
    });
    readingArea.classList.remove("visible");

    if (singleMode) {
      // Single plan: hide cards 2 & 3, show only 1 card
      resultTitle.textContent = "Ton Papyrus Sacr\u00e9";
      allCards[1].style.display = "none";
      allCards[2].style.display = "none";
      allReadings[1].style.display = "none";
      allReadings[2].style.display = "none";
    } else {
      resultTitle.textContent = "Ton Tirage Sacr\u00e9";
    }

    // Populate card data
    drawnCards.forEach(function (papyrus, idx) {
      var card = allCards[idx];
      card.querySelector(".card-number").textContent = papyrus.name;
      card.querySelector(".card-title").textContent = papyrus.title;

      // For single mode, change label from "Passé" to "Ton Papyrus"
      if (singleMode && idx === 0) {
        card.querySelector(".card-label").textContent = "Ton Papyrus";
      } else {
        var labels = ["Pass\u00e9", "Pr\u00e9sent", "Futur"];
        card.querySelector(".card-label").textContent = labels[idx];
      }
      
      // Set card image
      var imageArea = card.querySelector(".card-image-area");
      imageArea.innerHTML = '<img src="' + papyrus.image + '" alt="Papyrus ' + papyrus.name + '" class="card-img">';

      // Reading section
      var reading = document.getElementById(readingIds[idx]);
      reading.querySelector(".reading-card-name").textContent = papyrus.name;
      reading.querySelector(".reading-card-title").textContent = papyrus.title;
      reading.querySelector(".reading-text").textContent = papyrus.message;

      // For single mode, change reading label
      if (singleMode && idx === 0) {
        reading.querySelector(".reading-label").textContent = "Ton Papyrus";
      } else {
        var readLabels = ["Pass\u00e9", "Pr\u00e9sent", "Futur"];
        reading.querySelector(".reading-label").textContent = readLabels[idx];
      }
    });

    // Reveal cards one by one with delay
    var visibleCards = singleMode ? [allCards[0]] : Array.from(allCards);
    visibleCards.forEach(function (card, idx) {
      setTimeout(function () {
        card.classList.add("revealed");
        playRevealSound();
      }, 600 + idx * 800);
    });

    // Show readings after all cards revealed
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
    } catch (e) {
      // Audio not supported, silent fallback
    }
  }

  // ---- EVENT LISTENERS ----

  // Welcome -> Access
  btnStart.addEventListener("click", function () {
    if (hasAccess) {
      showScreen("screen-key");
    } else {
      showScreen("screen-access");
    }
  });

  // Access -> Welcome
  btnBackAccess.addEventListener("click", function () {
    showScreen("screen-welcome");
  });

  // Key -> Access
  btnBackKey.addEventListener("click", function () {
    showScreen("screen-access");
  });

  // Validate code
  btnValidateCode.addEventListener("click", validateCode);
  accessCodeInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") validateCode();
  });

  // Plan choices
  document.querySelectorAll("[data-plan]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      handlePlanChoice(btn.getAttribute("data-plan"));
    });
  });

  // Sacred key input
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
      // Use one draw from session if applicable
      if (currentSession) {
        useOneDraw();
      }
      startRitual(key);
    }
  });

  // New Draw
  btnNewDraw.addEventListener("click", function () {
    // Check if session has draws remaining
    if (currentSession) {
      // Unlimited plan: always allow if not expired
      if (currentSession.plan === "unlimited") {
        if (currentSession.expiresAt && new Date() > new Date(currentSession.expiresAt)) {
          // Expired — go back to payment screen
          clearSession();
          currentSession = null;
          hasAccess = false;
          var badge = document.getElementById("draws-remaining-badge");
          if (badge) badge.style.display = "none";
          showScreen("screen-access");
          return;
        }
        // Not expired — allow new draw
        sacredKeyInput.value = "";
        btnDraw.disabled = true;
        showScreen("screen-key");
        return;
      }
      // Single/Triple plans: check remaining draws
      var remaining = currentSession.drawsAllowed - currentSession.drawsUsed;
      if (remaining <= 0) {
        // No draws left — go back to payment screen
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

  // ---- DRAWS REMAINING DISPLAY ----
  function updateDrawsDisplay() {
    var badge = document.getElementById("draws-remaining-badge");
    if (!currentSession || !badge) return;

    var remaining = currentSession.drawsAllowed - currentSession.drawsUsed;
    if (currentSession.plan === "unlimited") {
      var expText = "Acc\u00e8s illimit\u00e9 \u2726";
      if (currentSession.expiresAt) {
        var expDate = new Date(currentSession.expiresAt);
        var jours = Math.max(0, Math.ceil((expDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000)));
        expText = "Acc\u00e8s illimit\u00e9 \u2014 " + jours + "j restant" + (jours > 1 ? "s" : "");
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
    // Unlimited plan: don't count draws, only expiration matters
    if (currentSession.plan === "unlimited") {
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
      unlimited: "Accès Illimité"
    };

    // Create overlay
    var overlay = document.createElement("div");
    overlay.className = "payment-success-overlay";
    overlay.innerHTML =
      '<div class="payment-success-box">' +
        '<div class="payment-success-icon">𓂀</div>' +
        '<h2>Paiement confirmé</h2>' +
        '<p class="payment-plan-name">' + (planNames[plan] || plan) + '</p>' +
        '<p>Merci pour ta confiance. Les papyrus t\'attendent.</p>' +
        '<button class="btn-sacred btn-small" id="btn-enter-oracle">' +
          '<span class="btn-text">Commencer mon tirage</span>' +
          '<span class="btn-glow"></span>' +
        '</button>' +
      '</div>';

    document.body.appendChild(overlay);

    // Force reflow then add visible class for animation
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

  // Add highlight flash keyframe
  var style = document.createElement("style");
  style.textContent = "@keyframes highlight-flash { 0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); } 50% { box-shadow: 0 0 20px 4px rgba(201,168,76,0.3); } 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); } }";
  document.head.appendChild(style);

  // Check for payment redirect OR existing session
  var redirectSession = checkPaymentRedirect();
  if (redirectSession) {
    // Just paid — show success then go to oracle
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

})();
