export function FindMax(input:number):number{
  let max: number = 1;
  for(let i = 0; i<input.toString().length-1; i++) {
    max *= 10;
  }
  max *= (Math.floor(input / max) + 1);
  return max;
}