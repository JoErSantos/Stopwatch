import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setButtonFunctions, setElements } from './timerLogic.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="stopwatch-container">
      <h1>Stopwatch Timer</h1>
      <div class="timer">
        <span id="hours" class="time-on-left" >00</span>:
        <span id="minutes" class="time-on-left">00</span>:
        <span id="seconds" class="time-on-left">00</span>:
        <span id="milliseconds" >00</span>
      </div>
      <div class="buttons-container">
        <button id="startBtn" >Start</button>
        <button id="stopBtn" >Stop</button>
        <button id="pauseBtn" >Pause</button>
        <button id="resetBtn" >Reset</button>
      </div>
      <h2>Lap Timmer</h2>
      <div id="times-container">
      </div>
    </div>
  </div>
`

setElements(document.querySelector<HTMLLabelElement>('#hours')!,document.querySelector<HTMLLabelElement>('#minutes')!,
  document.querySelector<HTMLLabelElement>('#seconds')!,document.querySelector<HTMLLabelElement>('#milliseconds')!,
  document.querySelector<HTMLDivElement>('#times-container')!)

setButtonFunctions(document.querySelector<HTMLButtonElement>('#startBtn')!,document.querySelector<HTMLButtonElement>('#stopBtn')!,
  document.querySelector<HTMLButtonElement>('#pauseBtn')!,document.querySelector<HTMLButtonElement>('#resetBtn')!)
