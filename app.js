function Search() 
{
    var searchString=document.getElementById("search").value;
    var success = false;
    
    var results = "";
    results += ("<table>");
    results += ("<tr>");
    results += ("<th>Item Name</th>");
    results += ("<th>Category</th>");
    results += ("<th>Sub Category</th>");
    results += ("<th>Current Value</th>");
    results += ("<th>Unobtainable</th>");
    results += ("<th>Demand</th>");
    results += ("<th>Release Price</th>");
    results += ("<th>Wiki Link</th>");
    results += ("</tr>");

    for(var i = 0; i < data.length; i++)
    {
        var match = data[i].ItemName.match(new RegExp(searchString, "i"));

        if(match != null) 
        {
            results += ("<tr>");
            results += ("<td>" + data[i].ItemName+ "</td>");
            results += ("<td>" + data[i].Category+ "</td>");
            results += ("<td>" + data[i].Subcategory+ "</td>");
            results += ("<td>" + data[i].CurrentValue+ "</td>");
            results += ("<td " + (data[i].Unobtainable == "True" ? "class='unobtainable'" : "") + ">" + data[i].Unobtainable+ "</td>");
            results += ("<td>" + data[i].Demand+ "</td>");
            results += ("<td>" + data[i].ReleasePrice+ "</td>");
            results += ("<td><a target='_blank' href='" + data[i].JailbreakWikiLink+ "'>" + data[i].JailbreakWikiLink+"</a></td>");
            results += ("</tr>");
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