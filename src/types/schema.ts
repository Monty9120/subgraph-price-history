
import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Factory entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Factory entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Factory", id!.toString(), this);
  }

  static load(id: string): Factory | null {
    return store.get("Factory", id) as Factory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolCount(): BigInt {
    let value = this.get("poolCount");
    return value!.toBigInt();
  }

  set poolCount(value: BigInt) {
    this.set("poolCount", Value.fromBigInt(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value!.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalVolumeETH(): BigDecimal {
    let value = this.get("totalVolumeETH");
    return value!.toBigDecimal();
  }

  set totalVolumeETH(value: BigDecimal) {
    this.set("totalVolumeETH", Value.fromBigDecimal(value));
  }

  get totalFeesUSD(): BigDecimal {
    let value = this.get("totalFeesUSD");
    return value!.toBigDecimal();
  }

  set totalFeesUSD(value: BigDecimal) {
    this.set("totalFeesUSD", Value.fromBigDecimal(value));
  }

  get totalFeesETH(): BigDecimal {
    let value = this.get("totalFeesETH");
    return value!.toBigDecimal();
  }

  set totalFeesETH(value: BigDecimal) {
    this.set("totalFeesETH", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalValueLockedETH(): BigDecimal {
    let value = this.get("totalValueLockedETH");
    return value!.toBigDecimal();
  }

  set totalValueLockedETH(value: BigDecimal) {
    this.set("totalValueLockedETH", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSDUntracked(): BigDecimal {
    let value = this.get("totalValueLockedUSDUntracked");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSDUntracked(value: BigDecimal) {
    this.set("totalValueLockedUSDUntracked", Value.fromBigDecimal(value));
  }

  get totalValueLockedETHUntracked(): BigDecimal {
    let value = this.get("totalValueLockedETHUntracked");
    return value!.toBigDecimal();
  }

  set totalValueLockedETHUntracked(value: BigDecimal) {
    this.set("totalValueLockedETHUntracked", Value.fromBigDecimal(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class Bundle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bundle entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Bundle entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bundle", id!.toString(), this);
  }

  static load(id: string): Bundle | null {
    return store.get("Bundle", id) as Bundle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ethPriceUSD(): BigDecimal {
    let value = this.get("ethPriceUSD");
    return value!.toBigDecimal();
  }

  set ethPriceUSD(value: BigDecimal) {
    this.set("ethPriceUSD", Value.fromBigDecimal(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id!.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get volume(): BigDecimal {
    let value = this.get("volume");
    return value!.toBigDecimal();
  }

  set volume(value: BigDecimal) {
    this.set("volume", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get poolCount(): BigInt {
    let value = this.get("poolCount");
    return value!.toBigInt();
  }

  set poolCount(value: BigInt) {
    this.set("poolCount", Value.fromBigInt(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value!.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSDUntracked(): BigDecimal {
    let value = this.get("totalValueLockedUSDUntracked");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSDUntracked(value: BigDecimal) {
    this.set("totalValueLockedUSDUntracked", Value.fromBigDecimal(value));
  }

  get derivedETH(): BigDecimal {
    let value = this.get("derivedETH");
    return value!.toBigDecimal();
  }

  set derivedETH(value: BigDecimal) {
    this.set("derivedETH", Value.fromBigDecimal(value));
  }

  get whitelistPools(): Array<string> {
    let value = this.get("whitelistPools");
    return value!.toStringArray();
  }

  set whitelistPools(value: Array<string>) {
    this.set("whitelistPools", Value.fromStringArray(value));
  }

  get tokenDayData(): Array<string> {
    let value = this.get("tokenDayData");
    return value!.toStringArray();
  }

  set tokenDayData(value: Array<string>) {
    this.set("tokenDayData", Value.fromStringArray(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pool entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Pool entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pool", id!.toString(), this);
  }

  static load(id: string): Pool | null {
    return store.get("Pool", id) as Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get createdAtBlockNumber(): BigInt {
    let value = this.get("createdAtBlockNumber");
    return value!.toBigInt();
  }

  set createdAtBlockNumber(value: BigInt) {
    this.set("createdAtBlockNumber", Value.fromBigInt(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get feeTier(): BigInt {
    let value = this.get("feeTier");
    return value!.toBigInt();
  }

  set feeTier(value: BigInt) {
    this.set("feeTier", Value.fromBigInt(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get sqrtPrice(): BigInt {
    let value = this.get("sqrtPrice");
    return value!.toBigInt();
  }

  set sqrtPrice(value: BigInt) {
    this.set("sqrtPrice", Value.fromBigInt(value));
  }

  get feeGrowthGlobal0X128(): BigInt {
    let value = this.get("feeGrowthGlobal0X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal0X128(value: BigInt) {
    this.set("feeGrowthGlobal0X128", Value.fromBigInt(value));
  }

  get feeGrowthGlobal1X128(): BigInt {
    let value = this.get("feeGrowthGlobal1X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal1X128(value: BigInt) {
    this.set("feeGrowthGlobal1X128", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get tick(): BigInt | null {
    let value = this.get("tick");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set tick(value: BigInt | null) {
    if (value === null) {
      this.unset("tick");
    } else {
      this.set("tick", Value.fromBigInt(value as BigInt));
    }
  }

  get observationIndex(): BigInt {
    let value = this.get("observationIndex");
    return value!.toBigInt();
  }

  set observationIndex(value: BigInt) {
    this.set("observationIndex", Value.fromBigInt(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get collectedFeesToken0(): BigDecimal {
    let value = this.get("collectedFeesToken0");
    return value!.toBigDecimal();
  }

  set collectedFeesToken0(value: BigDecimal) {
    this.set("collectedFeesToken0", Value.fromBigDecimal(value));
  }

  get collectedFeesToken1(): BigDecimal {
    let value = this.get("collectedFeesToken1");
    return value!.toBigDecimal();
  }

  set collectedFeesToken1(value: BigDecimal) {
    this.set("collectedFeesToken1", Value.fromBigDecimal(value));
  }

  get collectedFeesUSD(): BigDecimal {
    let value = this.get("collectedFeesUSD");
    return value!.toBigDecimal();
  }

  set collectedFeesUSD(value: BigDecimal) {
    this.set("collectedFeesUSD", Value.fromBigDecimal(value));
  }

  get totalValueLockedToken0(): BigDecimal {
    let value = this.get("totalValueLockedToken0");
    return value!.toBigDecimal();
  }

  set totalValueLockedToken0(value: BigDecimal) {
    this.set("totalValueLockedToken0", Value.fromBigDecimal(value));
  }

  get totalValueLockedToken1(): BigDecimal {
    let value = this.get("totalValueLockedToken1");
    return value!.toBigDecimal();
  }

  set totalValueLockedToken1(value: BigDecimal) {
    this.set("totalValueLockedToken1", Value.fromBigDecimal(value));
  }

  get totalValueLockedETH(): BigDecimal {
    let value = this.get("totalValueLockedETH");
    return value!.toBigDecimal();
  }

  set totalValueLockedETH(value: BigDecimal) {
    this.set("totalValueLockedETH", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSDUntracked(): BigDecimal {
    let value = this.get("totalValueLockedUSDUntracked");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSDUntracked(value: BigDecimal) {
    this.set("totalValueLockedUSDUntracked", Value.fromBigDecimal(value));
  }

  get liquidityProviderCount(): BigInt {
    let value = this.get("liquidityProviderCount");
    return value!.toBigInt();
  }

  set liquidityProviderCount(value: BigInt) {
    this.set("liquidityProviderCount", Value.fromBigInt(value));
  }

  get poolHourData(): Array<string> {
    let value = this.get("poolHourData");
    return value!.toStringArray();
  }

  set poolHourData(value: Array<string>) {
    this.set("poolHourData", Value.fromStringArray(value));
  }

  get poolDayData(): Array<string> {
    let value = this.get("poolDayData");
    return value!.toStringArray();
  }

  set poolDayData(value: Array<string>) {
    this.set("poolDayData", Value.fromStringArray(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value!.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }

  get collects(): Array<string> {
    let value = this.get("collects");
    return value!.toStringArray();
  }

  set collects(value: Array<string>) {
    this.set("collects", Value.fromStringArray(value));
  }

  get ticks(): Array<string> {
    let value = this.get("ticks");
    return value!.toStringArray();
  }

  set ticks(value: Array<string>) {
    this.set("ticks", Value.fromStringArray(value));
  }
}

export class Tick extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tick entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Tick entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tick", id!.toString(), this);
  }

  static load(id: string): Tick | null {
    return store.get("Tick", id) as Tick | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolAddress(): string | null {
    let value = this.get("poolAddress");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toString();
    }
  }

  set poolAddress(value: string | null) {
    if (value === null) {
      this.unset("poolAddress");
    } else {
      this.set("poolAddress", Value.fromString(value as string));
    }
  }

  get tickIdx(): BigInt {
    let value = this.get("tickIdx");
    return value!.toBigInt();
  }

  set tickIdx(value: BigInt) {
    this.set("tickIdx", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get liquidityGross(): BigInt {
    let value = this.get("liquidityGross");
    return value!.toBigInt();
  }

  set liquidityGross(value: BigInt) {
    this.set("liquidityGross", Value.fromBigInt(value));
  }

  get liquidityNet(): BigInt {
    let value = this.get("liquidityNet");
    return value!.toBigInt();
  }

  set liquidityNet(value: BigInt) {
    this.set("liquidityNet", Value.fromBigInt(value));
  }

  get price0(): BigDecimal {
    let value = this.get("price0");
    return value!.toBigDecimal();
  }

  set price0(value: BigDecimal) {
    this.set("price0", Value.fromBigDecimal(value));
  }

  get price1(): BigDecimal {
    let value = this.get("price1");
    return value!.toBigDecimal();
  }

  set price1(value: BigDecimal) {
    this.set("price1", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get collectedFeesToken0(): BigDecimal {
    let value = this.get("collectedFeesToken0");
    return value!.toBigDecimal();
  }

  set collectedFeesToken0(value: BigDecimal) {
    this.set("collectedFeesToken0", Value.fromBigDecimal(value));
  }

  get collectedFeesToken1(): BigDecimal {
    let value = this.get("collectedFeesToken1");
    return value!.toBigDecimal();
  }

  set collectedFeesToken1(value: BigDecimal) {
    this.set("collectedFeesToken1", Value.fromBigDecimal(value));
  }

  get collectedFeesUSD(): BigDecimal {
    let value = this.get("collectedFeesUSD");
    return value!.toBigDecimal();
  }

  set collectedFeesUSD(value: BigDecimal) {
    this.set("collectedFeesUSD", Value.fromBigDecimal(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get createdAtBlockNumber(): BigInt {
    let value = this.get("createdAtBlockNumber");
    return value!.toBigInt();
  }

  set createdAtBlockNumber(value: BigInt) {
    this.set("createdAtBlockNumber", Value.fromBigInt(value));
  }

  get liquidityProviderCount(): BigInt {
    let value = this.get("liquidityProviderCount");
    return value!.toBigInt();
  }

  set liquidityProviderCount(value: BigInt) {
    this.set("liquidityProviderCount", Value.fromBigInt(value));
  }

  get feeGrowthOutside0X128(): BigInt {
    let value = this.get("feeGrowthOutside0X128");
    return value!.toBigInt();
  }

  set feeGrowthOutside0X128(value: BigInt) {
    this.set("feeGrowthOutside0X128", Value.fromBigInt(value));
  }

  get feeGrowthOutside1X128(): BigInt {
    let value = this.get("feeGrowthOutside1X128");
    return value!.toBigInt();
  }

  set feeGrowthOutside1X128(value: BigInt) {
    this.set("feeGrowthOutside1X128", Value.fromBigInt(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Position entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Position entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Position", id!.toString(), this);
  }

  static load(id: string): Position | null {
    return store.get("Position", id) as Position | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get tickLower(): string {
    let value = this.get("tickLower");
    return value!.toString();
  }

  set tickLower(value: string) {
    this.set("tickLower", Value.fromString(value));
  }

  get tickUpper(): string {
    let value = this.get("tickUpper");
    return value!.toString();
  }

  set tickUpper(value: string) {
    this.set("tickUpper", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get depositedToken0(): BigDecimal {
    let value = this.get("depositedToken0");
    return value!.toBigDecimal();
  }

  set depositedToken0(value: BigDecimal) {
    this.set("depositedToken0", Value.fromBigDecimal(value));
  }

  get depositedToken1(): BigDecimal {
    let value = this.get("depositedToken1");
    return value!.toBigDecimal();
  }

  set depositedToken1(value: BigDecimal) {
    this.set("depositedToken1", Value.fromBigDecimal(value));
  }

  get withdrawnToken0(): BigDecimal {
    let value = this.get("withdrawnToken0");
    return value!.toBigDecimal();
  }

  set withdrawnToken0(value: BigDecimal) {
    this.set("withdrawnToken0", Value.fromBigDecimal(value));
  }

  get withdrawnToken1(): BigDecimal {
    let value = this.get("withdrawnToken1");
    return value!.toBigDecimal();
  }

  set withdrawnToken1(value: BigDecimal) {
    this.set("withdrawnToken1", Value.fromBigDecimal(value));
  }

  get collectedFeesToken0(): BigDecimal {
    let value = this.get("collectedFeesToken0");
    return value!.toBigDecimal();
  }

  set collectedFeesToken0(value: BigDecimal) {
    this.set("collectedFeesToken0", Value.fromBigDecimal(value));
  }

  get collectedFeesToken1(): BigDecimal {
    let value = this.get("collectedFeesToken1");
    return value!.toBigDecimal();
  }

  set collectedFeesToken1(value: BigDecimal) {
    this.set("collectedFeesToken1", Value.fromBigDecimal(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get feeGrowthInside0LastX128(): BigInt {
    let value = this.get("feeGrowthInside0LastX128");
    return value!.toBigInt();
  }

  set feeGrowthInside0LastX128(value: BigInt) {
    this.set("feeGrowthInside0LastX128", Value.fromBigInt(value));
  }

  get feeGrowthInside1LastX128(): BigInt {
    let value = this.get("feeGrowthInside1LastX128");
    return value!.toBigInt();
  }

  set feeGrowthInside1LastX128(value: BigInt) {
    this.set("feeGrowthInside1LastX128", Value.fromBigInt(value));
  }
}

export class PositionSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PositionSnapshot entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save PositionSnapshot entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PositionSnapshot", id!.toString(), this);
  }

  static load(id: string): PositionSnapshot | null {
    return store.get("PositionSnapshot", id) as PositionSnapshot | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get depositedToken0(): BigDecimal {
    let value = this.get("depositedToken0");
    return value!.toBigDecimal();
  }

  set depositedToken0(value: BigDecimal) {
    this.set("depositedToken0", Value.fromBigDecimal(value));
  }

  get depositedToken1(): BigDecimal {
    let value = this.get("depositedToken1");
    return value!.toBigDecimal();
  }

  set depositedToken1(value: BigDecimal) {
    this.set("depositedToken1", Value.fromBigDecimal(value));
  }

  get withdrawnToken0(): BigDecimal {
    let value = this.get("withdrawnToken0");
    return value!.toBigDecimal();
  }

  set withdrawnToken0(value: BigDecimal) {
    this.set("withdrawnToken0", Value.fromBigDecimal(value));
  }

  get withdrawnToken1(): BigDecimal {
    let value = this.get("withdrawnToken1");
    return value!.toBigDecimal();
  }

  set withdrawnToken1(value: BigDecimal) {
    this.set("withdrawnToken1", Value.fromBigDecimal(value));
  }

  get collectedFeesToken0(): BigDecimal {
    let value = this.get("collectedFeesToken0");
    return value!.toBigDecimal();
  }

  set collectedFeesToken0(value: BigDecimal) {
    this.set("collectedFeesToken0", Value.fromBigDecimal(value));
  }

  get collectedFeesToken1(): BigDecimal {
    let value = this.get("collectedFeesToken1");
    return value!.toBigDecimal();
  }

  set collectedFeesToken1(value: BigDecimal) {
    this.set("collectedFeesToken1", Value.fromBigDecimal(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get feeGrowthInside0LastX128(): BigInt {
    let value = this.get("feeGrowthInside0LastX128");
    return value!.toBigInt();
  }

  set feeGrowthInside0LastX128(value: BigInt) {
    this.set("feeGrowthInside0LastX128", Value.fromBigInt(value));
  }

  get feeGrowthInside1LastX128(): BigInt {
    let value = this.get("feeGrowthInside1LastX128");
    return value!.toBigInt();
  }

  set feeGrowthInside1LastX128(value: BigInt) {
    this.set("feeGrowthInside1LastX128", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id!.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get mints(): Array<string | null> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string | null>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string | null> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string | null>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string | null> {
    let value = this.get("swaps");
    return value!.toStringArray();
  }

  set swaps(value: Array<string | null>) {
    this.set("swaps", Value.fromStringArray(value));
  }

  get flashed(): Array<string | null> {
    let value = this.get("flashed");
    return value!.toStringArray();
  }

  set flashed(value: Array<string | null>) {
    this.set("flashed", Value.fromStringArray(value));
  }

  get collects(): Array<string | null> {
    let value = this.get("collects");
    return value!.toStringArray();
  }

  set collects(value: Array<string | null>) {
    this.set("collects", Value.fromStringArray(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Mint entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Mint entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Mint", id!.toString(), this);
  }

  static load(id: string): Mint | null {
    return store.get("Mint", id) as Mint | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get origin(): Bytes {
    let value = this.get("origin");
    return value!.toBytes();
  }

  set origin(value: Bytes) {
    this.set("origin", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get amount0(): BigDecimal {
    let value = this.get("amount0");
    return value!.toBigDecimal();
  }

  set amount0(value: BigDecimal) {
    this.set("amount0", Value.fromBigDecimal(value));
  }

  get amount1(): BigDecimal {
    let value = this.get("amount1");
    return value!.toBigDecimal();
  }

  set amount1(value: BigDecimal) {
    this.set("amount1", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal | null {
    let value = this.get("amountUSD");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigDecimal();
    }
  }

  set amountUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amountUSD");
    } else {
      this.set("amountUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get tickLower(): BigInt {
    let value = this.get("tickLower");
    return value!.toBigInt();
  }

  set tickLower(value: BigInt) {
    this.set("tickLower", Value.fromBigInt(value));
  }

  get tickUpper(): BigInt {
    let value = this.get("tickUpper");
    return value!.toBigInt();
  }

  set tickUpper(value: BigInt) {
    this.set("tickUpper", Value.fromBigInt(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Burn entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Burn entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Burn", id!.toString(), this);
  }

  static load(id: string): Burn | null {
    return store.get("Burn", id) as Burn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get origin(): Bytes {
    let value = this.get("origin");
    return value!.toBytes();
  }

  set origin(value: Bytes) {
    this.set("origin", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get amount0(): BigDecimal {
    let value = this.get("amount0");
    return value!.toBigDecimal();
  }

  set amount0(value: BigDecimal) {
    this.set("amount0", Value.fromBigDecimal(value));
  }

  get amount1(): BigDecimal {
    let value = this.get("amount1");
    return value!.toBigDecimal();
  }

  set amount1(value: BigDecimal) {
    this.set("amount1", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal | null {
    let value = this.get("amountUSD");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigDecimal();
    }
  }

  set amountUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amountUSD");
    } else {
      this.set("amountUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get tickLower(): BigInt {
    let value = this.get("tickLower");
    return value!.toBigInt();
  }

  set tickLower(value: BigInt) {
    this.set("tickLower", Value.fromBigInt(value));
  }

  get tickUpper(): BigInt {
    let value = this.get("tickUpper");
    return value!.toBigInt();
  }

  set tickUpper(value: BigInt) {
    this.set("tickUpper", Value.fromBigInt(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Swap entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Swap entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Swap", id!.toString(), this);
  }

  static load(id: string): Swap | null {
    return store.get("Swap", id) as Swap | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get origin(): Bytes {
    let value = this.get("origin");
    return value!.toBytes();
  }

  set origin(value: Bytes) {
    this.set("origin", Value.fromBytes(value));
  }

  get amount0(): BigDecimal {
    let value = this.get("amount0");
    return value!.toBigDecimal();
  }

  set amount0(value: BigDecimal) {
    this.set("amount0", Value.fromBigDecimal(value));
  }

  get amount1(): BigDecimal {
    let value = this.get("amount1");
    return value!.toBigDecimal();
  }

  set amount1(value: BigDecimal) {
    this.set("amount1", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal {
    let value = this.get("amountUSD");
    return value!.toBigDecimal();
  }

  set amountUSD(value: BigDecimal) {
    this.set("amountUSD", Value.fromBigDecimal(value));
  }

  get sqrtPriceX96(): BigInt {
    let value = this.get("sqrtPriceX96");
    return value!.toBigInt();
  }

  set sqrtPriceX96(value: BigInt) {
    this.set("sqrtPriceX96", Value.fromBigInt(value));
  }

  get tick(): BigInt {
    let value = this.get("tick");
    return value!.toBigInt();
  }

  set tick(value: BigInt) {
    this.set("tick", Value.fromBigInt(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Collect extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Collect entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Collect entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Collect", id!.toString(), this);
  }

  static load(id: string): Collect | null {
    return store.get("Collect", id) as Collect | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get amount0(): BigDecimal {
    let value = this.get("amount0");
    return value!.toBigDecimal();
  }

  set amount0(value: BigDecimal) {
    this.set("amount0", Value.fromBigDecimal(value));
  }

  get amount1(): BigDecimal {
    let value = this.get("amount1");
    return value!.toBigDecimal();
  }

  set amount1(value: BigDecimal) {
    this.set("amount1", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal | null {
    let value = this.get("amountUSD");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigDecimal();
    }
  }

  set amountUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amountUSD");
    } else {
      this.set("amountUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get tickLower(): BigInt {
    let value = this.get("tickLower");
    return value!.toBigInt();
  }

  set tickLower(value: BigInt) {
    this.set("tickLower", Value.fromBigInt(value));
  }

  get tickUpper(): BigInt {
    let value = this.get("tickUpper");
    return value!.toBigInt();
  }

  set tickUpper(value: BigInt) {
    this.set("tickUpper", Value.fromBigInt(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Flash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Flash entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save Flash entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Flash", id!.toString(), this);
  }

  static load(id: string): Flash | null {
    return store.get("Flash", id) as Flash | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get amount0(): BigDecimal {
    let value = this.get("amount0");
    return value!.toBigDecimal();
  }

  set amount0(value: BigDecimal) {
    this.set("amount0", Value.fromBigDecimal(value));
  }

  get amount1(): BigDecimal {
    let value = this.get("amount1");
    return value!.toBigDecimal();
  }

  set amount1(value: BigDecimal) {
    this.set("amount1", Value.fromBigDecimal(value));
  }

  get amountUSD(): BigDecimal {
    let value = this.get("amountUSD");
    return value!.toBigDecimal();
  }

  set amountUSD(value: BigDecimal) {
    this.set("amountUSD", Value.fromBigDecimal(value));
  }

  get amount0Paid(): BigDecimal {
    let value = this.get("amount0Paid");
    return value!.toBigDecimal();
  }

  set amount0Paid(value: BigDecimal) {
    this.set("amount0Paid", Value.fromBigDecimal(value));
  }

  get amount1Paid(): BigDecimal {
    let value = this.get("amount1Paid");
    return value!.toBigDecimal();
  }

  set amount1Paid(value: BigDecimal) {
    this.set("amount1Paid", Value.fromBigDecimal(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }
}

export class UniswapDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UniswapDayData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save UniswapDayData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UniswapDayData", id!.toString(), this);
  }

  static load(id: string): UniswapDayData | null {
    return store.get("UniswapDayData", id) as UniswapDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get volumeETH(): BigDecimal {
    let value = this.get("volumeETH");
    return value!.toBigDecimal();
  }

  set volumeETH(value: BigDecimal) {
    this.set("volumeETH", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get volumeUSDUntracked(): BigDecimal {
    let value = this.get("volumeUSDUntracked");
    return value!.toBigDecimal();
  }

  set volumeUSDUntracked(value: BigDecimal) {
    this.set("volumeUSDUntracked", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get tvlUSD(): BigDecimal {
    let value = this.get("tvlUSD");
    return value!.toBigDecimal();
  }

  set tvlUSD(value: BigDecimal) {
    this.set("tvlUSD", Value.fromBigDecimal(value));
  }
}

export class PoolDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolDayData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save PoolDayData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolDayData", id!.toString(), this);
  }

  static load(id: string): PoolDayData | null {
    return store.get("PoolDayData", id) as PoolDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get sqrtPrice(): BigInt {
    let value = this.get("sqrtPrice");
    return value!.toBigInt();
  }

  set sqrtPrice(value: BigInt) {
    this.set("sqrtPrice", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get tick(): BigInt | null {
    let value = this.get("tick");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set tick(value: BigInt | null) {
    if (value === null) {
      this.unset("tick");
    } else {
      this.set("tick", Value.fromBigInt(value as BigInt));
    }
  }

  get feeGrowthGlobal0X128(): BigInt {
    let value = this.get("feeGrowthGlobal0X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal0X128(value: BigInt) {
    this.set("feeGrowthGlobal0X128", Value.fromBigInt(value));
  }

  get feeGrowthGlobal1X128(): BigInt {
    let value = this.get("feeGrowthGlobal1X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal1X128(value: BigInt) {
    this.set("feeGrowthGlobal1X128", Value.fromBigInt(value));
  }

  get tvlUSD(): BigDecimal {
    let value = this.get("tvlUSD");
    return value!.toBigDecimal();
  }

  set tvlUSD(value: BigDecimal) {
    this.set("tvlUSD", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get open(): BigDecimal {
    let value = this.get("open");
    return value!.toBigDecimal();
  }

  set open(value: BigDecimal) {
    this.set("open", Value.fromBigDecimal(value));
  }

  get high(): BigDecimal {
    let value = this.get("high");
    return value!.toBigDecimal();
  }

  set high(value: BigDecimal) {
    this.set("high", Value.fromBigDecimal(value));
  }

  get low(): BigDecimal {
    let value = this.get("low");
    return value!.toBigDecimal();
  }

  set low(value: BigDecimal) {
    this.set("low", Value.fromBigDecimal(value));
  }

  get close(): BigDecimal {
    let value = this.get("close");
    return value!.toBigDecimal();
  }

  set close(value: BigDecimal) {
    this.set("close", Value.fromBigDecimal(value));
  }
}

export class PoolHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolHourData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save PoolHourData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolHourData", id!.toString(), this);
  }

  static load(id: string): PoolHourData | null {
    return store.get("PoolHourData", id) as PoolHourData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get periodStartUnix(): i32 {
    let value = this.get("periodStartUnix");
    return value!.toI32();
  }

  set periodStartUnix(value: i32) {
    this.set("periodStartUnix", Value.fromI32(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get sqrtPrice(): BigInt {
    let value = this.get("sqrtPrice");
    return value!.toBigInt();
  }

  set sqrtPrice(value: BigInt) {
    this.set("sqrtPrice", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get tick(): BigInt | null {
    let value = this.get("tick");
    if (value === null || value!.kind == ValueKind.NULL) {
      return null;
    } else {
      return value!.toBigInt();
    }
  }

  set tick(value: BigInt | null) {
    if (value === null) {
      this.unset("tick");
    } else {
      this.set("tick", Value.fromBigInt(value as BigInt));
    }
  }

  get feeGrowthGlobal0X128(): BigInt {
    let value = this.get("feeGrowthGlobal0X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal0X128(value: BigInt) {
    this.set("feeGrowthGlobal0X128", Value.fromBigInt(value));
  }

  get feeGrowthGlobal1X128(): BigInt {
    let value = this.get("feeGrowthGlobal1X128");
    return value!.toBigInt();
  }

  set feeGrowthGlobal1X128(value: BigInt) {
    this.set("feeGrowthGlobal1X128", Value.fromBigInt(value));
  }

  get tvlUSD(): BigDecimal {
    let value = this.get("tvlUSD");
    return value!.toBigDecimal();
  }

  set tvlUSD(value: BigDecimal) {
    this.set("tvlUSD", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get open(): BigDecimal {
    let value = this.get("open");
    return value!.toBigDecimal();
  }

  set open(value: BigDecimal) {
    this.set("open", Value.fromBigDecimal(value));
  }

  get high(): BigDecimal {
    let value = this.get("high");
    return value!.toBigDecimal();
  }

  set high(value: BigDecimal) {
    this.set("high", Value.fromBigDecimal(value));
  }

  get low(): BigDecimal {
    let value = this.get("low");
    return value!.toBigDecimal();
  }

  set low(value: BigDecimal) {
    this.set("low", Value.fromBigDecimal(value));
  }

  get close(): BigDecimal {
    let value = this.get("close");
    return value!.toBigDecimal();
  }

  set close(value: BigDecimal) {
    this.set("close", Value.fromBigDecimal(value));
  }
}

export class TickHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TickHourData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save TickHourData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TickHourData", id!.toString(), this);
  }

  static load(id: string): TickHourData | null {
    return store.get("TickHourData", id) as TickHourData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get periodStartUnix(): i32 {
    let value = this.get("periodStartUnix");
    return value!.toI32();
  }

  set periodStartUnix(value: i32) {
    this.set("periodStartUnix", Value.fromI32(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get tick(): string {
    let value = this.get("tick");
    return value!.toString();
  }

  set tick(value: string) {
    this.set("tick", Value.fromString(value));
  }

  get liquidityGross(): BigInt {
    let value = this.get("liquidityGross");
    return value!.toBigInt();
  }

  set liquidityGross(value: BigInt) {
    this.set("liquidityGross", Value.fromBigInt(value));
  }

  get liquidityNet(): BigInt {
    let value = this.get("liquidityNet");
    return value!.toBigInt();
  }

  set liquidityNet(value: BigInt) {
    this.set("liquidityNet", Value.fromBigInt(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }
}

export class TickDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TickDayData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save TickDayData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TickDayData", id!.toString(), this);
  }

  static load(id: string): TickDayData | null {
    return store.get("TickDayData", id) as TickDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get tick(): string {
    let value = this.get("tick");
    return value!.toString();
  }

  set tick(value: string) {
    this.set("tick", Value.fromString(value));
  }

  get liquidityGross(): BigInt {
    let value = this.get("liquidityGross");
    return value!.toBigInt();
  }

  set liquidityGross(value: BigInt) {
    this.set("liquidityGross", Value.fromBigInt(value));
  }

  get liquidityNet(): BigInt {
    let value = this.get("liquidityNet");
    return value!.toBigInt();
  }

  set liquidityNet(value: BigInt) {
    this.set("liquidityNet", Value.fromBigInt(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get feeGrowthOutside0X128(): BigInt {
    let value = this.get("feeGrowthOutside0X128");
    return value!.toBigInt();
  }

  set feeGrowthOutside0X128(value: BigInt) {
    this.set("feeGrowthOutside0X128", Value.fromBigInt(value));
  }

  get feeGrowthOutside1X128(): BigInt {
    let value = this.get("feeGrowthOutside1X128");
    return value!.toBigInt();
  }

  set feeGrowthOutside1X128(value: BigInt) {
    this.set("feeGrowthOutside1X128", Value.fromBigInt(value));
  }
}

export class TokenDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenDayData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save TokenDayData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenDayData", id!.toString(), this);
  }

  static load(id: string): TokenDayData | null {
    return store.get("TokenDayData", id) as TokenDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get volume(): BigDecimal {
    let value = this.get("volume");
    return value!.toBigDecimal();
  }

  set volume(value: BigDecimal) {
    this.set("volume", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value!.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get priceUSD(): BigDecimal {
    let value = this.get("priceUSD");
    return value!.toBigDecimal();
  }

  set priceUSD(value: BigDecimal) {
    this.set("priceUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get open(): BigDecimal {
    let value = this.get("open");
    return value!.toBigDecimal();
  }

  set open(value: BigDecimal) {
    this.set("open", Value.fromBigDecimal(value));
  }

  get high(): BigDecimal {
    let value = this.get("high");
    return value!.toBigDecimal();
  }

  set high(value: BigDecimal) {
    this.set("high", Value.fromBigDecimal(value));
  }

  get low(): BigDecimal {
    let value = this.get("low");
    return value!.toBigDecimal();
  }

  set low(value: BigDecimal) {
    this.set("low", Value.fromBigDecimal(value));
  }

  get close(): BigDecimal {
    let value = this.get("close");
    return value!.toBigDecimal();
  }

  set close(value: BigDecimal) {
    this.set("close", Value.fromBigDecimal(value));
  }
}

export class TokenHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenHourData entity without an ID");
    assert(
      id!.kind == ValueKind.STRING,
      "Cannot save TokenHourData entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenHourData", id!.toString(), this);
  }

  static load(id: string): TokenHourData | null {
    return store.get("TokenHourData", id) as TokenHourData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get periodStartUnix(): i32 {
    let value = this.get("periodStartUnix");
    return value!.toI32();
  }

  set periodStartUnix(value: i32) {
    this.set("periodStartUnix", Value.fromI32(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get volume(): BigDecimal {
    let value = this.get("volume");
    return value!.toBigDecimal();
  }

  set volume(value: BigDecimal) {
    this.set("volume", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value!.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value!.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get priceUSD(): BigDecimal {
    let value = this.get("priceUSD");
    return value!.toBigDecimal();
  }

  set priceUSD(value: BigDecimal) {
    this.set("priceUSD", Value.fromBigDecimal(value));
  }

  get feesUSD(): BigDecimal {
    let value = this.get("feesUSD");
    return value!.toBigDecimal();
  }

  set feesUSD(value: BigDecimal) {
    this.set("feesUSD", Value.fromBigDecimal(value));
  }

  get open(): BigDecimal {
    let value = this.get("open");
    return value!.toBigDecimal();
  }

  set open(value: BigDecimal) {
    this.set("open", Value.fromBigDecimal(value));
  }

  get high(): BigDecimal {
    let value = this.get("high");
    return value!.toBigDecimal();
  }

  set high(value: BigDecimal) {
    this.set("high", Value.fromBigDecimal(value));
  }

  get low(): BigDecimal {
    let value = this.get("low");
    return value!.toBigDecimal();
  }

  set low(value: BigDecimal) {
    this.set("low", Value.fromBigDecimal(value));
  }

  get close(): BigDecimal {
    let value = this.get("close");
    return value!.toBigDecimal();
  }

  set close(value: BigDecimal) {
    this.set("close", Value.fromBigDecimal(value));
  }
}
