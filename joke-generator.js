// Random Joke Generator using JokeAPI
// API: https://jokeapi.dev

const https = require('https');

/**
 * Fetch a random joke from JokeAPI
 * @param {string} type - 'single' or 'twopart'
 */
function getRandomJoke(type = 'any') {
    return new Promise((resolve, reject) => {
        const url = `https://v2.jokeapi.dev/joke/Any?type=${type}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const joke = JSON.parse(data);

                    if (joke.error) {
                        reject(new Error('Failed to fetch joke'));
                    } else {
                        resolve(joke);
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

/**
 * Display joke in a formatted way
 */
function displayJoke(joke) {
    console.log('\n========== 😂 RANDOM JOKE 😂 ==========\n');

    if (joke.type === 'single') {
        console.log(joke.joke);
    } else if (joke.type === 'twopart') {
        console.log('Setup: ' + joke.setup);
        console.log('Delivery: ' + joke.delivery);
    }

    console.log('\n========================================\n');
}

// Main execution
async function main() {
    try {
        console.log('Fetching a random joke...');
        const joke = await getRandomJoke();
        displayJoke(joke);
    } catch (error) {
        console.error('Error fetching joke:', error.message);
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { getRandomJoke, displayJoke };
