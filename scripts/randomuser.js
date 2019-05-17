function getRandomUsers(count) {
    return fetch(`https://randomuser.me/api/?nat=us,gb&results=${count}`)
        .then(response => response.json())
        .then(json => json.results);
}

export { getRandomUsers };

/**
 * Older Method
 const fakeMemberPromise = count => new Promise((resolves, rejects) => {

            const api = `https://api.randomuser.me/?nat=IN&results=${count}`;
            const request = new XMLHttpRequest();
            request.open('GET', api);
            request.onload = () => {
                (request.status === 200) ? 
                    resolves(JSON.parse(request.response).results) : 
                    reject(Error(request.statusText));
            };
            request.onerror = (error) => rejects(error);
            request.send();

        });

        fakeMemberPromise(5).then(
                members => console.log(members),
                error => console.error(error)
        );
 */