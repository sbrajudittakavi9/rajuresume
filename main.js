function loadJson(file, callback) {
    var xhr = new XMLHttpRequest();//obj creation for httprequest amd communication with server
    xhr.overrideMimeType("application/json");//what type of file it is?
    xhr.open("GET", file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == "200") {
            /*5types ready states--no request is 0
                                    resquest is 1
                                    request and send to server is 2
                                    resquest and processing is 3
                                    request nd processing and response is 4 
             status:-
            1 series ---informational errors
            2        ---succesful msgs
            3        ---navigational 
            4           client side 
            5           server side erros
              */
            callback(xhr.responseText);
        }
    };

    xhr.send(); //for sending the null value to server
}

loadJson("data.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);

    //definition of the function 
    career(data.career);
    education(data.education);
    skills(data.skills);
})
var childTwo = document.querySelector(".child2");//document.querySelector is used for calling html elements in js file

function career(careerInfo) {

    var hd = document.createElement("h4");
    hd.textContent = "Career Objective";
    childTwo.appendChild(hd);
    var hr = document.createElement("hr");
    var but = document.createElement("button");
    childTwo.appendChild(hr);
    var careerP = document.createElement("p");//creating html elements
    careerP.textContent = careerInfo.info;
    childTwo.appendChild(careerP);

}
function education(educationInfo) {
    var hd = document.createElement("h4");
    hd.textContent = "Education qualification";
    childTwo.appendChild(hd);
    var hr = document.createElement("hr");
    childTwo.appendChild(hr);
    var tab = document.createElement("table");
    childTwo.appendChild(tab);
    tab.border = 1;
    var tr1 = "<tr><td>Graduation</td><td>Institute</td><td>Data</td></tr>";//anthor way of creating an html element   
    var tr2 = "";
    for (var i = 0; i < educationInfo.length; i++) {
        tr2 += "<tr><td>" + educationInfo[i].graduation + "</td><td>" + educationInfo[i].institute + "</td><td>" + educationInfo[i].data + "</td></tr>";
    }
    tab.innerHTML = tr1 + tr2; //for dispalying html elements
}
function skills(skillsInfo) {
    var hd = document.createElement("h4");
    hd.textContent = "Technical Skills";
    childTwo.appendChild(hd);
    var hr = document.createElement("hr");
    childTwo.appendChild(hr);

    for (var i = 0; i < skillsInfo.length; i++) {
        var titleH = document.createElement("h3");
        titleH.textContent = skillsInfo[i].title;
        childTwo.appendChild(titleH);
        var ul = document.createElement("ul");
        childTwo.appendChild(ul);
        for (var j = 0; j < skillsInfo[i].info.length; j++) {
            var li = document.createElement("li");
            li.textContent = skillsInfo[i].info[j];
            // skillsInfo[i].title = skillsInfo[j].info;
            ul.appendChild(li);
        }
    }


}