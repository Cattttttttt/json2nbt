import * as NBTCONST from './constant'
import * as NBTUtils from './utils'
import { ParamsTypeError, UnknownError } from './error'

/**
 * 
 * @param {*} value 
 * @param {'Int'|'Short'|'Long'|'Byte'} targetType
 * @returns {string}
 */
export const toBaseIntType = (value, targetType = 'Int') => {
  let _value = value
  const maxLimit = NBTCONST[`NBT${targetType.toUpperCase()}MAX`]
  const minLimit = NBTCONST[`NBT${targetType.toUpperCase()}MIN`]
  const tailSign = 
    targetType === 'Byte'
      ? 'b'
      : (targetType === 'Long'
        ? 'l'
        : (targetType === 'Short'
          ? 's'
          : ''))
  if(NBTUtils.subDataSetCheck(_value)) {
    _value = _value.data
  }
  if(!NBTUtils.typeCheck(_value, ['string', 'number', 'bigint'])) {
    throw new ParamsTypeError('value', value, `Base${targetType}`)
  }
  if(typeof _value === 'string') {
    const convertValue = NBTUtils.filterInt(_value)
    if(convertValue != convertValue) {
      throw new ParamsTypeError('value', value, `Base${targetType}`)
    }
    _value = convertValue
  }
  _value = BigInt(_value)
  if(typeof _value === 'bigint') {
    if(_value > BigInt(maxLimit)) return maxLimit.toString() + tailSign
    if(_value < BigInt(minLimit)) return minLimit.toString() + tailSign
    return _value.toString() + tailSign
  }
  throw new UnknownError(`Convert ${value} to Base${targetType} failed`)
}

/**
 * Directly convert value to string
 * @param {*} value Accept any value include objects
 * @returns {string}
 */
export const toBaseStringType = value => {
  let _value = value
  if(NBTUtils.subDataSetCheck(_value) && _value.type === 'BaseString') {
    _value = _value.data
  }
  return `\"${String(_value)}\"`
}

export const toBaseFloatType = value => {
  
}