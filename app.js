
        console.log("app.js loaded");
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
                    char1: { id: "char-1", alt: "Laura (87)", svg: `<path d="M50,150 C25,150 25,120 25,120 C25,90 40,80 50,80 C60,80 75,90 75,120 C75,120 75,150 50,150 Z" fill="#E0E7FF" /><circle cx="50" cy="50" r="20" fill="#E0E7FF" /><path d="M40,50 a5,5 0 1,1 20,0" fill="none" stroke="#4B5563" stroke-width="2" />` },
                    char2: { id: "char-2", alt: "Pharmacist", svg: `<path d="M50,150 C25,150 25,120 25,120 C25,90 40,80 50,80 C60,80 75,90 75,120 C75,120 75,150 50,150 Z" fill="#C7D2FE" /><circle cx="50" cy="50" r="20" fill="#C7D2FE" /><path d="M40,50 a5,5 0 1,1 20,0" fill="none" stroke="#4B5563" stroke-width="2" />` }
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
                    char1: { id: "char-1", alt: "Ana (76)", svg: `<path d="M50,150 C25,150 25,120 25,120 C25,90 40,80 50,80 C60,80 75,90 75,120 C75,120 75,150 50,150 Z" fill="#FECACA" /><circle cx="50" cy="50" r="20" fill="#FECACA" /><path d="M40,50 a5,5 0 1,1 20,0" fill="none" stroke="#7F1D1D" stroke-width="2" />` },
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
            },
            'john': {
                title: "John's Grocery Trip",
                archetype: "The Stoic Provider (Role: Learner)",
                focus: "Physical Limitations & Help-Seeking",
                quest: {
                    title: "Quest: The Unreachable Item",
                    objective: "Recognize the internal conflict between independence and the need for assistance.",
                },
                bio: {
                    name: "John (78)",
                    svg: {
                        bg: "url(#grad-john)",
                        icon: `<rect width="24" height="24" rx="8" fill="#cce7f0"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round'/><circle cx="12" cy="7" r="4" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
                    },
                    intro: "You are about to step into the shoes of John (78).",
                    bullets: [
                        "Former construction worker.",
                        "Proud of his self-reliance.",
                        "Lives with his daughter and her family.",
                        "Has arthritis in his shoulders and knees, making reaching and bending difficult."
                    ]
                },
                diagnostic: {
                    question: "Myth or Fact: Falls are a normal part of aging and can't be prevented.",
                    options: [
                        { text: "Myth", correct: true },
                        { text: "Fact", correct: false }
                    ],
                    feedback: "This is a common misconception. While the risk of falls increases with age, many falls can be prevented through exercise, home modifications, and regular health check-ups.",
                },
                intro: {
                    title: "Scene One: The Grocery Store",
                    text: "You are John. Your daughter has asked you to pick up a few things from the grocery store. You're happy to help, but your arthritis is bothering you today. **This scene focuses on the internal conflict between independence and seeking help.**"
                },
                scene: {
                    char1: { id: "char-1", alt: "John (78)", svg: `<path d="M50,150 C25,150 25,120 25,120 C25,90 40,80 50,80 C60,80 75,90 75,120 C75,120 75,150 50,150 Z" fill="#D1FAE5" /><circle cx="50" cy="50" r="20" fill="#D1FAE5" /><path d="M40,50 a5,5 0 1,1 20,0" fill="none" stroke="#065F46" stroke-width="2" />` },
                    char2: { id: "char-2", alt: "Stock Clerk", svg: `<path d="M50,150 C25,150 25,120 25,120 C25,90 40,80 50,80 C60,80 75,90 75,120 C75,120 75,150 50,150 Z" fill="#FEF3C7" /><circle cx="50" cy="50" r="20" fill="#FEF3C7" /><path d="M40,50 a5,5 0 1,1 20,0" fill="none" stroke="#92400E" stroke-width="2" />` }
                },
                dialogue: [
                    { speaker: "Narrator", text: "You're in the cereal aisle. Your granddaughter's favorite brand is on the top shelf." },
                    { speaker: "John", text: "(To himself) Darn it. Why do they always put the sugary stuff so high?" },
                    { speaker: "Narrator", text: "You try to reach for it, but a sharp pain shoots through your shoulder. You try to stand on your toes, but your knees ache." },
                    { speaker: "Narrator", text: "A young stock clerk is nearby, organizing shelves. He hasn't noticed you." },
                    { speaker: "John", text: "(To himself) I can get it. I just need to try again. I'm not helpless." },
                    { speaker: "Narrator", text: "You take a deep breath and try to reach again, but the pain is too much. You sigh in frustration." },
                    { speaker: "Stock Clerk", text: "(Walking over) Excuse me, sir, can I help you with that?" },
                    { speaker: "John", text: "(Waving him off) I've got it. Just stretching." },
                    { speaker: "Narrator", text: "The clerk hesitates, then nods and walks away. You feel a mix of relief and annoyance. You stare at the cereal box, defeated." }
                ],
                assessment: {
                    question: "Why did John refuse help from the stock clerk?",
                    options: [
                        { text: "He was angry at the clerk for interrupting him.", correct: false },
                        { text: "He was determined to get the cereal himself, even if it hurt.", correct: false },
                        { text: "He felt embarrassed and didn't want to admit he needed help.", correct: true }
                    ],
                    feedback: "That's a possible interpretation, but consider his internal thoughts. Try again.",
                    correctFeedback: "<b>That's right.</b> He likely felt embarrassed and didn't want to appear 'helpless.'",
                    knowledge: "For many older adults, especially those who have been self-reliant their whole lives, asking for help can feel like a loss of independence. This can lead to them taking unnecessary risks or avoiding situations where they might need assistance.",
                    source: "(Concept: Physical Limitations & Help-Seeking)"
                },
                reflection: "Think about a time you were hesitant to ask for help. What were your reasons? How does John's experience compare?"
            }
        };

        // ======================================================
        // SIMULATION ENGINE
        // ======================================================

        // --- Global State ---
        let currentScenario = null;
        let dialogueLines = [];
        let currentDialogueIndex = 0;
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

            // 2. Load Bio
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

            // 3. Setup Continue Button for Bio -> Diagnostic
            const continueButton = document.getElementById('continue-button');
            continueButton.textContent = 'Continue';
            continueButton.disabled = false;
            continueButton.onclick = () => showDiagnostic();
        }

        // --- Show Diagnostic ---
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

        // --- Check Diagnostic ---
        function checkDiagnostic(isCorrect) {
            const diagnostic = currentScenario.diagnostic;
            const feedbackEl = document.getElementById('diagnostic-feedback');
            const continueButton = document.getElementById('continue-button');

            if (isCorrect) {
                // Correct answer, proceed to Intro
                document.getElementById('intro-title').textContent = currentScenario.intro.title;
                document.getElementById('intro-text').textContent = currentScenario.intro.text;
                showScenarioPart('scenario-intro');

                continueButton.disabled = false;
                continueButton.onclick = () => runDialogue();

            } else {
                // Incorrect answer, show feedback and allow advance
                feedbackEl.textContent = diagnostic.feedback;
                feedbackEl.classList.remove('hidden');

                continueButton.disabled = false;
                continueButton.textContent = 'Continue to Introduction';
                continueButton.onclick = () => {
                    document.getElementById('intro-title').textContent = currentScenario.intro.title;
                    document.getElementById('intro-text').textContent = currentScenario.intro.text;
                    showScenarioPart('scenario-intro');
                    continueButton.textContent = 'Continue'; // Reset button text
                    continueButton.onclick = () => runDialogue();
                };
            }
        }

        // --- Run Dialogue ---
        function runDialogue() {
            showScenarioPart('scenario-dialogue');

            dialogueLines = currentScenario.dialogue;
            currentDialogueIndex = 0;
            updateDialogueLine();

            const continueButton = document.getElementById('continue-button');
            continueButton.onclick = () => advanceDialogue();
            continueButton.disabled = false;
        }

        // --- Advance Dialogue ---
        function advanceDialogue() {
            currentDialogueIndex++;
            if (currentDialogueIndex < dialogueLines.length) {
                updateDialogueLine();
            } else {
                showAssessment();
            }
        }

        // --- Update Dialogue UI Helper ---
        function updateDialogueLine() {
            const line = dialogueLines[currentDialogueIndex];
            document.getElementById('dialogue-text').textContent = line.text;
            document.getElementById('speaker-name').textContent = line.speaker;
            setActiveSpeaker(line.speaker.split(' ')[0]);
        }

        // --- Show Assessment ---
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

        // --- Check Assessment ---
        function checkAssessment(isCorrect) {
            const assessment = currentScenario.assessment;
            const feedbackEl = document.getElementById('assessment-feedback');

            if (isCorrect) {
                document.getElementById('knowledge-feedback').innerHTML = assessment.correctFeedback;
                document.getElementById('knowledge-text').textContent = assessment.knowledge;
                document.getElementById('knowledge-source').textContent = assessment.source;

                showScenarioPart('scenario-knowledge-blurb');

                const continueButton = document.getElementById('continue-button');
                continueButton.disabled = false;
                continueButton.onclick = () => showReflection();
            } else {
                feedbackEl.textContent = assessment.feedback;
                feedbackEl.classList.remove('hidden');
            }
        }

        // --- Show Reflection ---
        function showReflection() {
            document.getElementById('reflection-text').textContent = currentScenario.reflection;
            showScenarioPart('scenario-reflection');

            const continueButton = document.getElementById('continue-button');
            continueButton.disabled = false;
            continueButton.onclick = () => showEndScreen();
        }

        // --- Show End Screen ---
        function showEndScreen() {
            showScenarioPart('scenario-end');
            document.getElementById('continue-button').disabled = true;
        }

