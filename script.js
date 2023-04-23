function gamotvla(){
    var x = document.getElementById(ricxvi).value;

    if (x != 0 ) {
        window.alert(" არ შეიძლება იყოს 0-ის ტოლი");
        return;
    }


if( x % 2 == 0) {
    window.alert("ჩაწერილი რიცხვი არის ლუწი");
  }else if(x % 2 == 1) {
    window.alert("ჩაწერილი რიცხვი არის კენტი");
  }
}