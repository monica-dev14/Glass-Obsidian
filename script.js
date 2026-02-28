const blurInput = document.getElementById('blur');
const opacityInput = document.getElementById('opacity');
const colorInput = document.getElementById('color');
const glassCard = document.getElementById('glass-card');
const cssCode = document.getElementById('css-code');
const copyBtn = document.getElementById('copy-btn');

function updateStyles() {
    const blur = blurInput.value;
    const opacity = opacityInput.value;
    const color = colorInput.value;

    // Convert hex to RGBA for transparency
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    const backdropFilter = `blur(${blur}px)`;

    // Apply to card
    glassCard.style.backgroundColor = backgroundColor;
    glassCard.style.backdropFilter = backdropFilter;

    // Update code text
    const codeText = `background-color: ${backgroundColor};\nbackdrop-filter: ${backdropFilter};\n-webkit-backdrop-filter: ${backdropFilter};\nborder: 1px solid rgba(255, 255, 255, 0.2);`;
    cssCode.innerText = codeText;
}

// Event Listeners
blurInput.addEventListener('input', updateStyles);
opacityInput.addEventListener('input', updateStyles);
colorInput.addEventListener('input', updateStyles);

// Copy to clipboard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssCode.innerText);
    copyBtn.innerText = "Copied!";
    setTimeout(() => copyBtn.innerText = "Copy Code", 2000);
});

// Initialize
updateStyles();