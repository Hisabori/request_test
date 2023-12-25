function JSON_get() {
    $.ajax({
        type: "get",
        url: "data.json",
        dataset_type: "json",
        success: function ("success");
    alert(data);
    str = '<TR>';
    $.each(data., function (i){
        str +='<TD>'+
           data[i].no +''
});
}
