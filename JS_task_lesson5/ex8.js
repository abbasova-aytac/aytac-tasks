// *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)

// const months= [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avqust",
//     "Sentyabr",
//     "Oktyabr",
//     "Noyabr",
//     "Dekabr"
//     ]
//     const month=new Date()
//     const currentMonth= months[month.getMonth()]
//     document.write(currentMonth);
    

    const months={
    0:"yanvar",
    1:"fevral",
    2:"mart",
    3:"aprel",
    4:"may"
    }

    const date = new Date ()
    const month = months[date.getmonth()]

    console.log (4)