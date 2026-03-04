export function createCosmeticsController({
  documentRef,
  state,
  collections,
  elements,
  getActiveCategory,
  format,
  canAfford,
  spendCookies,
  updateStats,
  showGameToast
}) {
  const {
    colors,
    accessories,
    skins,
    misc
  } = collections;

  const {
    cookieButton,
    cookieSkinEl,
    cookieMiscEl,
    cookieAccessoryEl,
    cosmeticsPreviewCookie,
    cosmeticsPreviewAccessory,
    cosmeticsPreviewSkin,
    cosmeticsPreviewMisc,
    cosmeticsPreviewName,
    cosmeticsPreviewMeta,
    cosmeticsCatalogList,
    cosmeticsCategoryTabs
  } = elements;

  function activeColorCosmetic() {
    return colors.find((cosmetic) => cosmetic.key === state.activeColor) || colors[0];
  }

  function activeAccessoryCosmetic() {
    return accessories.find((cosmetic) => cosmetic.key === state.activeAccessory && !cosmetic.hidden) || accessories[0];
  }

  function activeSkinCosmetic() {
    return skins.find((cosmetic) => cosmetic.key === state.activeSkin) || skins[0];
  }

  function activeMiscCosmetic() {
    return misc.find((cosmetic) => cosmetic.key === state.activeMisc) || misc[0];
  }

  function resetCosmeticsState() {
    colors.forEach((cosmetic) => {
      cosmetic.owned = cosmetic.key === "classic";
    });
    accessories.forEach((cosmetic) => {
      cosmetic.owned = cosmetic.key === "none";
    });
    skins.forEach((cosmetic) => {
      cosmetic.owned = cosmetic.key === "none";
    });
    misc.forEach((cosmetic) => {
      cosmetic.owned = cosmetic.key === "none";
    });
    state.activeColor = "classic";
    state.activeSkin = "none";
    state.activeMisc = "none";
    state.activeAccessory = "none";
  }

  function applyCosmeticTheme() {
    const color = activeColorCosmetic();
    const skin = activeSkinCosmetic();
    const miscCosmetic = activeMiscCosmetic();
    const accessory = activeAccessoryCosmetic();
    state.activeColor = color.key;
    state.activeSkin = skin.key;
    state.activeMisc = miscCosmetic.key;
    state.activeAccessory = accessory.key;
    Object.entries(color.theme).forEach(([key, value]) => {
      cookieButton.style.setProperty(key, value);
    });
    if (skin.theme) {
      Object.entries(skin.theme).forEach(([key, value]) => {
        cookieButton.style.setProperty(key, value);
      });
    }
    cookieButton.dataset.skin = skin.key || "none";
    cookieButton.dataset.misc = miscCosmetic.key || "none";
    if (cookieSkinEl) {
      cookieSkinEl.className = `cookie-skin skin-${skin.key || "none"}`;
    }
    if (cookieMiscEl) {
      cookieMiscEl.className = `cookie-misc misc-${miscCosmetic.key || "none"}`;
      cookieMiscEl.innerHTML = miscCosmetic.svg || "";
    }
    if (cookieAccessoryEl) {
      cookieAccessoryEl.className = `cookie-accessory accessory-${accessory.key || "none"}`;
    }
  }

  function migrateLegacyCosmetics(savedCosmetics) {
    const legacyMap = {
      classic: { color: "classic", accessory: "none" },
      strawberry: { color: "strawberry", accessory: "party" },
      mint: { color: "mint", accessory: "none" },
      midnight: { color: "midnight", accessory: "crown" },
      "royal-velvet": { color: "royal-velvet", accessory: "crown" },
      "captain-crunch": { color: "captain-crunch", accessory: "cowboy" }
    };

    const ownedKeys = Array.isArray(savedCosmetics.owned) ? savedCosmetics.owned : [];
    ownedKeys.forEach((key) => {
      const mapped = legacyMap[key];
      if (!mapped) return;
      const color = colors.find((entry) => entry.key === mapped.color);
      const accessory = accessories.find((entry) => entry.key === mapped.accessory);
      if (color) color.owned = true;
      if (accessory) accessory.owned = true;
    });

    if (typeof savedCosmetics.active === "string") {
      const mapped = legacyMap[savedCosmetics.active];
      if (!mapped) return;
      if (colors.some((entry) => entry.key === mapped.color && entry.owned)) {
        state.activeColor = mapped.color;
      }
      if (accessories.some((entry) => entry.key === mapped.accessory && entry.owned)) {
        state.activeAccessory = mapped.accessory;
      }
    }
  }

  function availableLootboxCosmetics() {
    return [
      ...colors.filter((entry) => !entry.owned).map((entry) => ({ type: "color", entry })),
      ...accessories.filter((entry) => !entry.owned && !entry.hidden).map((entry) => ({ type: "accessory", entry })),
      ...skins.filter((entry) => !entry.owned).map((entry) => ({ type: "skin", entry })),
      ...misc.filter((entry) => !entry.owned).map((entry) => ({ type: "misc", entry }))
    ];
  }

  function unlockLootboxCosmetic(reward) {
    reward.entry.owned = true;
    if (reward.type === "color") {
      state.activeColor = reward.entry.key;
    } else if (reward.type === "accessory") {
      state.activeAccessory = reward.entry.key;
    } else if (reward.type === "skin") {
      state.activeSkin = reward.entry.key;
    } else if (reward.type === "misc") {
      state.activeMisc = reward.entry.key;
    }
    applyCosmeticTheme();
  }

  function selectOwned(entries, key, stateKey) {
    const cosmetic = entries.find((entry) => entry.key === key && entry.owned);
    if (!cosmetic) {
      return;
    }
    state[stateKey] = cosmetic.key;
    applyCosmeticTheme();
    updateStats();
  }

  function buyCosmetic(entries, key, stateKey, label) {
    const cosmetic = entries.find((entry) => entry.key === key);
    if (!cosmetic || cosmetic.owned || !canAfford(cosmetic.cost)) {
      return;
    }
    spendCookies(cosmetic.cost);
    cosmetic.owned = true;
    state[stateKey] = cosmetic.key;
    applyCosmeticTheme();
    showGameToast(state.devMode ? 0 : -cosmetic.cost, `${cosmetic.name} ${label}`);
    updateStats();
  }

  function selectColorCosmetic(key) {
    selectOwned(colors, key, "activeColor");
  }

  function buyColorCosmetic(key) {
    buyCosmetic(colors, key, "activeColor", "Farbe");
  }

  function selectAccessoryCosmetic(key) {
    selectOwned(accessories, key, "activeAccessory");
  }

  function buyAccessoryCosmetic(key) {
    buyCosmetic(accessories, key, "activeAccessory", "Accessoire");
  }

  function selectSkinCosmetic(key) {
    selectOwned(skins, key, "activeSkin");
  }

  function buySkinCosmetic(key) {
    buyCosmetic(skins, key, "activeSkin", "Skin");
  }

  function selectMiscCosmetic(key) {
    selectOwned(misc, key, "activeMisc");
  }

  function buyMiscCosmetic(key) {
    buyCosmetic(misc, key, "activeMisc", "Sonstiges");
  }

  function renderCosmeticsTabs() {
    cosmeticsCategoryTabs.forEach((tab) => {
      const isActive = tab.dataset.cosmeticsCategory === getActiveCategory();
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
  }

  function renderCosmeticsStage() {
    if (!cosmeticsPreviewCookie || !cosmeticsPreviewAccessory || !cosmeticsPreviewSkin || !cosmeticsPreviewMisc) {
      return;
    }
    const activeColor = activeColorCosmetic();
    const activeSkin = activeSkinCosmetic();
    const activeMisc = activeMiscCosmetic();
    const activeAccessory = activeAccessoryCosmetic();

    Object.entries(activeColor.theme).forEach(([key, value]) => {
      cosmeticsPreviewCookie.style.setProperty(key, value);
    });
    if (activeSkin.theme) {
      Object.entries(activeSkin.theme).forEach(([key, value]) => {
        cosmeticsPreviewCookie.style.setProperty(key, value);
      });
    }
    cosmeticsPreviewCookie.dataset.skin = activeSkin.key || "none";
    cosmeticsPreviewCookie.dataset.misc = activeMisc.key || "none";
    cosmeticsPreviewSkin.className = `cookie-skin skin-${activeSkin.key || "none"}`;
    cosmeticsPreviewMisc.className = `cookie-misc misc-${activeMisc.key || "none"}`;
    cosmeticsPreviewMisc.innerHTML = activeMisc.svg || "";
    cosmeticsPreviewAccessory.className = `cookie-accessory accessory-${activeAccessory.key || "none"}`;

    if (cosmeticsPreviewName) {
      cosmeticsPreviewName.textContent = `${activeColor.name} + ${activeSkin.name} + ${activeMisc.name} + ${activeAccessory.name}`;
    }
    if (cosmeticsPreviewMeta) {
      cosmeticsPreviewMeta.textContent = `Farbe: ${activeColor.name} | Skin: ${activeSkin.name} | Sonstiges: ${activeMisc.name} | Hut: ${activeAccessory.name}`;
    }
  }

  function renderCosmeticCards(listEl, entries, activeKey, onSelect, onBuy, previewFactory) {
    if (!listEl) {
      return;
    }
    listEl.innerHTML = "";
    entries.filter((cosmetic) => !cosmetic.hidden).forEach((cosmetic) => {
      const item = documentRef.createElement("div");
      const isActive = cosmetic.key === activeKey;
      item.className = "cosmetic-card";
      if (cosmetic.owned) {
        item.classList.add("owned");
      }
      if (isActive) {
        item.classList.add("selected");
      }

      const preview = previewFactory(cosmetic);

      const info = documentRef.createElement("div");
      const title = documentRef.createElement("h3");
      title.textContent = cosmetic.name;

      const desc = documentRef.createElement("p");
      desc.textContent = cosmetic.owned
        ? cosmetic.desc
        : (state.devMode
          ? `${cosmetic.desc} - Kosten: Dev gratis (${format(cosmetic.cost)})`
          : `${cosmetic.desc} - Kosten: ${format(cosmetic.cost)}`);

      info.appendChild(title);
      info.appendChild(desc);

      const button = documentRef.createElement("button");
      if (isActive) {
        button.textContent = "Aktiv";
        button.disabled = true;
      } else if (cosmetic.owned) {
        button.textContent = "Auswaehlen";
        button.addEventListener("click", () => onSelect(cosmetic.key));
      } else {
        button.textContent = "Kaufen";
        button.disabled = !canAfford(cosmetic.cost);
        button.addEventListener("click", () => onBuy(cosmetic.key));
      }

      item.appendChild(preview);
      item.appendChild(info);
      item.appendChild(button);

      if (!cosmetic.owned && !button.disabled) {
        item.classList.add("affordable");
      }

      listEl.appendChild(item);
    });
  }

  function createMiscLayer(cosmetic) {
    const layer = documentRef.createElement("span");
    layer.className = `cookie-misc misc-${cosmetic.key || "none"}`;
    layer.innerHTML = cosmetic.svg || "";
    return layer;
  }

  function createColorPreview(cosmetic) {
    const preview = documentRef.createElement("div");
    preview.className = "cosmetic-preview";
    Object.entries(cosmetic.theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
    if (activeSkinCosmetic().theme) {
      Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
        preview.style.setProperty(key, value);
      });
    }
    preview.dataset.skin = activeSkinCosmetic().key || "none";
    preview.dataset.misc = activeMiscCosmetic().key || "none";
    const previewSkin = documentRef.createElement("span");
    previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
    preview.appendChild(previewSkin);
    preview.appendChild(createMiscLayer(activeMiscCosmetic()));
    const previewAccessory = documentRef.createElement("span");
    previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
    preview.appendChild(previewAccessory);
    return preview;
  }

  function createSkinPreview(cosmetic) {
    const preview = documentRef.createElement("div");
    preview.className = "cosmetic-preview";
    Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
    if (cosmetic.theme) {
      Object.entries(cosmetic.theme).forEach(([key, value]) => {
        preview.style.setProperty(key, value);
      });
    }
    preview.dataset.skin = cosmetic.key || "none";
    preview.dataset.misc = activeMiscCosmetic().key || "none";
    const previewSkin = documentRef.createElement("span");
    previewSkin.className = `cookie-skin skin-${cosmetic.key || "none"}`;
    preview.appendChild(previewSkin);
    preview.appendChild(createMiscLayer(activeMiscCosmetic()));
    const previewAccessory = documentRef.createElement("span");
    previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
    preview.appendChild(previewAccessory);
    return preview;
  }

  function createMiscPreview(cosmetic) {
    const preview = documentRef.createElement("div");
    preview.className = "cosmetic-preview";
    Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
    if (activeSkinCosmetic().theme) {
      Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
        preview.style.setProperty(key, value);
      });
    }
    preview.dataset.skin = activeSkinCosmetic().key || "none";
    preview.dataset.misc = cosmetic.key || "none";
    const previewSkin = documentRef.createElement("span");
    previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
    preview.appendChild(previewSkin);
    preview.appendChild(createMiscLayer(cosmetic));
    const previewAccessory = documentRef.createElement("span");
    previewAccessory.className = `cookie-accessory accessory-${state.activeAccessory || "none"}`;
    preview.appendChild(previewAccessory);
    return preview;
  }

  function createAccessoryPreview(cosmetic) {
    const preview = documentRef.createElement("div");
    preview.className = "cosmetic-preview";
    Object.entries(activeColorCosmetic().theme).forEach(([key, value]) => {
      preview.style.setProperty(key, value);
    });
    if (activeSkinCosmetic().theme) {
      Object.entries(activeSkinCosmetic().theme).forEach(([key, value]) => {
        preview.style.setProperty(key, value);
      });
    }
    preview.dataset.skin = activeSkinCosmetic().key || "none";
    preview.dataset.misc = activeMiscCosmetic().key || "none";
    const previewSkin = documentRef.createElement("span");
    previewSkin.className = `cookie-skin skin-${state.activeSkin || "none"}`;
    preview.appendChild(previewSkin);
    preview.appendChild(createMiscLayer(activeMiscCosmetic()));
    const previewAccessory = documentRef.createElement("span");
    previewAccessory.className = `cookie-accessory accessory-${cosmetic.key || "none"}`;
    preview.appendChild(previewAccessory);
    return preview;
  }

  function renderCosmetics() {
    renderCosmeticsTabs();
    renderCosmeticsStage();
    if (getActiveCategory() === "colors") {
      renderCosmeticCards(
        cosmeticsCatalogList,
        colors,
        state.activeColor,
        selectColorCosmetic,
        buyColorCosmetic,
        createColorPreview
      );
      return;
    }

    if (getActiveCategory() === "skins") {
      renderCosmeticCards(
        cosmeticsCatalogList,
        skins,
        state.activeSkin,
        selectSkinCosmetic,
        buySkinCosmetic,
        createSkinPreview
      );
      return;
    }

    if (getActiveCategory() === "misc") {
      renderCosmeticCards(
        cosmeticsCatalogList,
        misc,
        state.activeMisc,
        selectMiscCosmetic,
        buyMiscCosmetic,
        createMiscPreview
      );
      return;
    }

    renderCosmeticCards(
      cosmeticsCatalogList,
      accessories,
      state.activeAccessory,
      selectAccessoryCosmetic,
      buyAccessoryCosmetic,
      createAccessoryPreview
    );
  }

  return {
    activeColorCosmetic,
    activeAccessoryCosmetic,
    activeSkinCosmetic,
    activeMiscCosmetic,
    resetCosmeticsState,
    applyCosmeticTheme,
    migrateLegacyCosmetics,
    availableLootboxCosmetics,
    unlockLootboxCosmetic,
    renderCosmetics
  };
}
