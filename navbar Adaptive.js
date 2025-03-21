document.addEventListener('DOMContentLoaded', function onLoad() {

    //Find the view
    const view = new URLSearchParams(window.location.search);
    
    //Construct the navbar based on the current view.
    let viewHTML = "";
    if (view.get("view")) {
        switch (view.get("view").toLowerCase()) {
            case "visitor":
                viewHTML = `
                    <li class="dropdown"><a href="Visitor.html" class="dropbtn">Visitor</a>
                        <div class="dropdown-content">
                            <a href="AH.html">Allyn Hall</a>
                            <a href="CAC.html">Creative Arts Center</a>
                            <a href="MH.html">Millett Hall</a>
                            <a href="SSC.html">Student Success Center</a>
                            <a href="SU.html">Student Union</a>
                            <a href="UH.html">University Hall</a>
                        </div>
                    </li>
                `;
                break;
            case "student":
                viewHTML += `
                    <li class="dropdown"><a href="Student.html" class="dropbtn">Student</a>
                        <div class="dropdown-content">
                            <a href="AH.html">Allyn Hall</a>
                            <a href="BS1&2.html">Biological Sciences I & II</a>
                            <a href="BL.html">Brehm Laboratory</a>
                            <a href="CAC.html">Creative Arts Center</a>
                            <a href="DL.html">Diggs Laboratory</a>
                            <a href="DBL.html">Dunbar Library, Paul Laurence</a>
                            <a href="LA.html">Library Annex</a>
                            <a href="FCH.html">Fawcett Hall</a>
                            <a href="HS.html">Health Sciences</a>
                            <a href="JRC.html">Joshi Research Center</a>
                            <a href="M&MS.html">Mathematical and Microbiological Sciences</a>
                            <a href="MS.html">Medical Sciences</a>
                            <a href="MH.html">Millett Hall</a>
                            <a href="NEC.html">Neuroscience Engineering Collaboration</a>
                            <a href="OH.html">Oelman Hall</a>
                            <a href="RH.html">Rike Hall</a>
                            <a href="REC.html">Russ Engineering Center</a>
                            <a href="SSC.html">Student Success Center</a>
                            <a href="SU.html">Student Union</a>
                            <a href="THMP.html">Tom Hanks Center for Motion Pictures</a>
                            <a href="UH.html">University Hall</a>
                            <a href="WH.html">White Hall</a>
                        </div>
                    </li>
                `;
                break;
            case "staff":
                viewHTML += `
                    <li class="dropdown"><a href="Staff.html" class="dropbtn">Staff</a>
                        <div class="dropdown-content">
                            <a href="AH.html">Allyn Hall</a>
                            <a href="BS1&2.html">Biological Sciences I & II</a>
                            <a href="BL.html">Brehm Laboratory</a>
                            <a href="CAC.html">Creative Arts Center</a>
                            <a href="DL.html">Diggs Laboratory</a>
                            <a href="DBL.html">Dunbar Library, Paul Laurence</a>
                            <a href="LA.html">Library Annex</a>
                            <a href="FCH.html">Fawcett Hall</a>
                            <a href="HS.html">Health Sciences</a>
                            <a href="JRC.html">Joshi Research Center</a>
                            <a href="M&MS.html">Mathematical and Microbiological Sciences</a>
                            <a href="MS.html">Medical Sciences</a>
                            <a href="MH.html">Millett Hall</a>
                            <a href="NEC.html">Neuroscience Engineering Collaboration</a>
                            <a href="OH.html">Oelman Hall</a>
                            <a href="RH.html">Rike Hall</a>
                            <a href="REC.html">Russ Engineering Center</a>
                            <a href="SSC.html">Student Success Center</a>
                            <a href="SU.html">Student Union</a>
                            <a href="THMP.html">Tom Hanks Center for Motion Pictures</a>
                            <a href="UH.html">University Hall</a>
                            <a href="WH.html">White Hall</a>
                        </div>
                    </li>
                `;
            default:
                break;
        }
        viewHTML += `
            <div class="separator"></div>
        `;
    }



    document.getElementById("navbar").innerHTML += `
        <ul>
            <li><a href="index.html">Home</a></li>
            <div class="separator"></div>

        `
    +
    viewHTML 
    + `
            <li class="dropdown"><a href="POI.html" class="dropbtn">Places of Interest</a>
                <div class="dropdown-content">
                    <a href="AGT.html">Alumni Grove and Tower</a>
                    <a href="Amp.html">Amphitheater</a>
                    <a href="CG.html">Community Garden</a>
                    <a href="DC.html">Dunbar Café</a>
                    <a href="RC.html">ReyRey Café</a>
                    <a href="TH.html">The Hangar</a>
                    <a href="TR.html">The Rock</a>
                    <a href="TPlaza.html">Trustees Plaza</a>
                    <a href="TP.html">Turning Points</a>
                    <a href="UM.html">Union Market</a>
                </div>
            </li>
        </ul>
    `;
    //Append appropriate view to all links on the page.
    if (view.get("view")) {
        for (const element of document.getElementsByTagName("a")) {
            element.href += window.location.search;
        }
    }
});
