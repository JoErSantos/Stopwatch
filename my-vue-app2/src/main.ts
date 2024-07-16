import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

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
        <div class="time-card">
          <span class="lap-number">Lap 1:</span>
          <span>00:04:43</span>
        </div>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#startBtn')!)
