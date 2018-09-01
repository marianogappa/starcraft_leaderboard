import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LeaderboardRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: 0,
            gamer: "",
            actualGamer: "",
            race: "",
            points: 0,
            wins: 0,
            losses: 0,
        };
    }

    render() {
        return (
          <div className="leaderboard_row">
              <div className="leaderboard_row_rank">{this.props.rank}</div>
              <div className="leaderboard_row_gamer">{this.props.gamer} ({this.props.actualGamer})</div>
              <div className="leaderboard_row_race">{this.props.race}</div>
              <div className="leaderboard_row_points">{this.props.points}</div>
              <div className="leaderboard_row_wins">{this.props.wins}</div>
              <div className="leaderboard_row_losses">{this.props.losses}</div>
          </div>
        );
    }
}

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }

    render() {
        const rows = this.props.data.leaderboard.rows
            .map((r) => <LeaderboardRow rank={r[0]} gamer={r[7]} actualGamer={r[8]} race={r[10]} points={r[3]} wins={r[4]} losses={r[5]}/>);
      return (
        <div className="leaderboard">
            <div className="leaderboard_row">
                <div className="leaderboard_row_rank">Rank</div>
                <div className="leaderboard_row_gamer">Player</div>
                <div className="leaderboard_row_race">Most Played</div>
                <div className="leaderboard_row_points">Points</div>
                <div className="leaderboard_row_wins">Wins</div>
                <div className="leaderboard_row_losses">Losses</div>
            </div>
            {rows}
        </div>
      );
    }
}

// ========================================
const data = {
    "leaderboard": {
      "columns": [
        "rank",
        "last_rank",
        "gateway_id",
        "points",
        "wins",
        "losses",
        "disconnects",
        "toon",
        "battletag",
        "avatar",
        "feature_stat",
        "rating",
        "bucket"
      ],
      "rows": [
        [
          1,
          1,
          30,
          2807,
          122,
          22,
          0,
          "sdafsdfafdsafds",
          "flash",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "terran",
          2807,
          7
        ],
        [
          2,
          2,
          45,
          2709,
          136,
          44,
          0,
          "HoBoxer2",
          "미친고양이",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/53e0d54440d340a416d44c67c50e11c8.png",
          "terran",
          2709,
          7
        ],
        [
          3,
          3,
          30,
          2683,
          83,
          24,
          0,
          "IIIIllIIlIlIll",
          "이제동",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/710ccb4a31799efb20b31115648e3abb.png",
          "zerg",
          2683,
          7
        ],
        [
          4,
          4,
          30,
          2634,
          38,
          2,
          0,
          "zzxxccvvv",
          "뇌없냐재현아",
          "",
          "terran",
          2634,
          7
        ],
        [
          5,
          5,
          30,
          2620,
          329,
          155,
          0,
          "SKTT1_Larva",
          "MIA",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/879b1e7eabfaeda9209cc212afc7fcda.png",
          "zerg",
          2620,
          7
        ],
        [
          6,
          6,
          30,
          2611,
          149,
          65,
          0,
          "Sarin_Rain",
          "Rain",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "protoss",
          2611,
          7
        ],
        [
          7,
          7,
          30,
          2601,
          233,
          170,
          0,
          "angle",
          "묵2",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/584d9c9dba614a34e626f5f81d36d87f.png",
          "protoss",
          2601,
          7
        ],
        [
          8,
          8,
          30,
          2585,
          124,
          55,
          1,
          "E.HAZARD[LMAO]",
          "도로미",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/ca849b3e45c18c8f9640290aff5e2fad.png",
          "terran",
          2585,
          7
        ],
        [
          9,
          9,
          30,
          2582,
          80,
          37,
          1,
          "Stork",
          "Stork",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "protoss",
          2582,
          7
        ],
        [
          10,
          10,
          30,
          2548,
          50,
          15,
          0,
          "MAEswaeggi",
          "매새끼",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/22c9ca774f8298fdf35b4cc2842ed3dc.png",
          "zerg",
          2548,
          7
        ],
        [
          11,
          11,
          30,
          2522,
          69,
          18,
          0,
          "rnake",
          "DJDJ",
          "",
          "zerg",
          2522,
          7
        ],
        [
          12,
          12,
          30,
          2510,
          49,
          10,
          0,
          "IIIIlIlIlllllIl",
          "Last",
          "",
          "terran",
          2510,
          7
        ],
        [
          13,
          13,
          30,
          2509,
          155,
          75,
          0,
          "ProtossSeki",
          "소심한마술사",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/2659f5e1fa9a7d826fecdc1ca33910f1.png",
          "protoss",
          2509,
          7
        ],
        [
          14,
          14,
          30,
          2506,
          210,
          109,
          2,
          "wGm.111",
          "장윤철",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "protoss",
          2506,
          7
        ],
        [
          15,
          15,
          30,
          2504,
          159,
          88,
          0,
          "IIlllIIIlIlIlIl",
          "운좋은호랑이",
          "",
          "terran",
          2504,
          7
        ],
        [
          16,
          16,
          30,
          2503,
          383,
          256,
          2,
          "Gz_pCs",
          "pCs",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/b84eff2be84028f1de98a74377c39ff9.png",
          "zerg",
          2503,
          7
        ],
        [
          17,
          17,
          30,
          2489,
          113,
          45,
          0,
          "930501",
          "톡쏘는엘프",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/8ee0b9e2205bbe101a4250e7d453d701.gif",
          "terran",
          2489,
          7
        ],
        [
          18,
          18,
          30,
          2480,
          87,
          46,
          0,
          "hur0[S.O]",
          "누구게",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/ea4474bdf85c087ea44f8992076cb60a.png",
          "protoss",
          2480,
          7
        ],
        [
          19,
          19,
          30,
          2474,
          101,
          48,
          0,
          "llIllIllIIIllI",
          "jh3697",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "zerg",
          2474,
          7
        ],
        [
          20,
          20,
          30,
          2460,
          140,
          59,
          1,
          "HoBoxer",
          "미친고양이",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/fe3e9f761e2577923acd0192b8a555c8.png",
          "terran",
          2460,
          7
        ],
        [
          21,
          21,
          30,
          2450,
          365,
          266,
          0,
          "s0rry[KaL]",
          "니네니",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/5bad195a6b6ecf09d0b5e2185c0bd7c8.png",
          "terran",
          2450,
          7
        ],
        [
          22,
          22,
          30,
          2449,
          109,
          32,
          0,
          "insung.moo",
          "이야아아아아",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "zerg",
          2449,
          7
        ],
        [
          23,
          23,
          30,
          2449,
          123,
          49,
          3,
          "WhiteSak.",
          "다이아디아",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/24a9b61ce3730406eacb2c048c3b288e.gif",
          "zerg",
          2449,
          7
        ],
        [
          24,
          24,
          30,
          2443,
          56,
          17,
          0,
          "myth.freyja",
          "수샘쓰",
          "https://d8un0y0mnd29o.cloudfront.net/avatar-icons/S1/b84eff2be84028f1de98a74377c39ff9.png",
          "zerg",
          2443,
          7
        ],
        [
          25,
          25,
          30,
          2441,
          125,
          52,
          5,
          "Ever)T(JyJ",
          "정영재",
          "",
          "terran",
          2441,
          7
        ]
      ]
    },
    "playerRank": {
      "rank": "none"
    },
    "totalPages": 0,
    "totalRows": 0
  };

ReactDOM.render(
    <Leaderboard data={data} />,
    document.getElementById('root')
);
  