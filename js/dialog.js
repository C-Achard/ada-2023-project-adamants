const bobMonolog = [
    "Hello there, fellow explorers of this vast digital universe! I'm Bob, your guide and companion in the enthralling world of Wikispeedia.",
    "Imagine, if you will, a place where information stretches as far and wide as stars in a galaxy. That place, my friends, is Wikipedia. And within this boundless expanse of knowledge, lies our adventure.",
    "Wikispeedia isn't just any ordinary game. Oh no, it's a microcosm of our collective curiosity and intellect.",
    "In this game, we navigate from one Wikipedia article to another, seemingly unrelated one, using only the hyperlinks as our pathways.",
    "It's like a digital maze, a condensed version of Wikipedia with over four thousand articles, each a unique playground for the mind.",
    "You see, my adventures in Wikispeedia are more than just a way to pass time. They're a quest – a quest to uncover the hidden pathways of knowledge, to delve deep into the interconnected web of information.",
    "Each journey I undertake is a discovery, a revelation of the vast diversity that Wikipedia holds.",
    "But what really lies at the heart of these adventures? Is it the skill in finding the quickest path, or the strategy born from intuition and understanding of the semantic links between articles?",
    "This, my friends, is what we seek to uncover in our data story.",
    "As we analyze the gameplay patterns and strategies, not just mine but of many other Wikispeedia enthusiasts, we're uncovering some truly fascinating insights.",
    "We're going beyond just the surface, exploring how our navigation choices are intertwined with the rich semantic content of Wikipedia.",
    "We're dissecting paths, extracting features, and revealing the myriad strategies at play.",
    "Our journey is more than a narrative of digital escapades. It's a deep dive into the human mind's capability to navigate and connect within a sea of information.",
    "Together, we'll journey through the virtual corridors of Wikipedia, gaining a deeper appreciation of the intricate and often surprising ways in which knowledge is linked.",
    "So, join me on this journey. Let's unravel the mysteries of Wikispeedia together.",
    "Each click, each article, each link we explore is a step towards a greater understanding of how we, as curious beings, interact with and make sense of the vast landscape of information that lies at our fingertips.",
    "Are you ready? Let the adventure begin!"
];

var currentIndex = 0;
var isDialogActive = false; // Flag to track if dialog is active

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    if (isDialogActive) {
        event.preventDefault(); // Prevents default scrolling if dialog is active
        return;
    }

    // Check if any breakpoint is in view
    br1 = document.getElementById('section1');
    if (isInViewport(br1)) {
        showAndLockDialog();
    }
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
}

function showAndLockDialog() {
    document.getElementById('scrollDialog').classList.remove('hidden');
    isDialogActive = true;
    currentIndex = 0;
    updateDialogText();
}

function updateDialogText() {
    if (currentIndex < bobMonolog.length) {
        document.getElementById('scrollDialogText').textContent = bobMonolog[currentIndex];
    } else {
        unlockScrollAndHideDialog();
    }
}

window.addEventListener('wheel', changeTextInDialog);
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchend', handleTouchEnd, false);

function changeTextInDialog(event) {
    if (!isDialogActive) return;

    event.preventDefault();
    if (event.deltaY > 0) {
        currentIndex++; // Next text
    } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--; // Previous text
    }
    updateDialogText();
}

function handleTouchStart(event) {
    if (!isDialogActive) return;

    touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    if (!isDialogActive) return;

    touchEndY = event.changedTouches[0].clientY;
    if (touchEndY > touchStartY) {
        currentIndex--; // Previous text
    } else if (touchEndY < touchStartY) {
        currentIndex++; // Next text
    }
    updateDialogText();
}

function unlockScrollAndHideDialog() {
    isDialogActive = false;
    document.getElementById('scrollDialog').classList.add('hidden');
}


