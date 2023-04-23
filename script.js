function gamotvla() {
    var x = document.getElementById("ricxvi").value;
    var text = document.getElementById("txt");

    if(x.lengh == 0) {
      text.innerHTML = "არ შეიძლება იყოს 0-ის ტოლი!";
      return;
    }

if(x < 0) {
    window.alert("რიცხვი უარყოფითია!");
  }else if(x > 0) {
    window.alert("რიცხვი დადებითია!");
  }
}