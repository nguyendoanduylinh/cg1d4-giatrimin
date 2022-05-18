function kiemtra(dayso) {
  let giatrimin = dayso[0];
  for (let i = 0; i < dayso.length; i++) {
    if (giatrimin > dayso[i]) {
      giatrimin = dayso[i];
    }
  }
  return giatrimin;
}

let dayso = [4, 7, -1];
console.log(kiemtra(dayso));
