(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},23:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),o=t.n(r),c=(t(22),t(1)),s=t(2),i=t(4),u=t(3),d=t(5),m=(t(23),t(7)),p=t(10),y={previousUopSalary:0,finalUopSalary:0,previousTypeSalary:"net",finalTypeSalary:"net",previousSamePlace:"tak",finalSamePlace:"tak",previousTaxPercentage:0,finalTaxPercentage:0,previousZusType:111.25,finalZusType:139.06,previousComputer:0,finalComputer:0,previousPhone:0,finalPhone:0,previousCar:0,finalCar:0,previousFuel:0,finalFuel:0},E=Object(p.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGEDRESULTSALARY":return Object.assign({},e,{previousUopSalary:a.previousUopSalary});case"CHANGEDRESULTTYPESALARY":return Object.assign({},e,{previousTypeSalary:a.previousTypeSalary});case"CHANGEDRESULTSAMEPLACE":return Object.assign({},e,{previousSamePlace:a.previousSamePlace});case"CHANGEDRESULPERCENTAGETAX":return Object.assign({},e,{previousTaxPercentage:a.previousTaxPercentage});case"CHANGEDRESULTZUSTYPE":return Object.assign({},e,{previousZusType:a.previousZusType});case"CHANGEDRESULTCOMPUTER":return Object.assign({},e,{previousComputer:a.previousComputer});case"CHANGEDRESULTPHONE":return Object.assign({},e,{previousPhone:a.previousPhone});case"CHANGEDRESULTCAR":return Object.assign({},e,{previousCar:a.previousCar});case"CHANGEDRESULTFUEL":return Object.assign({},e,{previousFuel:a.previousFuel});case"CHANGEDRESULTSUBMIT":return Object.assign({},e,{finalUopSalary:a.finalUopSalary,finalTypeSalary:a.finalTypeSalary,finalSamePlace:a.finalSamePlace,finalTaxPercentage:a.finalTaxPercentage,finalZusType:a.finalZusType,finalComputer:a.finalComputer,finalPhone:a.finalPhone,finalCar:a.finalCar,finalFuel:a.finalFuel});default:return e}}),z=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).handleTest=function(){console.log("test"),document.querySelector(".info-pop").style.display="block"},t.handleTestExit=function(){document.querySelector(".info-pop").style.display="none"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"first-main-holder"},n.a.createElement("form",null,n.a.createElement("div",{className:"both-holder"},n.a.createElement("div",{className:"uop-holder"},n.a.createElement("h3",null,"Umowa o prace"),n.a.createElement("div",{className:"amount-holder"},n.a.createElement("p",{className:"fancy-text"},"Wpisz kwote"),n.a.createElement("label",null,n.a.createElement("input",{className:"fancy-input extra-style",onChange:this.props.handleUopSalary})),n.a.createElement("select",{className:"fancy-select",onChange:this.props.handleSalaryType},n.a.createElement("option",{value:"net"},"Netto"),n.a.createElement("option",{value:"brut"},"Brutto"))),n.a.createElement("div",{className:"birth-place-holder"},n.a.createElement("p",{className:"fancy-text",onMouseEnter:this.handleTest,onMouseLeave:this.handleTestExit},"Czy miejsce zamieszkania jest w tym samym miejscu co miejsce pracy"),n.a.createElement("select",{className:"fancy-select",onChange:this.props.handleSamePlace},n.a.createElement("option",{value:111.25},"Tak"),n.a.createElement("option",{value:139.06},"Nie"))),n.a.createElement("p",{className:"fancy-text info-pop"},"Koszty uzyskania przychodu uzyskane z tytulu jednej umowy wynosza 111,25 albo 139,06 przy zamieszkaniu w miesjscowosci poza zakladem pracy")),n.a.createElement("div",{className:"b2b-holder"},n.a.createElement("h3",null,"Umowa B2B"),n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},'Ekwiwalent na fakturze "na reke" (bez vat23%)'),n.a.createElement("input",{className:"fancy-input b2b-input extra-style"})),n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Wybierz % podatku [%]"),n.a.createElement("select",{className:"fancy-select b2b-select",onChange:this.props.handlePercentageTax},n.a.createElement("option",null,"18"),n.a.createElement("option",null,"19"),n.a.createElement("option",null,"32"))),n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Podstawa wymiaru skladek"),n.a.createElement("select",{className:"fancy-select b2b-select",onChange:this.props.handleZusType},n.a.createElement("option",{value:"malyZus"},"Maly ZUS"),n.a.createElement("option",{value:"duzyZus"},"Duzy ZUS"))),n.a.createElement("div",{className:"income-cost"},n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Komputer [zl]"),n.a.createElement("input",{className:"fancy-input b2b-input",onChange:this.props.handleComputer})),n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Telefon [zl]"),n.a.createElement("input",{className:"fancy-input b2b-input",onChange:this.props.handlePhone})),n.a.createElement("label",{className:"b2b-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Samochod [zl]"),n.a.createElement("input",{className:"fancy-input b2b-input",onChange:this.props.handleCar})),n.a.createElement("label",{className:"b2b-label last-label"},n.a.createElement("p",{className:"fancy-text b2b-text"},"Paliwo [zl]"),n.a.createElement("input",{className:"fancy-input b2b-input",onChange:this.props.handleFuel}))))),n.a.createElement("div",{className:"calculate-holder"},n.a.createElement("button",{className:"fancy-button",onClick:this.props.clickHandler},"Oblicz"),n.a.createElement("p",{className:"fancy-text"},"Tyle zyskasz wiecej na reke w przypadku b2b"),n.a.createElement("div",{className:"calculate-input-holder"},n.a.createElement("label",null,"Na miesiac",n.a.createElement("input",{className:"fancy-input"})),n.a.createElement("label",null,"W ciagu roku",n.a.createElement("input",{className:"fancy-input"}))))))}}]),a}(n.a.Component),w=function(e){return{previousUopSalary:e.previousUopSalary,finalUopSalary:e.finalUopSalary,previousTypeSalary:e.previousTypeSalary,finalTypeSalary:e.finalTypeSalary,previousSamePlace:e.previousSamePlace,finalSamePlace:e.finalSamePlace,previousTaxPercentage:e.previousTaxPercentage,finalTaxPercentage:e.finalTaxPercentage,previousZusType:e.previousZusType,finalZusType:e.finalZusType,previousComputer:e.previousComputer,finalComputer:e.finalComputer,previousPhone:e.previousPhone,finalPhone:e.finalPhone,previousCar:e.previousCar,finalCar:e.finalCar,previousFuel:e.previousFuel,finalFuel:e.finalFuel}},h=Object(m.b)(w,function(e){return{handleUopSalary:function(a){var t={type:"CHANGEDRESULTSALARY",previousUopSalary:a.target.value};e(t)},handleSalaryType:function(a){var t={type:"CHANGEDRESULTTYPESALARY",previousTypeSalary:a.target.value};e(t)},handleSamePlace:function(a){var t={type:"CHANGEDRESULTSAMEPLACE",previousSamePlace:a.target.value};e(t)},handlePercentageTax:function(a){var t={type:"CHANGEDRESULPERCENTAGETAX",previousTaxPercentage:a.target.value};e(t)},handleZusType:function(a){var t={type:"CHANGEDRESULTZUSTYPE",previousZusType:a.target.value};e(t)},handleComputer:function(a){var t={type:"CHANGEDRESULTCOMPUTER",previousComputer:a.target.value};e(t)},handlePhone:function(a){var t={type:"CHANGEDRESULTPHONE",previousPhone:a.target.value};e(t)},handleCar:function(a){var t={type:"CHANGEDRESULTCAR",previousCar:a.target.value};e(t)},handleFuel:function(a){var t={type:"CHANGEDRESULTFUEL",previousFuel:a.target.value};e(t)},clickHandler:function(a){var t=E.getState(),l=t.previousUopSalary,n=t.previousTypeSalary,r=t.previousSamePlace,o=t.previousTaxPercentage,c=t.previousZusType,s=t.previousComputer,i=t.previousPhone,u=t.previousCar,d=t.previousFuel;a.preventDefault(),e({type:"CHANGEDRESULTSUBMIT",finalUopSalary:l,finalTypeSalary:n,finalSamePlace:r,finalTaxPercentage:o,finalZusType:c,finalComputer:s,finalPhone:i,finalCar:u,finalFuel:d}),console.log(t)}}})(z),k=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("tr",null,n.a.createElement("th",null,this.props.month),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2),n.a.createElement("td",null,this.props.result/2))}}]),a}(n.a.Component),b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={result:300},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"yearly-income-table-holder"},n.a.createElement("h3",null,"Roczna tabela dochodow"),n.a.createElement("div",{className:"table-mini-holder"},n.a.createElement("table",{className:"yearly-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Miesiac"),n.a.createElement("th",null,"Skladka Emerytalna"),n.a.createElement("th",null,"Skladka Rentowa"),n.a.createElement("th",null,"Skladka Chorobowa"),n.a.createElement("th",null,"Podstawa do Skladki Zdrowotnej"),n.a.createElement("th",null,"Skladka Zdrowotna"),n.a.createElement("th",null,"Skladka Zdrowotna do odliczenia"),n.a.createElement("th",null,"Koszty uzyskania przychodu"),n.a.createElement("th",null,"Podstawa do opodatkowania"),n.a.createElement("th",null,"Podatek dochodowy"),n.a.createElement("th",null,"Zaliczka na podatek dochodowy"),n.a.createElement("th",null,"Kwota Brutto"),n.a.createElement("th",null,"Kwota Netto"),n.a.createElement("th",null,"Kwota Brutto sum"),n.a.createElement("th",null,"Podstawa do opodatkowania sum")),n.a.createElement(k,{month:"Styczen",result:342}),n.a.createElement(k,{month:"Luty",result:342}),n.a.createElement(k,{month:"Marzec",result:342}),n.a.createElement(k,{month:"Kwiecien",result:342}),n.a.createElement(k,{month:"Maj",result:342}),n.a.createElement(k,{month:"Czerwiec",result:342}),n.a.createElement(k,{month:"Lipiec",result:342}),n.a.createElement(k,{month:"Sierpien",result:342}),n.a.createElement(k,{month:"Wrzesien",result:342}),n.a.createElement(k,{month:"Pazdziernik",result:342}),n.a.createElement(k,{month:"Listopad",result:342}),n.a.createElement(k,{month:"Grudzien",result:342})))))}}]),a}(n.a.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("tr",null,n.a.createElement("td",null,this.props.text),n.a.createElement("td",null,this.props.code),n.a.createElement("td",null,this.props.category),n.a.createElement("td",null,this.props.percent),n.a.createElement("td",null,this.props.sum))}}]),a}(n.a.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"table-advanced-holder"},n.a.createElement("h3",null,"Skladka wypadkowa - tabela"),n.a.createElement("table",{className:"table-topper"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Grupy dzialalnosci"),n.a.createElement("th",null,"KOD PKD"),n.a.createElement("th",null,"Kategorie Ryzyka"),n.a.createElement("th",null,"Stopy procentowe skladki"),n.a.createElement("th",null,"Wynik")))),n.a.createElement("table",{className:"table-advanced"},n.a.createElement("tbody",null,n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 finansowa i ubezpieczeniowa",code:"K",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana z obs\u0142ug\u0105 rynku nieruchomo\u015bci",code:"L",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 profesjonalna, naukowa i techniczna",code:"M",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 organizator\xf3w turystyki, po\u015brednik\xf3w i agent\xf3w turystycznych oraz pozosta\u0142a dzia\u0142alno\u015b\u0107 us\u0142ugowa w zakresie rezerwacji i dzia\u0142alno\u015bci z ni\u0105 zwi\u0105zane",code:"N-79",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana z administracyjn\u0105 obs\u0142ug\u0105 biura i pozosta\u0142a dzia\u0142alno\u015b\u0107 wspomagaj\u0105ca prowadzenie dzia\u0142alno\u015bci gospodarczej",code:"N-82",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Pozosta\u0142a dzia\u0142alno\u015b\u0107 us\u0142ugowa, gospodarstwa domowe\xa0zatrudniaj\u0105ce pracownik\xf3w; gospodarstwa domowe produkuj\u0105ce\xa0wyroby i \u015bwiadcz\u0105ce us\u0142ugi na w\u0142asne potrzeby",code:"S,T",category:2,percent:.67,sum:.0067}),n.a.createElement(g,{text:"Produkcja odzie\u017cy",code:"C-14",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Produkcja sk\xf3r i wyrob\xf3w ze sk\xf3r wyprawionych",code:"C-15",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Poligrafia i reprodukcja zapisanych no\u015bnik\xf3w informacji",code:"C-18",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Produkcja komputer\xf3w, wyrob\xf3w elektronicznych i optycznych",code:"C-26",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Handel hurtowy i detaliczny pojazdami samochodowymi; naprawa pojazd\xf3w samochodowych",code:"G-45",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Handel hurtowy, z wy\u0142\u0105czeniem handlu pojazdami samochodowymi",code:"G-46",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Handel detaliczny, z wy\u0142\u0105czeniem handlu detalicznego pojazdami samochodowymi",code:"G-47",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 detektywistyczna i ochroniarska",code:"N-80",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Administracja publiczna i obrona narodowa; obowi\u0105zkowe zabezpieczenia spo\u0142eczne, organizacje i zespo\u0142y eksterytorialne",code:"O,U",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Edukacja",code:"P",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana z kultur\u0105, rozrywk\u0105 i rekreacj\u0105",code:"R",category:3,percent:.93,sum:.0093}),n.a.createElement(g,{text:"Rybactwo",code:"A-03",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Produkcja napoj\xf3w",code:"C-11",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Produkcja wyrob\xf3w tytoniowych",code:"C-12",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Produkcja podstawowych substancji farmaceutycznych oraz lek\xf3w i pozosta\u0142ych wyrob\xf3w farmaceutycznych",code:"C-21",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Pozosta\u0142a produkcja wyrob\xf3w",code:"C-32",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Wytwarzanie i zaopatrywanie w energi\u0119 elektryczn\u0105, gaz, par\u0119 wodn\u0105, gor\u0105c\u0105 wod\u0119 i powietrze do uk\u0142ad\xf3w klimatyzacyjnych",code:"D-35",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Roboty budowlane specjalistyczne",code:"F-43",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Transport l\u0105dowy oraz transport ruroci\u0105gowy",code:"H-49",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Wynajem i dzier\u017cawa",code:"N-77",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana z zatrudnieniem",code:"N-78",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 us\u0142ugowa zwi\u0105zana z utrzymaniem porz\u0105dku w budynkach i zagospodarowaniem teren\xf3w zieleni",code:"N-81",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Opieka zdrowotna i pomoc spo\u0142eczna",code:"Q",category:4,percent:1.2,sum:.012}),n.a.createElement(g,{text:"Produkcja artyku\u0142\xf3w spo\u017cywczych",code:"C-10",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja wyrob\xf3w tekstylnych",code:"C-13",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Wytwarzanie i przetwarzanie koksu i produkt\xf3w rafinacji ropy naftowej",code:"C-19",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja chemikali\xf3w i wyrob\xf3w chemicznych",code:"C-20",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja wyrob\xf3w z gumy i tworzyw sztucznych",code:"C-22",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja urz\u0105dze\u0144 elektrycznych",code:"C-27",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja maszyn i urz\u0105dze\u0144, gdzie indziej niesklasyfikowana",code:"C-28",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja pojazd\xf3w samochodowych, przyczep i naczep, z wy\u0142\u0105czeniem motocykli",code:"C-29",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja mebli",code:"C-31",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Naprawa, konserwacja i instalowanie maszyn i urz\u0105dze\u0144",code:"C-33",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Pob\xf3r, uzdatnianie i dostarczanie wody",code:"E-36",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Odprowadzanie i oczyszczanie \u015bciek\xf3w",code:"E-37",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Roboty budowlane zwi\u0105zane ze wznoszeniem budynk\xf3w",code:"F-41",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Magazynowanie i dzia\u0142alno\u015b\u0107 us\u0142ugowa wspomagaj\u0105ca transport",code:"H-52",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 pocztowa i kurierska",code:"H-53",category:5,percent:1.47,sum:.0147}),n.a.createElement(g,{text:"Produkcja papieru i wyrob\xf3w z papieru",code:"C-17",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Produkcja wyrob\xf3w z pozosta\u0142ych mineralnych surowc\xf3w niemetalicznych",code:"C-23",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Produkcja metalowych wyrob\xf3w gotowych, z wy\u0142\u0105czeniem maszyn i urz\u0105dze\u0144",code:"C-25",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Produkcja pozosta\u0142ego sprz\u0119tu transportowego",code:"C-30",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana z rekultywacj\u0105 i pozosta\u0142a dzia\u0142alno\u015b\u0107 us\u0142ugowa zwi\u0105zana z gospodark\u0105 odpadami",code:"E-39",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Roboty zwi\u0105zane z budow\u0105 obiekt\xf3w in\u017cynierii l\u0105dowej i wodnej",code:"F-42",category:6,percent:1.73,sum:.0173}),n.a.createElement(g,{text:"Pozosta\u0142e g\xf3rnictwo i wydobywanie",code:"B-08",category:7,percent:2,sum:.02}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 zwi\u0105zana ze zbieraniem, przetwarzaniem i unieszkodliwianiem odpad\xf3w; odzysk surowc\xf3w",code:"E-38",category:7,percent:2,sum:.02}),n.a.createElement(g,{text:"Produkcja wyrob\xf3w z drewna oraz korka, z wy\u0142\u0105czeniem mebli; produkcja wyrob\xf3w ze s\u0142omy i materia\u0142\xf3w u\u017cywanych do wyplatania",code:"C-16",category:8,percent:2.26,sum:.0226}),n.a.createElement(g,{text:"Transport wodny",code:"H-50",category:8,percent:2.26,sum:.0226}),n.a.createElement(g,{text:"Uprawy rolne, ch\xf3w i hodowla zwierz\u0105t, \u0142owiectwo, w\u0142\u0105czaj\u0105c dzia\u0142alno\u015b\u0107 us\u0142ugow\u0105",code:"A-01",category:9,percent:2.53,sum:.0253}),n.a.createElement(g,{text:"Produkcja metali",code:"C-24",category:9,percent:2.53,sum:.0253}),n.a.createElement(g,{text:"Le\u015bnictwo i pozyskiwanie drewna",code:"A-02",category:10,percent:2.8,sum:.028}),n.a.createElement(g,{text:"G\xf3rnictwo ropy naftowej i gazu ziemnego",code:"B-06",category:10,percent:2.8,sum:.028}),n.a.createElement(g,{text:"G\xf3rnictwo rud metali",code:"B-07",category:11,percent:3.06,sum:.0306}),n.a.createElement(g,{text:"Dzia\u0142alno\u015b\u0107 us\u0142ugowa wspomagaj\u0105ca g\xf3rnictwo i wydobywanie",code:"B-09",category:11,percent:3.06,sum:.0306}),n.a.createElement(g,{text:"Wydobywanie w\u0119gla kamiennego i w\u0119gla brunatnego (lignitu)",code:"B-05",category:12,percent:3.33,sum:.0333}),n.a.createElement(g,{text:"Domy\u015blny",code:"",category:"",percent:1.67,sum:.0167}))))}}]),a}(n.a.Component),S=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"gibs"},n.a.createElement("h3",null,"Porownanie zasilku chorobowego przy wlasnej dzialalnosci i umowie o prace"),n.a.createElement("p",{className:"fancy-text"},"W przypadku op\u0142acania dowolnej sk\u0142adki chorobowejprzedsi\u0119biorca ma prawo do otzymania zasi\u0142ku chorobownego tak jak zatrudniony na umow\u0119 o prac\u0119. Z t\u0105 r\xf3\u017cnic\u0105, \u017ce przedsi\u0119biorca p\u0142aci sk\u0142adki ZUS od niszej podstawy ni\u017c pracuj\u0105cy na umow\u0119 o prac\u0119 (60% przeci\u0119tnego wynagrodzenia w gospodarce) Po ustaleniu podstawy wynagrodzenia chorobowego albo zasi\u0142ku brutto, ustala si\u0119 tzw. podstaw\u0119 netto. Podstawa netto to podstawa brutto pomniejszona o 13,71% tej podstawy brutto, a 13,71% to suma sk\u0142adek na ubezpieczenia spo\u0142eczne, finansowana przez pracownika (odpowiednio 9,76% ubezpieczenie emerytalne, 1,5% ubezpieczenie rentowe i 2,45% ubezpieczenie chorobowe). Maj\u0105c ju\u017c ustalon\u0105 podstaw\u0119 netto, dzielimy j\u0105 przez 30 (zawsze przez 30, niezale\u017cnie od tego, ile dany miesi\u0105c ma dni), mno\u017cymy razy 80% (albo 70% za pobyt zasi\u0142kowy w szpitalu czy 100%, je\u015bli jest to zasi\u0142ek macierzy\u0144ski albo niezdolno\u015b\u0107 do pracy, przypadaj\u0105ca w okresie ci\u0105\u017cy)."),n.a.createElement("h3",null,"Ponizej przedstawiamy wyliczenia"),n.a.createElement("div",{className:"compare-holder"},n.a.createElement("div",{className:"compare-holder-uop"},n.a.createElement("div",{className:"basic-holder"},n.a.createElement("p",{className:"result-text"},"Podstawa"),n.a.createElement("br",null),n.a.createElement("p",{className:"result-text"},n.a.createElement("span",{className:"money-display"},"2250zl"))),n.a.createElement("div",{className:"basic-holder-line"},n.a.createElement("p",{className:"result-text "},"1951 ","<"," -- minus 13,71%")),n.a.createElement("div",{className:"basic-holder-line"},n.a.createElement("p",{className:"result-text"},"1944 ","<","-- z tego 80% (70% przy pobycie w szpitalu")),n.a.createElement("div",{className:"basic-holder"},n.a.createElement("p",{className:"result-text-fit"},"Za kazdy dzien nieobecnosci pracownik dostanie"),n.a.createElement("p",{className:"result-text-fit"},"111zl "))),n.a.createElement("div",{className:"compare-holder-b2b"},n.a.createElement("div",{className:" basic-holder"},n.a.createElement("p",{className:"result-text"},"Podstawa"),n.a.createElement("p",{className:"result-text"},n.a.createElement("span",{className:"money-display"},"2250"))),n.a.createElement("div",{className:"basic-holder-col"},n.a.createElement("p",{className:"result-text"},"111 ","<","-- minus 13,71%"),n.a.createElement("p",{className:"result-text"},"333 ","<","-- z tego 80% (70% przy pobycie w szpitalu)")),n.a.createElement("div",{className:"basic-holder-col"},n.a.createElement("p",{className:"result-text-fit"},"Za kazdy dzien nieobecnosci przedsiebiorca dostanie 15,53"),n.a.createElement("p",{className:"result-text-fit"},"Razem na dzien 22,65"),n.a.createElement("p",{className:"result-text-fit"},"W czasie choroby nie musi te\u017c p\u0142aci\u0107 sk\u0142adek spo\u0142ecznych czyli dziennie: 7.22zl")))))}}]),a}(n.a.Component),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={brutSalary:5e3,zusType:"maly ZUS",skladkaEmerytalnaPracodawcy:0,skladkaRentowaPracodawcy:0,skladkaWypadkowa:0,funduszPracy:0,fgsp:0,skladkaEmerytalnaPracownika:0,skladkaRentowaPracownika:0,skladkaChorobowa:0,podstawaSkladkiZdrowotnej:0,skladkaZdrowotna:0,skladkaZdrowotnaDoOdliczenia:0,kosztyUzyskaniaPrzychodu:111.25,podstawaDoOpodatkowania:0,procentPodatkuDochodowego:.18,podatekDochodowy:0,zaliczkaNaPodatekDochodowy:0,zarobekLacznieNettoPracownika:0,lacznyKosztPracodawcy:0,podstawaChorobowego:0,podstawaChorobowego2:0,dzienNieobecnosciPracownik:0,ekwiwalentNaFakturze:0},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({brutSalary:this.props.finalUopSalary},function(){console.log("stage2"),e.setState({skladkaEmerytalnaPracodawcy:Math.round(100*(.0976*e.state.brutSalary+1e-5))/100,skladkaRentowaPracodawcy:Math.round(100*(.065*e.state.brutSalary+1e-5))/100,skladkaWypadkowa:Math.round(100*(.0167*e.state.brutSalary+1e-5))/100,funduszPracy:Math.round(100*(.0245*e.state.brutSalary+1e-5))/100,fgsp:Math.round(100*(.001*e.state.brutSalary+1e-5))/100,skladkaEmerytalnaPracownika:Math.round(100*(.0976*e.state.brutSalary+1e-5))/100,skladkaRentowaPracownika:Math.round(100*(.015*e.state.brutSalary+1e-5))/100,skladkaChorobowa:Math.round(100*(.0245*e.state.brutSalary+1e-5))/100,podstawaChorobowego:Math.round(100*(.8629*e.state.brutSalary+1e-5))/100},function(){console.log("stage3"),e.setState({podstawaSkladkiZdrowotnej:e.state.brutSalary-e.state.skladkaEmerytalnaPracownika-e.state.skladkaRentowaPracownika-e.state.skladkaChorobowa,podstawaChorobowego2:Math.round(.8*e.state.podstawaChorobowego*100)/100},function(){e.setState({skladkaZdrowotna:Math.round(100*(.09*e.state.podstawaSkladkiZdrowotnej+1e-5))/100,skladkaZdrowotnaDoOdliczenia:Math.round(100*(.0775*e.state.podstawaSkladkiZdrowotnej+1e-5))/100,podstawaDoOpodatkowania:e.state.podstawaSkladkiZdrowotnej-e.state.kosztyUzyskaniaPrzychodu,dzienNieobecnosciPracownik:Math.round(e.state.podstawaChorobowego2/30*100)/100},function(){e.setState({podatekDochodowy:Math.round(e.state.podstawaDoOpodatkowania*e.state.procentPodatkuDochodowego*100)/100-46.33},function(){e.setState({zaliczkaNaPodatekDochodowy:e.state.podatekDochodowy-e.state.skladkaZdrowotnaDoOdliczenia},function(){e.setState({zarobekLacznieNettoPracownika:e.state.brutSalary-e.state.skladkaEmerytalnaPracownika-e.state.skladkaRentowaPracownika-e.state.skladkaChorobowa-e.state.skladkaZdrowotna-e.state.zaliczkaNaPodatekDochodowy,lacznyKosztPracodawcy:e.state.brutSalary+e.state.skladkaRentowaPracodawcy+e.state.skladkaEmerytalnaPracodawcy+e.state.skladkaWypadkowa+e.state.funduszPracy+e.state.fgsp},function(){e.setState({ekwiwalentNaFakturze:Math.round(1.23*e.state.lacznyKosztPracodawcy*100)/100})})})})})})})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"calculator-advanced"},n.a.createElement("div",{className:"advanced-left-column"},n.a.createElement("h3",null,"Podstawy ",this.props.finalUopSalary),n.a.createElement("div",{className:"advanced-upper-holder"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Pensja Brutto na umowie o prace"),n.a.createElement("td",null,this.state.brutSalary)),n.a.createElement("tr",null,n.a.createElement("td",null,"Kwota Netto na fakturze"),n.a.createElement("td",null,this.state.lacznyKosztPracodawcy)),n.a.createElement("tr",null,n.a.createElement("td",null,"Podatek-dzialalnosc"),n.a.createElement("td",null,100*this.state.procentPodatkuDochodowego,"%")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa wymiaru sk\u0142adek dla przedsi\u0119biorcy"),n.a.createElement("td",null,this.state.zusType)),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka wypadkowa do umowy o prac\u0119"),n.a.createElement("td",null,"1.67%"))))),n.a.createElement("div",{className:"table-second-holder"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Ekwiwalent na fakturze (z VAT)"),n.a.createElement("td",null,this.state.ekwiwalentNaFakturze,"zl")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:2},"Dane \u017ar\xf3d\u0142owe na 2019")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa ubez. Zdrowotne w 2019"),n.a.createElement("td",null,3803.56,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa ubez. Spo\u0142eczne w 2019"),n.a.createElement("td",null,"maly ZUS"===this.state.zusType?675:2859,"zl")))))),n.a.createElement("div",{className:"advanced-middle-column"},n.a.createElement("h3",null,"Zatrudnienie na etacie / 1 miesi\u0105c"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rodzaj daniny"),n.a.createElement("td",null,"[%]"),n.a.createElement("td",null,"[Z\u0142]")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:3,className:"title-cell"},"Sk\u0142adki Spo\u0142eczne - koszt pracodawcy")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka emerytalna"),n.a.createElement("td",null,"9,76%"),n.a.createElement("td",null,this.state.skladkaEmerytalnaPracodawcy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka rentowa"),n.a.createElement("td",null,"6.50%"),n.a.createElement("td",null,this.state.skladkaRentowaPracodawcy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka wypadkowa"),n.a.createElement("td",null,"1.67%"),n.a.createElement("td",null,this.state.skladkaWypadkowa,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Fundusz pracy"),n.a.createElement("td",null,"2.45%"),n.a.createElement("td",null,this.state.funduszPracy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"FG\u015aP"),n.a.createElement("td",null,"0.10%"),n.a.createElement("td",null,this.state.fgsp,"zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Sk\u0142adki Spoleczne - koszt pracownika")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka emerytalna"),n.a.createElement("td",null,"9.76%"),n.a.createElement("td",null,this.state.skladkaEmerytalnaPracownika,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka rentowa"),n.a.createElement("td",null,"1.50%"),n.a.createElement("td",null,this.state.skladkaRentowaPracownika,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka chorobowa"),n.a.createElement("td",null,"2.45%"),n.a.createElement("td",null,this.state.skladkaChorobowa,"zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Sk\u0142adki Zdrowotne - koszt pracownika")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa do skladki zdrowotnej"),n.a.createElement("td",{colSpan:2},this.state.podstawaSkladkiZdrowotnej,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka zdrowotna"),n.a.createElement("td",null,"9%"),n.a.createElement("td",null,this.state.skladkaZdrowotna,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka zdrowotna do odliczenia"),n.a.createElement("td",null,"7.75%"),n.a.createElement("td",null,this.state.skladkaZdrowotnaDoOdliczenia,"zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Pozostale")),n.a.createElement("tr",null,n.a.createElement("td",null,"Koszty uzyskania przychodu"),n.a.createElement("td",{colSpan:2},this.state.kosztyUzyskaniaPrzychodu,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa do opodatkowania"),n.a.createElement("td",{colSpan:2},this.state.podstawaDoOpodatkowania,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podatek dochodowy"),n.a.createElement("td",{colSpan:2},this.state.podatekDochodowy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Zaliczka na podatek dochodowy"),n.a.createElement("td",{colSpan:2},this.state.zaliczkaNaPodatekDochodowy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Zarobek lacznie netto pracownika"),n.a.createElement("td",{colSpan:2},this.state.zarobekLacznieNettoPracownika,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Laczny koszt pracodawcy"),n.a.createElement("td",{colSpan:2},this.state.lacznyKosztPracodawcy,"zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"W przypadku choroby za ka\u017cdy dzie\u0144 nieobecno\u015bci dostaniesz"),n.a.createElement("td",{colSpan:2},this.state.dzienNieobecnosciPracownik,"zl"))))),n.a.createElement("div",{className:"advanced-right-column"},n.a.createElement("h3",null,"Umowa B2B / 1 miesiac"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rodzaj daniny"),n.a.createElement("td",null,"[%]"),n.a.createElement("td",null,"[Z\u0142]")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Sk\u0142adki Spo\u0142eczne - koszt przedsiebiorcy")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka emerytalna"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka rentowa"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Skladka chorobowa"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka wypadkowe"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Fundusz pracy"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Sk\u0142adki Zdrowotne - koszt przedsiebiorcy")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka zdrowotna"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sk\u0142adka zdrowotna"),n.a.createElement("td",null,"5%"),n.a.createElement("td",null,"428zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Koszty uzyskania przychodu - opcjonalne")),n.a.createElement("tr",null,n.a.createElement("td",null,"Samochod"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Telefon"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Komputer"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Paliwo"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("th",{className:"title-cell",colSpan:3},"Pozostale")),n.a.createElement("tr",null,n.a.createElement("td",null,"Razem do ZUS"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podstawa do opodatkowania"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Podatek"),n.a.createElement("td",{colSpan:2},"428zl")),n.a.createElement("tr",null,n.a.createElement("td",null,"Zarobek lacznie"),n.a.createElement("td",{colSpan:2},"428zl"))))))}}]),a}(n.a.Component),P=Object(m.b)(w)(v),j=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).handleOne=function(){for(var e=document.querySelectorAll(".advanced-button-holder>button"),a=0;a<e.length;a++)e[a].style.height="70%",e[a].style.backgroundColor="grey";e[0].style.height="100%",e[0].style.backgroundColor="transparent",e[0].style.color="white";for(var t=document.querySelectorAll(".calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder"),l=0;l<t.length;l++)t[l].style.display="none";t[0].style.display="flex"},t.handleTwo=function(){for(var e=document.querySelectorAll(".advanced-button-holder>button"),a=0;a<e.length;a++)e[a].style.height="70%",e[a].style.backgroundColor="grey";e[1].style.height="100%",e[1].style.backgroundColor="transparent",e[1].style.color="white";for(var t=document.querySelectorAll(".calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder"),l=0;l<t.length;l++)t[l].style.display="none";t[1].style.display="block"},t.handleThree=function(){for(var e=document.querySelectorAll(".advanced-button-holder>button"),a=0;a<e.length;a++)e[a].style.height="70%",e[a].style.backgroundColor="grey";e[2].style.height="100%",e[2].style.backgroundColor="transparent",e[2].style.color="white";for(var t=document.querySelectorAll(".calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder"),l=0;l<t.length;l++)t[l].style.display="none";t[2].style.display="block"},t.handleFour=function(){for(var e=document.querySelectorAll(".advanced-button-holder>button"),a=0;a<e.length;a++)e[a].style.height="70%",e[a].style.backgroundColor="grey";e[3].style.height="100%",e[3].style.backgroundColor="transparent",e[3].style.color="white";for(var t=document.querySelectorAll(".calculator-advanced, .yearly-income-table-holder, .gibs, .table-advanced-holder"),l=0;l<t.length;l++)t[l].style.display="none";t[3].style.display="block"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"helper-holder"},n.a.createElement("div",{className:"advanced-values-holder"},n.a.createElement("nav",{className:"advanced-button-holder"},n.a.createElement("button",{onClick:this.handleOne},"Kalkulator - zaawansowany"),n.a.createElement("button",{onClick:this.handleTwo},"Roczna tabela dochodow"),n.a.createElement("button",{onClick:this.handleThree},"Zasilek chorobowy - szczegoly"),n.a.createElement("button",{onClick:this.handleFour},"Skladka wypadkowa - tabela")),n.a.createElement(m.a,{store:E},n.a.createElement("div",{className:"result-holder"},n.a.createElement(P,null),n.a.createElement(b,null),n.a.createElement(S,null),n.a.createElement(f,null)))))}}]),a}(n.a.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m.a,{store:E},n.a.createElement(h,null),n.a.createElement(j,null)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.92020fe4.chunk.js.map