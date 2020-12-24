var copyDictionary = {
    welcome_header: {
        en_copy: "Welcome to My Portfolio",
        sp_copy: "Bienvenido a mi Portafolio"
    },
    who_am_i_link: {
        en_copy: "Who am I?",
        sp_copy: "¿Quién soy?"
    },
    who_am_i_header: {
        en_copy: "Who am I?",
        sp_copy: "¿Quién soy?"
    },
    who_am_i_1: {
        en_copy: "My name is Jorge Viramontes. I am a first-generation college student. I am also a first-generation American citizen, born of Mexican immigrant parents.",
        sp_copy: "Mi nombre es Jorge Viramontes. Soy un estudiante universitario de primera generación. También soy un ciudadano estadounidense de primera generación, nacido de padres inmigrantes mexicanos."
    },
    who_am_i_2: {
        en_copy: "I am a University of Michigan graduate with a Bachelors of Science in Computational Informatics, with a minor in entrepreneurship.",
        sp_copy: "Soy un graduado de la Universidad de Michigan con una Licenciatura en Informática Computacional, con una especialización en emprendimiento."
    }
}

var currentLanguage;

var languageTranslator = function({
    dropdownId = "jvLanguageSelector",
    defaultLanguage = "English",
} = {}) {
    const root = document.documentElement;

    currentLanguage = defaultLanguage;

    (function createLanguageDropdown() {
        var languageDropdown = document.getElementById(dropdownId);
        languageDropdown.addEventListener("change", function(e) {
            currentLanguage = languageDropdown[languageDropdown.selectedIndex].value;
            resolveAllLanguageStrings();
        });
    })();

    function resolveAllLanguageStrings() {

        for(var key in copyDictionary) {
            //find string in HTML by key
            let stringToTranslate = document.querySelector(`#${key}`);

            //replace text content based on language
            switch (currentLanguage) {
                case "English":
                    stringToTranslate.textContent = copyDictionary[key].en_copy;
                    break;
                case "Spanish":
                    stringToTranslate.textContent = copyDictionary[key].sp_copy;
                    break;
                default:
                    break;
            }
        }
    }
};

languageTranslator({
    dropdownId: "jvLanguageSelector",
    defaultLanguage: "English",
})