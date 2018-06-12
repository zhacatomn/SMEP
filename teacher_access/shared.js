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
    '<nav class="col-lg-2 bg-white sidebar d-none d-lg-block" id="sidebar">'
        + '<div class="sidebar-sticky">'
            + '<ul class="nav flex-column">'
                + '<li class="nav-item">'
                    + '<h3 class="nav-link">Welcome, Teacher</h3>'
                + '</li>'
                + '<li class="nav-item" id="nav1">'
                    + '<a href="dashboard.html" class="nav-link text-dark">Current Boards</a>'
                + '</li>'
                + '<li class="nav-item" id="nav2">'
                    + '<a href="create.html" class="nav-link text-dark">Create Board</a>'
                + '</li>'
            + '</ul>'
        +'</div>'
    +'</nav>'
    );

    var toggleSidebar = false;
    var sidebarAttr = "w-50 d-block sidebar-fixed";
    // if window initial size is smaller than lg
    if($("#sidebar").css("display") == "none"){
        $("#nav-btn").removeClass("d-none");
    }

    $(window).resize(function(){
        if($("#nav-btn").css("display") == "none"){
            $("#sidebar").removeClass(sidebarAttr);
            toggleSidebar = false;
        } 
    });

    $("#nav-btn").on("click", function(){
        if(!toggleSidebar){
            $("#sidebar").addClass(sidebarAttr);
            toggleSidebar = true;
        }
        else{
            $("#sidebar").removeClass(sidebarAttr);
            toggleSidebar = false;
        }
    });

});