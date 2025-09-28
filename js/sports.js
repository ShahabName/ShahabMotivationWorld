// Sports page JavaScript functionality

// Sports data with athletes
const sportsData = {
    cricket: [
        {
            name: "Virat Kohli",
            dob: "November 5, 1988",
            location: "Delhi, India",
            bio: "Indian cricketer and former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen of all time, Kohli has scored over 70 international centuries and is the leading run-scorer in T20 internationals. He led India to numerous victories including the 2011 Cricket World Cup as a player. Known for his aggressive batting style, exceptional fitness, and passionate leadership, Kohli has numerous records including being the fastest to reach various run milestones in ODI cricket.",
            quote: "Self-belief and hard work will always earn you success.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg/200px-Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
        },
        {
            name: "MS Dhoni",
            dob: "July 7, 1981",
            location: "Ranchi, India",
            bio: "Former Indian cricketer and captain who led India to victory in the 2007 T20 World Cup, 2011 Cricket World Cup, and 2013 Champions Trophy. Known as 'Captain Cool' for his calm demeanor under pressure, Dhoni is considered one of the greatest wicket-keeper batsmen and captains in cricket history. He holds numerous records including most dismissals by an Indian wicket-keeper and most wins as captain in international cricket. His lightning-fast stumpings and helicopter shot became his trademark.",
            quote: "I never allow myself to be pressured.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mahendra_Singh_Dhoni_Sept_2018_%28cropped%29.jpg/200px-Mahendra_Singh_Dhoni_Sept_2018_%28cropped%29.jpg"
        },
        {
            name: "Sachin Tendulkar",
            dob: "April 24, 1973",
            location: "Mumbai, India",
            bio: "Former Indian cricketer widely regarded as one of the greatest batsmen in the history of cricket. Often referred to as the 'Master Blaster' or 'God of Cricket', Tendulkar holds numerous batting records including most runs in both Test and ODI cricket, most centuries in international cricket (100), and longest international career spanning 24 years. He was the first cricketer to score a double century in ODIs and is the only player to complete more than 30,000 runs in international cricket.",
            quote: "Enjoy the game and chase your dreams.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/200px-Sachin-Tendulkar_%28cropped%29.jpg"
        },
        {
            name: "AB de Villiers",
            dob: "February 17, 1984",
            location: "Pretoria, South Africa",
            bio: "Former South African cricketer widely regarded as one of the greatest batsmen of all time. Known as 'Mr. 360' for his ability to play shots all around the wicket, de Villiers was famous for his innovative stroke play and ability to score runs at an extraordinary pace. He holds the record for the fastest ODI centuries (31 balls) and was known for his exceptional fielding skills. He played 114 Tests, 228 ODIs, and 78 T20Is for South Africa, amassing over 20,000 international runs.",
            quote: "Believe in yourself and back your instincts.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/AB_de_Villiers.jpg/200px-AB_de_Villiers.jpg"
        },
        {
            name: "Joe Root",
            dob: "December 30, 1990",
            location: "Sheffield, England",
            bio: "English cricketer and former captain of the England Test team. Considered one of the finest batsmen of his generation, Root is England's leading Test run-scorer with over 12,000 runs. He has scored 32 Test centuries and is known for his classical batting technique and ability to play long innings. Root has been a key player in England's Test cricket renaissance and has captained England in 64 Test matches. He's also a handy off-spin bowler and excellent fielder.",
            quote: "Hard work beats talent when talent doesn't work hard.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Joe_Root_2023_%28cropped%29.jpg/200px-Joe_Root_2023_%28cropped%29.jpg"
        }
    ],
    football: [
        {
            name: "Lionel Messi",
            dob: "June 24, 1987",
            location: "Rosario, Argentina",
            bio: "Argentine professional footballer widely regarded as one of the greatest players of all time. Messi won a record eight Ballon d'Or awards and led Argentina to victory in the 2022 FIFA World Cup. He spent most of his career at Barcelona, where he won 10 La Liga titles and 4 Champions League titles. Known for his dribbling, vision, and goal-scoring ability, Messi has scored over 800 career goals and provided numerous assists. He currently plays for Inter Miami in MLS.",
            quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
        },
        {
            name: "Cristiano Ronaldo",
            dob: "February 5, 1985",
            location: "Funchal, Portugal",
            bio: "Portuguese professional footballer considered one of the greatest players in football history. Ronaldo has won five Ballon d'Or awards and is the all-time leading goalscorer in football with over 890 official career goals. He has won league titles in England, Spain, and Italy, and led Portugal to victory in the 2016 European Championship and 2019 Nations League. Known for his incredible athleticism, heading ability, and free-kick technique, Ronaldo currently plays for Al Nassr in Saudi Arabia.",
            quote: "Your love makes me strong, your hate makes me unstoppable.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg"
        },
        {
            name: "Pelé",
            dob: "October 23, 1940",
            location: "Três Corações, Brazil",
            bio: "Brazilian football legend and three-time FIFA World Cup winner (1958, 1962, 1970). Widely regarded as one of the greatest footballers of all time, Pelé scored over 1,000 career goals and is the only player to win three World Cups. He spent most of his career with Santos in Brazil and later played for New York Cosmos. Known for his exceptional technical skills, creativity, and goal-scoring ability, Pelé was named FIFA Player of the Century alongside Diego Maradona. He passed away in December 2022.",
            quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/200px-Pele_con_brasil_%28cropped%29.jpg"
        },
        {
            name: "Kylian Mbappé",
            dob: "December 20, 1998",
            location: "Paris, France",
            bio: "French professional footballer who plays for Real Madrid and the France national team. Mbappé became the second teenager after Pelé to score in a World Cup final when France won the 2018 FIFA World Cup. Known for his exceptional pace, dribbling, and clinical finishing, he has won multiple Ligue 1 titles with PSG and numerous individual awards. At just 25, he has already scored over 300 career goals and is considered one of the best players in world football.",
            quote: "I want to inspire people and show them that anything is possible.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kylian_Mbapp%C3%A9_2019.jpg/200px-Kylian_Mbapp%C3%A9_2019.jpg"
        },
        {
            name: "Mohamed Salah",
            dob: "June 15, 1992",
            location: "Nagrig, Egypt",
            bio: "Egyptian professional footballer who plays for Liverpool and captains the Egypt national team. Known as the 'Egyptian King', Salah has won the Premier League, Champions League, and numerous individual awards including the Premier League Golden Boot three times. He holds the record for most goals scored in a 38-game Premier League season (32 goals in 2017-18). Salah is considered one of the best wingers in world football and has scored over 200 goals for Liverpool.",
            quote: "Don't give up. Don't ever give up.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mohamed_Salah_2018.jpg/200px-Mohamed_Salah_2018.jpg"
        }
    ],
    hockey: [
        {
            name: "Dhyan Chand",
            dob: "August 29, 1905",
            location: "Allahabad, India",
            bio: "Indian field hockey player widely regarded as the greatest hockey player of all time. Known as 'The Wizard' for his extraordinary ball control and goal-scoring ability, Dhyan Chand won three Olympic gold medals (1928, 1932, 1936) and scored over 1,000 goals in his career. His birthday, August 29, is celebrated as National Sports Day in India. He was so skilled that opposing teams would sometimes break his hockey stick to check if it had magnets, as the ball seemed glued to it.",
            quote: "Practice like you've never won. Play like you've never lost.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dhyan_Chand_1936.jpg/200px-Dhyan_Chand_1936.jpg"
        },
        {
            name: "Wayne Gretzky",
            dob: "January 26, 1961",
            location: "Brantford, Canada",
            bio: "Canadian former ice hockey player often called 'The Great One' and widely regarded as the greatest hockey player of all time. Gretzky holds numerous NHL records including most career goals (894), assists (1,963), and points (2,857). He won four Stanley Cup championships with the Edmonton Oilers and was awarded the Hart Trophy as league MVP nine times. His jersey number 99 was retired league-wide by the NHL, making him the only player to receive this honor.",
            quote: "You miss 100% of the shots you don't take.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wayne_Gretzky_2006.jpg/200px-Wayne_Gretzky_2006.jpg"
        },
        {
            name: "Uwe Krupp",
            dob: "June 24, 1965",
            location: "Cologne, Germany",
            bio: "German former ice hockey defenseman who became one of Germany's most successful NHL players. Krupp played 729 NHL games and scored the Stanley Cup-winning goal for the Colorado Avalanche in 1996. He represented Germany in multiple World Championships and Olympic Games, serving as team captain. After his playing career, he became a successful coach and was instrumental in developing German ice hockey. He's considered a pioneer who paved the way for future German NHL players.",
            quote: "Success comes from preparation, dedication, and seizing the right moment.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Uwe_Krupp.jpg/200px-Uwe_Krupp.jpg"
        },
        {
            name: "Mohammed Shahid",
            dob: "April 14, 1960",
            location: "Varanasi, India",
            bio: "Indian field hockey forward who was part of the Indian team that won the gold medal at the 1980 Summer Olympics in Moscow. Known for his exceptional dribbling skills and speed, Shahid was considered one of the best forwards in world hockey during the 1980s. He represented India in 143 international matches and scored numerous goals. His playing style was characterized by quick movements and the ability to beat multiple defenders. He was awarded the Arjuna Award in 1980-81.",
            quote: "Hockey is not just a game, it's a passion that flows through your veins.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mohammed_Shahid_Hockey_Player.jpg/200px-Mohammed_Shahid_Hockey_Player.jpg"
        },
        {
            name: "Dhanraj Pillay",
            dob: "July 16, 1968",
            location: "Pune, India",
            bio: "Former Indian field hockey forward and captain, considered one of the greatest field hockey players of all time. Pillay represented India in four Olympic Games (1992, 1996, 2000, 2004) and scored 170 goals in 339 international appearances. Known for his exceptional stick work, speed, and goal-scoring ability, he was the backbone of the Indian hockey team for over a decade. He received the Rajiv Gandhi Khel Ratna Award in 1999-2000 and the Padma Shri in 2000.",
            quote: "Never give up, because you never know if the next try is going to be the one that works.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dhanraj_Pillay.jpg/200px-Dhanraj_Pillay.jpg"
        }
    ],
    tennis: [
        {
            name: "Roger Federer",
            dob: "August 8, 1981",
            location: "Basel, Switzerland",
            bio: "Swiss former professional tennis player who was ranked world No. 1 in singles by the ATP for 310 weeks, including a record 237 consecutive weeks. He won 20 Grand Slam men's singles titles, an all-time record which was later surpassed. Federer is widely regarded as one of the greatest tennis players of all time, known for his exceptional technique, elegant playing style, and sportsmanship.",
            quote: "I fear no one, but respect everyone.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Roger_Federer_%2826065170150%29_%28cropped%29.jpg/200px-Roger_Federer_%2826065170150%29_%28cropped%29.jpg"
        },
        {
            name: "Steffi Graf",
            dob: "June 14, 1969",
            location: "Mannheim, West Germany",
            bio: "German former professional tennis player who was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which ranks second in the Open Era. She is the only tennis player to have won each Grand Slam tournament at least four times. Graf won the Golden Slam in 1988, becoming the only player to win all four Grand Slam tournaments and the Olympic gold medal in the same calendar year.",
            quote: "You can't measure success if you have never failed.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Steffi_Graf_1990.jpg/200px-Steffi_Graf_1990.jpg"
        },
        {
            name: "Sania Mirza",
            dob: "November 15, 1986",
            location: "Mumbai, India",
            bio: "Indian former professional tennis player who was ranked No. 1 in the world in doubles by the WTA. She won six Grand Slam titles in women's doubles and mixed doubles combined. Mirza was the highest-ranked female tennis player ever from India, with a career-high ranking of world No. 27 in singles. She played a crucial role in popularizing tennis in India and inspiring a generation of Indian tennis players.",
            quote: "I want to be remembered as someone who inspired people to follow their dreams.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sania_Mirza_at_the_2010_BNP_Paribas_Open.jpg/200px-Sania_Mirza_at_the_2010_BNP_Paribas_Open.jpg"
        },
        {
            name: "Martina Navratilova",
            dob: "October 18, 1956",
            location: "Prague, Czechoslovakia",
            bio: "Czech-American former professional tennis player who is widely considered among the greatest tennis players of all time. She won 18 Grand Slam singles titles, 31 major women's doubles titles, and 10 major mixed doubles titles, for a combined total of 59 major titles. Navratilova was ranked as the world No. 1 in singles for a total of 332 weeks and in doubles for a record 237 weeks.",
            quote: "The difference between involvement and commitment is like ham and eggs. The chicken is involved; the pig is committed.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Martina_Navratilova_1982.jpg/200px-Martina_Navratilova_1982.jpg"
        },
        {
            name: "Rafael Nadal",
            dob: "June 3, 1986",
            location: "Manacor, Spain",
            bio: "Spanish professional tennis player who has been ranked world No. 1 in singles by the ATP for 209 weeks. He has won 22 Grand Slam men's singles titles, including a record 14 French Open titles. Nadal is known for his incredible mental toughness, exceptional physical fitness, and dominance on clay courts, earning him the nickname 'The King of Clay'. He completed the Career Golden Slam in singles.",
            quote: "You fight, you try your best, and if you lose, you don't have to feel bad about yourself.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg/200px-Rafael_Nadal_10%2C_Aegon_Championships%2C_London%2C_UK_-_Diliff.jpg"
        }
    ],
    chess: [
        {
            name: "Gukesh Dommaraju",
            dob: "May 29, 2006",
            location: "Chennai, India",
            bio: "Indian chess grandmaster who became the youngest World Chess Champion in history at age 18 in December 2024. He achieved this historic feat by defeating Ding Liren in the World Championship match. Gukesh became a grandmaster at the age of 12 years, 7 months, and 17 days, making him the third-youngest grandmaster in history at the time. He has been a key member of the Indian chess team and won the Chess Olympiad gold medal.",
            quote: "Age is just a number when you have the determination and passion for the game.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gukesh_D_2022.jpg/200px-Gukesh_D_2022.jpg"
        },
        {
            name: "Garry Kasparov",
            dob: "April 13, 1963",
            location: "Baku, Azerbaijan",
            bio: "Russian chess grandmaster and former World Chess Champion who is widely considered one of the greatest chess players of all time. Kasparov became the youngest World Champion in 1985 at age 22 and held the title until 1993. He was ranked world No. 1 for 255 months and achieved the highest rating ever recorded at that time (2851). Known for his dynamic and aggressive playing style, Kasparov also famously played matches against IBM's Deep Blue computer. After retiring from chess, he became a political activist and writer.",
            quote: "Chess is mental torture.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Garry_Kasparov_2017.jpg/200px-Garry_Kasparov_2017.jpg"
        },
        {
            name: "Bobby Fischer",
            dob: "March 9, 1943",
            location: "Chicago, USA",
            bio: "American chess grandmaster and the eleventh World Chess Champion from 1972 to 1975. Fischer is widely considered one of the greatest chess players of all time and was known for his deep understanding of chess and perfectionist approach. He became the youngest grandmaster at age 15 and won the World Championship by defeating Boris Spassky in the famous 1972 'Match of the Century' in Reykjavik. His victory ended 24 years of Soviet domination in world chess. Fischer revolutionized chess preparation and popularized the game worldwide.",
            quote: "I prefer to lose a really good game than to win a bad one.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bobby_Fischer_1960_in_Leipzig.jpg/200px-Bobby_Fischer_1960_in_Leipzig.jpg"
        },
        {
            name: "Anatoly Karpov",
            dob: "May 23, 1951",
            location: "Zlatoust, Russia",
            bio: "Russian chess grandmaster and former World Chess Champion who held the title from 1975 to 1985. Karpov is known for his positional playing style and exceptional endgame technique. He won over 160 first-place finishes in tournaments, more than any other player in history. Karpov successfully defended his World Championship title twice and was involved in several legendary matches with Garry Kasparov. He was awarded the title of Grandmaster at age 19 and remained in the world's top 10 for over 30 years.",
            quote: "Chess is everything: art, science, and sport.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Anatoly_Karpov_1980.jpg/200px-Anatoly_Karpov_1980.jpg"
        },
        {
            name: "Viswanathan Anand",
            dob: "December 11, 1969",
            location: "Chennai, India",
            bio: "Indian chess grandmaster and former World Chess Champion who held the title from 2007 to 2013. Known as 'Vishy', Anand became India's first grandmaster and was the first Asian to win the World Chess Championship. He is famous for his rapid playing style and exceptional tactical ability. Anand won the World Championship in all three formats: knockout, tournament, and match play. He was awarded India's highest sporting honor, the Rajiv Gandhi Khel Ratna, and has been instrumental in popularizing chess in India.",
            quote: "In chess you try to do your best, but there are instances where you make mistakes or you try and take risks that you shouldn't.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Viswanathan_Anand_08_14_2005.jpg/200px-Viswanathan_Anand_08_14_2005.jpg"
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