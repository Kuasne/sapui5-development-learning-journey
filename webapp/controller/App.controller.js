sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.App", {
        onInit: function () {
            // Código de inicialização, se necessário
        },

        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var sKey = oItem.getKey();
            var sItemText = oItem.getText(); // Pega o texto do item clicado

            // Mostra uma mensagem com o texto do item
            MessageToast.show("Você clicou em: " + sItemText);

            // Você pode adicionar lógica aqui para navegar para outras
            // views ou carregar dados diferentes baseado no item clicado (sKey)
        }

        // Não precisamos mais das funções onInputChange e onButtonPress
        // porque removemos o Input e o Button da view App.view.xml.
        // Se você os adicionar novamente, descomente/adicione as funções.
        /*
        onInputChange: function(oEvent){
             var sInputValue = oEvent.getParameter("value");
             console.log("Input mudou para: ", sInputValue);
        },

        onButtonPress: function(){
             MessageToast.show("Botão clicado!");
        }
        */
    });
});