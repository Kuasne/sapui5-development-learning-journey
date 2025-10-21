sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("myapp.controller.Main", {
        onItemSelect: function (oEvent) {
            const sKey = oEvent.getParameter("item").getKey();
            MessageToast.show("Item selecionado: " + sKey);
        },

        onToggleSideNav: function () {
            const oSideNav = this.byId("sideNavigation");
            oSideNav.setExpanded(!oSideNav.getExpanded());
        }
    });
});
