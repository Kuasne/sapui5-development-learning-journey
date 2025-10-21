sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.App", {
        onInit: function () {

        },

        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var sKey = oItem.getKey();

            switch (sKey) {
                case "home":
                    MessageToast.show("Página Home Selecionada");
                    break;
                case "customers":
                    MessageToast.show("Página Clientes Selecionada");
                    break;
                case "settings":
                    MessageToast.show("Configurações Selecionadas");
                    break;
                default:
                    MessageToast.show("Item desconhecido selecionado"); 
            }
        }
    });
});

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.comp.sample.smartfield.SmartFieldWithValueHelp.Main");
});
