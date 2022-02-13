import React, { useState } from "react";
import teamsData from "./data";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [teams, setTeams] = useState(teamsData);

  const onDrop = (member, newTeamId) => {
    console.log(`move ${member.id} to new team ${newTeamId}`);
    console.log("moving member", member);
    const fromTeamId = member.teamId;

    if (fromTeamId === newTeamId) {
      return;
    }
    const updatedTeams = { ...teams };

    // remove fromTeamId
    updatedTeams[fromTeamId] = updatedTeams[fromTeamId].filter(
      (m) => m.id != member.id
    );

    // add to newTeam
    member.teamId = newTeamId;
    updatedTeams[newTeamId].push(member);

    console.log("updated teams", updatedTeams);
    setTeams(updatedTeams);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
      </header>
      <main>
        <TeamMembers
          teamId="team-1"
          members={teams["team-1"]}
          onDrop={onDrop}
        />
        <TeamMembers
          teamId="team-2"
          members={teams["team-2"]}
          onDrop={onDrop}
        />
      </main>
      <p></p>
    </div>
  );
}

export default App;
