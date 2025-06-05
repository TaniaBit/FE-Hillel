`use strict`;

let user = {
    name: "John Doe",
    age: 21,
    isOnline: true,
    friends: ["Hermione", "Garry", "Ron"],
    settings: {
        theme: "dark",
        notifications: true
    }
};

let firstFriendName = user.friends[0];
let notificationsEnabled = user.settings.notifications;


console.log(`Name user : ${user.name}`);
console.log(`Number of friends : ${user.friends.length}`);
console.log(`First friend's name : ${user.friends[0]}`);
console.log(`Theme : ${user.settings.theme}`);
console.log(`Notification : ${user.settings.notifications}`);

