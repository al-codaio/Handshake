const Handshake = artifacts.require("./Handshake.sol")
const LaborContract = artifacts.require("./LaborContract.sol")
// Acceptance criteria for handshake contract
// Can create labor contract
// Can register recruitment agency address
// Can check if an address is registered
// Only owner can register recruitment agencies

const expectException = (func) => {
  try {
    func()
  } catch (e) {
    return
  }
  assert.throw("Expected exception but none was thrown!")
}

contract("Handshake", accounts => {

  const owner = accounts[0]
  const registered = accounts[1]
  const stranger = accounts[2]
  const contractData = web3.sha3("hello, world again!")
  let handshake

  beforeEach("instantiate new handshake", async () => {
    handshake = await Handshake.new({from: owner})
  })
  // describe("instantiation", async () => {
  //
  // })

  describe("register", () => {
    it("can only be called by the owner", async () => {
      expectException(async () => await handshake.register(
        registered,
        {from: stranger}))
    })

    it("registers an address successfully", async () => {
      let tx = await handshake.register(
        registered,
        {from: owner})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogRegistration")
      assert.strictEqual(tx.logs[0].args.sender, owner)
      assert.strictEqual(tx.logs[0].args.agency, registered)
      // will only work after isRegistered is implemented!
      assert.isTrue(await handshake.isRegistered.call(registered))
    })
  })

  describe("createLaborContract", () => {
    before("register an agency address", async () => {
      handshake.register(registered, {from: owner})
    })

    it("should break if called from unregistered addresses", async () => {
      expectException(async () => await handshake.createLaborContract(
        contractData,
        {from: stranger}))
    })

    it("should create a new labor contract", async () => {
      let tx = await handshake.createLaborContract(
        contractData,
        {from: registered})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogLaborContractCreated")
      assert.strictEqual(tx.logs[0].args.sender, registered)
      // will only work after LaborContract is implemented!
      let laborContract = await LaborContract.at(tx.logs[0].args.contractAddress)
      assert.strictEqual(
        laborContract.getContractData.call({from: stranger}),
        contractData)
    })
  })
})
