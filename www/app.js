let DAPP_CONTRACT_ADDRESS = '0xd929e705796869a2c849c1178e5f57c58ae99e5b'

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