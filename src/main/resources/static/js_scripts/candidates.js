
let candidateList;


fetchCandidates()

async function fetchCandidates (){

        const fetching = await fetch("http://localhost:9090/view_all_candidates")
        candidateList = await fetching.json()
        putInHTML(await candidateList)

}


function putInHTML(candidates) {

                for (let i = 0; i < candidates.length; i++) {
                        document.getElementById("liste_kand").innerHTML +=
                            `<li>` + "Navn: " + candidates[i].fullName +
                            " || Antal Stemmer: " + candidates[i].votes +
                            " || Parti: " + candidates[i].party + `</li>`

                }
}


function sortedOrUnsorted(){
        candidateList = fetchCandidates();

        if(counter === 0){
                document.getElementById("html_button").innerHTML = "Sortér alle kandidater"
                putInHTML(candidateList)
        }

        if(counter!== 0){
                putSortedListInHtml(candidateList)
                document.getElementById("html_button").blink = "Sorteret"
        }
}

function putSortedListInHtml(candidatesToSort){

        candidatesToSort = sortCandidates(candidateList);

        for(let i = 0; i < candidateList.length; i++){
                candidateList.pop();
        }

        for (let i = 0; i < candidatesToSort.length; i++) {
                document.getElementById("liste_kand").innerHTML +=
                    `<li>` + "Navn: " + candidatesToSort[i].fullName +
                    " || Antal Stemmer: " + candidatesToSort[i].votes +
                    " || Parti: " + candidatesToSort[i].party + `</li>`

                document.location.reload(true);
                 candidateList = candidatesToSort;
        }
}

function sortCandidates() {

        candidateList.sort((a, b) => {
                return (a.party).localeCompare(b.party)
                })
        console.log(candidateList)
        return candidateList;
}