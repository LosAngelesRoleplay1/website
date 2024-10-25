const apiKey = 'ZDkplVCqsj-HImkcBkwvbMibsPidwIhycLOFhNnvEJTLJjASbGM';  // Replace with actual API key
const apiUrl = 'https://api.policeroleplay.community/v1';  // Replace with actual API URL

async function fetchPlayerCount() {
    try {
        const response = await fetch(`${apiUrl}/server/players`, {  // Use backticks for template literals
            method: 'GET',
            headers: {
                'Server-Key': apiKey,
            }
        });

        if (response.ok) {
            const players = await response.json();
            updatePlayerCounter(players);
        } else {
            throw new Error('Failed to fetch player count.');
        }
    } catch (error) {
        document.getElementById('player-counter').innerHTML = `<h2>Error: ${error.message}</h2>`; // Use backticks for template literals
    }
}

function updatePlayerCounter(players) {
    const playerCounter = document.getElementById('player-counter');

    if (players.length > 0) {
        const playerList = players.map(player => 
            `<p>${player.Player} (${player.Permission}) - ${player.Team}</p>` // Correct use of template literals
        ).join('');
        playerCounter.innerHTML = `<h2>Current Players</h2>${playerList}`;
    } else {
        playerCounter.innerHTML = '<h2>No players online</h2>';
    }
}

// Fetch the player count every 30 seconds
setInterval(fetchPlayerCount, 30000);
fetchPlayerCount();