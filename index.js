setInterval(() => {
  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();

  let hrotation, mrotation, srotation;
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
