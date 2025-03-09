const gameObject = function () {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

const game = gameObject();

// Function to get the number of points a player has scored
function numPointsScored(playerName) {
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null; // Return null if player is not found
}
console.log("Points Scored:", numPointsScored("Alan Anderson"));

// Function to get a player's shoe size
function shoeSize(playerName) {
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}
console.log("Shoe Size:", shoeSize("Alan Anderson"));

// Function to get a team's colors
function teamColors(teamName) {
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null;
}
console.log("Team Colors:", teamColors("Brooklyn Nets"));

// Function to return an array of team names
function teamNames() {
  return [game.home.teamName, game.away.teamName];
}
console.log("Team Names:", teamNames());

// Function to get all jersey numbers for a given team
function playerNumbers(teamName) {
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map((player) => player.number);
    }
  }
  return [];
}
console.log("Player Numbers:", playerNumbers("Brooklyn Nets"));

// Function to get all stats of a given player
function playerStats(playerName) {
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}
console.log("Player Stats:", playerStats("Alan Anderson"));

// Function to get the number of rebounds for the player with the largest shoe size
function bigShoeRebounds() {
  let maxShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      let playerStats = game[team].players[player];
      if (playerStats.shoe > maxShoeSize) {
        maxShoeSize = playerStats.shoe;
        rebounds = playerStats.rebounds;
      }
    }
  }
  return rebounds;
}
console.log("Big Shoe Rebounds:", bigShoeRebounds());

// Function to find the player who scored the most points
function mostPointsScored() {
  let maxPoints = 0;
  let bestPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let points = game[team].players[player].points;
      if (points > maxPoints) {
        maxPoints = points;
        bestPlayer = player;
      }
    }
  }
  return bestPlayer;
}
console.log("Most Points Scored:", mostPointsScored());

// Function to determine which team scored the most points
function winningTeam() {
  let scores = {};

  for (let team in game) {
    scores[team] = Object.values(game[team].players).reduce(
      (sum, player) => sum + player.points,
      0
    );
  }

  return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}
console.log("Winning Team:", winningTeam());

// Function to find the player with the longest name
function playerWithLongestName() {
  let longestName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}
console.log("Player With Longest Name:", playerWithLongestName());

// Function to check if the player with the longest name also has the most steals
function doesLongNameStealATon() {
  let longestName = playerWithLongestName();
  let mostSteals = 0;
  let topStealer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let steals = game[team].players[player].steals;
      if (steals > mostSteals) {
        mostSteals = steals;
        topStealer = player;
      }
    }
  }
  return longestName === topStealer;
}
console.log("Does Long Name Steal a Ton?:", doesLongNameStealATon());
