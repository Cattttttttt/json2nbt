import { toBaseCompound } from './parse.js'
import { subDataSetCheck } from './utils.js'

/**
 * 
 * @param {object|string} jsonData 
 */
const json2nbt = (jsonData) => {
  if(typeof jsonData === 'string') jsonData = JSON.parse(jsonData)
  if(typeof jsonData !== 'object') return jsonData
  const ans = Object.keys(jsonData).map(key => {
    return `${key}:${toBaseCompound(jsonData[key])}`
  })
  return '{' + ans.join(',') + '}'
}

export default json2nbt