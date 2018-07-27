let DAPP_CONTRACT_ADDRESS = '0xb92f507509b13e092f5ae9413c9800b1c243fa2e'

let Contract = web3.eth.contract(DAPP_ABI)
let contract = Contract.at(DAPP_CONTRACT_ADDRESS)

function weiToEth(weiAmount) {
  return new BigNumber(weiAmount).div(new BigNumber(10).pow(18)).toFixed(18)
}

function loadFromSC() {
  contract.name((err, res) => {
    console.log('Read from SC: name', { err, res })
    $('#nameInput').val(res)
  })
  contract.age((err, res) => {
    console.log('Read from SC: age', { err, res })
    $('#ageInput').val(res.toString())
  })
}

function onSubmit() {
  contract.setName($('#nameInput').val(), (err, res) => {
    console.log('Update in SC: name', { err, res })
  })
  contract.setAge($('#ageInput').val(), (err, res) => {
    console.log('Update in SC: age', { err, res })
  })
  return false
}

$(() => {
  loadFromSC()
})