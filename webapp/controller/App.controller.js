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
        },

        // --- Novas Funções ---
        onValueHelpTransport: function() {
            MessageToast.show("Ajuda para Transporte clicada!");
            // Aqui entraria a lógica para abrir um Dialog de seleção
        },

        onValueHelpCategory: function() {
            MessageToast.show("Ajuda para Categoria clicada!");
            // Aqui entraria a lógica para abrir um Dialog de seleção
        },

        onSavePress: function(){
             MessageToast.show("Botão Salvar clicado!");
             // Aqui você pode adicionar lógica para ler os valores dos inputs
             // Exemplo:
             // var sTransporte = this.byId("inputTransport").getValue();
             // var sCategoria = this.byId("inputCategory").getValue();
             // var oDataCriacao = this.byId("dateCreationSimple").getDateValue(); // Pega o objeto Date
             // console.log("Transporte:", sTransporte);
             // console.log("Categoria:", sCategoria);
             // console.log("Data Criação:", oDataCriacao);
        }
    });
});