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
  let laborContract

  beforeEach("instantiate contract", async () => {
    laborContract = await LaborContract.new(
      contractData,
      {from: owner})
  });

  describe("constructor", () => {
    it("should be queryable for contract data after instantiation", async () => {
      assert.strictEqual(
        await laborContract.getContractData.call({from: owner}),
        contractData
      )
    })
  })

  describe("sign", () => {
    it("should allow arbitrary addresses sign it", async () => {
      let tx = await laborContract.sign({from: stranger})
      assert.strictEqual(tx.receipt.logs.length, 1)
      assert.strictEqual(tx.logs.length, 1)
      assert.strictEqual(tx.logs[0].event, "LogContractSigned")
      assert.strictEqual(tx.logs[0].args.signee, stranger)
      // will only work after hasSigned is implemented
      assert.isTrue(await laborContract.hasSigned.call(stranger, {from: stranger}))
    })
  })

  describe("getContractData", () => {
    it("should allow anyone get contract data", async () => {
      assert.strictEqual(
        await laborContract.getContractData.call({from: stranger}),
        contractData
      )
    })
  })

  describe("hasSigned", () => {
    it("should let anyone check if an arbitrary address has signed", async () => {
      await laborContract.sign({from: signee})
      assert.isTrue(await laborContract.hasSigned.call(signee), "Signee was not recorded")
      assert.isFalse(await laborContract.hasSigned.call(nonSignee), "non-Signee should not be recorded")
    })
  })
})
