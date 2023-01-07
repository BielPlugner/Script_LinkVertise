var url = "https://main-bypass-server.tk/v3?" + window.location.href;
      var oReq = new XMLHttpRequest();
      var location = window.location.href;

    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }


      if (location.includes('linkvertise.com')) {
          console.log("loading the specific version for krnl :)");
          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              setTimeout(function () {
                  window.location = b.destination;
              }, 17100);
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
      else {

          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              window.location = b.destination;
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
