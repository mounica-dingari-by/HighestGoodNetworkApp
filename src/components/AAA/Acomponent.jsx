//introducing some errors to test the linter

let x;

function Acomp() {
  if (x) {
    return 1;
  }
  return 2;
}

export default Acomp;
