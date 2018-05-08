function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if(res instanceof Error) {
        alert("Aucun Code détecté ! Verifiez bien que le QR Code soit bien au milieu !");
      } else {
        document.getElementById("barcode").value = res;
        document.getElementById("TheForm").submit();
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

function showQRIntro() {
  return confirm("Voulez-vous utiliser la caméra de votre téléphone pour prendre le QR code ?");
}
