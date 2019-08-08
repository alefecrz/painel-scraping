var jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports.home = (req, res, next) => {
    renderPanelHome(req, res);
};

var renderPanelHome = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=2&HC=j$fT71@e';
    scraping(url);
    res.render('index', {
        title: 'segsat Panel test',
        panel: {
            link: url
        }

    });
};

module.exports.alaSol = (req, res, next) => {
    renderPanelAlaSol(req, res);
};

var renderPanelAlaSol = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=11&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};

module.exports.alaMar = (req, res, next) => {
    renderPanelAlaMar(req, res);
};

var renderPanelAlaMar = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=5&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};

module.exports.vilaNova = (req, res, next) => {
    renderPanelVilaNova(req, res);
};

var renderPanelVilaNova = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=6&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};
module.exports.alaTerra = (req, res, next) => {
    renderPanelAlaTerra(req, res);
};

var renderPanelAlaTerra = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=7&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};

module.exports.sauipePremium = (req, res, next) => {
    renderPanelSauipePremium(req, res);
};

var renderPanelSauipePremium = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=8&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};
module.exports.alaAgua = (req, res, next) => {
    renderPanelAlaAgua(req, res);
};

var renderPanelAlaAgua = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=9&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel);
    });
};

module.exports.centroNautico = (req, res, next) => {
    renderPanelCentroNautico(req, res);
};

var renderPanelCentroNautico = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=10&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url).then(scraping).then(function(panel) {
        res.render('panel', panel, title);
    });
};


function defaultvalues(obj) {

    if (obj.title == 'Costa do Sauípe - Sol / Premium')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '1,7Km')
                obj.travels[i].distance = '-';
            
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }
        }
    if (obj.title == 'Costa do Sauípe - Ala Mar')
        for (var i = 0; i < obj.travels.length; i++) {
            console.log(obj.travels[i].preview);
            if (obj.travels[i].distance == '2Km')
                obj.travels[i].distance = '-';

            
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }
        }
    if (obj.title == 'Costa do Sauípe - Ala Terra')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '2,9Km')
                obj.travels[i].distance = '-';
            
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }

        }
    if (obj.title == 'Costa do Sauípe - Premium')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '3,2Km')
                obj.travels[i].distance = '-';
            
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }
        }
    if (obj.title == 'Costa do Sauípe - Ala Água')
        for (var i = 0; i < obj.travels.length; i++){
            if (obj.travels[i].distance == '3,7Km')
                obj.travels[i].distance = '-';
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }
        }
    if (obj.title == 'Costa do Sauípe - Vila Nova Praia')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '2,7Km')
                obj.travels[i].distance = '-';
            
            if(obj.travels[i] != undefined){
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
                if (obj.travels[i].preview.includes('hoje'))
                    obj.travels.splice(i, 1);
            }
        }

    return obj;
}

function scraping(dom) {
    var panel = {
        title: '',
        infoDate: '',
        travels: []
    };

    var dataNow = new Date();
    console.log(dataNow);

    panel.infoDate = dataNow.getDate().toString().padStart(2, "0") + "/" + (dataNow.getMonth() + 1).toString().padStart(2, "0") + "/" + dataNow.getFullYear() + " " + (dataNow.getHours().toString().padStart(2, "0") - 3) + ":" + dataNow.getMinutes().toString().padStart(2, "0");
    panel.title = dom.window.document.body.querySelector('#LabelNomePonto').textContent;


    if (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length === 1) {
        return panel;
    } else {
        for (var i = 1; i < (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length); i++) {
            panel.travels.push({
                road: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[0].textContent,
                // road: "-",
                destiny: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[1].textContent,
                distance: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[2].textContent,
                preview: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[3].textContent
            });
        }
        panel = defaultvalues(panel);
        console.log(panel);
        return panel;
    }
}