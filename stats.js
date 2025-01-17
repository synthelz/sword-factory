const molds = ['Basic', 'Bronze', 'Gold'];
const qualities = ['Normal', 'Awesome', 'Perfect'];
const rarities = ['Common', 'Legendary', 'Omnificent'];

const moldMultipliers = [1, 2, 4];
const qualityMultipliers = [1, 2, 4];
const rarityMultipliers = [1.1, 2, 5];

function generateSword(moldLevel, qualityLevel, rarityLevel) {
    const mold = molds[Math.floor(Math.random() * moldLevel)];
    const quality = qualities[Math.floor(Math.random() * qualityLevel)];
    const rarity = rarities[Math.floor(Math.random() * rarityLevel)];

    const value = moldMultipliers[molds.indexOf(mold)] *
                  qualityMultipliers[qualities.indexOf(quality)] *
                  rarityMultipliers[rarities.indexOf(rarity)];

    return { mold, quality, rarity, value };
}

