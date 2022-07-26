import data from "./local.api/data.js"

export const categoryList = () => {
    let tmp = JSON.stringify(data, ["category"])
    tmp = tmp.replace(/"category"/g, "")
    tmp = tmp.replace(/\[/, "")
    tmp = tmp.replace(/\]/, "")
    tmp = tmp.replace(/:/g, "")
    tmp = tmp.replace(/{/g, "")
    tmp = tmp.replace(/}/g, "")
    tmp = tmp.replace(/\"/g, "")

    let arrTmp = tmp.split(",")
    let arrList = []
    let targetBefore = ""

    for(let i = 0; i < arrTmp.length; i++) {
        if(i === 0) {
            let strTmp = "All products"
            arrList.push(strTmp)
        }

        if(targetBefore === "" || targetBefore !== arrTmp[i]) {
            let capitalizeTmp = arrTmp[i]
            let capitalize = capitalizeTmp.charAt(0).toUpperCase() + capitalizeTmp.slice(1)
            targetBefore = arrTmp[i]

            arrList.push(capitalize)
        }
    }

    // console.table(arrList)
    return arrList
}
