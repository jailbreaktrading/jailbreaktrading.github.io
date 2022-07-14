function Search() 
{
    var searchString=document.getElementById("search").value;
    var success = false;
    
    var results = "";
    /* results += ("<table>");
    results += ("<tr>");
    results += ("<th>Item Name</th>");
    results += ("<th>Category</th>");
    results += ("<th>Unobtainable</th>");
    // results += ("<th>Sub Category</th>");
    results += ("<th>Release Price</th>");
    results += ("<th>Current Value</th>");
    results += ("<th>Demand</th>");
    // results += ("<th>Wiki Link</th>");
    results += ("</tr>"); */

    for(var i = 0; i < data.length; i++)
    {
        var match = data[i].ItemName.match(new RegExp(searchString, "i"));

        if(match != null) 
        {
            // results += ("<tr>");
            // results += ("<td>" + data[i].ItemName+ "</td>");
            results += ("<p class='jt-ItemName jt-red'><a target='_blank' href='" + data[i].JailbreakWikiLink+ "'>" + data[i].ItemName+" ("+data[i].Demand+")"+"</a></p>");
            results += ("<p class='jt-Category jt-orange'>" + data[i].Subcategory+ " "+ data[i].Category+ "</p>");
            results += ("<p class='jt-Unobtainable jt-blue'"+ ">" + data[i].Unobtainable+ "</p>");
            // results += ("<td>" + data[i].Subcategory+ "</td>");
            results += ("<p class='jt-ReleasePrice'>" + "Released at "+ data[i].ReleasePrice+ "</p>");
            results += ("<p class='jt-CurrentValue jt-green'>" + "Worth "+ data[i].CurrentValue+ "</p>");
            // results += ("<p class='jt-Demand'>" + "Demand: "+ data[i].Demand+ "</p>");
            // results += ("<td><a target='_blank' href='" + data[i].JailbreakWikiLink+ "'>" + "Wiki Link"+"</a></td>");
            // results += ("</tr>");
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