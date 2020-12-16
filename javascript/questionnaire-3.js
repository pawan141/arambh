///============first page=======///
function myFirstFunction() {
    var brandName = document.getElementById('brandname').value;
    var instagram = document.getElementById('instagram').value;
    var facebook = document.getElementById('facebook').value;
    if (brandName == "" || instagram == "" || facebook == "") {
        document.getElementById('validation').innerHTML = "Please Fill the Above Fields !!!!";
        return false;
    }
    localStorage.setItem("brand", brandName);
    localStorage.setItem("insta", instagram);
    localStorage.setItem("facebok", facebook);


    console.log(brandName)
}
///======end======///


////======second page html======/////

// localStorage.setItem("malev1", 'no');
// localStorage.setItem("femalev1", 'no');
// localStorage.setItem("kidsv1", 'no');
function ageSelect() {
    var age_range = document.getElementById('age-range');
    var range_output = document.getElementById('range-output');
    range_output.innerHTML = age_range.value;
    age_range.oninput = function () {
        range_output.innerHTML = this.value;
        //a = "10 -" + this.value
        localStorage.setItem("ageGrp", this.value);
    }
}

function maleGender() {
    localStorage.setItem('malev1', 'yes');
}
function femaleGender() {
    localStorage.setItem('femalev1', 'yes')
}
function kidsGender() {
    localStorage.setItem('kidsv1', 'yes')
}

function selectAll(form1) {

    var check = document.getElementsByName('all');
    radios = document.form1.elements;
    localStorage.setItem('malev1', 'yes');
    localStorage.setItem('femalev1', 'yes');
    localStorage.setItem('kidsv1', 'yes')
    if (check[0].checked) {
        for (i = 0; i < radios.length; i++) {
            if (radios[i].type == "radio") {
                if (radios[i].id == 1) {
                    radios[i].checked = true;
                }
            }
        }
    }
}

// localStorage.setItem("metrov1", 'no');
// localStorage.setItem("tier1v1", 'no');
// localStorage.setItem("tier2v1", 'no');
// localStorage.setItem("internationalv1", 'no');

function geographySelect(geographyValue) {

    if (geographyValue == "metro") {
        localStorage.setItem("metrov1", 'yes');
    }
    if (geographyValue == "tier1") {
        localStorage.setItem("tier1v1", 'yes');
    }
    if (geographyValue == "tier2") {
        localStorage.setItem("tier2v1", 'yes');
    }
    if (geographyValue == "international") {
        localStorage.setItem("internationalv1", 'yes');
    }

}
function selectGeographyAll(form2) {
    var check = document.getElementsByName('geoAll');
    radios = document.form2.elements;
    localStorage.setItem("metrov1", 'yes');
    localStorage.setItem("tier1v1", 'yes');
    localStorage.setItem("tier2v1", 'yes');
    localStorage.setItem("internationalv1", 'yes');
    if (check[0].checked) {

        for (i = 0; i < radios.length; i++) {
            if (radios[i].type == "radio") {
                if (radios[i].id == 1) {
                    radios[i].checked = true;
                }
            }
        }
    }
}
///====end=====///

///============third page=======///


function sales() {
    var sales_range = document.getElementById('sales-range');
    var sales_output = document.getElementById('sales-output');

    sales_output.innerHTML = sales_range.value
    sales_range.oninput = function () {
        sales_output.innerHTML = this.value

    }

}
function growth() {
    var growth_range = document.getElementById('growth-range');
    var growth_output = document.getElementById('growth-output');


    growth_output.innerHTML = growth_range.value;


    growth_range.oninput = function () {
        growth_output.innerHTML = this.value;

    }
}



function myTirdFunction() {

    var email = document.formFileds.email.value;
    var mbile = document.formFileds.mobile.value;
    document.getElementById('brandname').value = localStorage.getItem("brand");
    document.getElementById('instagram').value = localStorage.getItem("insta");
    document.getElementById('facebook').value = localStorage.getItem("facebok");
    document.getElementById('male-gender').value = localStorage.getItem("malev1");
    document.getElementById('female-gender').value = localStorage.getItem("femalev1");
    document.getElementById('kids-gender').value = localStorage.getItem("kidsv1");
    document.getElementById('age-range').value = localStorage.getItem("ageGrp");
    document.getElementById('metro').value = localStorage.getItem("metrov1");
    document.getElementById('tier1').value = localStorage.getItem("tier1v1");
    document.getElementById('tier2').value = localStorage.getItem("tier2v1");
    document.getElementById('international').value = localStorage.getItem("internationalv1");
    // var brand = document.formFileds.brand.value
    // brand.value = localStorage.getItem("brandname");

    if (email == "" || mbile == "") {
        return false;
    }
}
///======end======///
function response() {

    var mbile = document.getElementById('mbileno').value;
    var email = document.getElementById('emailaddress').value;
    if (mbile == "" || email == "") {
        document.getElementById('errormsg1').innerHTML = 'Please Fill Above Fields !!'
        return false
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('errormsg').innerHTML = "Invalid your Email Address !!";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('errormsg').innerHTML = "Invalid your Email Address !!";
        return false;
    }
    setTimeout("location.href = 'thank-you.html';", 1000)
}
