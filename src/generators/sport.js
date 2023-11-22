const teamsHandler = require('../handlers/teamsHandler');

module.exports = {
    getSportAnswer: (chatbotMessages) => {
        const { leagueMatch, sportMatch, cityMatch, yearMatch, messageTeams } = getMatches(chatbotMessages);
        const teams = teamsHandler.getTeams();

        if (leagueMatch) {
            return filterAndJoinTeams(teams, 'teamLeague', leagueMatch[0], messageTeams);
        }

        if (sportMatch) {
            return filterAndJoinTeams(teams, 'sport', sportMatch[0].toLowerCase(), messageTeams);
        }

        if (cityMatch) {
            return filterAndJoinTeams(teams, 'city', cityMatch[1], messageTeams);
        }

        if (yearMatch) {
            return filterAndJoinTeams(teams, 'yearFounded', yearMatch[1], messageTeams);
        }

        return '';
    },
};

function getMatches(chatbotMessages) {
    return {
        leagueMatch: chatbotMessages.match(/\b(?:nhl|nfl|cfl|mlb|nba|mls)\b/i),
        sportMatch: chatbotMessages.match(/\b(?:hockey|football|baseball|soccer|basketball)\b/i),
        cityMatch: chatbotMessages.match(/\b(?:from)\s+(\w+)\b/i),
        yearMatch: chatbotMessages.match(/(\d{4})/),
        messageTeams: chatbotMessages.match(/:\s*(.*?)\?/),
    };
}

function filterAndJoinTeams(teams, criteriaKey, criteriaValue, messageTeams) {
    let messageTeamNames = [];
    if (messageTeams && messageTeams[1]) {
        messageTeamNames = messageTeams[1]
            .split(',')
            .map(team => team.trim());
    }

    const matchingTeams = teams
        .filter(team => team[criteriaKey] === criteriaValue)
        .filter(team => messageTeamNames.length === 0 || messageTeamNames.includes(team.name));

    return matchingTeams.map(team => team.name).join(', ');
}
