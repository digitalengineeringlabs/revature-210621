
       function submitData() {
        var xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText)

                //JS object from JSON string
                var obj = JSON.parse(this.responseText)
                document.querySelector("#content").innerHTML = obj.greet
            }
        }

        xhttp.open("POST","http://localhost:5000/")
        xhttp.setRequestHeader('Content-Type','application/json')

        var val = document.querySelector('#name').value
        
        var jsonStr = JSON.stringify({greet:val})
        xhttp.send(jsonStr)

   }

    function fetchData(){

        var xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText)

                    //JS object from JSON string
                    var obj = JSON.parse(this.responseText)
                    document.querySelector("#content").innerHTML = obj.greet
                }
            }

        xhttp.open("GET","http://localhost:5000/")
        xhttp.send()

    }
