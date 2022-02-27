const currdate = new Date();
document.querySelector("#currdate").value = currdate;

const regex = /[A-Za-z\-\ ]+$/g;
var buspos = String(document.querySelector('#buspos').value);
var ok = regex.exec(buspos);
if (ok = 'false') {
    document.querySelector('#buspos').setAttribute("isvalid", "false");
}
else {
    document.querySelector('#buspos').setAttribute("isvalid", "true");
}
