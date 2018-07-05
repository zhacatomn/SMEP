$(document).ready(function(){
    // add sidebar and navbar
    $('body').prepend(
    '<div class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">'
        + '<a class="navbar-brand" href="#">SMEP</a>'
        + '<button class="navbar-toggler d-block d-lg-none" type="button" id="nav-btn">'
        +    '<span class="navbar-toggler-icon"></span>'
        + '</button>'
    + '</div>'
    );

    $("#main-container").prepend(
    '<nav class="bg-white sidebar d-block open" id="sidebar">'
        + '<ul class="nav flex-column">'
            + '<li class="nav-item">'
                + '<h3 class="nav-link">Welcome, Student</h3>'
            + '</li>'
            + '<li class="nav-item" id="nav1">'
                + '<a href="dashboard.html" class="nav-link text-dark">Current Boards</a>'
            + '</li>'
            + '<li class="nav-item" id="nav2">'
                + '<a href="#" class="nav-link text-dark">Logout</a>'
            + '</li>'
        + '</ul>'
    +'</nav>'
    );

    var toggleSidebar = false;
    var mini = false;
    
    // if window initial size is smaller than lg
    if($("#nav-btn").css("display") != "none"){
        mini = true;
        $("#sidebar").removeClass('open');
        $("#main").removeClass('main-mini');    
    }
    

    $(window).resize(function(){
        if($("#nav-btn").css("display") == "none"){
            mini = false;
            $("#sidebar").addClass('open');
            $("#main").addClass('main-mini'); 
        } 
        else{
            if(!mini){
                mini = true;
                toggleSidebar = false;
                $("#sidebar").removeClass('open');
                $("#main").removeClass('main-mini');    
            }
        }
    });

    $("#nav-btn").on("click", function(){
        if(!toggleSidebar){
            $("#sidebar").addClass('open');
            toggleSidebar = true;
        }
        else{
            $("#sidebar").removeClass('open');
            toggleSidebar = false;
        }
    });

});