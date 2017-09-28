const Handshake = artifacts.require("./Handshake.sol")
const LaborContract = artifacts.require("./LaborContract.sol")
// Acceptance criteria for handshake contract
// Can create labor contract
// Can register recruitment agency address
// Can check if an address is registered
// Only owner can register recruitment agencies

const expectException = async func => {
  try {
    await func()
  } catch (e) {
    return
  }
  assert.throw("Expected exception but none was thrown!")
}

contract("Handshake", accounts => {

  const owner = accounts[0]
  const registered = accounts[1]
  const otherRegistered = accounts[2]
  const stranger = accounts[3]
  const unRegistered = accounts[4]
  const contractData = web3.sha3("hello, world again!")
  let handshake

  beforeEach("instantiate new handshake", async () => {
    handshake = await Handshake.new({from: owner})
    await handshake.registerAgency(registered, {from: owner})
  })

  describe("registerAgency", () => {
    it("can only be called by the owner", async () => {
      expectException(async () => await handshake.registerAgency(
        otherRegistered,
        {from: stranger}))
    })

    it("registers an address successfully", async () => {
      let tx = await handshake.registerAgency(
        otherRegistered,
        {from: owner})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogRegistration")
      assert.strictEqual(tx.logs[0].args.sender, owner)
      assert.strictEqual(tx.logs[0].args.agency, otherRegistered)
      assert.isTrue(await handshake.isRegistered.call(otherRegistered))
    })

    it("should not let an agency be registered twice", async () => {
      await handshake.registerAgency(
        otherRegistered,
        {from: owner})
      expectException(async () => await handshake.registerAgency(
        otherRegistered,
        {from: owner}))
    })
  })

  describe("createLaborContract", () => {
    it("should break if called from unregistered addresses", async () => {
      expectException(async () => await handshake.createLaborContract(
        contractData,
        {from: unRegistered}))
    })

    it("should create a new labor contract", async () => {
      let tx = await handshake.createLaborContract(
        contractData,
        {from: registered})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogLaborContractCreated")
      assert.strictEqual(tx.logs[0].args.sender, registered)
      let laborContract = await LaborContract.at(tx.logs[0].args.atAddress)
      assert.strictEqual(
        await laborContract.getContractData.call({from: stranger}),
        contractData)
    })
  })
})
