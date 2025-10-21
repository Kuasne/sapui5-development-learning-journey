sap.ui.define(["sap/ui/core/mvc/XMLView", "sap/m/Text"], function (XMLView, Text) {
    "use strict";
    
    new Text({
        text: "Hello, SAPUI5!"
    }).placeAt("app");

    XMLView.create({
        id: "App",
        viewName: "sap.training.exc.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    
});

