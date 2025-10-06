const { useState, useEffect } = React;
const { Sword, Award } = Lucide;

// Player card component
const PlayerCard = ({ rank, player, region, badges }) => (
  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg p-4 mb-3 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-[1.02]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        {/* Rank */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {rank}
        </div>

        {/* Player Avatar */}
        <div className="w-14 h-14 bg-slate-600 rounded-lg overflow-hidden border-2 border-slate-500">
          <img
            src={`https://minotar.net/avatar/${player.name}/64`}
            alt={player.name}
            className="w-full h-full"
            onError={(e) => (e.target.src = "https://via.placeholder.com/64/4a5568/ffffff?text=?")}
          />
        </div>

        {/* Player Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold text-lg">{player.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            {player.rank === "grandmaster" && (
              <span className="flex items-center gap-1 text-yellow-400 text-sm">
                <Award className="w-4 h-4" />
                <span className="font-medium">Combat Grandmaster</span>
              </span>
            )}
            {player.rank === "master" && (
              <span className="flex items-center gap-1 text-blue-400 text-sm">
                <Award className="w-4 h-4" />
                <span className="font-medium">Combat Master</span>
              </span>
            )}
            {player.rank === "ace" && (
              <span className="flex items-center gap-1 text-pink-400 text-sm">
                <Award className="w-4 h-4" />
                <span className="font-medium">Combat Ace</span>
              </span>
            )}
            <span className="text-slate-400 text-sm">({player.points} points)</span>
          </div>
        </div>

        {/* Region Badge */}
        <div
          className={`px-3 py-1 rounded font-bold text-sm ${
            region === "EU" ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {region}
        </div>
      </div>

      {/* Skill Badges */}
      <div className="flex gap-2 ml-4">
        {badges.map((badge, i) => (
          <div key={i} className="relative group">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                badge.tier === "HT1"
                  ? "bg-yellow-600"
                  : badge.tier === "HT2"
                  ? "bg-orange-600"
                  : badge.tier === "HT3"
                  ? "bg-orange-700"
                  : badge.tier === "LT1"
                  ? "bg-purple-600"
                  : badge.tier === "LT2"
                  ? "bg-slate-600"
                  : badge.tier === "LT3"
                  ? "bg-orange-800"
                  : "bg-slate-700"
              } border-2 border-slate-500/30 transition-transform hover:scale-110`}
            >
              <img src={badge.icon} alt={badge.type} className="w-7 h-7" />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {badge.tier}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Animated background grid
const GridBackground = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setOffset((prev) => (prev + 0.5) % 50), 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="w-full h-full pattern-grid"
        style={{ transform: `translate(${offset}px, ${offset}px)` }}
      >
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(71,85,105,0.3)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

// Main App
function App() {
  const players = [
    {
      rank: 1,
      name: "Marlowww",
      playerRank: "grandmaster",
      points: 405,
      region: "NA",
      badges: [
        { type: "sword", tier: "HT1", icon: "https://mctiers.com/tier_icons/sword.svg" },
        { type: "axe", tier: "HT1", icon: "https://mctiers.com/tier_icons/axe.png" },
        { type: "vanilla", tier: "HT1", icon: "https://mctiers.com/tier_icons/vanilla.svg" },
        { type: "pot", tier: "LT1", icon: "https://mctiers.com/tier_icons/pot.svg" },
        { type: "uhc", tier: "LT1", icon: "https://mctiers.com/tier_icons/uhc.svg" },
        { type: "smp", tier: "LT1", icon: "https://mctiers.com/tier_icons/smp.svg" },
        { type: "mace", tier: "LT1", icon: "https://mctiers.com/tier_icons/mace.svg" },
        { type: "nethop", tier: "LT1", icon: "https://mctiers.com/tier_icons/nethop.svg" },
      ],
    },
    {
      rank: 2,
      name: "ItzRealMe",
      playerRank: "master",
      points: 330,
      region: "NA",
      badges: [
        { type: "uhc", tier: "HT1", icon: "https://mctiers.com/tier_icons/uhc.svg" },
        { type: "sword", tier: "HT1", icon: "https://mctiers.com/tier_icons/sword.svg" },
        { type: "vanilla", tier: "HT1", icon: "https://mctiers.com/tier_icons/vanilla.svg" },
        { type: "pot", tier: "HT1", icon: "https://mctiers.com/tier_icons/pot.svg" },
        { type: "axe", tier: "HT2", icon: "https://mctiers.com/tier_icons/axe.png" },
        { type: "mace", tier: "LT2", icon: "https://mctiers.com/tier_icons/mace.svg" },
        { type: "smp", tier: "LT2", icon: "https://mctiers.com/tier_icons/smp.svg" },
        { type: "nethop", tier: "LT2", icon: "https://mctiers.com/tier_icons/nethop.svg" },
      ],
    },
    {
      rank: 3,
      name: "Swight",
      playerRank: "master",
      points: 260,
      region: "NA",
      badges: [
        { type: "pot", tier: "HT3", icon: "https://mctiers.com/tier_icons/pot.svg" },
        { type: "sword", tier: "LT1", icon: "https://mctiers.com/tier_icons/sword.svg" },
        { type: "axe", tier: "LT2", icon: "https://mctiers.com/tier_icons/axe.png" },
        { type: "mace", tier: "LT2", icon: "https://mctiers.com/tier_icons/mace.svg" },
        { type: "uhc", tier: "HT3", icon: "https://mctiers.com/tier_icons/uhc.svg" },
        { type: "smp", tier: "HT3", icon: "https://mctiers.com/tier_icons/smp.svg" },
        { type: "vanilla", tier: "HT1", icon: "https://mctiers.com/tier_icons/vanilla.svg" },
        { type: "nethop", tier: "LT2", icon: "https://mctiers.com/tier_icons/nethop.svg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <GridBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sword className="w-12 h-12 text-orange-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Combat Tierlist
            </h1>
            <Sword className="w-12 h-12 text-orange-500 scale-x-[-1]" />
          </div>
          <p className="text-slate-400 text-lg">Top Minecraft PvP Players Worldwide</p>
        </div>

        <div className="space-y-3">
          {players.map((player) => (
            <PlayerCard
              key={player.rank}
              rank={player.rank}
              player={{ name: player.name, rank: player.playerRank, points: player.points }}
              region={player.region}
              badges={player.badges}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Rankings updated in real-time • Based on competitive performance</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
