// Sports page JavaScript functionality

// Sports data with athletes
const sportsData = {
    cricket: [
        {
            name: "Virat Kohli",
            dob: "November 5, 1988",
            location: "Delhi, India",
            bio: "Former captain of the Indian cricket team, one of the best batsmen in the world.",
            quote: "Self-belief and hard work will always earn you success.",
            image: "https://via.placeholder.com/200x200/667eea/ffffff?text=VK"
        },
        {
            name: "MS Dhoni",
            dob: "July 7, 1981",
            location: "Ranchi, India",
            bio: "Former Indian cricket captain known for his calm demeanor and finishing abilities.",
            quote: "I never allow myself to be pressured.",
            image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=MSD"
        },
        {
            name: "Sachin Tendulkar",
            dob: "April 24, 1973",
            location: "Mumbai, India",
            bio: "Legendary Indian cricketer, often called the 'God of Cricket'.",
            quote: "Enjoy the game and chase your dreams.",
            image: "https://via.placeholder.com/200x200/f093fb/ffffff?text=ST"
        },
        {
            name: "AB de Villiers",
            dob: "February 17, 1984",
            location: "Pretoria, South Africa",
            bio: "Former South African cricket captain known for his innovative batting.",
            quote: "Believe in yourself and back your instincts.",
            image: "https://via.placeholder.com/200x200/4facfe/ffffff?text=ABD"
        },
        {
            name: "Joe Root",
            dob: "December 30, 1990",
            location: "Sheffield, England",
            bio: "English cricket captain and one of the finest batsmen of his generation.",
            quote: "Hard work beats talent when talent doesn't work hard.",
            image: "https://via.placeholder.com/200x200/fa709a/ffffff?text=JR"
        }
    ],
    football: [
        {
            name: "Lionel Messi",
            dob: "June 24, 1987",
            location: "Rosario, Argentina",
            bio: "Argentine footballer, widely regarded as one of the greatest players of all time.",
            quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
            image: "https://via.placeholder.com/200x200/667eea/ffffff?text=LM"
        },
        {
            name: "Cristiano Ronaldo",
            dob: "February 5, 1985",
            location: "Funchal, Portugal",
            bio: "Portuguese footballer known for his incredible work ethic and goal-scoring ability.",
            quote: "Your love makes me strong, your hate makes me unstoppable.",
            image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=CR7"
        },
        {
            name: "Pelé",
            dob: "October 23, 1940",
            location: "Três Corações, Brazil",
            bio: "Brazilian football legend, three-time World Cup winner.",
            quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.",
            image: "https://via.placeholder.com/200x200/f093fb/ffffff?text=PELE"
        },
        {
            name: "Kylian Mbappé",
            dob: "December 20, 1998",
            location: "Paris, France",
            bio: "French footballer known for his speed and clinical finishing.",
            quote: "I want to inspire people and show them that anything is possible.",
            image: "https://via.placeholder.com/200x200/4facfe/ffffff?text=KM"
        },
        {
            name: "Mohamed Salah",
            dob: "June 15, 1992",
            location: "Nagrig, Egypt",
            bio: "Egyptian footballer known for his pace and goal-scoring prowess.",
            quote: "Don't give up. Don't ever give up.",
            image: "https://via.placeholder.com/200x200/fa709a/ffffff?text=MS"
        }
    ],
    hockey: [
        {
            name: "Dhyan Chand",
            dob: "August 29, 1905",
            location: "Allahabad, India",
            bio: "Indian field hockey player, widely regarded as the greatest hockey player of all time.",
            quote: "Practice like you've never won. Play like you've never lost.",
            image: "https://via.placeholder.com/200x200/667eea/ffffff?text=DC"
        },
        {
            name: "Wayne Gretzky",
            dob: "January 26, 1961",
            location: "Brantford, Canada",
            bio: "Canadian former ice hockey player, often called 'The Great One'.",
            quote: "You miss 100% of the shots you don't take.",
            image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=WG"
        },
        {
            name: "Gordie Howe",
            dob: "March 31, 1928",
            location: "Floral, Canada",
            bio: "Canadian ice hockey player known for his longevity and all-around play.",
            quote: "All hockey players are bilingual. They know English and profanity.",
            image: "https://via.placeholder.com/200x200/f093fb/ffffff?text=GH"
        },
        {
            name: "Maurice Richard",
            dob: "August 4, 1921",
            location: "Montreal, Canada",
            bio: "Canadian ice hockey player, first to score 50 goals in 50 games.",
            quote: "I want to be remembered as someone who gave everything they had.",
            image: "https://via.placeholder.com/200x200/4facfe/ffffff?text=MR"
        },
        {
            name: "Mario Lemieux",
            dob: "October 5, 1965",
            location: "Montreal, Canada",
            bio: "Canadian former ice hockey player known for his size, strength and scoring ability.",
            quote: "Every day you guys look worse and worse. Today you played like tomorrow.",
            image: "https://via.placeholder.com/200x200/fa709a/ffffff?text=ML"
        }
    ],
    chess: [
        {
            name: "Magnus Carlsen",
            dob: "November 30, 1990",
            location: "Tønsberg, Norway",
            bio: "Norwegian chess grandmaster and five-time World Chess Champion.",
            quote: "I am trying to beat the guy sitting across from me and trying to choose the moves that are most unpleasant for him and his position.",
            image: "https://via.placeholder.com/200x200/667eea/ffffff?text=MC"
        },
        {
            name: "Garry Kasparov",
            dob: "April 13, 1963",
            location: "Baku, Azerbaijan",
            bio: "Russian chess grandmaster, former World Chess Champion, and political activist.",
            quote: "Chess is mental torture.",
            image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=GK"
        },
        {
            name: "Bobby Fischer",
            dob: "March 9, 1943",
            location: "Chicago, USA",
            bio: "American chess grandmaster and the eleventh World Chess Champion.",
            quote: "I prefer to lose a really good game than to win a bad one.",
            image: "https://via.placeholder.com/200x200/f093fb/ffffff?text=BF"
        },
        {
            name: "Anatoly Karpov",
            dob: "May 23, 1951",
            location: "Zlatoust, Russia",
            bio: "Russian chess grandmaster and former World Chess Champion.",
            quote: "Chess is everything: art, science, and sport.",
            image: "https://via.placeholder.com/200x200/4facfe/ffffff?text=AK"
        },
        {
            name: "Viswanathan Anand",
            dob: "December 11, 1969",
            location: "Chennai, India",
            bio: "Indian chess grandmaster and former World Chess Champion.",
            quote: "In chess you try to do your best, but there are instances where you make mistakes or you try and take risks that you shouldn't.",
            image: "https://via.placeholder.com/200x200/fa709a/ffffff?text=VA"
        }
    ]
};

// Handle sport selection
function handleSportSelection() {
    const selectedSport = document.getElementById('sportSelect').value;
    const personSection = document.getElementById('personSection');
    const personSelect = document.getElementById('personSelect');
    const othersMessage = document.getElementById('othersMessage');
    const detailsSection = document.getElementById('detailsSection');
    
    // Hide details section
    detailsSection.classList.add('hidden');
    
    if (selectedSport === 'others') {
        // Show others message
        personSection.classList.remove('hidden');
        personSelect.style.display = 'none';
        othersMessage.classList.remove('hidden');
    } else if (selectedSport && sportsData[selectedSport]) {
        // Show person selection
        personSection.classList.remove('hidden');
        personSelect.style.display = 'block';
        othersMessage.classList.add('hidden');
        
        // Populate person dropdown
        personSelect.innerHTML = '<option value="">Select a sports person</option>';
        sportsData[selectedSport].forEach((person, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = person.name;
            personSelect.appendChild(option);
        });
        
        // Add animation
        personSection.style.opacity = '0';
        personSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            personSection.style.transition = 'all 0.5s ease';
            personSection.style.opacity = '1';
            personSection.style.transform = 'translateY(0)';
        }, 100);
    } else {
        personSection.classList.add('hidden');
    }
}

// Handle person selection
function handlePersonSelection() {
    const selectedSport = document.getElementById('sportSelect').value;
    const selectedPersonIndex = document.getElementById('personSelect').value;
    const detailsSection = document.getElementById('detailsSection');
    
    if (selectedPersonIndex !== '' && sportsData[selectedSport]) {
        const person = sportsData[selectedSport][selectedPersonIndex];
        
        // Populate person details
        document.getElementById('personImage').src = person.image;
        document.getElementById('personName').textContent = person.name;
        document.getElementById('sportsName').textContent = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);
        document.getElementById('personDOB').textContent = person.dob;
        document.getElementById('personLocation').textContent = person.location;
        document.getElementById('personBio').textContent = person.bio;
        document.getElementById('personQuote').textContent = `"${person.quote}"`;
        document.getElementById('personQuoteAuthor').textContent = `- ${person.name}`;
        
        // Show details section with animation
        detailsSection.classList.remove('hidden');
        detailsSection.style.opacity = '0';
        detailsSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            detailsSection.style.transition = 'all 0.5s ease';
            detailsSection.style.opacity = '1';
            detailsSection.style.transform = 'translateY(0)';
        }, 100);
        
        // Scroll to details section
        setTimeout(() => {
            detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    } else {
        detailsSection.classList.add('hidden');
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add change listeners
    document.getElementById('sportSelect').addEventListener('change', handleSportSelection);
    document.getElementById('personSelect').addEventListener('change', handlePersonSelection);
    
    // Add hover effects to dropdowns
    const dropdowns = document.querySelectorAll('select');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
        });
        
        dropdown.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});