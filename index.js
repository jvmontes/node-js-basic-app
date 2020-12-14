var languageStrings = [
    {
        English: "My name is Jorge Viramontes. I am a first-generation college student. I am also a first-generation American citizen, born of Mexican immigrant parents.",
        Spanish: "Mi nombre es Jorge Viramontes. Soy la primera generacion de mi familia de atender a la universidad. Tambien soy la primera generacion americana de mi familia, nacido de padres imigrantes de México."
    }
]

var copyArray = [
    {
        "key": "who-am-i-1",
        "en-copy": "My name is Jorge Viramontes. I am a first-generation college student. I am also a first-generation American citizen, born of Mexican immigrant parents.",
        "sp-copy": "Mi nombre es Jorge Viramontes. Soy la primera generacion de mi familia de atender a la universidad. Tambien soy la primera generacion americana de mi familia, nacido de padres imigrantes de México."
    }, {
        "key": "who-am-i-2",
        "en-copy": "test2",
        "sp-copy": "prueba2"
    }
]

var currentLanguage;

var languageTranslator = function({
    dropdownId = "jvLanguageSelector",
    stringAttribute = "data-jv-text",
    chosenLanguage = "English",
    languages = languageStrings,
} = {}) {
    const root = document.documentElement;

    var copyDictionary = {};

    copyArray.forEach(copyItem => {
        copyDictionary[copyItem.key] = {
            enCopy: copyItem["en-copy"],
            spCopy: copyItem["sp-copy"]
        }
    })

    console.log("copy dictionary - ", copyDictionary);

    var listOfLanguages = Object.keys(languages[0]);
    currentLanguage = chosenLanguage;

    (function createLanguageDropdown() {
        var languageDropdown = document.getElementById(dropdownId);

        languageDropdown.addEventListener("change", function(e) {
            currentLanguage = languageDropdown[languageDropdown.selectedIndex].value;
            resolveAllLanguageStrings();
        });
    })();

    function resolveAllLanguageStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originalText = stringToBeResolved.textContent;
            let resolvedText = resolveString(originalText, languageStrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }

};

function resolveString(originalText, languageStrings) {
    var matchingStringIndex = languageStrings.find(function(stringObj) {
        let stringValues = Object.values(stringObj);
        return stringValues.includes(originalText);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[currentLanguage];
    } else {
        return originalText;
    }
}

languageTranslator({
    dropdownId: "jvLanguageSelector",
    stringAttribute: "data-jv-text",
    chosenLanguage: "English",
    languages: languageStrings,
})