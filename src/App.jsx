import "./App.css"
import {useState} from 'react'

function App() {
  const [labelData, setLabelData] = useState({
    firstNumber: 0,
    operation: '+',
    secondNumber: 0,
  })

  const [result, setResult] = useState(0)

  const toggleOperation = (operation) => {
    switch (operation){
      case '+':
        setLabelData({...labelData, operation:'+'})
        break;
      case '-':
        setLabelData({...labelData, operation:'-'})
        break;
      case '*':
        setLabelData({...labelData, operation:'*'})
        break;
      case '/':
        setLabelData({...labelData, operation:'/'})
        break;
    }
  }

  const toggleEqual = () => {
    switch (labelData.operation){
      case '+':
        setResult(labelData.firstNumber + labelData.secondNumber)
        break;
      case '-':
        setResult(labelData.firstNumber - labelData.secondNumber)
        break;
      case '*':
        setResult(labelData.firstNumber * labelData.secondNumber)
        break;
      case '/':
        setResult(labelData.firstNumber / labelData.secondNumber)
        break;
    }
  }
  
  const toggleFirstNumber = (number) => {
    if (labelData.firstNumber !== 0)
    {
      const newStringNumber = `${labelData.firstNumber}`+ `${number}`
      const newNumber = Number(newStringNumber)
      
      setLabelData({...labelData, firstNumber: newNumber})
    }
    else {
      setLabelData({...labelData, firstNumber: number})
    }
  }

  const toggleSecondNumber = (number) => {
    if (labelData.secondNumber !== 0)
    {
      const newStringNumber = `${labelData.secondNumber}`+ `${number}`
      const newNumber = Number(newStringNumber)
      
      setLabelData({...labelData, secondNumber: newNumber})
    }
    else{
      setLabelData({...labelData, secondNumber: number})
    }
  }

  const handleClear1 = () => {
    setLabelData({...labelData, firstNumber: 0})
  }

  const handleClear2 = () => {
    setLabelData({...labelData, secondNumber: 0})
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{labelData.firstNumber}</p>
        <div className="numbers">
          <button onClick={() => toggleFirstNumber(1)}>1</button>
          <button onClick={() => toggleFirstNumber(2)}>2</button>
          <button onClick={() => toggleFirstNumber(3)}>3</button>
          <button onClick={() => toggleFirstNumber(4)}>4</button>
          <button onClick={() => toggleFirstNumber(5)}>5</button>
          <button onClick={() => toggleFirstNumber(6)}>6</button>
          <button onClick={() => toggleFirstNumber(7)}>7</button>
          <button onClick={() => toggleFirstNumber(8)}>8</button>
          <button onClick={() => toggleFirstNumber(9)}>9</button>
          <button onClick={() => toggleFirstNumber(0)}>0</button>
          <button onClick={() => handleClear1()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{labelData.operation}</p>
        <div className="numbers">
          <button onClick={() => toggleOperation('+')}>+</button>
          <button onClick={() => toggleOperation('-')}>-</button>
          <button onClick={() => toggleOperation('*')}>*</button>
          <button onClick={() => toggleOperation('/')}>/</button>
        </div>
      </div>

      <div className="panel">
        <p>{labelData.secondNumber}</p>
        <div className="numbers">
        <button onClick={() => toggleSecondNumber(1)}>1</button>
          <button onClick={() => toggleSecondNumber(2)}>2</button>
          <button onClick={() => toggleSecondNumber(3)}>3</button>
          <button onClick={() => toggleSecondNumber(4)}>4</button>
          <button onClick={() => toggleSecondNumber(5)}>5</button>
          <button onClick={() => toggleSecondNumber(6)}>6</button>
          <button onClick={() => toggleSecondNumber(7)}>7</button>
          <button onClick={() => toggleSecondNumber(8)}>8</button>
          <button onClick={() => toggleSecondNumber(9)}>9</button>
          <button onClick={() => toggleSecondNumber(0)}>0</button>
          <button onClick={() => handleClear2()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => toggleEqual()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
