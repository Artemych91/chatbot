const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sports-teams.dat');
const teamsData = fs.readFileSync(filePath, 'utf8');

module.exports = {
  getTeams: () => {
    return teamsData
      .split('\n')
      .map(line => line.split(','))
      .map(fields => ({
        name: fields[0].trim(),
        city: fields[1].trim(),
        teamLeague: fields[2].trim(),
        yearFounded: fields[3].trim(),
        sport: fields[4].trim(),
      }));
  },
};
