setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  chour = 30 * hr + min / 2;
  cminute = 6 * min;
  csecond = 6 * sec;
  hour.style.transform = ` rotate(${chour}deg)`;
  minute.style.transform = ` rotate(${cminute}deg)`;
  second.style.transform = ` rotate(${csecond}deg)`;
}, 1000);
