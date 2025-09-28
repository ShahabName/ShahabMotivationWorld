// Array of motivational quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown"
    },
    {
        text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    
    // A.P.J. Abdul Kalam Quotes
    {
        text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "You have to dream before your dreams can come true.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "If you want to shine like a sun, first burn like a sun.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Great dreams of great dreamers are always transcended.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Let us sacrifice our today so that our children can have a better tomorrow.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Excellence is a continuous process and not an accident.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "My message, especially to young people is to have courage to think differently, courage to invent, to travel the unexplored path.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "Creativity is the key to success in the future, and primary education is where teachers can bring creativity in children at that level.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        text: "If a country is to be corruption free and become a nation of beautiful minds, I strongly feel there are three key societal members who can make a difference. They are the father, the mother and the teacher.",
        author: "A.P.J. Abdul Kalam"
    },
    
    // Sandeep Maheshwari Quotes
    {
        text: "Success is not just about what you accomplish in your life, it's about what you inspire others to do.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "The biggest problem with this world is that everyone is trying to be someone else.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Success comes from experiences, and experiences come from bad experiences.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Nothing is impossible, the word itself says 'I'm possible'!",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Every moment is a fresh beginning.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Don't tell everyone your plans, instead show them your results.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Aasaan hai means it's easy. But only when you know how to do it.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "Be yourself, everyone else is already taken.",
        author: "Sandeep Maheshwari"
    },
    {
        text: "The best revenge is massive success.",
        author: "Sandeep Maheshwari"
    },
    
    // Shiv Khera Quotes
    {
        text: "Winners don't do different things, they do things differently.",
        author: "Shiv Khera"
    },
    {
        text: "Success is not an accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
        author: "Shiv Khera"
    },
    {
        text: "Your positive action combined with positive thinking results in success.",
        author: "Shiv Khera"
    },
    {
        text: "Circumstances don't make a person; they reveal a person.",
        author: "Shiv Khera"
    },
    {
        text: "The elevator to success is out of order. You'll have to use the stairs... one step at a time.",
        author: "Shiv Khera"
    },
    {
        text: "Champions are made from something deep inside - a desire, a dream, a vision.",
        author: "Shiv Khera"
    },
    {
        text: "Positive thinking is not about expecting the best to happen every time but accepting that whatever happens is the best for this moment.",
        author: "Shiv Khera"
    },
    {
        text: "The only way to improve tomorrow is to know what you did wrong today.",
        author: "Shiv Khera"
    },
    {
        text: "Failure is a detour, not a dead-end street.",
        author: "Shiv Khera"
    },
    {
        text: "Confidence comes not from always being right but from not fearing to be wrong.",
        author: "Shiv Khera"
    },
    {
        text: "Hard work beats talent when talent doesn't work hard.",
        author: "Shiv Khera"
    },
    {
        text: "Success is a process, not an event.",
        author: "Shiv Khera"
    },
    {
        text: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Shiv Khera"
    },
    {
        text: "Integrity is doing the right thing even when no one is watching.",
        author: "Shiv Khera"
    },
    {
        text: "Excellence is not a skill, it's an attitude.",
        author: "Shiv Khera"
    },
    
    // Rumi Quotes
    {
        text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        author: "Rumi"
    },
    {
        text: "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        author: "Rumi"
    },
    {
        text: "The wound is the place where the Light enters you.",
        author: "Rumi"
    },
    {
        text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        author: "Rumi"
    },
    {
        text: "Everything in the universe is within you. Ask all from yourself.",
        author: "Rumi"
    },
    {
        text: "You are not just the drop in the ocean, but the entire ocean in each drop.",
        author: "Rumi"
    },
    {
        text: "Set your life on fire. Seek those who fan your flames.",
        author: "Rumi"
    },
    {
        text: "What you seek is seeking you.",
        author: "Rumi"
    },
    {
        text: "Stop acting so small. You are the universe in ecstatic motion.",
        author: "Rumi"
    },
    {
        text: "As you start to walk on the way, the way appears.",
        author: "Rumi"
    },
    {
        text: "Be like melting snow - wash yourself of yourself.",
        author: "Rumi"
    },
    {
        text: "Raise your words, not voice. It is rain that grows flowers, not thunder.",
        author: "Rumi"
    },
    {
        text: "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting.",
        author: "Rumi"
    },
    {
        text: "Work, but don't be addicted to it.",
        author: "Rumi"
    },
    {
        text: "Ignore those that make you fearful and sad, that degrade you back towards disease and death.",
        author: "Rumi"
    },
    
    // Chanakya Quotes
    {
        text: "A person should not be too honest. Straight trees are cut first and honest people are screwed first.",
        author: "Chanakya"
    },
    {
        text: "Once you start working on something, don't be afraid of failure and don't abandon it. People who work sincerely are the happiest.",
        author: "Chanakya"
    },
    {
        text: "The world's biggest power is the youth and beauty of a woman.",
        author: "Chanakya"
    },
    {
        text: "As soon as the fear approaches near, attack and destroy it.",
        author: "Chanakya"
    },
    {
        text: "Learn from the mistakes of others... you can't live long enough to make them all yourself.",
        author: "Chanakya"
    },
    {
        text: "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.",
        author: "Chanakya"
    },
    {
        text: "Before you start some work, always ask yourself three questions - Why am I doing it, What the results might be and Will I be successful.",
        author: "Chanakya"
    },
    {
        text: "The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.",
        author: "Chanakya"
    },
    {
        text: "God is not present in idols. Your feelings are your god. The soul is your temple.",
        author: "Chanakya"
    },
    {
        text: "There is some self-interest behind every friendship. There is no friendship without self-interests.",
        author: "Chanakya"
    },
    {
        text: "Books are as useful to a stupid person as a mirror is useful to a blind person.",
        author: "Chanakya"
    },
    {
        text: "Test a servant while in the discharge of his duty, a relative in difficulty, a friend in adversity, and a wife in misfortune.",
        author: "Chanakya"
    },
    {
        text: "Never make friends with people who are above or below you in status. Such friendships will never give you any happiness.",
        author: "Chanakya"
    },
    {
        text: "The serpent, the king, the tiger, the stinging wasp, the small child, the dog owned by other people, and the fool: these seven ought not to be awakened from sleep.",
        author: "Chanakya"
    },
    {
        text: "Even if a snake is not poisonous, it should pretend to be venomous.",
        author: "Chanakya"
    },
    
    // Mahatma Gandhi Quotes
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The weak can never forgive. Forgiveness is the attribute of the strong.",
        author: "Mahatma Gandhi"
    },
    {
        text: "In a gentle way, you can shake the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi"
    },
    {
        text: "An eye for an eye only ends up making the whole world blind.",
        author: "Mahatma Gandhi"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "A man is but the product of his thoughts; what he thinks, he becomes.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Whenever you are confronted with an opponent, conquer him with love.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Service which is rendered without joy helps neither the servant nor the served.",
        author: "Mahatma Gandhi"
    },
    
    // Robin Sharma Quotes
    {
        text: "The cave you fear to enter holds the treasure you seek.",
        author: "Robin Sharma"
    },
    {
        text: "Change is hard at first, messy in the middle and gorgeous at the end.",
        author: "Robin Sharma"
    },
    {
        text: "Your 'I CAN' is more important than your IQ.",
        author: "Robin Sharma"
    },
    {
        text: "Small daily improvements over time lead to stunning results.",
        author: "Robin Sharma"
    },
    {
        text: "Leadership is not about a title or a designation. It's about impact, influence and inspiration.",
        author: "Robin Sharma"
    },
    {
        text: "Every master was once a disaster.",
        author: "Robin Sharma"
    },
    {
        text: "The fears we don't face become our limits.",
        author: "Robin Sharma"
    },
    {
        text: "You can't become legendary without having a legendary mindset.",
        author: "Robin Sharma"
    },
    {
        text: "The moment you take responsibility for everything in your life is the moment you can change anything in your life.",
        author: "Robin Sharma"
    },
    {
        text: "Never leave the site of a goal without first taking some form of positive action towards its attainment.",
        author: "Robin Sharma"
    },
    {
        text: "All change is hard at first, messy in the middle, and gorgeous at the end.",
        author: "Robin Sharma"
    },
    {
        text: "The doorway to extraordinary is through ordinary people who choose to do ordinary things in extraordinary ways.",
        author: "Robin Sharma"
    },
    {
        text: "The SwallowDaily method works: Small daily improvements over time create stunning results.",
        author: "Robin Sharma"
    },
    {
        text: "Elite performers do in private what mediocre people won't do. And because of all they do behind the scenes, they get results that average people can't.",
        author: "Robin Sharma"
    },
    {
        text: "Your daily behavior reveals your deepest beliefs.",
        author: "Robin Sharma"
    },
    
    // Deepak Chopra Quotes
    {
        text: "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
        author: "Deepak Chopra"
    },
    {
        text: "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
        author: "Deepak Chopra"
    },
    {
        text: "In the midst of movement and chaos, keep stillness inside of you.",
        author: "Deepak Chopra"
    },
    {
        text: "The less you open your heart to others, the more your heart suffers.",
        author: "Deepak Chopra"
    },
    {
        text: "If you want to reach a state of bliss, then go beyond your ego and the internal dialogue.",
        author: "Deepak Chopra"
    },
    {
        text: "The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years.",
        author: "Deepak Chopra"
    },
    {
        text: "Happiness for a reason is just another form of misery because the reason can be taken away from us at any time.",
        author: "Deepak Chopra"
    },
    {
        text: "You alone are the judge of your worth and your goal is to discover infinite worth in yourself, no matter what anyone else thinks.",
        author: "Deepak Chopra"
    },
    {
        text: "What keeps life fascinating is the constant creativity of the soul.",
        author: "Deepak Chopra"
    },
    {
        text: "Success comes when people act together; failure tends to happen alone.",
        author: "Deepak Chopra"
    },
    {
        text: "The secret to health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live in the present moment wisely and earnestly.",
        author: "Deepak Chopra"
    },
    {
        text: "Whatever relationships you have attracted in your life at this moment, are precisely the ones you need in your life at this moment.",
        author: "Deepak Chopra"
    },
    {
        text: "If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another.",
        author: "Deepak Chopra"
    },
    {
        text: "The most creative act you will ever undertake is the act of creating yourself.",
        author: "Deepak Chopra"
    },
    {
        text: "Walk with those seeking truth... RUN FROM those who think they've found it.",
        author: "Deepak Chopra"
    },
    
    // Tony Robbins Quotes
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "It is in your moments of decision that your destiny is shaped.",
        author: "Tony Robbins"
    },
    {
        text: "Progress equals happiness.",
        author: "Tony Robbins"
    },
    {
        text: "The quality of your life is the quality of your relationships.",
        author: "Tony Robbins"
    },
    {
        text: "Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want.",
        author: "Tony Robbins"
    },
    {
        text: "If you do what you've always done, you'll get what you've always gotten.",
        author: "Tony Robbins"
    },
    {
        text: "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
        author: "Tony Robbins"
    },
    {
        text: "Setting goals is the first step in turning the invisible into the visible.",
        author: "Tony Robbins"
    },
    {
        text: "Take control of your consistent emotions and begin to consciously and deliberately reshape your daily experience of life.",
        author: "Tony Robbins"
    },
    {
        text: "Where focus goes, energy flows.",
        author: "Tony Robbins"
    },
    {
        text: "The quality of your life is determined by the quality of the questions you ask yourself.",
        author: "Tony Robbins"
    },
    {
        text: "Leaders spend 5% of their time on the problem & 95% of their time on the solution.",
        author: "Tony Robbins"
    },
    {
        text: "If you want to be successful, find someone who has achieved the results you want and copy what they do and you'll achieve the same results.",
        author: "Tony Robbins"
    },
    {
        text: "The secret of success is learning how to use pain and pleasure instead of having pain and pleasure use you.",
        author: "Tony Robbins"
    },
    {
        text: "In life you need either inspiration or desperation.",
        author: "Tony Robbins"
    },
    
    // Zig Ziglar Quotes
    {
        text: "You don't have to be great to get started, but you have to get started to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.",
        author: "Zig Ziglar"
    },
    {
        text: "You can have everything in life you want, if you will just help other people get what they want.",
        author: "Zig Ziglar"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "Your attitude, not your aptitude, will determine your altitude.",
        author: "Zig Ziglar"
    },
    {
        text: "Success is not a destination, it's a journey.",
        author: "Zig Ziglar"
    },
    {
        text: "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
        author: "Zig Ziglar"
    },
    {
        text: "If you learn from defeat, you haven't really lost.",
        author: "Zig Ziglar"
    },
    {
        text: "The foundation stones for a balanced success are honesty, character, integrity, faith, love and loyalty.",
        author: "Zig Ziglar"
    },
    {
        text: "Positive thinking will let you do everything better than negative thinking will.",
        author: "Zig Ziglar"
    },
    {
        text: "A goal properly set is halfway reached.",
        author: "Zig Ziglar"
    },
    {
        text: "Expect the best. Prepare for the worst. Capitalize on what comes.",
        author: "Zig Ziglar"
    },
    {
        text: "Remember that failure is an event, not a person.",
        author: "Zig Ziglar"
    },
    {
        text: "You are the only person on earth who can use your ability.",
        author: "Zig Ziglar"
    },
    {
        text: "If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want.",
        author: "Zig Ziglar"
    },
    
    // Jim Rohn Quotes
    {
        text: "You are the average of the five people you spend the most time with.",
        author: "Jim Rohn"
    },
    {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn"
    },
    {
        text: "Don't wish it were easier; wish you were better.",
        author: "Jim Rohn"
    },
    {
        text: "Success is nothing more than a few simple disciplines, practiced every day.",
        author: "Jim Rohn"
    },
    {
        text: "Either you run the day, or the day runs you.",
        author: "Jim Rohn"
    },
    {
        text: "Formal education will make you a living; self-education will make you a fortune.",
        author: "Jim Rohn"
    },
    {
        text: "The few who do are the envy of the many who only watch.",
        author: "Jim Rohn"
    },
    {
        text: "If you don't design your own life plan, chances are you'll fall into someone else's plan.",
        author: "Jim Rohn"
    },
    {
        text: "Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality.",
        author: "Jim Rohn"
    },
    {
        text: "Take care of your body. It's the only place you have to live.",
        author: "Jim Rohn"
    },
    {
        text: "We must all suffer from one of two pains: the pain of discipline or the pain of regret.",
        author: "Jim Rohn"
    },
    {
        text: "Your life does not get better by chance, it gets better by change.",
        author: "Jim Rohn"
    },
    {
        text: "Don't let your learning lead to knowledge. Let your learning lead to action.",
        author: "Jim Rohn"
    },
    {
        text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        text: "Work harder on yourself than you do on your job.",
        author: "Jim Rohn"
    },
    
    // Brian Tracy Quotes
    {
        text: "Successful people are simply those with successful habits.",
        author: "Brian Tracy"
    },
    {
        text: "The key to success is to focus our conscious mind on things we desire not things we fear.",
        author: "Brian Tracy"
    },
    {
        text: "Goals are dreams with deadlines.",
        author: "Brian Tracy"
    },
    {
        text: "You can become an even more excellent person by constantly setting higher and higher standards for yourself.",
        author: "Brian Tracy"
    },
    {
        text: "Every great achievement was once considered impossible.",
        author: "Brian Tracy"
    },
    {
        text: "The greatest gift that you can give to others is the gift of unconditional love and acceptance.",
        author: "Brian Tracy"
    },
    {
        text: "Success is goals, all else is commentary.",
        author: "Brian Tracy"
    },
    {
        text: "Your greatest asset is your earning ability. Your greatest resource is your time.",
        author: "Brian Tracy"
    },
    {
        text: "The more you seek security, the less of it you have. But the more you seek opportunity, the more likely it is that you will achieve the security that you desire.",
        author: "Brian Tracy"
    },
    {
        text: "If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.",
        author: "Brian Tracy"
    },
    {
        text: "The ability to concentrate single-mindedly on your most important task, to do it well and to finish it completely, is the key to great success.",
        author: "Brian Tracy"
    },
    {
        text: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
        author: "Brian Tracy"
    },
    {
        text: "Just as your car runs more smoothly and requires less energy to go faster and farther when the wheels are in perfect alignment, you perform better when your thoughts, feelings, emotions, goals, and values are in balance.",
        author: "Brian Tracy"
    },
    {
        text: "The glue that holds all relationships together -- including the relationship between the leader and the led is trust, and trust is based on integrity.",
        author: "Brian Tracy"
    },
    {
        text: "Communication is a skill that you can learn. It's like riding a bicycle or typing. If you're willing to work at it, you can rapidly improve the quality of every part of your life.",
        author: "Brian Tracy"
    },
    
    // Les Brown Quotes
    {
        text: "You have something special. You have GREATNESS within you!",
        author: "Les Brown"
    },
    {
        text: "If you take responsibility for yourself you will develop a hunger to accomplish your dreams.",
        author: "Les Brown"
    },
    {
        text: "It's possible to go on, no matter how impossible it seems.",
        author: "Les Brown"
    },
    {
        text: "You don't have to be great to get started, but you have to get started to be great.",
        author: "Les Brown"
    },
    {
        text: "Champions get up! When they can't, they stand up! When they can't stand up, they stay up! And when they can't stay up, they hang up! But champions never give up!",
        author: "Les Brown"
    },
    {
        text: "Your opinion of yourself becomes your reality.",
        author: "Les Brown"
    },
    {
        text: "Help others achieve their dreams and you will achieve yours.",
        author: "Les Brown"
    },
    {
        text: "You must be willing to do the things today others won't do in order to have the things tomorrow others won't have.",
        author: "Les Brown"
    },
    {
        text: "If you do what is easy, your life will be hard. But if you do what is hard, your life will be easy.",
        author: "Les Brown"
    },
    {
        text: "Shoot for the moon. Even if you miss, you'll land among the stars.",
        author: "Les Brown"
    },
    {
        text: "Most people fail in life not because they aim too high and fail, but because they aim too low and hit.",
        author: "Les Brown"
    },
    {
        text: "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
        author: "Les Brown"
    },
    {
        text: "Life has no limitations, except the ones you make.",
        author: "Les Brown"
    },
    {
        text: "You can't see the picture when you're in the frame.",
        author: "Les Brown"
    },
    {
        text: "Forgive yourself for your faults and your mistakes and move on.",
        author: "Les Brown"
    },
    
    // John C. Maxwell Quotes
    {
        text: "A leader is one who knows the way, goes the way, and shows the way.",
        author: "John C. Maxwell"
    },
    {
        text: "Leadership is not about titles, positions or flowcharts. It is about one life influencing another.",
        author: "John C. Maxwell"
    },
    {
        text: "Change is inevitable. Growth is optional.",
        author: "John C. Maxwell"
    },
    {
        text: "Dreams don't work unless you do.",
        author: "John C. Maxwell"
    },
    {
        text: "The greatest day in your life and mine is when we take total responsibility for our attitudes.",
        author: "John C. Maxwell"
    },
    {
        text: "People may hear your words, but they feel your attitude.",
        author: "John C. Maxwell"
    },
    {
        text: "You'll never change your life until you change something you do daily.",
        author: "John C. Maxwell"
    },
    {
        text: "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
        author: "John C. Maxwell"
    },
    {
        text: "Everything rises and falls on leadership.",
        author: "John C. Maxwell"
    },
    {
        text: "Failed plans should not be interpreted as a failed vision. Visions don't change, they are only refined.",
        author: "John C. Maxwell"
    },
    {
        text: "A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
        author: "John C. Maxwell"
    },
    {
        text: "The difference between average people and achieving people is their perception of and response to failure.",
        author: "John C. Maxwell"
    },
    {
        text: "Leadership is influence - nothing more, nothing less.",
        author: "John C. Maxwell"
    },
    {
        text: "People don't care how much you know until they know how much you care.",
        author: "John C. Maxwell"
    },
    {
        text: "Success is knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
        author: "John C. Maxwell"
    },
    
    // Wayne Dyer Quotes
    {
        text: "Change the way you look at things and the things you look at change.",
        author: "Wayne Dyer"
    },
    {
        text: "You'll see it when you believe it.",
        author: "Wayne Dyer"
    },
    {
        text: "How people treat you is their karma; how you react is yours.",
        author: "Wayne Dyer"
    },
    {
        text: "When you judge another, you do not define them, you define yourself.",
        author: "Wayne Dyer"
    },
    {
        text: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
        author: "Wayne Dyer"
    },
    {
        text: "If you believe it will work out, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author: "Wayne Dyer"
    },
    {
        text: "There is no way to happiness, happiness is the way.",
        author: "Wayne Dyer"
    },
    {
        text: "You cannot be lonely if you like the person you're alone with.",
        author: "Wayne Dyer"
    },
    {
        text: "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
        author: "Wayne Dyer"
    },
    {
        text: "Maxim for life: You get treated in life the way you teach people to treat you.",
        author: "Wayne Dyer"
    },
    {
        text: "Our lives are a sum total of the choices we have made.",
        author: "Wayne Dyer"
    },
    {
        text: "With everything that has happened to you, you can either feel sorry for yourself or treat what has happened as a gift.",
        author: "Wayne Dyer"
    },
    {
        text: "If you change the way you look at things, the things you look at change.",
        author: "Wayne Dyer"
    },
    {
        text: "Doing what you love is the cornerstone of having abundance in your life.",
        author: "Wayne Dyer"
    },
    {
        text: "You are not stuck where you are unless you decide to be.",
        author: "Wayne Dyer"
    },
    
    // Dale Carnegie Quotes
    {
        text: "Don't be afraid to give your best to what seemingly are small jobs. Every time you conquer one it makes you that much stronger.",
        author: "Dale Carnegie"
    },
    {
        text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        author: "Dale Carnegie"
    },
    {
        text: "Success is getting what you want. Happiness is wanting what you get.",
        author: "Dale Carnegie"
    },
    {
        text: "You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.",
        author: "Dale Carnegie"
    },
    {
        text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "Dale Carnegie"
    },
    {
        text: "Remember that a person's name is to that person the sweetest and most important sound in any language.",
        author: "Dale Carnegie"
    },
    {
        text: "The only way to get the best of an argument is to avoid it.",
        author: "Dale Carnegie"
    },
    {
        text: "When we hate our enemies, we are giving them power over us.",
        author: "Dale Carnegie"
    },
    {
        text: "Any fool can criticize, condemn, and complain but it takes character and self control to be understanding and forgiving.",
        author: "Dale Carnegie"
    },
    {
        text: "Inaction breeds doubt and fear. Action breeds confidence and courage.",
        author: "Dale Carnegie"
    },
    {
        text: "Flaming enthusiasm, backed up by horse sense and persistence, is the quality that most frequently makes for success.",
        author: "Dale Carnegie"
    },
    {
        text: "Today is life-the only life you are sure of. Make the most of today.",
        author: "Dale Carnegie"
    },
    {
        text: "People rarely succeed unless they have fun in what they are doing.",
        author: "Dale Carnegie"
    },
    {
        text: "The successful man will profit from his mistakes and try again in a different way.",
        author: "Dale Carnegie"
    },
    {
        text: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
        author: "Dale Carnegie"
    },
    
    // Norman Vincent Peale Quotes
    {
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Shoot for the moon. Even if you miss, you'll land among the stars.",
        author: "Norman Vincent Peale"
    },
    {
        text: "The trouble with most of us is that we would rather be ruined by praise than saved by criticism.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Empty pockets never held anyone back. Only empty heads and empty hearts can do that.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Formulate and stamp indelibly on your mind a mental picture of yourself as succeeding.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Every problem has in it the seeds of its own solution. If you don't have any problems, you don't get any seeds.",
        author: "Norman Vincent Peale"
    },
    {
        text: "If you want things to be different, perhaps the answer is to become different yourself.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Stand up to your obstacles and do something about them. You will find that they haven't half the strength you think they have.",
        author: "Norman Vincent Peale"
    },
    {
        text: "It's always too early to quit.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Throw your heart over the fence and the rest will follow.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Any fact facing us is not as important as our attitude toward it, for that determines our success or failure.",
        author: "Norman Vincent Peale"
    },
    {
        text: "The way to happiness: Keep your heart free from hate, your mind from worry. Live simply, expect little, give much.",
        author: "Norman Vincent Peale"
    },
    {
        text: "Practice hope. As hopefulness becomes a habit, you can achieve a permanently happy spirit.",
        author: "Norman Vincent Peale"
    },
    
    // Stephen Covey Quotes
    {
        text: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        text: "Begin with the end in mind.",
        author: "Stephen Covey"
    },
    {
        text: "Seek first to understand, then to be understood.",
        author: "Stephen Covey"
    },
    {
        text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
        author: "Stephen Covey"
    },
    {
        text: "Live out of your imagination, not your history.",
        author: "Stephen Covey"
    },
    {
        text: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
        author: "Stephen Covey"
    },
    {
        text: "Trust is the glue of life. It's the most essential ingredient in effective communication.",
        author: "Stephen Covey"
    },
    {
        text: "The main thing is to keep the main thing the main thing.",
        author: "Stephen Covey"
    },
    {
        text: "Strength lies in differences, not in similarities.",
        author: "Stephen Covey"
    },
    {
        text: "We see the world, not as it is, but as we are──or, as we are conditioned to see it.",
        author: "Stephen Covey"
    },
    {
        text: "Proactive people focus their efforts on their Circle of Influence.",
        author: "Stephen Covey"
    },
    {
        text: "Effective leadership is putting first things first. Effective management is discipline, carrying it out.",
        author: "Stephen Covey"
    },
    {
        text: "Love is a verb. Love – the feeling – is the fruit of love the verb or our loving actions.",
        author: "Stephen Covey"
    },
    {
        text: "If you want small changes in your life, work on your attitude. But if you want big and primary changes, work on your paradigm.",
        author: "Stephen Covey"
    },
    {
        text: "The ability to subordinate an impulse to a value is the essence of the proactive person.",
        author: "Stephen Covey"
    },
    
    // Walt Disney Quotes
    {
        text: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "It's kind of fun to do the impossible.",
        author: "Walt Disney"
    },
    {
        text: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        text: "The difference between winning and losing is most often not quitting.",
        author: "Walt Disney"
    },
    {
        text: "First, think. Second, believe. Third, dream. And finally, dare.",
        author: "Walt Disney"
    },
    {
        text: "Disneyland is a work of love.",
        author: "Walt Disney"
    },
    {
        text: "Times and conditions change so rapidly that we must keep our aim constantly focused on the future.",
        author: "Walt Disney"
    },
    {
        text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you.",
        author: "Walt Disney"
    },
    {
        text: "I only hope that we don't lose sight of one thing - that it was all started by a mouse.",
        author: "Walt Disney"
    },
    {
        text: "A person should set his goals as early as he can and devote all his energy and talent to getting there.",
        author: "Walt Disney"
    },
    {
        text: "The important thing is the family. If you can keep the family together - and that's the backbone of our whole business, catering to families - that's what we hope to do.",
        author: "Walt Disney"
    },
    {
        text: "It's no secret that we were sticking just about every nickel we had on the chance that people would really be interested in something totally new and unique in the field of entertainment.",
        author: "Walt Disney"
    },
    {
        text: "Crowded classrooms and half-day sessions are a tragic waste of our greatest national resource - the minds of our children.",
        author: "Walt Disney"
    },
    {
        text: "I have been up against tough competition all my life. I wouldn't know how to get along without it.",
        author: "Walt Disney"
    },
    
    // Satya Nadella Quotes
    {
        text: "Our industry does not respect tradition - it only respects innovation.",
        author: "Satya Nadella"
    },
    {
        text: "Don't be a know-it-all; be a learn-it-all.",
        author: "Satya Nadella"
    },
    {
        text: "We are moving from a world where computing power was scarce to a place where it now is almost limitless.",
        author: "Satya Nadella"
    },
    {
        text: "The true scarce commodity is increasingly human attention.",
        author: "Satya Nadella"
    },
    {
        text: "At Microsoft, we're aspiring to have a living, learning culture with a growth mindset.",
        author: "Satya Nadella"
    },
    {
        text: "Ultimately, it's not going to be about man versus machine. It's going to be about man with machines.",
        author: "Satya Nadella"
    },
    {
        text: "Success can cause people to unlearn the habits that made them successful in the first place.",
        author: "Satya Nadella"
    },
    {
        text: "Empathy makes you a better innovator.",
        author: "Satya Nadella"
    },
    {
        text: "Be passionate and bold. Always keep learning. You stop doing useful things if you don't learn.",
        author: "Satya Nadella"
    },
    {
        text: "You renew yourself every day. Sometimes you're successful, sometimes you're not, but it's the average that counts.",
        author: "Satya Nadella"
    },
    {
        text: "The opportunity ahead for Microsoft is vast, but to seize it, we must focus clearly, move faster, and continue to transform.",
        author: "Satya Nadella"
    },
    {
        text: "Leadership is about bringing out the best in people, where everyone feels empowered to do their best work.",
        author: "Satya Nadella"
    },
    {
        text: "We need to be bold and ambitious, and we need to have courage in our convictions.",
        author: "Satya Nadella"
    },
    {
        text: "Every person, organization, and even society reaches a point at which they owe it to themselves to hit refresh.",
        author: "Satya Nadella"
    },
    {
        text: "Longevity in this business is about being able to reinvent yourself or invent the future.",
        author: "Satya Nadella"
    },
    
    // Bob Proctor Quotes
    {
        text: "See yourself living in abundance and you will attract it.",
        author: "Bob Proctor"
    },
    {
        text: "Thoughts become things. If you see it in your mind, you will hold it in your hand.",
        author: "Bob Proctor"
    },
    {
        text: "You are the only problem you will ever have and you are the only solution.",
        author: "Bob Proctor"
    },
    {
        text: "If you can see it in your mind, you can hold it in your hand.",
        author: "Bob Proctor"
    },
    {
        text: "The Subconscious mind can not tell the difference between what's real and what's imagined.",
        author: "Bob Proctor"
    },
    {
        text: "Money is valuable only as long as it is being used; it is meant to be used, enjoyed, and circulated.",
        author: "Bob Proctor"
    },
    {
        text: "Everything you are seeking is seeking you in return.",
        author: "Bob Proctor"
    },
    {
        text: "Persistence is a unique mental strength; a strength that is essential to combat the fierce power of the repeated rejections and numerous other obstacles.",
        author: "Bob Proctor"
    },
    {
        text: "Your outside world is a reflection of your inside world.",
        author: "Bob Proctor"
    },
    {
        text: "Fear and faith have a lot in common. Both of these emotions require that you believe in something that you cannot see.",
        author: "Bob Proctor"
    },
    {
        text: "The only limits in our life are those we impose on ourselves.",
        author: "Bob Proctor"
    },
    {
        text: "Successful people decide how they are going to live; they are not victims of circumstance.",
        author: "Bob Proctor"
    },
    {
        text: "Most people are not going after what they want. Even some of the most serious goal seekers and goal setters, they're going after what they think they can get.",
        author: "Bob Proctor"
    },
    {
        text: "The report card just told me, my teacher, my parents where I was in that particular subject at that particular time. It did not tell me where I could end up.",
        author: "Bob Proctor"
    },
    {
        text: "A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.",
        author: "Bob Proctor"
    },
    
    // Jack Canfield Quotes
    {
        text: "Everything you want is on the other side of fear.",
        author: "Jack Canfield"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Jack Canfield"
    },
    {
        text: "One individual can begin a movement that turns the tide of history.",
        author: "Jack Canfield"
    },
    {
        text: "Don't worry about failures, worry about the chances you miss when you don't even try.",
        author: "Jack Canfield"
    },
    {
        text: "Everything you want also wants you but you have to take action to get it.",
        author: "Jack Canfield"
    },
    {
        text: "If you want to be really successful, and I know you do, then you will have to give up blaming and complaining and take total responsibility for your life.",
        author: "Jack Canfield"
    },
    {
        text: "The formula for success is quite simple: double your rate of failure.",
        author: "Jack Canfield"
    },
    {
        text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Jack Canfield"
    },
    {
        text: "By taking the time to stop and appreciate who you are and what you've achieved - and perhaps learned through a few mistakes.",
        author: "Jack Canfield"
    },
    {
        text: "You only have control over three things in your life - the thoughts you think, the images you visualise, and the actions you take.",
        author: "Jack Canfield"
    },
    {
        text: "Decide what you want. Believe you can have it. Believe you deserve it and believe it's possible for you.",
        author: "Jack Canfield"
    },
    {
        text: "Most everything that you want is just outside your comfort zone.",
        author: "Jack Canfield"
    },
    {
        text: "Practice random acts of kindness and senseless acts of beauty.",
        author: "Jack Canfield"
    },
    {
        text: "If you are not moving closer to what you want in sales (or in life), you probably aren't doing enough asking.",
        author: "Jack Canfield"
    },
    {
        text: "Self-esteem is made up primarily of two things: feeling lovable and feeling capable.",
        author: "Jack Canfield"
    },
    
    // Oprah Winfrey Quotes
    {
        text: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey"
    },
    {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        text: "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
        author: "Oprah Winfrey"
    },
    {
        text: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
        author: "Oprah Winfrey"
    },
    {
        text: "You become what you believe.",
        author: "Oprah Winfrey"
    },
    {
        text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
        author: "Oprah Winfrey"
    },
    {
        text: "Passion is energy. Feel the power that comes from focusing on what excites you.",
        author: "Oprah Winfrey"
    },
    {
        text: "Where there is no struggle, there is no strength.",
        author: "Oprah Winfrey"
    },
    {
        text: "You are responsible for your life. You can't keep blaming somebody else for your dysfunction.",
        author: "Oprah Winfrey"
    },
    {
        text: "Surround yourself only with people who are going to take you higher.",
        author: "Oprah Winfrey"
    },
    {
        text: "Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.",
        author: "Oprah Winfrey"
    },
    {
        text: "Be thankful for what you have; you'll end up having more.",
        author: "Oprah Winfrey"
    },
    {
        text: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        text: "The greatest gift you can give yourself is forgiveness of yourself and others.",
        author: "Oprah Winfrey"
    },
    {
        text: "What I know for sure is that what you give comes back to you.",
        author: "Oprah Winfrey"
    },
    
    // Abraham Lincoln Quotes
    {
        text: "Whatever you are, be a good one.",
        author: "Abraham Lincoln"
    },
    {
        text: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        text: "I am a slow walker, but I never walk back.",
        author: "Abraham Lincoln"
    },
    {
        text: "My great concern is not whether you have failed, but whether you are content with your failure.",
        author: "Abraham Lincoln"
    },
    {
        text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
        author: "Abraham Lincoln"
    },
    {
        text: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
        author: "Abraham Lincoln"
    },
    {
        text: "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
        author: "Abraham Lincoln"
    },
    {
        text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        author: "Abraham Lincoln"
    },
    {
        text: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
        author: "Abraham Lincoln"
    },
    {
        text: "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
        author: "Abraham Lincoln"
    },
    {
        text: "I walk slowly, but I never walk backward.",
        author: "Abraham Lincoln"
    },
    {
        text: "Most folks are as happy as they make up their minds to be.",
        author: "Abraham Lincoln"
    },
    {
        text: "The best thing about the future is that it comes one day at a time.",
        author: "Abraham Lincoln"
    },
    {
        text: "Those who look for the bad in people will surely find it.",
        author: "Abraham Lincoln"
    },
    {
        text: "Democracy is government of the people, by the people, for the people.",
        author: "Abraham Lincoln"
    },
    
    // Additional Vivek Bindra Quotes
    {
        text: "Your comfort zone is your enemy. Step out of it to grow.",
        author: "Vivek Bindra"
    },
    {
        text: "Success is not about luck, it's about preparation meeting opportunity.",
        author: "Vivek Bindra"
    },
    {
        text: "The difference between successful people and others is their morning routine.",
        author: "Vivek Bindra"
    },
    {
        text: "Leadership is not about being popular, it's about being right.",
        author: "Vivek Bindra"
    },
    {
        text: "Your network determines your net worth.",
        author: "Vivek Bindra"
    },
    {
        text: "Don't compete, dominate.",
        author: "Vivek Bindra"
    },
    {
        text: "Business is not just about making money, it's about making a difference.",
        author: "Vivek Bindra"
    },
    {
        text: "If you're not growing, you're dying.",
        author: "Vivek Bindra"
    },
    {
        text: "Invest in yourself, it pays the best interest.",
        author: "Vivek Bindra"
    },
    {
        text: "Your mindset determines your success more than your skill set.",
        author: "Vivek Bindra"
    },
    {
        text: "Champions don't become champions in the ring. They become champions in their training.",
        author: "Vivek Bindra"
    },
    {
        text: "The size of your success is determined by the size of your belief.",
        author: "Vivek Bindra"
    },
    {
        text: "Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't.",
        author: "Vivek Bindra"
    },
    {
        text: "Your past does not equal your future unless you live there.",
        author: "Vivek Bindra"
    },
    {
        text: "Success is 1% inspiration and 99% perspiration.",
        author: "Vivek Bindra"
    },
    
    // Additional Priya Kumar Quotes
    {
        text: "Life begins at the end of your comfort zone.",
        author: "Priya Kumar"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Priya Kumar"
    },
    {
        text: "Your beliefs become your thoughts, your thoughts become your words, your words become your actions.",
        author: "Priya Kumar"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Priya Kumar"
    },
    {
        text: "The power of positive thinking can transform your life completely.",
        author: "Priya Kumar"
    },
    {
        text: "Every setback is a setup for a comeback.",
        author: "Priya Kumar"
    },
    {
        text: "Your attitude determines your altitude in life.",
        author: "Priya Kumar"
    },
    {
        text: "Champions are not made in gyms. Champions are made from something deep inside them.",
        author: "Priya Kumar"
    },
    {
        text: "The greatest revolution of our generation is the discovery that human beings can alter their lives.",
        author: "Priya Kumar"
    },
    {
        text: "Success is not about avoiding failure, it's about learning from it.",
        author: "Priya Kumar"
    },
    {
        text: "Dreams don't have expiry dates. It's never too late to pursue what sets your soul on fire.",
        author: "Priya Kumar"
    },
    {
        text: "The biggest prison people live in is the fear of what other people think.",
        author: "Priya Kumar"
    },
    {
        text: "Your life is your message to the world. Make sure it's inspiring.",
        author: "Priya Kumar"
    },
    {
        text: "Successful people do daily what unsuccessful people do occasionally.",
        author: "Priya Kumar"
    },
    {
        text: "The quality of your life is determined by the quality of questions you ask yourself.",
        author: "Priya Kumar"
    },
    
    // Additional Ujjwal Patni Quotes
    {
        text: "Excellence is not a skill, it's an attitude.",
        author: "Ujjwal Patni"
    },
    {
        text: "Your income is directly related to your personal development.",
        author: "Ujjwal Patni"
    },
    {
        text: "Winners focus on winning, losers focus on winners.",
        author: "Ujjwal Patni"
    },
    {
        text: "The quality of your life is determined by the quality of your habits.",
        author: "Ujjwal Patni"
    },
    {
        text: "Success is not about working hard, it's about working smart.",
        author: "Ujjwal Patni"
    },
    {
        text: "Your biggest competitor is your yesterday's version.",
        author: "Ujjwal Patni"
    },
    {
        text: "Leadership is not a position, it's a decision.",
        author: "Ujjwal Patni"
    },
    {
        text: "The difference between ordinary and extraordinary is that little extra.",
        author: "Ujjwal Patni"
    },
    {
        text: "Success is a journey, not a destination.",
        author: "Ujjwal Patni"
    },
    {
        text: "Your thoughts become things, choose the good ones.",
        author: "Ujjwal Patni"
    },
    {
        text: "People don't buy products, they buy solutions to their problems.",
        author: "Ujjwal Patni"
    },
    {
        text: "The best investment you can make is in yourself.",
        author: "Ujjwal Patni"
    },
    {
        text: "Time is the most valuable thing we have. Invest it wisely.",
        author: "Ujjwal Patni"
    },
    {
        text: "Your reputation is your brand. Protect it at all costs.",
        author: "Ujjwal Patni"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Ujjwal Patni"
    },
    
    // Additional Simerjeet Singh Quotes
    {
        text: "Leadership is about inspiring others to achieve what they never thought possible.",
        author: "Simerjeet Singh"
    },
    {
        text: "Success is not about reaching the top, it's about helping others climb.",
        author: "Simerjeet Singh"
    },
    {
        text: "Your character is your destiny.",
        author: "Simerjeet Singh"
    },
    {
        text: "The best leaders are those who lead by example, not by force.",
        author: "Simerjeet Singh"
    },
    {
        text: "Innovation comes from the courage to challenge the status quo.",
        author: "Simerjeet Singh"
    },
    {
        text: "True leadership is about serving others, not being served.",
        author: "Simerjeet Singh"
    },
    {
        text: "Your ability to communicate determines your ability to succeed.",
        author: "Simerjeet Singh"
    },
    {
        text: "Great leaders don't create followers, they create more leaders.",
        author: "Simerjeet Singh"
    },
    {
        text: "Success without integrity is temporary.",
        author: "Simerjeet Singh"
    },
    {
        text: "The biggest risk is not taking any risk at all.",
        author: "Simerjeet Singh"
    },
    {
        text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
        author: "Simerjeet Singh"
    },
    {
        text: "A leader's job is not to do the work for others, it's to help others figure out how to do it themselves.",
        author: "Simerjeet Singh"
    },
    {
        text: "The most powerful leadership tool you have is your own personal example.",
        author: "Simerjeet Singh"
    },
    {
        text: "Courage is not the absence of fear, but action in spite of it.",
        author: "Simerjeet Singh"
    },
    {
        text: "The greatest leaders are not necessarily the ones who do the greatest things. They are the ones that inspire others to do great things.",
        author: "Simerjeet Singh"
    },
    
    // Additional motivational quotes from various speakers
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "You have been assigned this mountain to show others it can be moved.",
        author: "Mel Robbins"
    },
    {
        text: "Don't wait for opportunity. Create it.",
        author: "George Bernard Shaw"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs"
    },
    {
        text: "Sometimes life hits you in the head with a brick. Don't lose faith.",
        author: "Steve Jobs"
    },
    {
        text: "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
        author: "Steve Jobs"
    },
    {
        text: "Quality is more important than quantity. One home run is much better than two doubles.",
        author: "Steve Jobs"
    },
    {
        text: "The people in the Indian countryside don't use their intellect like we do, they use their intuition instead, and their intuition is far more developed than in the rest of the world.",
        author: "Steve Jobs"
    },
    {
        text: "Being the richest man in the cemetery doesn't matter to me. Going to bed saying we've done something wonderful... that's what matters to me.",
        author: "Steve Jobs"
    },
    {
        text: "I think the things you most regret in life are things you didn't do. What you really regret was never asking that girl to dance.",
        author: "Steve Jobs"
    },
    {
        text: "Details are not details. They make the design.",
        author: "Charles Eames"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        text: "The time is always right to do what is right.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Faith is taking the first step even when you don't see the whole staircase.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Injustice anywhere is a threat to justice everywhere.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr."
    },
    {
        text: "Life's most persistent and urgent question is: 'What are you doing for others?'",
        author: "Martin Luther King Jr."
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to get daily quote (changes daily)
function getDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % quotes.length;
    return quotes[index];
}

// Function to update quote on page
function getNewQuote() {
    const quote = getRandomQuote();
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    
    if (quoteElement && authorElement) {
        // Add animation effect
        quoteElement.style.opacity = '0';
        authorElement.style.opacity = '0';
        
        setTimeout(() => {
            quoteElement.textContent = `"${quote.text}"`;
            authorElement.textContent = `- ${quote.author}`;
            quoteElement.style.opacity = '1';
            authorElement.style.opacity = '1';
        }, 300);
    }
}

// Initialize page with daily quote
document.addEventListener('DOMContentLoaded', function() {
    const quote = getDailyQuote();
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    
    if (quoteElement && authorElement) {
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quotes, getRandomQuote, getDailyQuote };
}