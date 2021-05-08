import * as NBTCONST from './constant.js'
import * as NBTUtils from './utils.js'
import { ParamsTypeError, UnknownError } from './error.js'

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
  if(NBTUtils.subDataSetCheck(_value)) {
    _value = _value.data
    targetType = value.type.toLowerCase()
  }
  const tailSign = 
    targetType === 'byte'
      ? 'b'
      : (targetType === 'long'
        ? 'l'
        : (targetType === 'short'
          ? 's'
          : ''))
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

/**
 * 
 * @param {*} value 
 * @param {'Double'|'Float'} targetType
 */
export const toBaseFloatType = (value, targetType = 'Float') => {
  let _value = value
  if(NBTUtils.subDataSetCheck(_value)) {
    targetType = _value.type
    _value = _value.data
  }
  const tailSign = targetType.toUpperCase() === 'DOUBLE' ? 'd' : 'f'
  if(!NBTUtils.typeCheck(_value, ['string', 'number'])) {
    throw new ParamsTypeError('value', value, `Base${targetType}`)
  }
  if(typeof _value === 'string') {
    const convertValue = parseFloat(_value)
    if(convertValue != convertValue) {
      throw new ParamsTypeError('value', value, `Base${targetType}`)
    }
    _value = convertValue
  }
  _value = _value.toPrecision(NBTCONST[`NBT${targetType.toUpperCase()}BIT`])
  return _value.toString() + tailSign
}

/**
 * 
 * @param {object} value 
 * @returns {string}
 */
export const toBaseCompound = value => {
  if(typeof value === 'object' && NBTUtils.subDataSetCheck(value)) {
    if(value.type.toUpperCase() === 'INT' || value.type.toUpperCase() === 'SHORT' || value.type.toUpperCase() === 'LONG' || value.type.toUpperCase() === 'BYTE') {
      return toBaseIntType(value)
    }
    else if(value.type.toUpperCase() === 'FLOAT' || value.type.toUpperCase() === 'DOUBLE') {
      return toBaseFloatType(value)
    }
    else if(value.type.toUpperCase() === 'STRING') {
      return toBaseStringType(value.data)
    }
    else if(value.type.toUpperCase().includes('ARRAY') || value.type.toUpperCase() === 'LIST') {
      return toBaseList(value)
    }
    else return JSON.stringify(value)
  }
  else if(NBTUtils.typeCheck(value, ['number', 'bigint'])) return toBaseIntType(value)
  else if(Array.isArray(value)) return toBaseList(value)
  else if(typeof value !== 'object') return `${value}`
  const ans = Object.keys(value).map(item => {
    return `${item}:${toBaseCompound(value[item])}`
  })
  return '{' + ans.join(',') + '}'
}

/**
 * 
 * @param {*} value 
 * @param {'List'|'Int'|'Byte'|'Long'} targetType 
 * @returns {string}
 */
export const toBaseList = (value, targetType = 'List') => {
  if(!Array.isArray(value)) throw new ParamsTypeError('value', value, `Base${targetType}Array`)
  const startSign = targetType === 'Int'
    ? 'I;'
    : (targetType === 'Byte'
      ? 'B;'
      : (targetType === 'Long'
        ? 'L;'
        : ''))
  const ans = value.map(item => {
    if(typeof item === 'object') return JSON.stringify(item)
    else if(typeof item === 'string') return `\"${item}\"`
    else return `${item}`
  })
  return '[' + startSign + ans.join(',') + ']'
}