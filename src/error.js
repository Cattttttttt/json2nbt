export class ParamsTypeError extends Error {
  constructor(paramsName, originalValue, targetType) {
    super(`Params ${paramsName} can not convert to type ${targetType}\n\tOrigin value: ${originalValue}`)
    this.name = 'ParamsTypeError'
  }
}

export class UnknownError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UnknownError'
  }
}