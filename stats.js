// Sword Factory Logic
const molds = ['Basic', 'Bronze', 'Gold', 'Platinum', 'Diamond'];
const qualities = ['Normal', 'Awesome', 'Perfect', 'Superior', 'Masterpiece'];
const rarities = ['Common', 'Rare', 'Epic', 'Legendary', 'Mythical', 'Omnificent'];

const moldMultipliers = [1, 2, 4, 6, 8];
const qualityMultipliers = [1, 2, 4, 6, 8];
const rarityMultipliers = [1.1, 1.5, 2, 3, 4, 5];

let money = 0;
let swordsMade = 0;
let moldLevel = 1;
let qualityLevel = 1;
let rarityLevel = 1;

function generateSword() {
    const mold = molds[Math.floor(Math.random() * moldLevel)];
    const quality = qualities[Math.floor(Math.random() * qualityLevel)];
    const rarity = rarities[Math.floor(Math.random() * rarityLevel)];
    const value = moldMultipliers[molds.indexOf(mold)] *
                  qualityMultipliers[qualities.indexOf(quality)] *
                  rarityMultipliers[rarities.indexOf(rarity)];

    return { mold, quality, rarity, value };
}

function updateStats() {
    document.getElementById('money').innerText = money;
    document.getElementById('swords-made').innerText = swordsMade;
    console.log("Stats updated");
}

document.getElementById('make-sword').addEventListener('click', () => {
    const sword = generateSword();
    swordsMade += 1;
    document.getElementById('last-sword').innerText = `${sword.mold}, ${sword.quality}, ${sword.rarity}`;
    updateStats();
    console.log(`Sword made: ${sword.mold}, ${sword.quality}, ${sword.rarity}`);
});

document.getElementById('sell-swords').addEventListener('click', () => {
    const sword = generateSword();
    money += swordsMade * sword.value;
    swordsMade = 0;
    updateStats();
    console.log(`Swords sold: ${sword.value}`);
});

document.getElementById('upgrade-mold').addEventListener('click', () => {
    if (moldLevel < molds.length) {
        moldLevel += 1;
        updateStats();
        console.log("Mold upgraded");
    }
});

document.getElementById('upgrade-quality').addEventListener('click', () => {
    if (qualityLevel < qualities.length) {
        qualityLevel += 1;
        updateStats();
        console.log("Quality upgraded");
    }
});

document.getElementById('upgrade-rarity').addEventListener('click', () => {
    if (rarityLevel < rarities.length) {
        rarityLevel += 1;
        updateStats();
        console.log("Rarity upgraded");
    }
});

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Dark mode toggled");
});

updateStats();
