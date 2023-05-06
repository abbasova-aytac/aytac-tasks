function surnameGenerator (surname,lang,gender) {
    switch (lang) {
      case "pr":
    return surname+"zade"
      
        case "tr":
     return gender === "w" ? surname + "kizi" : surname + "oglu"
        case "ru" :
            return gender === "w" ? surname + "eva": surname + "ev"
    }

    }
console.log (surnameGenerator ("Abbas","tr","w"))
