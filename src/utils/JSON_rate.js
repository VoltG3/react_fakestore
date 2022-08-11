
export const Rate = (target) => {
    let tmp = JSON.stringify(target)
    tmp = tmp.replace(/"rate"/, "")
    tmp = tmp.replace(/"count"/, "")
    tmp = tmp.replace(/:/, "")
    tmp = tmp.replace(/{/g, "")
    tmp = tmp.replace(/}/g, "")
    tmp = tmp.replace(/\"/g, "")

    let arrTmp = tmp.split(",")
    return arrTmp[0]
}
