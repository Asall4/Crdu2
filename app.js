
document.addEventListener("DOMContentLoaded", function(){

loadTable([])

})

function loadTable(data){
    const body = document.querySelector("#body")
    if (data.length === 0){

        body.innerHTML = "<tr> <td class= 'no-class' colspan='6'> no data </td>  </tr>" ;

    }
}