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
    description: "Discover a secret theme."
  },
  {
    id: 26,
    name: "You're a failure",
    get description() {
      return `Fail Eternity Challenges ${formatInt(10)} times without refreshing.
      What are you doing with your life...`;
    },
    checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED
  },
  {
    id: 27,
    name: "It's not called matter dimensions is it?",
    description: "Get Infinite matter.",
    checkRequirement: () => Currency.matter.gte(Decimal.NUMBER_MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "Nice.",
    description: "Don't act like you don't know what you did."
  },
  {
    id: 31,
    name: "You should download some more RAM",
    get description() { return `Set your update rate to ${formatInt(200)}ms.`; }
  },
  {
    id: 32,
    name: "Less than or equal to 0.001",
    get description() {
      return `Get a fastest infinity or eternity time of less than or equal to ${format(0.001, 3, 3)} seconds.`;
    },
    checkRequirement: () =>
      Time.bestInfinity.totalMilliseconds <= 1 ||
      Time.bestEternity.totalMilliseconds <= 1,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "A sound financial decision",
    description: "Click on the button to purchase STD coins."
  },
  {
    id: 34,
    name: "You do know how these work, right?",
    description: "Respec with an empty Time Study Tree."
  },
  {
    id: 35,
    name: "Should we tell them about buy max...",
    get description() { return `Buy single Tickspeed upgrades ${formatInt(1e5)} times.`; },
    checkRequirement: () => player.requirementChecks.permanent.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "While you were away... Nothing happened.",
    description: "See nothing happen while you were away."
  },
  {
    id: 37,
    name: "You followed the instructions",
    description: "Follow instructions."
  },
  {
    id: 38,
    name: "Knife's edge",
    description: "Close the Hard Reset modal after typing in the confirmation."
  },
  {
    id: 41,
    name: "That dimension doesn’t exist",
    description: "Try to purchase the 9th dimension."
  },
  {
    id: 42,
    name: "SHAME ON ME",
    description: "Try to use EC12 to speed up time."
  },
  {
    id: 43,
    name: "A cacophonous chorus",
    description: "Have all equipped Glyphs be Music Glyphs.",
    checkRequirement: () => Glyphs.active.length && Glyphs.active.every(x => Glyphs.isMusicGlyph(x)),
    checkEvent: GAME_EVENT.GLYPHS_EQUIPPED_CHANGED
  },
  {
    id: 44,
    name: "Are you statisfied now?",
    get description() { return `Stare intently at the statistics tab for ${formatInt(15)} real-time minutes.`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 900),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "This dragging is dragging on",
    description: "Drag the Perks around for a minute.",
    checkRequirement: () => player.requirementChecks.permanent.perkTreeDragging++ / 100 >= 60
  },
  {
    id: 46,
    name: "For a rainy day",
    description: "Store a day of real time."
  },
  {
    id: 47,
    name: "ALT+",
    description: "Hide every possible tab."
  },
  {
    id: 48,
    name: "Stack overflow",
    description: "Have more Automator errors than lines."
  },
];
