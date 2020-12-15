var languageStrings = [
    {
        English: "My name is Jorge Viramontes. I am a first-generation college student. I am also a first-generation American citizen, born of Mexican immigrant parents.",
        Spanish: "Mi nombre es Jorge Viramontes. Soy la primera generacion de mi familia de atender a la universidad. Tambien soy la primera generacion americana de mi familia, nacido de padres imigrantes de México."
    }
]

var copyDictionary = {
    who_am_i_1: {
        en_copy: "My name is Jorge Viramontes. I am a first-generation college student. I am also a first-generation American citizen, born of Mexican immigrant parents.",
        sp_copy: "Mi nombre es Jorge Viramontes. Soy la primera generacion de mi familia de atender a la universidad. Tambien soy la primera generacion americana de mi familia, nacido de padres imigrantes de México."
    },
    who_am_i_2: {
        en_copy: "test2",
        sp_copy: "prueba2"
    }
}

var currentLanguage;

var languageTranslator = function({
    dropdownId = "jvLanguageSelector",
    stringAttribute = "data-jv-text",
    chosenLanguage = "English",
} = {}) {
    const root = document.documentElement;

    console.log("copy dictionary - ", copyDictionary);

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