let hoursLabel: HTMLLabelElement;
let minutesLabel: HTMLLabelElement;
let secondsLabel: HTMLLabelElement;
let millisecondsLabel: HTMLLabelElement;

let lapList: HTMLDivElement

let hours: number = 0;
let minutes: number = 0;
let seconds: number = 0;
let milliseconds: number = 0;
let interval: any;

type lapTime = {
  lapHours: number,
  lapMinutes: number,
  lapSeconds: number,
  lapMillieSeconds: number
}

let lapTimeList: lapTime[] = [];

export function setElements(hoursL: HTMLLabelElement, minutesL: HTMLLabelElement, 
  secondsL: HTMLLabelElement, millisecondsL: HTMLLabelElement, list: HTMLDivElement){
  hoursLabel = hoursL;
  minutesLabel = minutesL;
  secondsLabel = secondsL;
  millisecondsLabel = millisecondsL;
  lapList = list;
}

export function setButtonFunctions(startBtn: HTMLButtonElement, stopBtn: HTMLButtonElement, pauseBtn: HTMLButtonElement, resetBtn: HTMLButtonElement){
  startBtn.addEventListener('click', ()=> startTimer(startBtn))
  stopBtn.addEventListener('click', ()=> stopTimer())
  pauseBtn.addEventListener('click', ()=> pauseTimer(startBtn))
  resetBtn.addEventListener('click', ()=> resetTimer())
}


function startTimer(button: HTMLButtonElement): void {
  interval = setInterval(updateTimer,10)
  button.disabled = true;
}

function stopTimer(): void {
  if(hours != 0 || minutes != 0 || seconds != 0 || milliseconds != 0){
    addTime();
    displayLapTime();
  }
  resetTimer();
}

function pauseTimer(button: HTMLButtonElement): void {
  clearInterval(interval);
  button.disabled = false;
}

function resetTimer(): void {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTimer();
}

function updateTimer(): void {
  if(hoursLabel != null && minutesLabel != null && secondsLabel != null && millisecondsLabel != null){
    milliseconds++;
    if(milliseconds === 100){
      milliseconds = 0;
      seconds++;
      if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
          minutes=0;
          hours++;
        }
      }
    }

    displayTimer();
  }
}

function displayTimer(): void {

  millisecondsLabel.textContent =  padTime(milliseconds);
  secondsLabel.textContent =  padTime(seconds);
  minutesLabel.textContent =  padTime(minutes);
  hoursLabel.textContent =  padTime(hours);

}

function padTime(time: number): string{
  return time.toString().padStart(2,'0');
}

function addTime(): void {
  let newTime: lapTime = {
    lapHours: hours,
    lapMinutes: minutes,
    lapSeconds: seconds,
    lapMillieSeconds: milliseconds
  }
  lapTimeList.push(newTime);
}

function displayLapTime(): void {
  let htmlContent: string = ``;
  let count: number = 0;
  lapTimeList.forEach((time)=>{
    if(count != 0){
        htmlContent += `<div class="line"></div>`
    }
    count ++;
    htmlContent += `
      <div id="lap-${count}" class="time-card">
        <span class="lap-number">Lap ${count}:</span>
        <span>${padTime(time.lapHours) + ":" + padTime(time.lapMinutes) + ":" + padTime(time.lapSeconds) + ":" + padTime(time.lapMillieSeconds)}</span>
      </div>
    `
  });

  lapList.innerHTML = htmlContent;
}
