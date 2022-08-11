
export const strThisProductID = (targetThisProductID) => {
    let tmp = JSON.stringify(targetThisProductID)
    tmp = tmp.replace(/"target"/, "")
    tmp = tmp.replace(/"thisProductID"/, "")
    tmp = tmp.replace(/:/g, "")
    tmp = tmp.replace(/{/g, "")
    tmp = tmp.replace(/}/g, "")
    tmp = tmp.replace(/\"/g, "")

    let strTmp = tmp.split(",")
    return parseInt(strTmp[0])
}
