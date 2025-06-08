`use strict`;

const birthYear = prompt(`Enter your year of birth:`);


if (birthYear === null) {
    alert(`It's a pity that you didn't want to enter your year of birth.`);
} else {
    const city = prompt(`What city do you live in?`);
    if (city === null) {
        alert(`It's a pity that you didn't want to enter your city.`);
    } else {
        let sport = prompt("Your favorite sport?");
        if (sport === null) {
            alert("It's a pity that you didn't want to enter your favorite sport.");
        } else {
            let age = 2025 - Number(birthYear);
            let cityMessage;
            switch (city) {
                case "Kyiv":
                    cityMessage = "You live in the capital of Ukraine!";
                    break;
                case "London":
                    cityMessage = "You live in the capital of Great Britain!";
                    break;
                case "Washington":
                    cityMessage = "You live in the capital of the United States!";
                    break;
                default:
                    cityMessage = `You live in the city of ${city}.`;
            }

            let sportMessage;
            switch (sport) {
                case "football":
                    sportMessage = "Cool! Do you want to become like Lionel Messi?";
                    break;
                case "tennis":
                    sportMessage = "Cool! Do you want to become like Novak Djokovic?";
                    break;
                case "box":
                    sportMessage = "Cool! Do you want to become like Oleksandr Usyk?";
                    break;
                default:
                    sportMessage = `An interesting choice of sports – ${sport}.`;
            }

            alert(`Your age: ${age}\n${cityMessage}\n${sportMessage}`);
        }
    }
}