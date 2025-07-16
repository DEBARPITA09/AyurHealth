document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startQuizBtn = document.getElementById('startQuizBtn');
    const doshaQuizSection = document.getElementById('dosha-quiz');
    const quizResultSection = document.getElementById('quiz-result');
    const homeSection = document.getElementById('home');
    const dietSection = document.getElementById('diet');
    const remediesSection = document.getElementById('remedies');
    const yogaSection = document.getElementById('yoga');
    const quizQuestionElement = document.getElementById('quiz-question');
    const quizOptionsElement = document.getElementById('quiz-options');
    const nextQuestionBtn = document.getElementById('next-question');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressBar = document.querySelector('.progress-bar');
    const resultContent = document.getElementById('result-content');
    const retakeQuizBtn = document.getElementById('retake-quiz');
    const dietContent = document.getElementById('diet-content');
    const remediesContent = document.getElementById('remedies-content');
    const yogaContent = document.getElementById('yoga-content');
    const dailyTipText = document.getElementById('daily-tip-text');
    const newTipBtn = document.getElementById('new-tip-btn');

    // Quiz Data
    const questions = [
        {
            question: "What best describes your body frame?",
            options: [
                "Thin, light, find it hard to gain weight",
                "Medium build, well-proportioned",
                "Heavy, solid, gain weight easily"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your skin typically?",
            options: [
                "Dry, rough, cracks easily",
                "Oily, prone to rashes/acne",
                "Thick, oily, smooth, cool"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your hair?",
            options: [
                "Dry, curly, thin",
                "Fine, straight, premature graying",
                "Thick, oily, wavy"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your appetite?",
            options: [
                "Irregular, sometimes forget to eat",
                "Strong, get irritable if I miss a meal",
                "Steady, can skip meals easily"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How do you handle weather changes?",
            options: [
                "Dislike cold, prefer warmth",
                "Dislike heat, prefer cool",
                "Dislike dampness, prefer warm/dry"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your sleep?",
            options: [
                "Light, easily disturbed",
                "Moderate, wake up occasionally",
                "Deep, hard to wake up"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your memory?",
            options: [
                "Quick to learn, quick to forget",
                "Sharp, precise",
                "Slow to learn, never forgets"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How do you typically make decisions?",
            options: [
                "Quickly, but change my mind often",
                "Decisively, based on facts",
                "Slowly, after much consideration"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How is your energy level during the day?",
            options: [
                "Bursts of energy, then fatigue",
                "Steady energy throughout the day",
                "Slow starter, energy builds"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        },
        {
            question: "How do you typically react under stress?",
            options: [
                "Worry, feel anxious",
                "Become irritable, frustrated",
                "Withdraw, avoid confrontation"
            ],
            vata: 0,
            pitta: 1,
            kapha: 2
        }
    ];

    // Ayurvedic Data
    const doshaInfo = {
        vata: {
            name: "Vata",
            description: "Vata is characterized by the elements of air and space. People with a Vata constitution tend to be creative, energetic, and lively when in balance. When out of balance, they may experience anxiety, dry skin, constipation, and difficulty focusing.",
            diet: [
                "Favor warm, cooked, moist foods",
                "Eat at regular times",
                "Include healthy fats like ghee and olive oil",
                "Choose sweet, sour, and salty tastes",
                "Avoid cold, raw foods and excessive caffeine"
            ],
            remedies: [
                "Ashwagandha for stress and energy",
                "Triphala for digestion",
                "Brahmi for mental clarity",
                "Warm sesame oil massage",
                "Ginger tea to improve digestion"
            ],
            yoga: [
                "Gentle, grounding poses",
                "Slow sun salutations",
                "Forward bends",
                "Seated poses with focus on breath",
                "Avoid excessive movement or jumping"
            ]
        },
        pitta: {
            name: "Pitta",
            description: "Pitta is characterized by the elements of fire and water. Pitta types tend to be intelligent, goal-oriented, and passionate when in balance. When out of balance, they may experience anger, inflammation, heartburn, and skin rashes.",
            diet: [
                "Favor cool, refreshing foods",
                "Eat in a peaceful environment",
                "Include sweet, bitter, and astringent tastes",
                "Drink plenty of water",
                "Avoid spicy, oily, fried foods and alcohol"
            ],
            remedies: [
                "Aloe vera juice for cooling",
                "Shatavari for hormonal balance",
                "Coriander and fennel tea for digestion",
                "Coconut oil massage",
                "Rose water for skin irritation"
            ],
            yoga: [
                "Moon salutations",
                "Gentle twists",
                "Forward bends",
                "Cooling breathing techniques (Sheetali)",
                "Avoid excessive heat or competitive practice"
            ]
        },
        kapha: {
            name: "Kapha",
            description: "Kapha is characterized by the elements of earth and water. Kapha types tend to be calm, loving, and patient when in balance. When out of balance, they may experience weight gain, sluggishness, congestion, and attachment.",
            diet: [
                "Favor light, warm, dry foods",
                "Eat smaller portions",
                "Include pungent, bitter, and astringent tastes",
                "Drink warm ginger tea",
                "Avoid dairy, sweets, and excessive fats"
            ],
            remedies: [
                "Ginger and honey for energy",
                "Trikatu for digestion",
                "Tulsi (holy basil) for immunity",
                "Dry brushing before shower",
                "Eucalyptus oil for congestion"
            ],
            yoga: [
                "Energetic, heating sequences",
                "Backbends",
                "Inversions",
                "Strong standing poses",
                "Avoid slow, repetitive routines"
            ]
        }
    };

    const dailyTips = [
        "Start your day with a glass of warm water with lemon to stimulate digestion.",
        "Practice oil pulling with coconut oil for oral health and detoxification.",
        "Eat your largest meal at noon when digestive fire is strongest.",
        "Take a short walk after meals to aid digestion.",
        "Go to bed before 10pm for optimal rest and rejuvenation.",
        "Massage your feet with warm sesame oil before bed for better sleep.",
        "Drink herbal teas like ginger, cumin, or fennel to support digestion.",
        "Practice mindful eating by chewing each bite 20-30 times.",
        "Spend time in nature daily to ground your energy.",
        "Practice 5-10 minutes of deep breathing (pranayama) each morning."
    ];

    // Quiz Variables
    let currentQuestionIndex = 0;
    let selectedOptions = [];
    let doshaScores = { vata: 0, pitta: 0, kapha: 0 };

    // Initialize the app
    function init() {
        totalQuestionsElement.textContent = questions.length;
        showRandomTip();
    }

    // Show a random daily tip
    function showRandomTip() {
        const randomIndex = Math.floor(Math.random() * dailyTips.length);
        dailyTipText.textContent = dailyTips[randomIndex];
    }

    // Start the quiz
    function startQuiz() {
        homeSection.classList.add('hidden');
        doshaQuizSection.classList.remove('hidden');
        showQuestion();
    }

    // Display the current question
    function showQuestion() {
        const question = questions[currentQuestionIndex];
        quizQuestionElement.textContent = question.question;
        quizOptionsElement.innerHTML = '';
        
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        updateProgressBar();
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('quiz-option');
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            optionElement.addEventListener('click', selectOption);
            quizOptionsElement.appendChild(optionElement);
        });
    }

    // Update the progress bar
    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Handle option selection
    function selectOption(e) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => option.classList.remove('selected'));
        e.target.classList.add('selected');
        nextQuestionBtn.disabled = false;
    }

    // Move to the next question
    function nextQuestion() {
        const selectedOption = document.querySelector('.quiz-option.selected');
        if (!selectedOption) return;
        
        const question = questions[currentQuestionIndex];
        const optionIndex = parseInt(selectedOption.dataset.index);
        
        // Update scores based on selected option
        if (optionIndex === question.vata) doshaScores.vata++;
        if (optionIndex === question.pitta) doshaScores.pitta++;
        if (optionIndex === question.kapha) doshaScores.kapha++;
        
        selectedOptions.push(optionIndex);
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            nextQuestionBtn.disabled = true;
        } else {
            showResult();
        }
    }

    // Show the quiz result
    function showResult() {
        doshaQuizSection.classList.add('hidden');
        quizResultSection.classList.remove('hidden');
        
        // Determine primary dosha
        let primaryDosha = 'vata';
        let maxScore = doshaScores.vata;
        
        if (doshaScores.pitta > maxScore) {
            primaryDosha = 'pitta';
            maxScore = doshaScores.pitta;
        }
        
        if (doshaScores.kapha > maxScore) {
            primaryDosha = 'kapha';
        }
        
        // Display result
        const result = doshaInfo[primaryDosha];
        resultContent.innerHTML = `
            <div class="dosha-result ${primaryDosha}-result">
                <h3>Your Primary Dosha: ${result.name}</h3>
                <div class="dosha-description">${result.description}</div>
            </div>
        `;
        
        // Show related sections
        showDietRecommendations(primaryDosha);
        showHerbalRemedies(primaryDosha);
        showYogaPractices(primaryDosha);
    }

    // Show diet recommendations
    function showDietRecommendations(dosha) {
        dietSection.classList.remove('hidden');
        const info = doshaInfo[dosha];
        
        let html = `<h3>Diet for ${info.name} Types</h3><ul>`;
        info.diet.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        
        dietContent.innerHTML = html;
    }

    // Show herbal remedies
    function showHerbalRemedies(dosha) {
        remediesSection.classList.remove('hidden');
        const info = doshaInfo[dosha];
        
        let html = `<h3>Herbal Remedies for ${info.name} Types</h3><ul>`;
        info.remedies.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        
        remediesContent.innerHTML = html;
    }

    // Show yoga practices
    function showYogaPractices(dosha) {
        yogaSection.classList.remove('hidden');
        const info = doshaInfo[dosha];
        
        let html = `<h3>Yoga for ${info.name} Types</h3><ul>`;
        info.yoga.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        
        yogaContent.innerHTML = html;
    }

    // Reset the quiz
    function resetQuiz() {
        currentQuestionIndex = 0;
        selectedOptions = [];
        doshaScores = { vata: 0, pitta: 0, kapha: 0 };
        
        quizResultSection.classList.add('hidden');
        homeSection.classList.remove('hidden');
    }

    // Event Listeners
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    retakeQuizBtn.addEventListener('click', resetQuiz);
    newTipBtn.addEventListener('click', showRandomTip);

    // Initialize the app
    init();
});