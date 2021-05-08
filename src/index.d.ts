declare namespace NBT {

  type TypeofReturnType = 'number'|'object'|'function'|'string'|'undefined'|'symbol'|'bigint'|'boolean'

  interface UniObj extends Object {
    [key: string]: any
  }

  type BaseInt = number
  type BaseShort = number
  type BaseByte = number
  type BaseLong = number
  type BaseFloat = number
  type BaseDouble = number
  type BaseString = string
  type BaseCompound = UniObj

  type BaseListType = BaseInt|BaseString|BaseCompound|BaseFloat|BaseDouble

  type BaseList<T extends BaseSubType> = Array<T>
  type BaseIntArray = Array<BaseInt>
  type BaseByteArray = Array<BaseByte>
  type BaseLongArray = Array<BaseLong>

  type BaseTypeStr = 
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

  type BaseType = 
      BaseInt
    | BaseShort
    | BaseByte
    | BaseLong
    | BaseFloat
    | BaseDouble
    | BaseString
    | BaseCompound
    | BaseList
    | BaseIntArray
    | BaseByteArray
    | BaseLongArray

  interface ISubDataSet<T> extends BaseCompound {
    data: BaseType
    type: T
  }

  type SubDataSet<T> = ISubDataSet<T>

  interface IEnhancement extends BaseCompound {
    id: BaseString
    lvl: BaseShort
  }

  type ItemEnhancement = BaseList<IEnhancement>

  type IDisplayType = 'Name'|'color'|'Lore'

  interface IDisplay extends BaseCompound {
    Name?: BaseString
    Color?: BaseInt
    Lore?: BaseList<BaseString>
  }

  type ItemDisplay = IDisplay

  interface IAttributeModifiers extends BaseCompound {
    Operation: BaseByte
    Amount: BaseFloat
    UUID: BaseIntArray
    Slot: BaseString
    AtrributeName: BaseString
    Name: BaseString
  }

  type ItemAttributeModifiers = BaseList<IAttributeModifiers>

  type ItemCanPlaceOn = BaseList<BaseString>
  type ItemCanDestroy = BaseList<BaseString>

  interface IBlockEntityTag extends BaseCompound {

  }

  type ItemBlockEntityTag = IBlockEntityTag

  interface IBlockStateTag extends BaseCompound {

  }

  type ItemBlockStateTag = IBlockStateTag

  type ItemUnbreakable = BaseByte
  type ItemSkullOwner = BaseString
  type ItemHideFlags = BaseByte
  type ItemGeneration = BaseByte

  interface IItemNBTTag extends BaseCompound {
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

  type ItemID = BaseString
  type ItemCount = BaseByte
  type ItemSlot = BaseByte
  type ItemTag = IItemNBTTag

  interface IItem extends BaseCompound {
    ID: ItemID
    Count: ItemCount
    Slot?: ItemSlot
    tag?: ItemTag
  }

  type Item = IItem

  interface ICustomPotionEffects extends BaseCompound {
    ID: BaseInt
    Duration: BaseInt
    Amplifier: BaseByte
    Ambient: BaseByte
    ShowParticles: BaseByte
    ShowIcon: BaseByte
  }

  type CustomPotionEffects = BaseList<ICustomPotionEffects>

  interface ICustomPotion extends Item {
    CustomPotionEffects: CustomPotionEffects
    CustomPotionColor: BaseInt
    Potion: BaseString
  }

  type CustomPotion = ICustomPotion

  interface ITileEntityData extends BaseCompound {

  }

  type EntityTileEntityData = ITileEntityData

  interface IEntityBlockState extends BaseCompound {
    Name: BaseString
    Properties?: BaseCompound
  }

  type EntityBlockState = IEntityBlockState

  type EntityActiveEffects = CustomPotionEffects

  interface IEntityPassengers extends BaseCompound {
    id: BaseString
  }

  type EntityPassengers = IEntityPassengers

  type EntityAttributeModifiers = ItemAttributeModifiers

  interface IEntityAttributes extends BaseCompound {
    AttributeName: BaseString
    Base: BaseFloat
    Modifiers?: EntityAttributeModifiers
  }

  type EntityAttributes = IEntityAttributes

  type EntitySaddleItem = Item
  type EntitySaddle = BaseByte
  type EntityHandItems = BaseList<Item>
  type EntityArmorItems = BaseList<Item>
  type EntityMotion = BaseList<BaseDouble>
  type EntityPower = BaseList<BaseDouble>
  type EntityNoAI = BaseByte
  type EntityNoGravity = BaseByte
  type EntityInvulnerable = BaseByte
  type EntityPersistenceRequired = BaseByte
  type EntitySilent = BaseByte
  type EntityFire = BaseShort
  type EntityHealth = BaseFloat
  type EntityVariant = BaseInt
  type EntitySize = BaseInt
  type EntityTime = BaseInt
  type EntityDropItem = BaseByte
  type EntityFuse = BaseShort
  type EntityExplosionPower = BaseInt
  type EntityExplosionRadius = BaseByte
  type EntityPowered = BaseByte
  type EntityHandDropChances = BaseList<BaseFloat>
  type EntityArmorDropChances = BaseList<BaseFloat>

  interface IEntity extends BaseCompound {
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

  type Entity = IEntity

  type DropPickupDelay = BaseShort
  type DropAge = BaseShort

  interface IDropItem extends BaseCompound {
    Item: Item
    PickupDelay?: DropPickupDelay
    Age?: DropAge
  }

  type DropItem = IDropItem

  interface IVillagerRecipes extends BaseCompound {
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

  type VillagerRecipes = BaseList<IVillagerRecipes>

  interface IVillagerGossips extends BaseCompound {
    Type: BaseString
    Value: BaseInt
    Target: BaseIntArray
  }

  type VillagerGossips = BaseList<IVillagerGossips>

  interface IVillagerData extends BaseCompound {
    level: BaseInt
    Profession?: BaseString
    Type?: BaseString
  }

  type VillagerData = IVillagerData

  interface IVillager extends Entity {
    Offers: VillagerRecipes
    VillagerData?: VillagerData
    Gossips?: VillagerGossips
    XP?: BaseInt
    LastRestock?: BaseInt
  }

  type Villager = IVillager

  type ArmorStandPosePosition = BaseList<BaseFloat>

  interface IArmorStandPose extends BaseCompound {
    Head?: ArmorStandPosePosition
    Body?: ArmorStandPosePosition
    LeftArm?: ArmorStandPosePosition
    RightArm?: ArmorStandPosePosition
    LeftLeg?: ArmorStandPosePosition
    RightLeg?: ArmorStandPosePosition
  }

  type ArmorStandPose = IArmorStandPose

  interface IArmorStand extends Entity {
    ShowArms?: BaseByte
    NoBasePlate?: BaseByte
    Small?: BaseByte
    Marker?: BaseByte
    Pose?: ArmorStandPose
    Invisible?: BaseByte
    DisabledSlots?: BaseInt
  }

  type ArmorStand = IArmorStand
}