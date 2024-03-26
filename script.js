const affirmations = [
    "You got this!",
    "You'll figure it out...You always do.",
    "You're a smart cookie. ",
    "I believe in you.So stop doubting yourself.",
    "Sucking at something is the first step towards being good at something, and you'll end up becoming the best.",
    "Struggling is part of learning.",
    "Everything has cracks - that's how the light gets in.",
    "Mistakes don't make you less capable, they make you more.",
    "We are all works in progress.",
    "You are a capable human.",
    "You know more than you think.",
    "10x engineers are a myth.",
    "If everything was easy you'd be bored.",
    "I admire you for taking this on.",
    "You're resourceful, smart and clever.",
    "You'll find a way.",
    "I know you'll sort it out.",
    "Struggling means you're learning.",
    "You're doing a great job.",
    "It'll feel magical when it's working.",
    "I'm rooting for you.",
    "Your mind is full of brilliant ideas.",
    "You make a difference in the world by simply existing in it.",
    "You are learning valuable lessons from yourself every day.",
    "You are worthy and deserving of respect, love and honesty.",
    "You know more than you knew yesterday.",
    "You're an inspiration.",
    "Your life is already a miracle of chance waiting for you to shape its destiny.",
    "Your life is about to be incredible.",
    "Nothing is impossible. The word itself says 'I’m possible!'",
    "Failure is just another way to learn how to do something right.",
    "You can do it.",
    "It is not a sprint, it is a marathon. One step at a time.",
    "Success is the progressive realization of a worthy goal.",
    "People with goals succeed because they know where they’re going.",
    "All you need is the plan, the roadmap, and the courage to press on to your destination.",
    "The opposite of courage in our society is not cowardice... it is conformity.",
    "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid.",
    "The past does not equal the future.",
    "The path to success is to take massive, determined action.",
    "It’s what you practice in private that you will be rewarded for in public.",
    "Small progress is still progress.",
    "Don't worry if you find flaws in your past creations, it's because you've evolved.",
    "Starting is the most difficult step - but you can do it.",
    "Don't forget to enjoy the journey.",
    "It's not a mistake, it's a learning opportunity.",
    "Everyone id delulu until it becomes trululu.",
    "Don't forget you're powerful.",
    "All your manifestations are coming to you.",
    "I love how you slay every day!",
    "Look at you making the best of life.",
    "You deserve every bit og the happiness you feel.",
    "Your feelings are valid.",
    "Everyone literally loves you...Like so so much."
  ];
  

function getRandomAffirmation() {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

function getAffirmation() {
    const affirmation = getRandomAffirmation();
    let affirm = document.getElementById("affirmation")
    affirm.innerHTML = affirmation;
}

getAffirmation();