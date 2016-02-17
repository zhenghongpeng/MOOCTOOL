(function(){
    $(init);
    var $movieTitleTxt;
    var $searchBtn;
    var SEARCH_URL = "http://www.omdbapi.com/?s=TITLE";
    var $searchResults;

    function init (){

       // alert("Hello from JQurey")
        $movieTitleTxt =$("#movieTitleTxt");
        $searchBtn = $("#searchBtn");
        $searchResults =$("#searchResults tbody")


        $searchBtn.click(searchMovie);
    }

        function searchMovie(){

            var title = $movieTitleTxt.val();

            var url = SEARCH_URL.replace("TITLE", title);

            //alert ("url " +url);

            $.ajax({
                url: url,
                success: renderSearchResults
            });

        }
    function renderSearchResults(response){

        //console.log(response);

        var totalResults = response.totalResutls;
        var movies = response.Search;

        for (var m=0; m<movies.length;m++){

            var movie = movies[m];
            //console.log(movie);
            var posterUrl = movie.Poster;
            var title = movie.Title;
            var year = movie.Year;
            var imdbID = movie.imdbID;

            var $tr =$("<tr>")
                .attr("id", imdbID)
                .click("fetchMovieDetails");

            var $img =$("<img>")
                .attr("src", posterUrl)
                .addClass("posterThmb");

            var $td = $("<td>")
                .append($img)
                .appendTo($tr)

            var $td = $("<td>")
                .append(title)
                .appendTo($tr)

            var $td = $("<td>")
                .append(year)
                .appendTo($tr)

            var $td = $("<td>")
                .append(imdbID)
                .appendTo($tr)


            $searchResults.append($tr);

        }


    }

    function fetchMovieDetails(event){

        //alert("fetchMovieDetails");
        console.log(event);
    }

})();
