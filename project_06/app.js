const gameState = {
  turnStatus: true,
  xState: [],
  oState: [],
  winArray: [
    
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],

      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],

      ['0', '4', '8'],
      ['2', '4', '6']
  ]
}

document.addEventListener('click', event => {
  const target = event.target
  const cellLocation = target.classList.contains('cells')
  const isPicked = target.classList.contains('picked')

  if (cellLocation && !isPicked) {
      const cellValue = target.dataset.value

      gameState.turnStatus === true
          ?  gameState.xState.push(cellValue)
          :  gameState.oState.push(cellValue)

      target.classList.add('picked')
      target.classList.add(gameState.turnStatus ? 'ximage' : 'oimage')

      gameState.turnStatus = !gameState.turnStatus
      
      
  }
})
