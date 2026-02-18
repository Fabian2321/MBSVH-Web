// Internationalization (i18n) for MBS Venture Hub Website

const translations = {
    de: {
        'nav.home': 'Home',
        'nav.events': 'Upcoming Events',
        'nav.goal': 'Ziel',
        'nav.structure': 'Struktur',
        'nav.learning': 'Lernziele',
        'nav.documentation': 'Dokumentation',
        'nav.roles': 'Rollen',
        'nav.contact': 'Kontakt',
        'hero.title': 'MBS Venture Hub',
        'hero.subtitle': 'Lernen – Analysieren – Pitchen – Startups & Technologie verstehen',
        'hero.description': 'Ein Club für alle, die technologisches Know-how erwerben, Pitching Skills trainieren und innovative Startup-Ideen mit professioneller Methodik analysieren möchten.',
        'hero.learnMore': 'Mehr erfahren',
        'hero.join': 'Mitmachen',
        'goal.title': 'Ziel des Clubs',
        'goal.card1.title': 'Technologisches Know-how',
        'goal.card1.text': 'Erwerben und verstehen, wie Technologie echten Wert für Startups und Märkte schafft',
        'goal.card2.title': 'Pitching Skills trainieren',
        'goal.card2.text': 'Pitch-Fähigkeiten entwickeln und Feedback-Runden nutzen',
        'goal.card3.title': 'Innovative Ideen analysieren',
        'goal.card3.text': 'Verstehen, warum Startups erfolgreich sind oder scheitern',
        'goal.card4.title': 'Globale Perspektive',
        'goal.card4.text': 'Startups aus allen Branchen und Regionen kennenlernen',
        'goal.approach.label': 'Unser Ansatz:',
        'goal.approach.text': 'Lernen – Analysieren – Pitchen – unabhängig und selbstständig, mit professioneller Methodik.',
        'events.title': 'Upcoming Events',
        'events.kickoff.title': 'KickOff Event',
        'events.kickoff.subtitle': 'Prompt-Engineering Competition',
        'events.kickoff.description': 'Starte mit uns in das neue Zeitalter! Lerne Prompt Engineering und zeige deine Skills in unserer Competition.',
        'events.kickoff.date': 'Datum wird bekannt gegeben',
        'events.kickoff.location': 'MBS Campus',
        'structure.title': 'Struktur der Meetings',
        'structure.frequency': 'Alle 2 Wochen',
        'structure.duration': '~1 Stunde',
        'structure.part1.title': 'Tech Deep Dive / Workshop (30 min)',
        'structure.part1.focus.label': 'Fokus:',
        'structure.part1.focus.text': 'Das in der letzten Session gewählte Startup',
        'structure.part1.analysis.label': 'Tiefe Technologie-Analyse:',
        'structure.part1.analysis.text': 'Wie Tech Wert schafft (Impact, Business Model Support, Prozesse)',
        'structure.part1.discussion.label': 'Diskussion:',
        'structure.part1.discussion.text': 'Chancen, Limitationen, Anwendung in verschiedenen Branchen',
        'structure.part1.learning.label': 'Hands-On Learning:',
        'structure.part1.learning.text': 'Interaktiv, praxisorientiert',
        'structure.part1.learning.item1': 'Gemeinsame Erstellung eines Glossars mit Tech-Begriffen, Definitionen und Tools',
        'structure.part1.learning.item2': 'Beispiele aus externen Startup-Pitches',
        'structure.part1.learning.goal.label': 'Ziel:',
        'structure.part1.learning.goal.text': 'Tech-Wissen praktisch verstehen, Anwendungen begreifen, Bibliothek technologischer Konzepte aufbauen',
        'structure.part2.title': 'Startup Pitches (30 min)',
        'structure.part2.startups.label': '3-5 externe Startups',
        'structure.part2.startups.text': 'pro Session',
        'structure.part2.presented': 'Präsentiert von einem oder mehreren Mitgliedern',
        'structure.part2.selection': 'Auswahl durch das Mitglied selbst; Unterstützung durch Präsident/COO bei Bedarf',
        'structure.part2.guidelines.label': 'Pitch Template Guidelines:',
        'structure.part2.guidelines.item1': 'Kerninformationen (Gründung, Produkt, Markt, Business Model)',
        'structure.part2.guidelines.item2': 'Innovation/Unique Selling Proposition',
        'structure.part2.guidelines.item3': 'Tech-Implementierung (kurz – vertieft im Deep Dive)',
        'structure.part2.guidelines.item4': 'Internationale Relevanz/Marktgröße',
        'structure.part2.guidelines.item5': 'Skalierbarkeit/Chancen & Risiken',
        'structure.part2.end.label': 'Ende der Session:',
        'structure.part2.end.text': 'Abstimmung, welches Startup den Deep Dive + Workshop in der nächsten Session erhält',
        'learning.title': 'Lernziele & Outputs pro Meeting',
        'learning.card1.title': 'Tech Deep Dive / Workshop',
        'learning.card1.item1': '✓ Technologie verstehen und wie sie Wert schafft',
        'learning.card1.item2': '✓ Glossar erstellen → Begriffe, Tools, typische Anwendungen',
        'learning.card1.item3': '✓ Diskussion zu Implementierung, Chancen, Risiken',
        'learning.card2.title': 'Startup Pitches',
        'learning.card2.item1': '✓ Pitching Skills trainieren',
        'learning.card2.item2': '✓ Startup-Analyse: Markt, Innovation, Team, Business Model',
        'learning.card2.item3': '✓ Inspiration durch externe, internationale Startups',
        'learning.card3.title': 'Gemeinsame Outputs',
        'learning.card3.item1': '✓ Pitch-Deck-Bibliothek – Sammlung aller präsentierten Startup-Pitches',
        'learning.card3.item2': '✓ Glossar/Tech-Dictionary & Toolkit – Kontinuierlicher Wissensaufbau',
        'learning.card3.item3': '✓ Feedback Loops – Abstimmung → Deep Dive → Lessons Learned',
        'documentation.title': 'Dokumentation',
        'documentation.card1.title': 'Microsoft Teams',
        'documentation.card1.prefix': 'Alles wird in',
        'documentation.card1.strong': 'Microsoft Teams',
        'documentation.card1.text': 'dokumentiert: Pitch Decks, Glossar, Workshops, Learnings. Die Plattform bietet Dokumentenspeicherung, Chats, Diskussionen, Templates, Abstimmungen & Session-Tracking.',
        'documentation.card2.title': 'Was bietet es?',
        'documentation.card2.item1': 'Neue Mitglieder können direkt auf bestehendes Wissen zugreifen',
        'documentation.card2.item2': 'Kombination aus Startup Pitches + Tech-Glossar → umfassende Lernressource',
        'documentation.card2.item3': 'Zentrale Wissensdatenbank für alle Club-Mitglieder',
        'roles.title': 'Rollen & Organisation',
        'roles.president.title': 'Präsident & Founder',
        'roles.president.name': 'Fabian Löffler',
        'roles.president.item1': 'Lead Club',
        'roles.president.item2': 'Moderiert Startup-Auswahl',
        'roles.president.item3': 'Unterstützt Analysen',
        'roles.coo.title': 'COO & Co-Founder',
        'roles.coo.name': 'Alex Lohner-Benson',
        'roles.coo.item1': 'Session-Organisation',
        'roles.coo.item2': 'Assistenz',
        'roles.coo.item3': 'Stellt Templates bereit',
        'roles.members.title': 'Mitglieder',
        'roles.members.item1': 'Bereiten Startup-Pitches vor',
        'roles.members.item2': 'Gestalten Workshops mit',
        'roles.members.item3': 'Erweitern Glossar',
        'roles.members.item4': 'Geben Feedback',
        'contact.title': 'Kontakt & Mitmachen',
        'contact.intro': 'Interessiert am MBS Venture Hub? Wir freuen uns auf neue Mitglieder!',
        'contact.email.label': 'E-Mail',
        'contact.social.title': 'Social Media',
        'contact.social.text': 'Folge uns auf Instagram',
        'footer.rights': 'Alle Rechte vorbehalten.',
        'footer.tagline': 'Lernen – Analysieren – Pitchen'
    },
    en: {
        'nav.home': 'Home',
        'nav.events': 'Upcoming Events',
        'nav.goal': 'Goal',
        'nav.structure': 'Structure',
        'nav.learning': 'Learning Goals',
        'nav.documentation': 'Documentation',
        'nav.roles': 'Roles',
        'nav.contact': 'Contact',
        'hero.title': 'MBS Venture Hub',
        'hero.subtitle': 'Learn – Analyze – Pitch – Understanding Startups & Technology',
        'hero.description': 'A club for everyone who wants to acquire tech know-how, practice pitching skills, and professionally analyze innovative startup ideas.',
        'hero.learnMore': 'Learn More',
        'hero.join': 'Join Us',
        'goal.title': 'Club Goal',
        'goal.card1.title': 'Technological Know-how',
        'goal.card1.text': 'Acquire and understand how technology creates real value for startups and markets',
        'goal.card2.title': 'Train Pitching Skills',
        'goal.card2.text': 'Develop pitch abilities and utilize feedback rounds',
        'goal.card3.title': 'Analyze Innovative Ideas',
        'goal.card3.text': 'Understand why startups succeed or fail',
        'goal.card4.title': 'Global Perspective',
        'goal.card4.text': 'Get to know startups from all industries and regions',
        'goal.approach.label': 'Our Approach:',
        'goal.approach.text': 'Learn – Analyze – Pitch – independently and autonomously, with professional methodology.',
        'events.title': 'Upcoming Events',
        'events.kickoff.title': 'KickOff Event',
        'events.kickoff.subtitle': 'Prompt-Engineering Competition',
        'events.kickoff.description': 'Start the new era with us! Learn Prompt Engineering and showcase your skills in our competition.',
        'events.kickoff.date': 'Date to be announced',
        'events.kickoff.location': 'MBS Campus',
        'structure.title': 'Meeting Structure',
        'structure.frequency': 'Every 2 weeks',
        'structure.duration': '~1 hour',
        'structure.part1.title': 'Tech Deep Dive / Workshop (30 min)',
        'structure.part1.focus.label': 'Focus:',
        'structure.part1.focus.text': 'The startup selected in the last session',
        'structure.part1.analysis.label': 'Deep Technology Analysis:',
        'structure.part1.analysis.text': 'How tech creates value (Impact, Business Model Support, Processes)',
        'structure.part1.discussion.label': 'Discussion:',
        'structure.part1.discussion.text': 'Opportunities, limitations, application in different industries',
        'structure.part1.learning.label': 'Hands-On Learning:',
        'structure.part1.learning.text': 'Interactive, practice-oriented',
        'structure.part1.learning.item1': 'Joint creation of a glossary with tech terms, definitions, and tools',
        'structure.part1.learning.item2': 'Examples from external startup pitches',
        'structure.part1.learning.goal.label': 'Goal:',
        'structure.part1.learning.goal.text': 'Practically understand tech knowledge, comprehend applications, build a library of technological concepts',
        'structure.part2.title': 'Startup Pitches (30 min)',
        'structure.part2.startups.label': '3-5 external startups',
        'structure.part2.startups.text': 'per session',
        'structure.part2.presented': 'Presented by one or more members',
        'structure.part2.selection': 'Selection by the member themselves; support from President/COO if needed',
        'structure.part2.guidelines.label': 'Pitch Template Guidelines:',
        'structure.part2.guidelines.item1': 'Core information (Founding, Product, Market, Business Model)',
        'structure.part2.guidelines.item2': 'Innovation/Unique Selling Proposition',
        'structure.part2.guidelines.item3': 'Tech implementation (brief – deepened in Deep Dive)',
        'structure.part2.guidelines.item4': 'International relevance/Market size',
        'structure.part2.guidelines.item5': 'Scalability/Opportunities & Risks',
        'structure.part2.end.label': 'End of session:',
        'structure.part2.end.text': 'Voting on which startup will receive the Deep Dive + Workshop in the next session',
        'learning.title': 'Learning Goals & Outputs per Meeting',
        'learning.card1.title': 'Tech Deep Dive / Workshop',
        'learning.card1.item1': '✓ Understand technology and how it creates value',
        'learning.card1.item2': '✓ Create glossary → Terms, tools, typical applications',
        'learning.card1.item3': '✓ Discussion on implementation, opportunities, risks',
        'learning.card2.title': 'Startup Pitches',
        'learning.card2.item1': '✓ Train pitching skills',
        'learning.card2.item2': '✓ Startup analysis: Market, innovation, team, business model',
        'learning.card2.item3': '✓ Inspiration through external, international startups',
        'learning.card3.title': 'Common Outputs',
        'learning.card3.item1': '✓ Pitch Deck Library – Collection of all presented startup pitches',
        'learning.card3.item2': '✓ Glossary/Tech-Dictionary & Toolkit – Continuous knowledge building',
        'learning.card3.item3': '✓ Feedback Loops – Voting → Deep Dive → Lessons Learned',
        'documentation.title': 'Documentation',
        'documentation.card1.title': 'Microsoft Teams',
        'documentation.card1.prefix': 'Everything is',
        'documentation.card1.strong': 'Microsoft Teams',
        'documentation.card1.text': 'documented: Pitch Decks, Glossary, Workshops, Learnings. The platform offers document storage, chats, discussions, templates, voting & session tracking.',
        'documentation.card2.title': 'What does it offer?',
        'documentation.card2.item1': 'New members can directly access existing knowledge',
        'documentation.card2.item2': 'Combination of Startup Pitches + Tech Glossary → comprehensive learning resource',
        'documentation.card2.item3': 'Central knowledge database for all club members',
        'roles.title': 'Roles & Organization',
        'roles.president.title': 'President & Founder',
        'roles.president.name': 'Fabian Löffler',
        'roles.president.item1': 'Lead Club',
        'roles.president.item2': 'Moderate startup selection',
        'roles.president.item3': 'Support analyses',
        'roles.coo.title': 'COO & Co-Founder',
        'roles.coo.name': 'Alex Lohner-Benson',
        'roles.coo.item1': 'Session organization',
        'roles.coo.item2': 'Assistance',
        'roles.coo.item3': 'Provide templates',
        'roles.members.title': 'Members',
        'roles.members.item1': 'Prepare startup pitches',
        'roles.members.item2': 'Co-design workshops',
        'roles.members.item3': 'Expand glossary',
        'roles.members.item4': 'Give feedback',
        'contact.title': 'Contact & Join',
        'contact.intro': 'Interested in MBS Venture Hub? We look forward to new members!',
        'contact.email.label': 'Email',
        'contact.social.title': 'Social Media',
        'contact.social.text': 'Follow us on Instagram',
        'footer.rights': 'All rights reserved.',
        'footer.tagline': 'Learn – Analyze – Pitch'
    }
};

let currentLanguage = 'de';

// Function to change language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    const htmlElement = document.getElementById('htmlLang');
    if (htmlElement) {
        htmlElement.setAttribute('lang', lang);
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // For elements with only text content (no HTML children), use textContent
            if (element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                // For elements with HTML children, find and update text nodes
                const textNodes = [];
                const walker = document.createTreeWalker(
                    element,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                let node;
                while (node = walker.nextNode()) {
                    textNodes.push(node);
                }
                // Update first text node if exists
                if (textNodes.length > 0) {
                    textNodes[0].textContent = translations[lang][key];
                    // Remove other text nodes to avoid duplicates
                    for (let i = 1; i < textNodes.length; i++) {
                        textNodes[i].textContent = '';
                    }
                } else {
                    // Fallback: replace entire content
                    element.textContent = translations[lang][key];
                }
            }
        }
    });
    
    // Update language toggle button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'de' ? 'EN' : 'DE';
    }
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
function initLanguage() {
    // Always apply translations on load to ensure latest texts are shown
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    const langToUse = savedLang && translations[savedLang] ? savedLang : 'de';
    
    // Apply translations immediately
    changeLanguage(langToUse);
    
    // Force update after DOM is fully ready
    setTimeout(() => {
        changeLanguage(langToUse);
    }, 50);
    
    // Set up language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'de' ? 'en' : 'de';
            changeLanguage(newLang);
        });
    }
}

// Run immediately and also on DOM ready
initLanguage();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('preferredLanguage') || 'de';
        changeLanguage(savedLang);
    });
}
