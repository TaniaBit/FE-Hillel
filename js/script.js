`use strict`;

let name = prompt(`Enter your name:`);
let age = Number(prompt(`How old are you?`));
let isNotifications = confirm(`Would you like to receive notifications?`);

let session = {
    name: name,
    age: age,
    isNotifications: isNotifications,
    userId: 1234567890123456789n,
    lastLogin: null,
    nickname: undefined,
    favoriteTech: [`HTML`, `CSS`, `JavaScript`],
    settings: {
        theme: `dark`,
        autoLogin: false
    }
};


alert(`Hi, ${session.name}. You ID: ${session.userId}`);

console.log(`Object session:`, session);
console.log(`Name:`, session.name, typeof session.name);
console.log(`Age:`, session.age, typeof session.age);
console.log(`Notification:`, session.isNotifications, typeof session.isNotifications);
console.log(`Id number:`, session.userId, typeof session.userId);
console.log(`Last Login:`, session.lastLogin, typeof session.lastLogin);
console.log(`Nickname:`, session.nickname, typeof session.nickname);
console.log(`Favorite Tech:`, session.favoriteTech, typeof session.favoriteTech);
console.log(`Theme:`, session.settings.theme, typeof session.settings.theme);
console.log(`Auto entry:`, session.settings.autoLogin, typeof session.settings.autoLogin);

