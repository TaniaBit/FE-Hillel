Create a program that:

Accepts user input via prompt and confirm
Creates a session object containing all collected information
Has a nested object and an array
Uses all data types

Steps:
Data collection via browser:

Prompt for name (prompt) → string
Prompt for age → number (convert from string)
Ask if user wants to receive notifications (confirm) → boolean
Create a dummy userId as bigInt (you can just write it manually 1234567890123456789n)
Set the lastLogin field to null
Create a nickname field, but don't set a value (leave it undefined)
Add an array favoriteTech of three technologies (any)
Add a nested settings object with the fields:
theme: "dark" or "light"
autoLogin: false

Create a session object that will contain all this data.

Output:

alert with short information: "Hello, [name]! Your ID is [userId]"
In console.log — the entire object
In console.log — the type of each field (typeof)
