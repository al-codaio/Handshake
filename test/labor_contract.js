const LaborContract = artifacts.require('./LaborContract.sol')

// Acceptance criteria for Labor contract
// Can be signed
// Can check if an address has signed
// Should be queryable for data (JSON string, later IPFS hash)

contract("LaborContract", accounts => {

  const owner = accounts[0]
  const stranger = accounts[1]
  const signee = accounts[2]
  const nonSignee = accounts[3]
  const contractData = web3.sha3("hello, world!")
  let instance

  beforeEach("instantiate contract", async () => {
    instance = await LaborContract.new(
      contractData,
      {from: owner})
  });

  describe("constructor", () => {
    it("should be queryable for contract data after instantiation", async () => {
      assert.strictEqual(
        await instance.getContractData({from: owner}),
        contractData
      )
    })
  })

  describe("sign", () => {
    it("should allow arbitrary addresses sign it", async () => {
      let tx = await instance.sign({from: stranger})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogContractSigned")
      assert.strictEqual(tx.logs[0].args.signee, stranger)
    })
  })

  describe("getContractData", () => {
    it("should allow anyone get contract data", async () => {
      assert.strictEqual(
        await instance.getContractData({from: stranger}),
        contractData
      )
    })
  })

  describe("hasSigned", () => {
    it("should let anyone check if an arbitrary address has signed", async () => {
      await instance.sign({from: signee})
      assert.isTrue(await instance.hasSigned(signee), "Signee was not recorded")
      assert.isFalse(await instance.hasSigned(nonSignee), "non-Signee should not be recorded")
    })
  })
})
