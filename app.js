const scenarioData = {
    'laura': {
        title: "Laura's Day: The Pharmacy",
        archetype: "The Independent Sage (Role: Learner)",
        focus: "Age-Related Cognitive Lapses",
        quest: {
            title: "Quest: The Simple Errand",
            objective: "Accurately interpret the character's hidden emotional state in a social situation.",
        },
        bio: {
            name: "Laura (87)",
            svg: {
                bg: "url(#grad-laura)",
                icon: `<rect width="24" height="24" rx="8" fill="#bfdbfe"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
            },
            intro: "You are about to step into the shoes of Laura (87).",
            bullets: [
                "Widowed for 10 years.",
                "Lives alone in the house she's owned for 50 years.",
                "She values her independence and her weekly lunch with 'the girls.'",
                "Lately, she's been frustrated by small memory lapses."
            ]
        },
        diagnostic: {
            question: "Myth or Fact: Most elderly people will eventually develop dementia.",
            options: [
                { text: "Myth", correct: true },
                { text: "Fact", correct: false }
            ],
            feedback: "This is a common misconception. While the risk of dementia increases with age, it is not a normal part of aging. Most older adults do not develop dementia.",
        },
        intro: {
            title: "Scene One: A Simple Errand",
            text: "You are Laura. You've just had a lovely lunch with friends and stop by the pharmacy on your way home. You're feeling good, but also a little tired from all the talking. **This scene focuses on the affective impact of a common cognitive lapse.**"
        },
        scene: {
            char1: { id: "char-1", alt: "Laura (87)", svg: `<path d="M50 40C39 40 30 49 30 60V70H70V60C70 49 61 40 50 40Z" fill="#bfdbfe" fill-opacity="0.6"/><path d="M20 150V130C20 113.4 33.4 100 50 100C66.6 100 80 113.4 80 130V150H20Z" fill="#bfdbfe" fill-opacity="0.8"/>` },
            char2: { id: "char-2", alt: "Pharmacist", svg: `<path d="M50 40C39 40 30 49 30 60V70H70V60C70 49 61 40 50 40Z" fill="#fed7aa" fill-opacity="0.6"/><path d="M20 150V130C20 113.4 33.4 100 50 100C66.6 100 80 113.4 80 130V150H20Z" fill="#fed7aa" fill-opacity="0.8"/>` }
        },
        dialogue: [
            { speaker: "Pharmacist", text: "Hello, how are you doing today?" },
            { speaker: "Laura", text: "(Squinting slightly) ...Oh, hello dear. I'm doing well. Just had lunch with the girls." },
            { speaker: "Pharmacist", text: "That sounds nice! How may I help you today, Mrs. ...?" },
            { speaker: "Laura", text: "(A moment of panic, forcing a smile) Oh, you know me. It's Laura. Laura Peterson. I just... your name is on the tip of my tongue, dear..." },
            { speaker: "Pharmacist", text: "(Smiling kindly) It's Mark. No problem at all! What can I get for you?" },
            { speaker: "Laura", text: "(Visibly relieved, but overly bright) Oh, Mark, of course! I'm so silly. I just need to pick up my prescriptions, thank you." },
            { speaker: "Narrator", text: "Laura feels a flush of embarrassment, angry at herself for the simple mistake. She hopes Mark didn't notice." }
        ],
        assessment: {
            question: "Based on that interaction, what was Laura most likely feeling?",
            options: [
                { text: "Genuinely Happy. She had a great lunch and wasn't bothered at all.", correct: false },
                { text: "Flustered and a little embarrassed, but trying to cover it by being extra cheerful.", correct: true },
                { text: "Annoyed at the Pharmacist for being so formal.", correct: false }
            ],
            feedback: "That's one possibility, but consider the subtext. Try again.",
            correctFeedback: "<b>That's right!</b> Laura was likely feeling flustered. This is a common experience.",
            knowledge: "Social interactions can become a source of anxiety when combined with minor, normal age-related memory lapses. Often, an older adult will overcompensate with 'cheerfulness' or 'friendliness' to hide their frustration or embarrassment.",
            source: "(Concept: Age-Related Cognitive Lapses)"
        },
        reflection: "Imagine you experience Laura's situation. How might this small, daily frustration affect your desire to go out and interact with others?"
    },
    'ana': {
        title: "Ana's Weekly Call",
        archetype: "The Social Connector (Role: Family Member)",
        focus: "Digital Divide & Social Isolation",
        quest: {
            title: "Quest: Bridging the Divide",
            objective: "Diagnose the technical *and* psychological barriers to effective family communication.",
        },
        bio: {
            name: "Ana (76)",
            svg: {
                bg: "url(#grad-ana)",
                icon: `<rect width="24" height="24" rx="8" fill="#fecaca"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#7f1d1d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="#7f1d1d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
            },
            intro: "You are about to step into the shoes of Ana (76).",
            bullets: [
                "Lives in a retirement community.",
                "Her children and grandchildren live far away.",
                "She loves her family and treasures their weekly video calls.",
                "Her son just sent her a new tablet, but she finds it 'fussy'."
            ]
        },
        diagnostic: {
            question: "Myth or Fact: If your parents had a chronic disease (like heart disease), you are destined to have it too.",
            options: [
                { text: "Myth", correct: true },
                { text: "Fact", correct: false }
            ],
            feedback: "This is a common misconception. While genetics play a role, lifestyle factors like diet, exercise, and not smoking can significantly reduce your risk of developing many chronic diseases.",
        },
        intro: {
            title: "Scene One: The Video Call",
            text: "You are Ana. It's Sunday at 2:00 PM, time for the weekly family video call. Your son, Miguel, is starting the call. You grab your new tablet, open the 'Zoom' app like he showed you, and wait. **This scene focuses on the social impact of the digital divide.**"
        },
        scene: {
            char1: { id: "char-1", alt: "Ana (76)", svg: `<path d="M50 40C39 40 30 49 30 60V70H70V60C70 49 61 40 50 40Z" fill="#fecaca" fill-opacity="0.6"/><path d="M20 150V130C20 113.4 33.4 100 50 100C66.6 100 80 113.4 80 130V150H20Z" fill="#fecaca" fill-opacity="0.8"/>` },
            char2: { id: "char-2", alt: "Laptop", svg: `<rect x="20" y="30" width="60" height="90" rx="5" fill="#c7d2fe" fill-opacity="0.7" /><rect x="10" y="120" width="80" height="5" rx="2" fill="#c7d2fe" fill-opacity="0.7" />` }
        },
        dialogue: [
            { speaker: "Narrator", text: "You see the 'Join Meeting' button and tap it. A box pops up: 'Allow Zoom to access your microphone and camera?'" },
            { speaker: "Ana", text: "(To herself) Oh dear. I don't know... I'll just hit 'Cancel'." },
            { speaker: "Narrator", text: "You join the call, but your screen is black and they can't hear you. You can hear your son and grandkids laughing." },
            { speaker: "Miguel (on Zoom)", text: "Mom? Are you there? We can't see you. Mom? ... Ugh, I bet the settings are wrong again." },
            { speaker: "Ana", text: "(Panicked, tapping the screen) I'm here! I'm here! Can you hear me? Oh, this silly thing!" },
            { speaker: "Miguel (on Zoom)", text: "Mom, you have to allow the camera! I showed you this... just... ugh. Can you try re-joining?" },
            { speaker: "Ana", text: "(Voice trembling) Oh, it's no problem, mijo. You all talk. It's fine. Don't worry about me. I'll just listen." },
            { speaker: "Narrator", text: "Ana mutes the call, feeling a sharp sting of frustration and loneliness. She feels incompetent and, worse, like a bother." }
        ],
        assessment: {
            question: "Why did Ana say 'Don't worry about me' and mute the call?",
            options: [
                { text: "She was truly fine with just listening and didn't mind that it wasn't working.", correct: false },
                { text: "She was angry at her son for being impatient and wanted to end the call.", correct: false },
                { text: "She felt embarrassed and didn't want to 'be a bother' by making them stop and help her.", correct: true }
            ],
            feedback: "That's a possible interpretation, but consider her feelings in that moment. Try again.",
            correctFeedback: "<b>That's right.</b> She likely felt embarrassed and didn't want to disrupt the call.",
            knowledge: "This is known as the 'Digital Divide.' It's not just about access to technology, but also the skills and confidence to use it. For many seniors, the fear of 'breaking something' or 'being a bother' is a major barrier, which can lead to profound social isolation, even when technology is meant to connect.",
            source: "(Concept: Digital Divide & Social Isolation)"
        },
        reflection: "Think about a time you felt left out of a conversation. How does Ana's experience compare? How could her son have handled that better?"
    },
    'michel': {
        title: "Michel's Birthday Dinner",
        archetype: "The Proud Veteran (Role: Observer)",
        focus: "Presbycusis & Cognitive Load",
        quest: {
            title: "Quest: Silent Dinner",
            objective: "Connect the sensory limitations of the character to their subsequent behavior (withdrawal).",
        },
        bio: {
            name: "Michel (82)",
            svg: {
                bg: "url(#grad-michel)",
                icon: `<rect width="24" height="24" rx="8" fill="#bbf7d0"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#14532d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="#14532d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
            },
            intro: "You are about to step into the shoes of Michel (82).",
            bullets: [
                "Retired professor.",
                "Proud, intelligent, and used to leading conversations.",
                "He has moderate, age-related hearing loss (presbycusis).",
                "He refuses to get hearing aids, saying 'I'm not that old yet.'"
            ]
        },
        diagnostic: {
            question: "Myth or Fact: You can't teach an old dog new tricks. (Older people can't learn new things).",
            options: [
                { text: "Myth", correct: true },
                { text: "Fact", correct: false }
            ],
            feedback: "This is a common misconception. Lifelong learning is beneficial for cognitive health. While the speed of learning might change, the ability to learn and adapt persists throughout life.",
        },
        intro: {
            title: "Scene One: The Restaurant",
            text: "You are Michel. Your family is taking you to your favorite (but very loud) Italian restaurant for your 82nd birthday. You're at a big, round table with your children and grandchildren. **This scene focuses on the high cognitive load caused by sensory issues (presbycusis).**"
        },
        scene: {
            char1: { id: "char-1", alt: "Michel (82)", svg: `<path d="M50 40C39 40 30 49 30 60V70H70V60C70 49 61 40 50 40Z" fill="#bbf7d0" fill-opacity="0.6"/><path d="M20 150V130C20 113.4 33.4 100 50 100C66.6 100 80 113.4 80 130V150H20Z" fill="#bbf7d0" fill-opacity="0.8"/>` },
            char2: { id: "char-2", alt: "Family", svg: `<path d="M40 40C33 40 27 46 27 53V60H53V53C53 46 47 40 40 40Z" fill="#dbeafe" fill-opacity="0.6"/><path d="M15 150V135C15 122.8 24.8 113 37 113C49.2 113 59 122.8 59 135V150H15Z" fill="#dbeafe" fill-opacity="0.8"/><path d="M70 40C63 40 57 46 57 53V60H83V53C83 46 77 40 70 40Z" fill="#dbeafe" fill-opacity="0.6"/><path d="M45 150V135C45 122.8 54.8 113 67 113C79.2 113 89 122.8 89 135V150H45Z" fill="#dbeafe" fill-opacity="0.8"/>` }
        },
        dialogue: [
            { speaker: "Narrator", text: "The restaurant is buzzing. Plates clatter. People are laughing. Your granddaughter, Sarah, is telling a story from college." },
            { speaker: "Sarah", text: "...so the professor looks at me and says, 'That's... (mumble mble)... creative!' And the whole class... (mumble)..." },
            { speaker: "Narrator", text: "You can't make out the words over the din. You lean in, smiling and nodding, pretending to follow." },
            { speaker: "Family", text: "(Everyone laughs loudly)" },
            { speaker: "Your Son", text: "(Leaning in) What'd you think of that, Dad? Pretty funny, right?" },
            { speaker: "Michel", text: "(Caught off guard) Oh, yes. Very. She's a smart girl." },
            { speaker: "Narrator", text: "Your son gives you a slightly confused look and turns back to the conversation. You feel a wave of irritation. You're straining so hard to listen, it's exhausting." },
            { speaker: "Sarah", text: "And then, Grandpa, I... (mumble mumble)... just like you used to!" },
            { speaker: "Michel", text: "(Smiling) That's nice, dear." },
            { speaker: "Narrator", text: "You slowly stop trying to follow. You retreat into your own thoughts, feeling isolated and, for the first time, old. You just nod and smile." }
        ],
        assessment: {
            question: "What is the primary reason Michel withdrew from the conversation?",
            options: [
                { text: "He was bored with his granddaughter's stories and wasn't interested.", correct: false },
                { text: "He was physically and mentally exhausted from the strain of trying to hear over the background noise.", correct: true },
                { text: "He was angry that his family didn't speak up and was punishing them by being silent.", correct: false }
            ],
            feedback: "While he might be frustrated, that's not the *primary* reason. Think about the physical effort involved. Try again.",
            correctFeedback: "<b>Exactly.</b> He was exhausted from the high cognitive load of trying to listen.",
            knowledge: "This is a key effect of age-related hearing loss (presbycusis). The challenge isn't just volume; it's *clarity*, especially with background noise. The constant strain is physically and mentally exhausting (high cognitive load). This often leads to social withdrawal, not out of 'grumpiness,' but out of fatigue and the fear of responding inappropriately.",
            source: "(Concept: Presbycusis & Cognitive Load)"
        },
        reflection: "Think about how you feel in a loud, chaotic environment. How does Michel's pride (not wanting hearing aids) make his situation even more difficult?"
    }
};

// ======================================================
// SIMULATION ENGINE
// ======================================================

// --- Global State ---
let currentScenario = null;
let dialogueLines = [];
let currentDialogueIndex = 0;
let currentFlow = [];
let currentFlowIndex = 0;
let char1 = null;
let char2 = null;

// --- Modal Functions ---
function showModal(modalId) {
    document.getElementById(modalId).classList.add('flex');
    document.getElementById(modalId).classList.remove('hidden');
}
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.getElementById(modalId).classList.remove('flex');
}

// --- Screen Management ---
function showScreen(screenId) {
    document.getElementById('screen-1-splash').classList.add('hidden');
    document.getElementById('screen-2-simulation').classList.add('hidden');

    const screen = document.getElementById(screenId);
    screen.classList.remove('hidden');

    if (screenId === 'screen-1-splash') {
         screen.classList.add('flex');
         // Reset UI elements when going home
         document.getElementById('character-visuals').classList.add('hidden');
         if (char1) char1.classList.remove('active');
         if (char2) char2.classList.remove('active');
    }
}

// --- Show/Hide Scenario Parts (IN RIGHT PANEL) ---
function showScenarioPart(partId) {
    document.querySelectorAll('.scenario-part').forEach(part => {
        part.classList.add('hidden');
    });
    if (partId) {
        document.getElementById(partId).classList.remove('hidden');
    }
}

// --- Active Speaker Highlight ---
function setActiveSpeaker(speaker) {
    if (!char1 || !char2) return;
    const char1Name = char1.alt.split(' ')[0];
    const char2Name = (char2.alt || "Other").split(' ')[0];

    char1.classList.toggle('active', speaker === char1Name);
    char2.classList.toggle('active', speaker === char2Name);
}

// --- MAIN: Start Simulation ---
function startSimulation(scenarioId) {
    currentScenario = scenarioData[scenarioId];

    // 1. Setup UI
    showScreen('screen-2-simulation');
    document.getElementById('scenario-title').textContent = currentScenario.title;

    // NEW: Populate Learner Preview Sidebar
    document.getElementById('preview-name').textContent = currentScenario.bio.name;
    document.getElementById('preview-archetype').textContent = currentScenario.archetype;
    document.getElementById('preview-focus').textContent = currentScenario.focus;
    document.getElementById('preview-quest-title').textContent = currentScenario.quest.title;
    document.getElementById('preview-quest-objective').textContent = currentScenario.quest.objective;

    // NEW: Set SVG Background
    document.getElementById('stage-bg-rect').setAttribute('fill', currentScenario.bio.svg.bg);
    document.getElementById('character-visuals').classList.remove('hidden');

    char1 = document.getElementById('char-1');
    char2 = document.getElementById('char-2');
    char1.innerHTML = currentScenario.scene.char1.svg;
    char1.alt = currentScenario.scene.char1.alt;
    char2.innerHTML = currentScenario.scene.char2.svg;
    char2.alt = currentScenario.scene.char2.alt;

    // 2. Define the Simulation Flow (ADDIE)
    currentFlow = [
        { name: 'ANALYZE: Bio', func: showBio },
        { name: 'ANALYZE: Diagnostic', func: showDiagnostic },
        { name: 'DESIGN: Introduction', func: showIntroduction },
        { name: 'DEVELOP: Dialogue', func: runDialogue },
        { name: 'DEVELOP: Assessment', func: showAssessment },
        { name: 'DEVELOP: Knowledge Blurb', func: showKnowledgeBlurb },
        { name: 'DEVELOP: Reflection', func: showReflection },
        { name: 'END', func: showEndScreen }
    ];

    // 3. Start the flow
    currentFlowIndex = 0;
    executeCurrentFlowStep();
}

// --- Flow Execution Engine ---
function executeCurrentFlowStep() {
    if (currentFlowIndex < currentFlow.length) {
        const step = currentFlow[currentFlowIndex];
        // console.log(`Executing: ${step.name}`); // For debugging
        step.func();
    }
}

function advanceFlow() {
    currentFlowIndex++;
    executeCurrentFlowStep();
}


// ======================================================
// FLOW STEP FUNCTIONS (ADDIE Model)
// ======================================================

// --- 1. ANALYZE: Show Bio ---
function showBio() {
    document.getElementById('bio-name').textContent = currentScenario.bio.name;
    document.getElementById('bio-img-svg').innerHTML = currentScenario.bio.svg.icon;
    document.getElementById('bio-intro').textContent = currentScenario.bio.intro;

    const bulletsUl = document.getElementById('bio-bullets');
    bulletsUl.innerHTML = '';
    currentScenario.bio.bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.textContent = bullet;
        bulletsUl.appendChild(li);
    });

    showScenarioPart('scenario-bio');

    const continueButton = document.getElementById('continue-button');
    continueButton.textContent = 'Continue';
    continueButton.disabled = false;
    continueButton.onclick = () => advanceFlow();
}

// --- 2. ANALYZE: Show Diagnostic ---
function showDiagnostic() {
    const diagnostic = currentScenario.diagnostic;
    document.getElementById('diagnostic-question').textContent = diagnostic.question;

    const optionsDiv = document.getElementById('diagnostic-options');
    optionsDiv.innerHTML = '';

    diagnostic.options.forEach(option => {
        const button = document.createElement('button');
        button.className = "text-left bg-gray-100 text-gray-700 p-4 rounded-lg hover:bg-gray-200 transition-all text-md font-medium";
        button.textContent = option.text;
        button.onclick = () => checkDiagnostic(option.correct);
        optionsDiv.appendChild(button);
    });

    document.getElementById('diagnostic-feedback').classList.add('hidden');
    document.getElementById('continue-button').disabled = true;
    showScenarioPart('scenario-diagnostic');
}

// --- Helper for Diagnostic Check ---
function checkDiagnostic(isCorrect) {
    const diagnostic = currentScenario.diagnostic;
    const feedbackEl = document.getElementById('diagnostic-feedback');
    const continueButton = document.getElementById('continue-button');

    // Disable all option buttons after a selection is made
    document.querySelectorAll('#diagnostic-options button').forEach(button => {
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
    });

    if (isCorrect) {
        // Correct answer, allow immediate advance
        continueButton.disabled = false;
        continueButton.onclick = () => advanceFlow();
    } else {
        // Incorrect answer, show feedback and allow advance
        feedbackEl.textContent = diagnostic.feedback;
        feedbackEl.classList.remove('hidden');

        continueButton.disabled = false;
        continueButton.textContent = 'Continue';
        continueButton.onclick = () => advanceFlow();
    }
}

// --- 3. DESIGN: Show Introduction ---
function showIntroduction() {
    document.getElementById('intro-title').textContent = currentScenario.intro.title;
    document.getElementById('intro-text').innerHTML = currentScenario.intro.text; // Use innerHTML for bold tags
    showScenarioPart('scenario-intro');

    const continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.onclick = () => advanceFlow();
}

// --- 4. DEVELOP: Run Dialogue ---
function runDialogue() {
    showScenarioPart('scenario-dialogue');

    dialogueLines = currentScenario.dialogue;
    currentDialogueIndex = 0;
    updateDialogueLine();

    const continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.onclick = () => advanceDialogue();
}

// --- Helper for Advancing Dialogue ---
function advanceDialogue() {
    currentDialogueIndex++;
    if (currentDialogueIndex < dialogueLines.length) {
        updateDialogueLine();
    } else {
        // Dialogue is over, advance to the next main flow step (Assessment)
        advanceFlow();
    }
}

// --- Helper for Updating Dialogue UI ---
function updateDialogueLine() {
    const line = dialogueLines[currentDialogueIndex];
    document.getElementById('dialogue-text').textContent = line.text;
    document.getElementById('speaker-name').textContent = line.speaker;
    setActiveSpeaker(line.speaker.split(' ')[0]);
}

// --- 5. DEVELOP: Show Assessment ---
function showAssessment() {
    const assessment = currentScenario.assessment;
    document.getElementById('assessment-question').textContent = assessment.question;

    const optionsDiv = document.getElementById('assessment-options');
    optionsDiv.innerHTML = '';

    assessment.options.forEach(option => {
        const button = document.createElement('button');
        button.className = "text-left bg-gray-100 text-gray-700 p-4 rounded-lg hover:bg-gray-200 transition-all text-md font-medium";
        button.textContent = option.text;
        button.onclick = () => checkAssessment(option.correct);
        optionsDiv.appendChild(button);
    });

    document.getElementById('assessment-feedback').classList.add('hidden');
    document.getElementById('continue-button').disabled = true;
    showScenarioPart('scenario-assessment');
}

// --- Helper for Checking Assessment ---
function checkAssessment(isCorrect) {
    const assessment = currentScenario.assessment;
    const feedbackEl = document.getElementById('assessment-feedback');

    // Disable all option buttons after a selection is made
    document.querySelectorAll('#assessment-options button').forEach(button => {
        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
    });

    if (isCorrect) {
        // Correct answer, advance to the next flow step (Knowledge Blurb)
        advanceFlow();
    } else {
        feedbackEl.textContent = assessment.feedback;
        feedbackEl.classList.remove('hidden');
        // Do not advance, user must choose the correct answer.
        // Re-enable options for another try.
        document.querySelectorAll('#assessment-options button').forEach(button => {
            button.disabled = false;
            button.classList.remove('opacity-50', 'cursor-not-allowed');
        });
    }
}

// --- 6. DEVELOP: Show Knowledge Blurb ---
function showKnowledgeBlurb() {
    const assessment = currentScenario.assessment;
    document.getElementById('knowledge-feedback').innerHTML = assessment.correctFeedback;
    document.getElementById('knowledge-text').textContent = assessment.knowledge;
    document.getElementById('knowledge-source').textContent = assessment.source;

    showScenarioPart('scenario-knowledge-blurb');

    const continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.onclick = () => advanceFlow();
}

// --- 7. DEVELOP: Show Reflection ---
function showReflection() {
    document.getElementById('reflection-text').textContent = currentScenario.reflection;
    showScenarioPart('scenario-reflection');

    const continueButton = document.getElementById('continue-button');
    continueButton.disabled = false;
    continueButton.onclick = () => advanceFlow();
}

// --- 8. END: Show End Screen ---
function showEndScreen() {
    showScenarioPart('scenario-end');
    document.getElementById('continue-button').disabled = true;
}
