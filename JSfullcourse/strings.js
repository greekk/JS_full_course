let string = "Hello World!";
strings = [];
strings[0] = string.length;
strings[1] = string.toLowerCase();
strings[2] = string.toUpperCase();
strings[3] = string.charCodeAt(4);

for (const string in strings) {
    console.log(strings[string]);
}

strings.forEach(element => {
    console.log(element)
});

for (const key in strings) {
    if (strings.hasOwnProperty(key)) {
        console.log(strings[key]);
        
    }
}