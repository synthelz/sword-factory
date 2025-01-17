function updateStats(money, swordsMade, lastSword) {
    document.getElementById('money').innerText = money;
    document.getElementById('swords-made').innerText = swordsMade;
    if (lastSword) {
        document.getElementById('last-sword').innerText = `${lastSword.mold}, ${lastSword.quality}, ${lastSword.rarity}`;
    }
    console.log("Stats updated");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
