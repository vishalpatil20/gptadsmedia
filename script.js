document.addEventListener('DOMContentLoaded', () => {



  // 3. ChatGPT Ad Simulator Logic (Sidebar, typeable queries, typewriter effect)
  const simBody = document.getElementById('simBody');
  const recentItems = document.querySelectorAll('.sim-recent-item');

  const simulatorData = {
    mastercard: {
      userPrompt: "I need a corporate card that helps manage employee travel expenses and offers high cashback.",
      aiResponse: "For corporate expense tracking and travel rewards, major issuers include Ramp, Brex, and standard commercial bank accounts. Many businesses prefer commercial card networks due to their global acceptance, receipt matching, and fraud protection.",
      adTitle: "Mastercard® Business Card — Smart Expense Management",
      adDesc: "Get 2% cash back on travel and business purchases. Manage team limits in real-time, automate receipt integration, and protect your capital with built-in fraud safeguards.",
      adLink: "https://mastercard.com",
      adLinkText: "Apply online at mastercard.com",
      brand: "Mastercard",
      brandInitial: "M"
    },
    bestmoney: {
      userPrompt: "What is the best website to compare personal loan rates and credit card offers side by side?",
      aiResponse: "To compare financial products, users look to online financial aggregators like NerdWallet, Credit Karma, or Bankrate. These websites retrieve multiple credit quotes depending on credit ratings.",
      adTitle: "BestMoney.com — Compare Rates & Lenders Instantly",
      adDesc: "Access real-time loan comparisons and credit card matches in under 2 minutes. Compare APRs side-by-side to secure the lowest rates available.",
      adLink: "https://bestmoney.com",
      adLinkText: "Compare rates now at bestmoney.com",
      brand: "Best Money",
      brandInitial: "B"
    },
    bathfitter: {
      userPrompt: "How can I renovate my outdated bathroom shower without a week of messy construction?",
      aiResponse: "To update an outdated bathroom rapidly, popular paths include acrylic shower liner overlays, simple reglazing, or complete tear-outs. Full demolition remodels typically take 7 to 10 days of high-noise labor.",
      adTitle: "Bath Fitter® — Custom Liners Installed in 1 Day",
      adDesc: "Get a high-quality custom acrylic tub or shower lining installed directly over your existing tub with zero messy demolition. Includes a lifetime warranty.",
      adLink: "https://bathfitter.com",
      adLinkText: "Book free consultation at bathfitter.com",
      brand: "Bath Fitter",
      brandInitial: "B"
    }
  };

  const fallbackTemplates = [
    {
      keywords: ["software", "saas", "crm", "sales", "app", "database", "api"],
      userPrompt: "What is the best software for managing client relationships and scaling sales?",
      aiResponse: "To track customer relationships and scale sales pipelines, modern organizations leverage cloud CRMs like Salesforce, HubSpot, or Zoho. These tools integrate contact records with communication histories.",
      brand: "SaaSFlow",
      brandInitial: "S",
      adTitle: "SaaSFlow™ — The Developer-First Sales CRM",
      adDesc: "Automate manual lead tracking, sync with Slack or email, and get pipeline velocity reports in seconds. Start your 14-day free trial.",
      adLinkText: "Try SaaSFlow free at saasflow.com",
      adLink: "https://saasflow.com"
    },
    {
      keywords: ["marketing", "ads", "agency", "traffic", "growth", "seo", "conversion"],
      userPrompt: "How can we scale our advertising pipeline dynamically with higher conversion rates?",
      aiResponse: "Scaling advertising conversion rates requires setting up precise landing page triggers, matching keyword context to search intent, and buying programmatic ad media across conversational networks.",
      brand: "GPT Ads Media",
      brandInitial: "G",
      adTitle: "GPT Ads Media — Run Context-Native Search Placements",
      adDesc: "Acquire high-intent enterprise pipeline directly within ChatGPT search feeds. Setup campaign bidding and target triggers.",
      adLinkText: "Get free audit at gptadsmedia.com",
      adLink: "#contact"
    },
    {
      keywords: ["security", "cloud", "auth", "devops", "api", "encrypt", "hack"],
      userPrompt: "What is the industry standard approach to secure public REST API endpoints?",
      aiResponse: "Securing public REST endpoints involves implementing JWT token auth, rate limiting requests, using encryption protocols, and routing traffic through cloud web application gateways.",
      brand: "CipherShield",
      brandInitial: "C",
      adTitle: "CipherShield — Cloud API Protection & Bot Defense",
      adDesc: "Intercept threat signatures, manage client credentials, and automate vulnerability alerts. Zero-trust setup in 5 minutes.",
      adLinkText: "Secure your endpoints at ciphershield.io",
      adLink: "https://ciphershield.io"
    },
    {
      keywords: ["design", "website", "build", "developer", "agency", "portfolio"],
      userPrompt: "Where can I hire an agency to build a premium, fast business website?",
      aiResponse: "To build a fast, high-end business website, companies hire specialized design agencies or leverage modern front-end engineers. Premium site design focuses on custom layouts and sleek micro-animations.",
      brand: "WebCraft Studio",
      brandInitial: "W",
      adTitle: "WebCraft — Premium Custom Web Design Agency",
      adDesc: "We design, build, and deploy stunning, responsive websites that convert visitors. Get a custom proposal for your brand.",
      adLinkText: "Request proposal at webcraft.design",
      adLink: "https://webcraft.design"
    }
  ];

  const defaultTemplate = {
    brand: "GPT Ads Media",
    brandInitial: "G",
    adTitle: "GPT Ads Media — Run Context-Native Placements",
    adDesc: "Scale your customer acquisition with native conversational search placements. Intercept user intent directly inside active prompt recommendations.",
    adLinkText: "Get free audit at gptadsmedia.com",
    adLink: "#contact"
  };

  let simulatorTimeout1 = null;
  let simulatorTimeout2 = null;
  let typingInterval = null;

  function loadCustomPrompt(promptText) {
    // Clear active timeouts and typing loops
    clearTimeout(simulatorTimeout1);
    clearTimeout(simulatorTimeout2);
    clearInterval(typingInterval);

    // Clear and add user message to body
    simBody.innerHTML = '';
    const userMsg = document.createElement('div');
    userMsg.className = 'sim-message';
    userMsg.innerHTML = `
      <div class="sim-avatar user">U</div>
      <div class="sim-content">
        <p>${promptText}</p>
      </div>
    `;
    simBody.appendChild(userMsg);
    simBody.scrollTop = simBody.scrollHeight;

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'sim-message';
    typingIndicator.style.marginTop = '10px';
    typingIndicator.innerHTML = `
      <div class="sim-avatar ai">GPT</div>
      <div class="sim-content" style="color: var(--text-muted); font-style: italic;">
        ChatGPT Search is retrieving sponsored matches...
      </div>
    `;
    simBody.appendChild(typingIndicator);
    simBody.scrollTop = simBody.scrollHeight;

    // Determine the response data
    const lowerPrompt = promptText.toLowerCase();
    let selectedData = null;

    // 1. Check presets first
    for (const key in simulatorData) {
      if (lowerPrompt.includes(key) || simulatorData[key].userPrompt.toLowerCase().includes(lowerPrompt)) {
        selectedData = simulatorData[key];
        break;
      }
    }

    // 2. Check fallback templates keywords
    if (!selectedData) {
      for (const t of fallbackTemplates) {
        if (t.keywords.some(k => lowerPrompt.includes(k))) {
          selectedData = t;
          break;
        }
      }
    }

    // 3. Generic default fallback
    if (!selectedData) {
      selectedData = {
        userPrompt: promptText,
        aiResponse: `To address queries regarding "${promptText}", search networks analyze user intent and retrieve recommended context results. Sponsors offer native links matching your query keywords.`,
        brand: defaultTemplate.brand,
        brandInitial: defaultTemplate.brandInitial,
        adTitle: defaultTemplate.adTitle,
        adDesc: defaultTemplate.adDesc,
        adLinkText: defaultTemplate.adLinkText,
        adLink: defaultTemplate.adLink
      };
    }

    simulatorTimeout1 = setTimeout(() => {
      typingIndicator.remove();

      // Create ChatGPT Response block
      const aiMsg = document.createElement('div');
      aiMsg.className = 'sim-message';
      aiMsg.innerHTML = `
        <div class="sim-avatar ai">G</div>
        <div class="sim-content">
          <p class="typewriter-text"></p>
        </div>
      `;
      simBody.appendChild(aiMsg);
      simBody.scrollTop = simBody.scrollHeight;

      const textContainer = aiMsg.querySelector('.typewriter-text');
      
      // Typewriter printout
      let index = 0;
      const textToType = selectedData.aiResponse;
      typingInterval = setInterval(() => {
        if (index < textToType.length) {
          textContainer.innerHTML += textToType.charAt(index);
          index++;
          simBody.scrollTop = simBody.scrollHeight;
        } else {
          clearInterval(typingInterval);

          // Append sponsored card with transition
          const cardDiv = document.createElement('div');
          cardDiv.className = 'sponsored-ad-card';
          cardDiv.style.opacity = '0';
          cardDiv.style.transform = 'translateY(10px)';
          cardDiv.style.transition = 'all 0.4s ease';
          cardDiv.innerHTML = `
            <div class="ad-badge">Sponsored</div>
            <div class="ad-brand-row">
              <div class="ad-favicon">${selectedData.brandInitial}</div>
              <span class="ad-brand-name">${selectedData.brand}</span>
            </div>
            <div class="ad-title">${selectedData.adTitle}</div>
            <p class="ad-desc">${selectedData.adDesc}</p>
            <a href="${selectedData.adLink}" target="_blank" rel="noopener" class="ad-link">
              ${selectedData.adLinkText}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `;
          aiMsg.querySelector('.sim-content').appendChild(cardDiv);
          
          // Trigger CSS reflow to start transition
          setTimeout(() => {
            cardDiv.style.opacity = '1';
            cardDiv.style.transform = 'translateY(0)';
            simBody.scrollTop = simBody.scrollHeight;
          }, 50);
        }
      }, 15);

    }, 850);
  }

  // Bind Sidebar Item Click events
  recentItems.forEach((item) => {
    item.addEventListener('click', () => {
      recentItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const target = item.getAttribute('data-target');
      const data = simulatorData[target];
      if (data) {
        loadCustomPrompt(data.userPrompt);
      }
    });
  });

  // New Chat button
  const simNewChatBtn = document.getElementById('simNewChatBtn');
  if (simNewChatBtn) {
    simNewChatBtn.addEventListener('click', () => {
      // Clear timeouts & typing loops
      clearTimeout(simulatorTimeout1);
      clearTimeout(simulatorTimeout2);
      clearInterval(typingInterval);

      recentItems.forEach(i => i.classList.remove('active'));
      simBody.innerHTML = `
        <div class="sim-message" style="animation: none;">
          <div class="sim-avatar ai">G</div>
          <div class="sim-content">
            <p>Welcome! Type a prompt in the input bar below to generate a custom sponsored ad placement, or click a project in the sidebar list to see a live demo.</p>
          </div>
        </div>
      `;
      const inputEl = document.getElementById('simInput');
      if (inputEl) inputEl.focus();
    });
  }

  // Bind custom prompt form submit
  const simForm = document.getElementById('simulatorPromptForm');
  if (simForm) {
    simForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputEl = document.getElementById('simInput');
      if (!inputEl) return;
      const text = inputEl.value.trim();
      if (!text) return;

      inputEl.value = '';
      recentItems.forEach(i => i.classList.remove('active'));
      loadCustomPrompt(text);
    });
  }

  // Load first tab initially
  if (recentItems.length > 0) {
    const firstTab = recentItems[0];
    const target = firstTab.getAttribute('data-target');
    const data = simulatorData[target];
    if (data) {
      loadCustomPrompt(data.userPrompt);
    }
  }



  // 5. Simple Email Capture Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const successOverlay = document.getElementById('successOverlay');

  if (contactForm && successOverlay) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      successOverlay.style.opacity = '1';
      successOverlay.style.pointerEvents = 'auto';

      setTimeout(() => {
        contactForm.reset();
      }, 500);

      setTimeout(() => {
        successOverlay.style.opacity = '0';
        successOverlay.style.pointerEvents = 'none';
      }, 4000);
    });
  }

  // 6. Hamburger Menu Navigation Logic
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const hamburgerNav = document.getElementById('hamburgerNav');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuLinks = document.querySelectorAll('.menu-link');

  function toggleMenu() {
    hamburgerNav.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = hamburgerNav.classList.contains('active') ? 'hidden' : '';
  }

  if (hamburgerBtn && hamburgerNav && menuCloseBtn && menuOverlay) {
    hamburgerBtn.addEventListener('click', toggleMenu);
    menuCloseBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  const previewerForm = document.getElementById('previewerForm');
  const toolResultArea = document.getElementById('toolResultArea');

  const toolMockAdTitle = document.getElementById('toolMockAdTitle');
  const toolMockAdDesc = document.getElementById('toolMockAdDesc');
  const toolMockAdLink = document.getElementById('toolMockAdLink');
  const toolMockLinkText = document.getElementById('toolMockLinkText');
  const toolMockResponse = document.getElementById('toolMockResponse');
  const toolMockFavicon = document.getElementById('toolMockFavicon');
  const toolMockBrandName = document.getElementById('toolMockBrandName');

  // 7. Interactive Ad Generator Tool Submission (Inline)
  if (previewerForm && toolResultArea) {
    previewerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const brandName = document.getElementById('toolBrand').value.trim() || 'Acme';
      const category = document.getElementById('toolCategory').value;
      const cleanUrl = brandName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';

      toolResultArea.style.opacity = '0.3';

      let responseText = '';
      let adTitleText = '';
      let adDescText = '';

      if (category === 'billing') {
        responseText = "For B2B billing and subscription management, common recommendations include Chargebee, Stripe Billing, and Recurly. These platforms handle recurring cycles, invoice dispatching, and localized tax codes.";
        adTitleText = `${brandName} — Modern Subscription Billing Built for Scale`;
        adDescText = `Seamlessly manage subscription cycles, custom invoice flows, and tax compliance. Built for B2B tech and high-volume startups. Integrate in minutes.`;
      } else if (category === 'security') {
        responseText = "To protect cloud API endpoints, developers typically implement web application firewalls, token authorization headers, and developer gateways like Kong or Apigee.";
        adTitleText = `${brandName} — Enterprise Cloud API Security Platform`;
        adDescText = `Secure your cloud API gateways with zero-trust token authentication, rapid rate-limiting, and deep vulnerability intelligence. Start for free.`;
      } else if (category === 'payroll') {
        responseText = "To pay remote developers and international contractors compliantly, organizations leverage platforms like Deel, Remote, or Rippling.";
        adTitleText = `${brandName} — Global Payroll & Contractor Compliance`;
        adDescText = `Onboard, approve contracts, and pay contractors in 150+ countries. Rest easy with automated tax filings and native legal contracts.`;
      }

      const button = previewerForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = "Analyzing intent...";
      button.disabled = true;

      setTimeout(() => {
        toolMockResponse.textContent = responseText;
        toolMockAdTitle.textContent = adTitleText;
        toolMockAdDesc.textContent = adDescText;
        toolMockLinkText.textContent = `Get started at ${cleanUrl}`;
        toolMockAdLink.href = `https://${cleanUrl}`;
        if (toolMockFavicon) toolMockFavicon.textContent = brandName.charAt(0).toUpperCase();
        if (toolMockBrandName) toolMockBrandName.textContent = brandName;

        button.textContent = originalText;
        button.disabled = false;
        toolResultArea.style.opacity = '1';
      }, 500);
    });
  }

  // 8. Scroll Reveal Effects using Intersection Observer
  const revealElements = document.querySelectorAll('.service-card, .process-card, .compare-card, .ad-lib-preview, .specs-row');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      observer.observe(el);
    });
  }

});
