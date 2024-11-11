(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
      document.getElementById("tab").innerHTML = localStorage.getItem('fuckThis');
    }, false);
  })();

function handleSubmit(event) {
    event.preventDefault(); // zatrzymuje domyślną akcję formularza
}


window.addEventListener("load", function() {

    let rows = document.querySelectorAll("#table tr");

    rows.forEach(row => {
        row.addEventListener("click", function() {
            edit = true;

            document.getElementById("note_title").value = document.getElementById("title_id_"+numberID).innerText;
            document.getElementById("note_content").value = document.getElementById("content_id_"+numberID).innerText;

            localStorage.setItem("nrID", numberID);
        });
    });
});

function handleSubmit(event) {
    event.preventDefault(); // Zatrzymanie domyślnej akcji formularza
}

edit = false;
let nrID = 1;

function addNote() {

    let note_title = document.getElementById("note_title").value;
    let note_content = document.getElementById("note_content").value;
    let table = document.getElementById("table");
    let numberID = table.childElementCount;

    if(edit == false) {

        let tr = document.createElement("tr");
        tr.id = "tr_id_"+numberID;

        tr.addEventListener("click", function() {
            edit=true;
            
            document.getElementById("note_title").value = document.getElementById("title_id_"+numberID).innerText;
            document.getElementById("note_content").value = document.getElementById("content_id_"+numberID).innerText;

            localStorage.setItem("nrID", numberID);
        });

        table.appendChild(tr);

        let td = document.createElement("td");
        td.id = "title_id_"+numberID;
        td.innerText = note_title;
        table.lastChild.appendChild(td);

        td = document.createElement("td");
        td.id = "content_id_"+numberID;
        td.innerText = note_content;
        table.lastChild.appendChild(td);

        localStorage.setItem('fuckThis', document.getElementById('table').innerHTML);
    } else {
        document.getElementById("title_id_"+localStorage.getItem("nrID")).innerText = note_title;
        document.getElementById("content_id_"+localStorage.getItem("nrID")).innerText = note_content;

        edit = false;

        localStorage.setItem('fuckThis', document.getElementById('table').innerHTML);
    }

}

