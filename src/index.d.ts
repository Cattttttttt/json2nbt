export interface UniObj {
  [key: string]: any
}

export type BaseInt = number
export type BaseShort = number
export type BaseByte = number
export type BaseLong = number
export type BaseFloat = number
export type BaseDouble = number
export type BaseString = string
export type BaseCompound = UniObj

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

export type ItemEnhancement = BaseList<IEnhancement>

export type IDisplayType = 'Name'|'color'|'Lore'

export interface IDisplay extends BaseCompound {
  Name?: BaseString
  Color?: BaseInt
  Lore?: BaseList<BaseString>
}

export type ItemDisplay = IDisplay

export interface IAttributeModifiers extends BaseCompound {
  Operation: BaseByte
  Amount: BaseFloat
  UUID: BaseIntArray
  Slot: BaseString
  AtrributeName: BaseString
  Name: BaseString
}

export type ItemAttributeModifiers = BaseList<IAttributeModifiers>

export type ItemCanPlaceOn = BaseList<BaseString>
export type ItemCanDestroy = BaseList<BaseString>

export interface IBlockEntityTag extends BaseCompound {

}

export type ItemBlockEntityTag = IBlockEntityTag

export interface IBlockStateTag extends BaseCompound {

}

export type ItemBlockStateTag = IBlockStateTag

export type ItemUnbreakable = BaseByte
export type ItemSkullOwner = BaseString
export type ItemHideFlags = BaseByte
export type ItemGeneration = BaseByte

export interface IItemNBTTag extends BaseCompound {
  Enhancement?: ItemEnhancement
  Display?: ItemDisplay
  AttributeModifiers?: ItemAttributeModifiers
  CanPlaceOn?: ItemCanPlaceOn
  CanDestroy?: ItemCanDestroy
  BlockEntityTag?: ItemBlockEntityTag
  BlockStateTag?: ItemBlockStateTag
  Unbreakable?: ItemUnbreakable
  SkullOwner?: ItemSkullOwner
  HideFlags?: ItemHideFlags
  Generation?: ItemGeneration
}

export type ItemID = BaseString
export type ItemCount = BaseByte
export type ItemSlot = BaseByte
export type ItemTag = IItemNBTTag

export interface IItem extends BaseCompound {
  ID: ItemID
  Count: ItemCount
  Slot?: ItemSlot
  tag?: ItemTag
}

export type Item = IItem

export interface ICustomPotionEffects extends BaseCompound {
  ID: BaseInt
  Duration: BaseInt
  Amplifier: BaseByte
  Ambient: BaseByte
  ShowParticles: BaseByte
  ShowIcon: BaseByte
}

export type CustomPotionEffects = BaseList<ICustomPotionEffects>

export interface ICustomPotion extends Item {
  CustomPotionEffects: CustomPotionEffects
  CustomPotionColor: BaseInt
  Potion: BaseString
}

export type CustomPotion = ICustomPotion

export interface ITileEntityData extends BaseCompound {

}

export type EntityTileEntityData = ITileEntityData

export interface IEntityBlockState extends BaseCompound {
  Name: BaseString
  Properties?: BaseCompound
}

export type EntityBlockState = IEntityBlockState

export type EntityActiveEffects = CustomPotionEffects

export interface IEntityPassengers extends BaseCompound {
  id: BaseString
}

export type EntityPassengers = IEntityPassengers

export type EntityAttributeModifiers = ItemAttributeModifiers

export interface IEntityAttributes extends BaseCompound {
  AttributeName: BaseString
  Base: BaseFloat
  Modifiers?: EntityAttributeModifiers
}

export type EntityAttributes = IEntityAttributes

export type EntitySaddleItem = Item
export type EntitySaddle = BaseByte
export type EntityHandItems = BaseList<Item>
export type EntityArmorItems = BaseList<Item>
export type EntityMotion = BaseList<BaseDouble>
export type EntityPower = BaseList<BaseDouble>
export type EntityNoAI = BaseByte
export type EntityNoGravity = BaseByte
export type EntityInvulnerable = BaseByte
export type EntityPersistenceRequired = BaseByte
export type EntitySilent = BaseByte
export type EntityFire = BaseShort
export type EntityHealth = BaseFloat
export type EntityVariant = BaseInt
export type EntitySize = BaseInt
export type EntityTime = BaseInt
export type EntityDropItem = BaseByte
export type EntityFuse = BaseShort
export type EntityExplosionPower = BaseInt
export type EntityExplosionRadius = BaseByte
export type EntityPowered = BaseByte
export type EntityHandDropChances = BaseList<BaseFloat>
export type EntityArmorDropChances = BaseList<BaseFloat>

export interface IEntity extends BaseCompound {
  TileEntityData?: EntityTileEntityData
  BlockState?: EntityBlockState
  ActiveEffects?: EntityActiveEffects
  Passengers?: EntityPassengers
  Attributes?: EntityAttributes
  SaddleItem?: EntitySaddleItem
  Saddle?: EntitySaddle
  HandItems?: EntityHandItems
  ArmorItems?: EntityArmorItems
  Motion?: EntityMotion
  Power?: EntityPower
  NoAI?: EntityNoAI
  NoGravity?: EntityNoGravity
  Invulnerable?: EntityInvulnerable
  PersistenceRequired?: EntityPersistenceRequired
  Silent?: EntitySilent
  Fire?: EntityFire
  Health?: EntityHealth
  Varient?: EntityVariant
  Size?: EntitySize
  Time?: EntityTime
  DropItem?: EntityDropItem
  Fuse?: EntityFuse
  ExplosionPower?: EntityExplosionPower
  ExplosionRadius?: EntityExplosionRadius
  Powered?: EntityPowered
  HandDropChances?: EntityHandDropChances
  ArmorDropChances?: EntityArmorDropChances
}

export type Entity = IEntity

export type DropPickupDelay = BaseShort
export type DropAge = BaseShort

export interface IDropItem extends BaseCompound {
  Item: Item
  PickupDelay?: DropPickupDelay
  Age?: DropAge
}

export type DropItem = IDropItem

export interface IVillagerRecipes extends BaseCompound {
  Buy: Item
  BuyB?: Item
  Sell: Item
  RewardExp: BaseByte
  Uses: BaseInt
  MaxUses: BaseInt
  XP: BaseInt
  PriceMultiplier: BaseFloat
  Demand: BaseInt
  SpecialPrice: BaseInt
}

export type VillagerRecipes = BaseList<IVillagerRecipes>

export interface IVillagerGossips extends BaseCompound {
  Type: BaseString
  Value: BaseInt
  Target: BaseIntArray
}

export type VillagerGossips = BaseList<IVillagerGossips>

export interface IVillagerData extends BaseCompound {
  level: BaseInt
  Profession?: BaseString
  Type?: BaseString
}

export type VillagerData = IVillagerData

export interface IVillager extends Entity {
  Offers: VillagerRecipes
  VillagerData?: VillagerData
  Gossips?: VillagerGossips
  XP?: BaseInt
  LastRestock?: BaseInt
}

export type Villager = IVillager

export type ArmorStandPosePosition = BaseList<BaseFloat>

export interface IArmorStandPose extends BaseCompound {
  Head?: ArmorStandPosePosition
  Body?: ArmorStandPosePosition
  LeftArm?: ArmorStandPosePosition
  RightArm?: ArmorStandPosePosition
  LeftLeg?: ArmorStandPosePosition
  RightLeg?: ArmorStandPosePosition
}

export type ArmorStandPose = IArmorStandPose

export interface IArmorStand extends Entity {
  ShowArms?: BaseByte
  NoBasePlate?: BaseByte
  Small?: BaseByte
  Marker?: BaseByte
  Pose?: ArmorStandPose
  Invisible?: BaseByte
  DisabledSlots?: BaseInt
}

export type ArmorStand = IArmorStand