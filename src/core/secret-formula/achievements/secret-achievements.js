export const secretAchievements = [
  {
    id: 11,
    name: "The first one's always free?",
    description: "Click on this Achievement 10 times."
  },
  {
    id: 12,
    name: "Just in case",
    get description() { return `Export save ${formatInt(100)} times without refreshing.`; }
  },
  {
    id: 13,
    name: "It pays to have respect",
    description: "Pay respects."
  },
  {
    id: 14,
    name: "So am I",
    description: "Become an ass eater."
  },
  {
    id: 15,
    name: "Do a backward barrel roll!",
    description: "Do a backward barrel roll.",
  },
  {
    id: 16,
    name: "Do you enjoy pain?",
    get description() {
      return `Use a "painful" notation for ${formatInt(5)} real-time hours
      after doing an Eternity.`;
    },
    checkRequirement: () => AchievementTimers.pain
      .check(PlayerProgress.eternityUnlocked() && Notations.current.isPainful, 18000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 17,
    name: "30 Lives",
    get description() {
      return `Input "the konami code".`;
    }
  },
  {
    id: 18,
    name: "Do you feel lucky? Well do ya punk?",
    get description() {
      return `You have a ${formatInt(1)}/${formatInt(10)} chance of getting this achievement every ${formatInt(5)} hours.`;
    }
  },
  {
    id: 21,
    name: "No free Time Theorems for you",
    description: "Try to purchase Time Study 12."
  },
  {
    id: 22,
    name: "Deeper fried",
    get description() { return `Buy ${formatInt(1e5)} Antimatter Galaxies in total while using emoji notation while Dilated.`; },
    checkRequirement: () => player.requirementChecks.permanent.emojiGalaxies >= 1e5,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 23,
    name: "I hope you've learned your lesson",
    description: "Go to jail.",
    checkRequirement: false,//change when we add jail
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 24,
    name: "Never gonna give you up",
    description: "Get rickrolled."
  },
  {
    id: 25,
    name: "Shhh... It's a secret",
    description: "Discover THE SECRET THEME."
  },
  {
    id: 26,
    name: "You're really a failure",
    get description() {
      return `Fail Time Dilation ${formatInt(10)} times without refreshing.
      What are you doing with your life...`;
    },
    /*checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED*/ //Fix this soon
  },
  {
    id: 27,
    name: "It's not called matter dimensions is it?",
    description: "Get TRUE INFINITE matter.",
    checkRequirement: () => Currency.matter.gte(Decimal.MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "Double nice.",
    description: "Don't act like you don't know what you did."
  },
  {
    id: 31,
    name: "You should download some more RAM",
    get description() { return `Set your update rate to ${formatInt(200)}ms for ${formatInt(5)} real-time hours.`; },
    checkRequirement: () => AchievementTimers.RAM.check(player.options.updateRate === 200, 18000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 32,
    name: "Less than or equal to 0.001",
    get description() {
      return `Have the sums of your best Normal/Infinity Challenges be less than or equal to ${format(0.001, 3, 3)} seconds.`;
    },
    checkRequirement: () =>
      player.challenge.normal.bestTimes.sum() <= 1 &&
      player.challenge.infinity.bestTimes.sum() <= 1,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "A sound financial decision",
    description: "Buy this Secret Achievement."
  },
  {
    id: 34,
    name: "You do know how these work, right?",
    description: "Respec with an empty Time Study Tree."
  },
  {
    id: 35,
    name: "Should we tell them about buy max...",
    get description() { return `Buy single Tickspeed upgrades ${formatInt(1e5)} times in a single Eternity.`; },
    checkRequirement: () => player.requirementChecks.eternity.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "You missed the update and have nothing to show for it",
    get description() { return `See nothing happen while you were away for more than ${formatInt(5)} real-time hours.`; }
  },
  {
    id: 37,
    name: "You followed the instructions",
    description: "Follow instructions."//Hold off again
  },
  {
    id: 38,
    name: "Knife's edge",
    description: "Try to Hard Reset the game."
  },
  {
    id: 41,
    name: "That dimension... DOES exist?",
    description: "Purchase the 9th dimension."//Add this later
  },
  {
    id: 42,
    name: "SHAME ON ME",
    description: "Try to use EC12 to slow down time."
  },
  {
    id: 43,
    name: "Noise",
    description: "Make a lot of noise."
  },
  {
    id: 44,
    name: "Are you statisfied now?",
    get description() { return `Stare intently at the statistics tab for ${formatInt(5)} real-time hours.`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 18000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "Help me",
    get description() { return `Use the ALL Notation for ${formatInt(5)} real-time hours.`; },
    checkRequirement: () => AchievementTimers.ALL.check(player.options.notation === "ALL", 18000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 46,
    name: "A rainy day",
    get description() { return `Be in jail for ${formatInt(24)} real-time hours.`; }//Add with jail
  },
  {
    id: 47,
    name: "ALT+",
    description: "Hide every tab."
  },
  {
    id: 48,
    name: "Wrath of Supersonic Seven",
    description: "Summon the Wrath of Supersonic Seven." //iykyk it's that thing with the credits
  },
];
