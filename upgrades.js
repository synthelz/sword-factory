function upgradeMold(level) {
    return Math.min(level + 1, molds.length);
}

function upgradeQuality(level) {
    return Math.min(level + 1, qualities.length);
}

function upgradeRarity(level) {
    return Math.min(level + 1, rarities.length);
}
