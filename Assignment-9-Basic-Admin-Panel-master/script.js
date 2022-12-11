window.addEventListener("load", () => {
    GetData();
})


var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

var table = document.querySelector(".body")

function GetData(){
fetch(url)           
  .then(response => response.json())
  .then(data => localStorage.setItem("Data", JSON.stringify(data)))
  LoadData()
}

let MyData = JSON.parse(localStorage.getItem("Data" ))


function LoadData(){
MyData.map((item) => {
    table.innerHTML += `<tr class="data-row">
                                <td class="column1">${item.id}</td>
                                <td class="column2">${item.firstName}</td>
                                <td class="column3">${item.lastName}</td>
                                <td class="column4">${item.email}</td>
                                <td class="column5">${item.phone}</td>
                            </tr> 
    `
})
    var dataItem =  document.querySelectorAll(".data-row");
    dataItem.forEach((item) => item.addEventListener("click" , function(e){
        var id = e.currentTarget.children[1].innerHTML;
        var dataItem =  document.querySelectorAll(".data-row");
        dataItem.forEach((item) => item.classList.remove("active"))
        e.currentTarget.classList.add("active");
        localStorage.setItem("id", JSON.stringify(id));
        filterItem()
    }))

    var tr = document.querySelectorAll(".data-row")
    
    searchBar(tr)

  };



  function filterItem(){
  let userId = JSON.parse(localStorage.getItem("id" ));
   filterSingle = MyData.filter((item) => item.firstName == userId);
   var info = document.querySelector("#info-content")
   info.style.display = "block";
      
   info.innerHTML = ""

   filterSingle.map((item) => {
    info.innerHTML += `
    <div><b>User selected:</b> ${item.firstName} ${item.lastName}</div>
    <div>
        <b>Description: </b>
        <textarea cols="50" rows="5" readonly>
        ${item.description}
        </textarea>
    </div>
    <div><b>Address:</b> ${item.address.streetAddress}</div>
    <div><b>City:</b> ${item.address.city}</div>
    <div><b>State:</b> ${item.address.state}</div>
    <div><b>Zip:</b> ${item.address.zip}</div>
    `
   })
}




function searchBar(tr){
    var searchBox = document.querySelector("#search-box");

    searchBox.addEventListener("keyup" , function(e){
    for (i = 0; i < tr.length; i++)
    {
    
       td = tr[i].querySelectorAll(".column2");
    //    console.log(td)
    
     for(j=0;j<td.length;++j) 
           {
            //   console.log(td[j], "k");
                if (td[j]) {
                  if (td[j].textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
                     tr[i].style.display = "flex";
                  } else {
                     tr[i].style.display = "none";
                    }
               }
          }
    }
    })
    }