const xhrRequest = new xhrRequest();
let requstMdethod = "POST";
let link = "github.com";

//init
xhrRequest.open(requstMdethod, link);

//request response
xhrRequest.onreadystatechange =  function (event) {
    let {target} = event;

    if (target.readyState === XMLHttpRequest.DONE) {
        var {status} = target;
        const st = status => {

            if (st === 0 || (st >= 200 && st < 400)) {

                //200 ok
                return 200

                //if err
            }else{
                alert = ("test_err");

            }
        }

    }
};

xhrRequest.send();