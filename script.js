function result() {

    var students= {

        GAURI :{
            english: "97",
            science: "78",
            maths: "94",
        },
        JOHN :{
            english: "94",
            science: "75",
            maths: "84",
        },
        ADITYA :{
            english: "77",
            science: "68",
            maths: "91",
        },
        JAY :{
            english: "57",
            science: "89",
            maths: "90",
        }
    }


    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML='<hr> There is no information. </hr>' ;
    } else {
        output.innerHTML='<hr> English score is 97. <hr>Science score is 78. <hr> Maths score is 89 </hr>';

    };
};