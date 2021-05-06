export type BaseInt = number
export type BaseShort = number
export type BaseByte = number
export type BaseLong = number
export type BaseFloat = number
export type BaseDouble = number
export type BaseString = string
export type BaseCompound<T extends object> = T

export type BaseListType = BaseInt|BaseString|BaseCompound|BaseFloat|BaseDouble

export type BaseList<T extends BaseSubType> = Array<T>
export type BaseIntArray = Array<BaseInt>
export type BaseByteArray = Array<BaseByte>
export type BaseLongArray = Array<BaseLong>

export type BaseTypeStr = 
    'BaseInt'
  | 'BaseShort'
  | 'BaseByte'
  | 'BaseLong'
  | 'BaseFloat'
  | 'BaseDouble'
  | 'BaseString'
  | 'BaseCompound'
  | 'BaseList'
  | 'BaseIntArray'
  | 'BaseByteArray'
  | 'BaseLongArray'

export type BaseType = 
    BaseInt
  | BaseShort
  | BaseByte
  | BaseLong
  | BaseFloat
  | BaseDouble
  | BaseString
  | BaseCompound<T>
  | BaseList
  | BaseIntArray
  | BaseByteArray
  | BaseLongArray

export interface ISubDataSet {
  data: BaseType
  type: BaseTypeStr
}

export type SubDataSet = ISubDataSet | BaseType

export interface IEnhancement extends BaseCompound {
  id: BaseString
  lvl: BaseShort
}

export type Enhancement = BaseList<IEnhancement>

export type IDisplayType = 'Name'|'color'|'Lore'

export interface IDisplay extends BaseCompound {
  Name?: BaseString
  color?: BaseInt
  Lore?: BaseList<BaseString>
}

export type Display = IDisplay

export interface IAttributeModifiers extends BaseCompound {
  Operation: BaseByte
  Amount: BaseFloat
  UUID: BaseIntArray
  Slot: BaseString
  AtrributeName: BaseString
  Name: BaseString
}

export type AttributeModifiers = BaseList<IAttributeModifiers>

export type CanPlaceOn = BaseList<BaseString>
export type CanDestroy = BaseList<BaseString>

export interface IBlockEntityTag extends BaseCompound {

}

export type BlockEntityTag = IBlockEntityTag

export interface IBlockStateTag extends BaseCompound {

}

export type BlockStateTag = IBlockStateTag

export type Unbreakable = BaseByte
export type SkullOwner = BaseString
export type HideFlags = BaseByte
export type generation = BaseByte