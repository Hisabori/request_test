function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById("result").innerHTML = data[0].date + ": " + data[0].patientCount;
        }
    };
    xhr.open("GET", "js/test/ncmh_data/openDataSet/data/test_data_set.json", true);
    xhr.send();
}
