// Dennistoun RPZ Response Website - JavaScript
// Scottish Civic Bold Design System

(function() {
    'use strict';

    // ===================
    // CONFIGURATION
    // ===================

    const CONFIG = {
        pageUrl: window.location.href,
        pageTitle: 'Dennistoun Parking Proposals - Have Your Say'
    };

    // Recipients data
    const RECIPIENTS = {
        council: {
            to: 'Transportprojects@glasgow.gov.uk',
            cc: '',
            label: 'Glasgow City Council'
        },
        councillors: {
            to: 'Transportprojects@glasgow.gov.uk',
            cc: '',
            label: 'Ward Councillors'
        },
        mp: {
            to: 'Transportprojects@glasgow.gov.uk',
            cc: '',
            label: 'MP - Maureen Burke'
        },
        msps: {
            to: 'Transportprojects@glasgow.gov.uk',
            cc: '',
            label: 'MSPs'
        },
        leadership: {
            to: 'Transportprojects@glasgow.gov.uk',
            cc: '',
            label: 'Council Leadership'
        }
    };

    // Email templates
    const TEMPLATES = {
        object: {
            general: {
                name: 'General Objection',
                subject: 'Objection to Dennistoun RPZ Proposals',
                body: `Dear Sir/Madam,

I am writing to formally object to the proposed Restricted Parking Zone (RPZ) in Dennistoun.

As a resident of [YOUR ADDRESS], I have serious concerns about this proposal:

1. The proposed operating hours of 8am to 10pm, 7 days a week, are excessive and will significantly impact residents and their visitors.

2. The annual permit costs of up to £220 represent a substantial additional expense for households, many of whom have no alternative but to own a vehicle.

3. The 3-hour maximum stay for visitors is impractical for family gatherings, tradespeople, and carers who may need to stay longer.

4. I question whether there is genuine demand for these controls, or whether this is primarily a revenue-generating exercise.

I urge the council to reconsider these proposals and engage more meaningfully with residents before proceeding.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            financial: {
                name: 'Financial Concerns',
                subject: 'Objection to Dennistoun RPZ - Cost Concerns',
                body: `Dear Sir/Madam,

I am writing to object to the proposed Restricted Parking Zone in Dennistoun, primarily on financial grounds.

As a resident of [YOUR ADDRESS], the proposed permit costs concern me greatly:

- Annual permits ranging from £80 to £220 based on vehicle emissions will hit many families hard
- Quarterly payment options of £20 to £55 still represent a significant ongoing cost
- Visitor parking charges will discourage family and friends from visiting
- These costs come on top of rising council tax, energy bills, and cost of living

Many Dennistoun residents are on fixed or modest incomes. Adding parking charges of potentially over £200 per year per vehicle is simply unaffordable for many households.

I urge the council to consider the real financial impact on residents before implementing this scheme.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            hours: {
                name: 'Operating Hours Too Long',
                subject: 'Objection to Dennistoun RPZ - Excessive Operating Hours',
                body: `Dear Sir/Madam,

I am writing to object to the proposed Restricted Parking Zone in Dennistoun, specifically regarding the proposed operating hours.

The proposal to operate parking controls from 8am to 10pm, 7 days a week is excessive and disproportionate:

- 14 hours per day, every day of the week, goes far beyond what is necessary to address commuter parking
- Most commuter parking issues occur during standard working hours on weekdays
- Evening and weekend restrictions will impact residents' ability to have visitors
- This is one of the most extensive operating periods of any parking zone in Glasgow

I would support a more proportionate approach, such as Monday-Friday, 9am-5pm, which would address commuter parking while respecting residents' quality of life.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            business: {
                name: 'Impact on Local Business',
                subject: 'Objection to Dennistoun RPZ - Business Impact',
                body: `Dear Sir/Madam,

I am writing to object to the proposed Restricted Parking Zone in Dennistoun and its potential impact on local businesses.

Dennistoun has a thriving local high street and independent business community. The proposed parking controls will:

- Deter customers who cannot find convenient parking or face additional costs
- Impact businesses that rely on customers staying longer than 3 hours
- Make it harder for businesses to receive deliveries during operating hours
- Potentially push customers to out-of-town shopping centres with free parking
- Harm the local economy and community spirit that makes Dennistoun special

I urge the council to consider the economic impact on our local businesses before proceeding.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            alternative: {
                name: 'Suggest Alternatives',
                subject: 'Dennistoun RPZ - Alternative Approaches',
                body: `Dear Sir/Madam,

I am writing regarding the proposed Restricted Parking Zone in Dennistoun. While I understand there may be parking pressures in some areas, I believe there are better solutions than the current proposals.

Alternative approaches the council should consider:

1. Targeted restrictions only on streets with proven parking problems, rather than a blanket zone
2. Shorter operating hours (e.g., 9am-5pm weekdays only) to address commuter parking
3. Free resident permits with charges only for second vehicles
4. Better enforcement of existing yellow line restrictions
5. Investment in public transport alternatives
6. A residents-only evening permit (free) rather than paid permits

I would support proportionate measures that address genuine problems without unfairly penalising residents.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            }
        },
        support: {
            general: {
                name: 'General Support',
                subject: 'Support for Dennistoun RPZ Proposals',
                body: `Dear Sir/Madam,

I am writing to express my support for the proposed Restricted Parking Zone in Dennistoun.

As a resident of [YOUR ADDRESS], I believe parking controls are needed because:

1. Finding parking near my home is increasingly difficult due to commuters and visitors to nearby areas
2. Controlled parking will prioritise spaces for residents and local businesses
3. The scheme will reduce congestion and improve traffic flow
4. Clearer parking arrangements will benefit everyone

I support the council's efforts to manage parking more effectively in our area.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            safety: {
                name: 'Safety Focus',
                subject: 'Support for Dennistoun RPZ - Safety Benefits',
                body: `Dear Sir/Madam,

I am writing to support the proposed Restricted Parking Zone in Dennistoun, particularly for its safety benefits.

The current parking situation creates safety issues:

- Vehicles parking on pavements force pedestrians into the road
- Poor visibility at junctions due to parked cars
- Difficulty for emergency vehicles to access some streets
- Unsafe conditions for cyclists navigating around parked vehicles

The proposed RPZ with one-way systems and proper parking bays will create safer streets for everyone - pedestrians, cyclists, and drivers alike.

I urge the council to proceed with these proposals.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            environmental: {
                name: 'Environmental Benefits',
                subject: 'Support for Dennistoun RPZ - Environmental Reasons',
                body: `Dear Sir/Madam,

I am writing to support the proposed Restricted Parking Zone in Dennistoun for environmental reasons.

This scheme will help reduce car dependency and promote sustainable transport:

- The emissions-based permit pricing encourages lower-emission vehicles
- Reduced commuter parking will encourage public transport use
- Less circling for parking spaces means less pollution
- Car club bays provide access to vehicles without ownership
- EV charging spaces support the transition to electric vehicles

As Glasgow works towards its climate goals, parking controls are an important part of encouraging more sustainable travel choices.

I support these proposals.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            },
            resident: {
                name: 'Resident Priority',
                subject: 'Support for Dennistoun RPZ - Resident Access',
                body: `Dear Sir/Madam,

I am writing to support the proposed Restricted Parking Zone in Dennistoun.

As a long-term resident of [YOUR ADDRESS], I have seen parking become increasingly difficult as our area has grown more popular. Currently:

- Residents often cannot park near their own homes
- Commuters use our streets as free car parks during work hours
- Visitors to nearby attractions take up resident parking
- The situation has been getting worse year by year

The proposed RPZ will finally give residents priority access to parking in their own neighbourhood. While I understand there are costs involved, I believe this is a fair trade-off for being able to park near my home.

I support these proposals.

Yours faithfully,
[YOUR NAME]
[YOUR ADDRESS]`
            }
        }
    };

    // ===================
    // STATE
    // ===================

    let state = {
        position: null,
        recipient: 'council',
        template: null,
        senderName: '',
        senderAddress: '',
        currentStep: 1
    };

    // ===================
    // DOM ELEMENTS
    // ===================

    const elements = {
        // Theme & Accessibility
        themeToggle: document.getElementById('theme-toggle'),
        fontSmall: document.getElementById('font-small'),
        fontMedium: document.getElementById('font-medium'),
        fontLarge: document.getElementById('font-large'),

        // Progress
        progressSteps: document.querySelectorAll('.progress-step'),
        progressLines: document.querySelectorAll('.progress-line'),

        // Steps
        step1: document.getElementById('step-1'),
        step2: document.getElementById('step-2'),
        step3: document.getElementById('step-3'),

        // Position
        positionObject: document.getElementById('position-object'),
        positionSupport: document.getElementById('position-support'),

        // Recipients
        recipientCards: document.querySelectorAll('.recipient-card'),

        // Email Form
        senderName: document.getElementById('sender-name'),
        senderAddress: document.getElementById('sender-address'),
        templateSelect: document.getElementById('template-select'),
        emailTo: document.getElementById('email-to'),
        emailCc: document.getElementById('email-cc'),
        ccRow: document.getElementById('cc-row'),
        emailSubject: document.getElementById('email-subject'),
        emailBody: document.getElementById('email-body'),

        // Actions
        openEmail: document.getElementById('open-email'),
        copyEmail: document.getElementById('copy-email')
    };

    // ===================
    // THEME & ACCESSIBILITY
    // ===================

    function initTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    function initFontSize() {
        const saved = localStorage.getItem('fontSize') || 'medium';
        setFontSize(saved);
    }

    function setFontSize(size) {
        document.documentElement.setAttribute('data-font-size', size);
        localStorage.setItem('fontSize', size);

        document.querySelectorAll('.font-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`font-${size}`).classList.add('active');
    }

    // ===================
    // PROGRESS TRACKING
    // ===================

    function updateProgress(step) {
        state.currentStep = step;

        elements.progressSteps.forEach((el, index) => {
            const stepNum = index + 1;
            el.classList.remove('active', 'completed');

            if (stepNum < step) {
                el.classList.add('completed');
            } else if (stepNum === step) {
                el.classList.add('active');
            }
        });

        elements.progressLines.forEach((line, index) => {
            line.classList.toggle('completed', index < step - 1);
        });
    }

    // ===================
    // POSITION SELECTION
    // ===================

    function selectPosition(position) {
        state.position = position;

        // Update UI
        elements.positionObject.setAttribute('aria-pressed', position === 'object');
        elements.positionSupport.setAttribute('aria-pressed', position === 'support');

        // Show next steps with animation
        elements.step2.classList.remove('hidden');
        elements.step3.classList.remove('hidden');

        // Update progress
        updateProgress(2);

        // Populate templates
        populateTemplates();

        // Select first template
        const firstTemplate = Object.keys(TEMPLATES[position])[0];
        state.template = firstTemplate;
        elements.templateSelect.value = firstTemplate;
        updateEmailContent();

        // Scroll to step 2
        setTimeout(() => {
            elements.step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // ===================
    // RECIPIENT SELECTION
    // ===================

    function selectRecipient(recipient) {
        state.recipient = recipient;

        elements.recipientCards.forEach(card => {
            const isSelected = card.dataset.recipient === recipient;
            card.classList.toggle('active', isSelected);
            card.setAttribute('aria-pressed', isSelected);
        });

        updateEmailAddresses();
        updateProgress(3);

        // Scroll to step 3
        setTimeout(() => {
            elements.step3.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    function updateEmailAddresses() {
        const recipient = RECIPIENTS[state.recipient];
        elements.emailTo.textContent = recipient.to;

        if (recipient.cc) {
            elements.emailCc.textContent = recipient.cc;
            elements.ccRow.style.display = 'flex';
        } else {
            elements.ccRow.style.display = 'none';
        }
    }

    // ===================
    // TEMPLATES
    // ===================

    function populateTemplates() {
        const templates = TEMPLATES[state.position];
        elements.templateSelect.innerHTML = '';

        Object.entries(templates).forEach(([key, template]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = template.name;
            elements.templateSelect.appendChild(option);
        });
    }

    function updateEmailContent() {
        if (!state.position || !state.template) return;

        const template = TEMPLATES[state.position][state.template];
        if (!template) return;

        elements.emailSubject.textContent = template.subject;

        let body = template.body;
        const name = state.senderName || '[YOUR NAME]';
        const address = state.senderAddress || '[YOUR ADDRESS]';

        body = body.replace(/\[YOUR NAME\]/g, name);
        body = body.replace(/\[YOUR ADDRESS\]/g, address);

        elements.emailBody.value = body;
    }

    // ===================
    // EMAIL ACTIONS
    // ===================

    function openEmailClient() {
        const recipient = RECIPIENTS[state.recipient];
        const subject = encodeURIComponent(elements.emailSubject.textContent);
        const body = encodeURIComponent(elements.emailBody.value);

        let mailto = `mailto:${recipient.to}?subject=${subject}&body=${body}`;
        if (recipient.cc) {
            mailto += `&cc=${encodeURIComponent(recipient.cc)}`;
        }

        window.location.href = mailto;
    }

    function copyToClipboard() {
        const text = `To: ${elements.emailTo.textContent}
Subject: ${elements.emailSubject.textContent}

${elements.emailBody.value}`;

        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard');
        }).catch(() => {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('Copied to clipboard');
        });
    }

    // ===================
    // TOAST NOTIFICATIONS
    // ===================

    function showToast(message) {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ===================
    // EVENT LISTENERS
    // ===================

    function initEventListeners() {
        // Theme toggle
        elements.themeToggle.addEventListener('click', toggleTheme);

        // Font size
        elements.fontSmall.addEventListener('click', () => setFontSize('small'));
        elements.fontMedium.addEventListener('click', () => setFontSize('medium'));
        elements.fontLarge.addEventListener('click', () => setFontSize('large'));

        // Position selection
        elements.positionObject.addEventListener('click', () => selectPosition('object'));
        elements.positionSupport.addEventListener('click', () => selectPosition('support'));

        // Keyboard support for position cards
        [elements.positionObject, elements.positionSupport].forEach(card => {
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Recipient selection
        elements.recipientCards.forEach(card => {
            card.addEventListener('click', () => selectRecipient(card.dataset.recipient));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Form inputs
        elements.senderName.addEventListener('input', (e) => {
            state.senderName = e.target.value;
            updateEmailContent();
        });

        elements.senderAddress.addEventListener('input', (e) => {
            state.senderAddress = e.target.value;
            updateEmailContent();
        });

        elements.templateSelect.addEventListener('change', (e) => {
            state.template = e.target.value;
            updateEmailContent();
        });

        // Email actions
        elements.openEmail.addEventListener('click', openEmailClient);
        elements.copyEmail.addEventListener('click', copyToClipboard);
    }

    // ===================
    // INITIALIZATION
    // ===================

    function init() {
        initTheme();
        initFontSize();
        initEventListeners();
        updateEmailAddresses();
        updateProgress(1);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
