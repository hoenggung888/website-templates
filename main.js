var listOfLinks = document.getElementsByTagName("nav")[0];

// Gather number of sites
const numSites = 3

for (i=1;i<numSites+1;i++) {
    var webbing = document.createElement("a");
    webbing.className = "webLinks";
    webbing.innerHTML = "Website Template "+i;
    webbing.href = "/"+i;
    console.log(webbing.src);
    listOfLinks.appendChild(webbing);
}

