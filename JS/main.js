const aboutMe = {
    name: 'Максим',
    age: 23,
    height: 180,
    OnTheShoulder: 'stone island',
    teachesJs: true
}
console.log(aboutMe)

// =================================

const obj = {
    say(name) {
        return `Hello "${name}"`;
    }
};
console.log(obj.say("Максим"));

// =================================

const users = [
    { name: "Иван", role: "user" },
    { name: "Мария", role: "admin" },
    { name: "Петр", role: "user" },
    { name: "Анна", role: "user" },
    { name: "Олег", role: "admin" }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].role !== "admin") {
        simpleUsersCount++;
    }
}
console.log("Количество простых пользователей:", simpleUsersCount);