const predictions = [
  {
    uuid: {
      characterName: "Jax",
      predictedRole: "Rushdown",
      confirmed: "No",
      region: "Runeterra",
      description:
        "Runeterra's greatest weapons master, Jax is the only survivor of the Kohari—champions sworn to the defense of Icathia. But when the Void was unleashed against the Shuriman empire's Ascended Host, Icathia was destroyed, leaving Jax without a home or purpose. He gathered the “last light of Icathia”, a symbol of his hope to one day defeat the Void, and now travels the world, searching for warriors strong enough to face the coming darkness by his side.",
      portrait:
        "https://masteringruneterra.com/wp-content/uploads/2022/09/Jax-level-2.webp",
    },
  },
  {
    uuid: {
      characterName: "Jinx",
      predictedRole: "Zoner",
      confirmed: "Yes",
      region: "PNZ",
      description:
        "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
      portrait:
        "https://staticg.sportskeeda.com/editor/2021/11/1cabf-16374729388237-1920.jpg",
    },
  },
  {
    uuid: {
      characterName: "Darius",
      predictedRole: "Grappler",
      confirmed: "Yes",
      region: "Noxus",
      description:
        "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened leader. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the commander of the Trifarian Legion can expect no mercy.",
      portrait:
        "https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2021/11/Capture-15-1024x562.png",
    },
  },
  {
    uuid: {
      characterName: "Samira",
      predictedRole: "Rushdown",
      confirmed: "No",
      region: "Noxus",
      description:
        "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on dangerous missions of the highest caliber. Wielding black-powder pistols and a custom-engineered blade, Samira thrives in life-or-death circumstances, eliminating any who stand in her way with flash and flair.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Yasuo",
      predictedRole: "Shoto",
      confirmed: "No",
      region: "Ionia",
      description:
        "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self-defense. In time, his master’s true killer was revealed, and his brother mysteriously returned from death, yet Yasuo still could not forgive himself for all he had done. Now, he wanders the world with only the wind to guide his blade.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Illaoi",
      predictedRole: "Grappler",
      confirmed: "Yes",
      region: "Bilgewater",
      description:
        "Illaoi’s powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes’ spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
      portrait:
        "https://www.riotgames.com/darkroom/1120/f06c5c1432706e3bee16b0c806dcad86:2a072be4d73aa8a1724e097146656620/illaoi-2.png",
    },
  },
  {
    uuid: {
      characterName: "Bard",
      predictedRole: "Joke",
      confirmed: "No",
      region: "Runeterra",
      description:
        "A traveler from beyond the stars, Bard is an agent of serendipity who strives to maintain the harmony between creation, and the cold indifference of what lies beyond it. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good… in his own odd way.",
      portrait:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc5f908c957931468/60ee0b9bb403be64e662778e/bard_clean_up.jpg",
    },
  },
  {
    uuid: {
      characterName: "Katarina",
      predictedRole: "Rushdown",
      confirmed: "Yes",
      region: "Noxus",
      description:
        "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Gangplank",
      predictedRole: "Zoner",
      confirmed: "No",
      region: "Bilgewater",
      description:
        "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see Bilgewater bathed in blood once more before letting someone else take it—and now with pistol, cutlass, and barrels of gunpowder, he is determined to reclaim what he has lost.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Udyr",
      predictedRole: "Stance-Swapper",
      confirmed: "No",
      region: "Freljord",
      description:
        "The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance within, so that his mind does not get lost amidst others, but he also seeks balance without—for the Freljord's mystical landscape can only thrive with the growth that comes from conflict and struggle, and Udyr knows that sacrifices must be made to keep peaceful stagnance at bay.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Neeko",
      predictedRole: "Mimic",
      confirmed: "No",
      region: "Ixtal",
      description:
        "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be, but those who intend to do her harm will soon witness her true colors revealed, and feel the full power of her primordial spirit magic unleashed upon them.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Azir",
      predictedRole: "Zoner",
      confirmed: "No",
      region: "Shurima",
      description:
        "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
      portrait:
        "https://media.tenor.com/PdiceHCmaloAAAAd/azir-default-dance.gif",
    },
  },
  {
    uuid: {
      characterName: "Gnar",
      predictedRole: "Stance-Swapper",
      confirmed: "No",
      region: "Bandle",
      description:
        "Gnar is an excitable yordle whose playful antics can erupt into a toddler’s outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang... or an uprooted tree.",
      portrait:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
    },
  },
  {
    uuid: {
      characterName: "Fiora",
      predictedRole: "Rushdown",
      confirmed: "No",
      region: "Demacia",
      description:
        "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and political cunning as she is for the speed of her rapier. Born to the noble Laurent family in Demacia, Fiora claimed the household from her father in the wake of a scandal that nearly destroyed them—now she is dedicated to restoring the Laurents to their rightful place among the great and good of the kingdom.",
      portrait:
        "https://www.wallpapers13.com/wp-content/uploads/2017/05/League-of-Legends-Classic-Fiora-Splash-Art-Artwork-HD-Wallpaper-3840x2160.jpg",
    },
  },
  {
    uuid: {
      characterName: "Ahri",
      predictedRole: "Rushdown",
      confirmed: "Yes",
      region: "Ionia",
      description:
        "Innately connected to the magic of the spirit realm, Ahri is a mysterious fox-like vastaya in search of her place in the world. Having become a somewhat reluctant and empathetic predator since entering mortal society, she prefers to manipulate her prey’s emotions before partaking of their life essence—receiving flashes of memory and insight from each soul she consumes.",
      portrait:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1597/15971658/3909902-rxa_projectl.jpg",
    },
  },
  {
    uuid: {
      characterName: "Pantheon",
      predictedRole: "Shoto",
      confirmed: "No",
      region: "Targon",
      description:
        "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn resilience that goes along with it. Atreus now opposes the divine as Pantheon reborn, his unbreakable will fueling the fallen Aspect’s weapons on the field of battle.",
      portrait:
        "https://w0.peakpx.com/wallpaper/829/959/HD-wallpaper-video-game-league-of-legends-aatrox-league-of-legends-pantheon-league-of-legends.jpg",
    },
  },
];
console.log(predictions);

export { predictions };
