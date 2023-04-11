const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${PROMISE_TOKEN}`}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let lastPush;
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}
userLastCommit("auriello");

// const wait = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`You'll see this after ${ms/1000} second(s).`);
//         }, ms);
//     })
// }