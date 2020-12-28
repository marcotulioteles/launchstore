module.exports = {
  date(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month =  `0${(date.getUTCMonth() + 1)}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}-${month}`,
      format: `${day}/${month}/${year}`
    }
  },

  bloodType(blood) {
    const bloodStr = new String(blood)

    const lastChar = bloodStr.substring(bloodStr.length - 1)
    let newBlood = ""

    if (lastChar == "0") newBlood = bloodStr.replace("0", "-")  

    if (lastChar == "1")  newBlood = bloodStr.replace("1", "+")

    return newBlood
  }
}