let money = 0;
let swordsMade = 0;
let moldLevel = 1;
let qualityLevel = 1;
let rarityLevel = 1;

document.getElementById('make-sword').addEventListener('click', () => {
    const sword = generateSword(moldLevel, qualityLevel, rarityLevel);
    swordsMade += 1;
    updateStats(money, swordsMade, sword);
    console.log(`Sword made: ${sword.mold}, ${sword.quality}, ${sword.rarity}`);
});

document.getElementById('sell-swords').addEventListener('click', () => {
    const sword = generateSword(moldLevel, qualityLevel, rarityLevel);
    money += swordsMade * sword.value;
    swordsMade = 0;
    updateStats(money, swordsMade, sword);
    console.log(`Swords sold: ${sword.value}`);
});

document.getElementById('upgrade-mold').addEventListener('click', () => {
    moldLevel = upgradeMold(moldLevel);
    updateStats(money, swordsMade);
    console.log("Mold upgraded");
});

document.getElementById('upgrade-quality').addEventListener('click', () => {
    qualityLevel = upgradeQuality(qualityLevel);
    updateStats(money, swordsMade);
    console.log("Quality upgraded");
});

document.getElementById('upgrade-rarity').addEventListener('click', () => {
    rarityLevel = upgradeRarity(rarityLevel);
    updateStats(money, swordsMade);
    console.log("Rarity upgraded");
});

updateStats(money, swordsMade);
