function Search() 
{
    var searchString=document.getElementById("search").value;
    var success = false;
    var results = "";
 
    for(var i = 0; i < data.length; i++)
    {
        var match = data[i].ItemName.match(new RegExp(searchString, "i"));

        if(match != null) 
        {
            results += ("<a  href='" + data[i].WikiLink + "' title='Jailbreak Fandom Link (Ctrl + Click to open in new tab)'>" + "<image src=\"" + data[i].ImgLink+ "\""+ ' onerror="this.onerror=null; this.src="https://www.w3schools.com/html/pic_trulli.jpg">');
            results += ("<p class='jt-ItemName'>" + data[i].ItemName + "</a>" + " " + "<span style='font-size:1.5rem;' class='badge bg-primary'>"+ data[i].Demand +"</span>"+"</p>");
            results += ("<p class='jt-Category jt-orange'>" + data[i].Subcategory+ " "+ data[i].Category+ "</p>");
            results += ("<p class='jt-Unobtainable jt-blue'"+ ">" + data[i].Unobtainable+ "</p>");
            results += ("<p class='jt-ReleasePrice'>" + "Released at "+ data[i].ReleasePrice+ "</p>");
            results += ("<p class='jt-CurrentValue jt-green'>" + "Worth "+ data[i].CurrentValue+ "</p>")
            success = true;
        }
    }

    results += ("</table>");

    if(success) 
    {
        document.getElementById("SearchDisplay").style.display = 'block';
        document.getElementById("NoMatchDisplay").style.display = 'none';
        document.getElementById("SearchDisplay").innerHTML = results;
    }
    else
    {
        document.getElementById("NoMatchDisplay").style.display = 'block';
        document.getElementById("SearchDisplay").style.display = 'none';
    }

    return false;
}