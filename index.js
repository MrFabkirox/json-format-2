const _ = require('lodash')

let obj = {}

console.log('line,isin,mic,reuters')

_.each(obj.raw, (rawItem) => {
  let csvline = rawItem.__csvLine
  let isin = rawItem.code && rawItem.code.isin
  let mic = rawItem.code && rawItem.code.exchangeMic
  let reuters = rawItem.code && rawItem.code.exchangeReuters
  console.log(csvline + ',' + isin + ',' + mic + ',' + reuters)
})

console.log("____________1____________")
console.log(process.argv)
console.log("____________2____________")
