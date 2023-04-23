function gamotvla() {
    var x = document.getElementById("ricxvi").value;  

if(x < 0) {
    window.alert("რიცხვი უარყოფითია!");
  }else if(x > 0) {
    window.alert("რიცხვი დადებითია!");
    return;
  }

  if(x == 0) {
    window.alert= "არ შეიძლება იყოს 0-ის ტოლი!";
  }
}

