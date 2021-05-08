/**
 * 
 * @param {any} value 
 * @param {NBT.TypeofReturnType[]} types 
 * @returns {boolean} Return True when value is a type in types array
 */
export const typeCheck = (value, types) => {
  if(!Array.isArray(types)) return false
  let res = false
  types.map(type => {
    if(typeof value === type) res = true
  })
  return res
}

/**
 * 
 * @param {NBT.SubDataSet<any>} value 
 * @return {boolean} Return True when value match NBT.SubDataSet
 */
export const subDataSetCheck = value => {
  if(typeof value === 'object') {
    if(value.hasOwnProperty('data') && value.hasOwnProperty('type')) return true
  }
  return false
}

/**
 * 
 * @param {number|bigint|string} value 
 * @returns {number|bigint}
 */
export const filterInt = value => {
  if(typeCheck(value, ['number', 'bigint'])) return BigInt(value)
  if(typeof value === 'string') {
    if(/^(\-|\+)?([0-9]*|Infinity)$/.test(value)) return BigInt(value)
  }
  return NaN
}