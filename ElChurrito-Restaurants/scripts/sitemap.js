jQuery(document).ready(function () {
    jQuery("#submenu").hide();
    function showMenu() {
        jQuery("#submenu").toggle(1000);
    }

    $("#menuItem").click(showMenu);
});

jQuery(document).ready(function () {
    jQuery("#giftCards").hide();
    function showMenu() {
        jQuery("#giftCards").toggle(1000);
    }

    $("#events").click(showMenu);
});