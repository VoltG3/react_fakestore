
export const Count = (target) => {
    let tmp = JSON.stringify(target)
    tmp = tmp.replace(/"rate"/, "")
    tmp = tmp.replace(/"count"/, "")
    tmp = tmp.replace(/:/g, "")
    tmp = tmp.replace(/{/g, "")
    tmp = tmp.replace(/}/g, "")
    tmp = tmp.replace(/\"/g, "")

    let arrTmp = tmp.split(",")
    return arrTmp[1]
}
