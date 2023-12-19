var siteName = document.getElementById("sn");
var siteURL = document.getElementById("su");
var allWebsites = [];
var transferbtn = document.getElementById("add_btn");
var index = 0;

function addNewProduct() {

    var webSiteData = {
        site_name: siteName.value,
        site_url: siteURL.value
    }
    if (validateURL(webSiteData.site_url) == true) {

        if (transferbtn.innerHTML == "Submit") {
            allWebsites.push(webSiteData);
        } else {
            for (let i = 0; i < allWebsites.length; i++) {
                if (index == i) {
                    allWebsites.splice(i, 1, webSiteData)
                }
            }
            transferbtn.innerHTML = "Submit";
        }
        console.log(allWebsites);
        clearelement();
        displayProducts();
    } else {
        alert("please enter valid URL such(should start with 'www.' and should end with '.com')");
    }

}

function clearelement() {
    siteName.value = "";
    siteURL.value = "";
}

function displayProducts() {
    var test = "";
    var index = 0;
    // <td>${allWebsites[i].Name}</td>
    //<td><a href="http://${allWebsites[i].URL}" class="btn btn-success" target="_blank">Visit</a></td>
    for (var i = 0; i < allWebsites.length; i++) {
        test += `<tr>
        <td>${index=i+1}</td>
        <td>${allWebsites[i].site_name}</td>
        <td><a href="http://${allWebsites[i].site_url}" class="btn btn-success" target="_blank">Visit</a></td>
        <td><button type="button" onclick="deleteProduct(${i})" class="btn btn-danger">X</button></td>
        <td><button type="button" onclick="updateProduct(${i})" class="btn btn-primary">Update</button></td>
    </tr>`;
    }
    document.getElementById("tbody").innerHTML = test;
}


function deleteProduct(id) {

    allWebsites.splice(id, 1);
    clearelement();
    displayProducts();

}

function updateProduct(i) {

    transferbtn.innerHTML = "Update";
    // console.log(transferbtn);
    siteName.value = allWebsites[i].site_name;
    siteURL.value = allWebsites[i].site_url;
    index = i;

}

function searchElement(term) {
    var test = "";
    var index = 0;
    for (let i = 0; i < allWebsites.length; i++) {
        if (allWebsites[i].site_name.toLowerCase().includes(term.trim().toLowerCase()) == true) {
            test += `
            <td>${index=i+1}</td>
            <td>${allWebsites[i].site_name}</td>
            <td><a href="http://${allWebsites[i].site_url}" class="btn btn-success" target="_blank">Visit</a></td>
            <td><button type="button" onclick="deleteProduct(${i})" class="btn btn-danger">X</button></td>
            <td><button type="button" onclick="updateProduct(${i})" class="btn btn-primary">Update</button></td>
        </tr>       
            `
        }
    }

    document.getElementById("tbody").innerHTML = test;

}

function validateURL(urlsite) {
    var regx = /^w{3}\.[a-z]{2,}\.com$/gi;
    // var regx2 = /^[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)%/gi;
    return regx.test(urlsite);
}