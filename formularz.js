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
    }, false);
  })();

function handleSubmit(event) {
    event.preventDefault(); // zatrzymuje domyślną akcję formularza
}

function licz() {

    // zmienne
    let box_name = document.getElementById("box_name").value
    let box_width = document.getElementById("box_width").value
    let box_height = document.getElementById("box_height").value
    let box_depth = document.getElementById("box_depth").value

    // objetosc
    let volume = box_width * box_height * box_depth;
    volume = parseFloat(volume.toFixed(2))

    // suma objetosci
    let sum_volume = document.getElementById("sum_volume").innerText;
    sum_volume = parseFloat(sum_volume) + volume;
    sum_volume = sum_volume.toFixed(2);
    document.getElementById("sum_volume").innerText = sum_volume;

    // tabelka
    let tr = document.createElement("tr");
    let tbody = document.getElementById("box_list");

    tbody.appendChild(tr);

    let td = document.createElement("td");
    td.innerText = box_name;
    td.className = "name"
    tbody.lastChild.appendChild(td);

    td = document.createElement("td");
    td.innerText = box_width;
    td.className = "width"
    tbody.lastChild.appendChild(td);

    td = document.createElement("td");
    td.innerText = box_height;
    td.className = "height"
    tbody.lastChild.appendChild(td);

    td = document.createElement("td");
    td.innerText = box_depth;
    td.className = "depth"
    tbody.lastChild.appendChild(td);

    td = document.createElement("td");
    td.innerText = volume;
    td.className = "volume"
    tbody.lastChild.appendChild(td);
}

