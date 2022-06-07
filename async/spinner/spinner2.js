process.stdout.write('hello from spinner1.js ... \rheyyy\n')

let time = 100
for(let i = 0; i < 3; i++) {

  setTimeout(() => {
    process.stdout.write('\r|   ')
  }, time);
  time += 200
  
  setTimeout(() => {
    process.stdout.write('\r/   ')
  }, time);
  time += 200
  
  setTimeout(() => {
    process.stdout.write('\r-   ')
  }, time);
  time += 200
  
  setTimeout(() => {
    process.stdout.write('\r\\   ')
  }, time);
  time += 200

}