const consonants = "BCDFGHJKLMNPQRSTVWXYZ".split("");
const vowels = "AEIOU".split("");
const patterns = [
    "CVC", 
    "CVCC", 
    "CCVC", 
    "CCVCC", 
    "CVCV", 
    "CCVCV", 
    "CVCVC", 
    "CVCVCC", 
    "CVCCVC", 
    "CCVCCVC", 
    "VCVC CVCCVCC", 
    "CVC CVCCVC"
];

window.onload = () => {
    const patternSelect = document.getElementById("patternSelect");
    patterns.forEach(pattern => {
        const option = document.createElement("option");
        option.value = pattern;
        option.textContent = pattern;
        patternSelect.appendChild(option);
    });
};

function generateNames() {
    let selectedPattern = document.getElementById("patternSelect").value;
    let count = parseInt(document.getElementById("nameCount").value) || 5;
    let generatedNames = [];

    while (generatedNames.length < count) {
        let rawName = "";
        for (let char of selectedPattern) {
            if (char === "C") {
                rawName += consonants[Math.floor(Math.random() * consonants.length)].toLowerCase();
            } else if (char === "V") {
                rawName += vowels[Math.floor(Math.random() * vowels.length)].toLowerCase();
            } else if (char === " ") {
                rawName += " ";
            }
        }
        
        // Capitalize the first letter of each word
        let name = rawName.split(" ").map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ");
    
        generatedNames.push({ name });
        displayResults(generatedNames);
    }
}

function displayResults(names) {
    let tableContent = `<table>
        <tr>
            <th>Name</th>
        </tr>`;

    names.forEach(nameObj => {
        tableContent += `<tr>
            <td>${nameObj.name}</td>
        </tr>`;
    });

    tableContent += "</table>";
    document.getElementById("results").innerHTML = tableContent;
}