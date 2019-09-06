var jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports.home = (req, res) => {
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

module.exports.alaSol = (req, res) => {
    renderPanelAlaSol(req, res);
};

var renderPanelAlaSol = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=11&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                    res.render('panel', panel);
            })
            .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Sol / Premium',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });  
};

module.exports.alaMar = (req, res) => {
    renderPanelAlaMar(req, res);
};

var renderPanelAlaMar = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=5&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                    res.render('panel', panel);
                }
            )
            .catch(function(){
                    var dataNow = getDate();
                    var panel = {
                        title: 'Costa do Sauípe - Ala Mar',
                        infoDate: dataNow,
                        travels: []
                    };
                    res.render('panel', panel);
                }
            );
};

module.exports.vilaNova = (req, res) => {
    renderPanelVilaNova(req, res);
};

var renderPanelVilaNova = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=6&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                res.render('panel', panel);
            })
            .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Vila Nova',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });
};
module.exports.alaTerra = (req, res) => {
    renderPanelAlaTerra(req, res);
};

var renderPanelAlaTerra = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=7&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                res.render('panel', panel);
            })
            .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Ala Terra',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });
};

module.exports.sauipePremium = (req, res) => {
    renderPanelSauipePremium(req, res);
};

var renderPanelSauipePremium = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=8&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                res.render('panel', panel);
            })
            .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Sauípe Premium',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });
};
module.exports.alaAgua = (req, res) => {
    renderPanelAlaAgua(req, res);
};

var renderPanelAlaAgua = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=9&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) {
                res.render('panel', panel);
           })
           .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Ala Água',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });
};

module.exports.centroNautico = (req, res) => {
    renderPanelCentroNautico(req, res);
};

var renderPanelCentroNautico = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=10&HC=j%24fT71@';
    jsdom.JSDOM.fromURL(url)
        .then(scraping)
            .then(function(panel) { 
                res.render('panel', panel); 
            })
            .catch(function(){
                var dataNow = getDate();
                var panel = {
                    title: 'Costa do Sauípe - Centro Naútico',
                    infoDate: dataNow,
                    travels: []
                };
                res.render('panel', panel);
            });
};


function defaultvalues(obj) {
    if (obj.title == 'Costa do Sauípe - Sol / Premium')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '1,7Km')
                obj.travels[i].distance = '-';
        }
    if (obj.title == 'Costa do Sauípe - Ala Mar')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '2Km')
                obj.travels[i].distance = '-';
        }
    if (obj.title == 'Costa do Sauípe - Ala Terra')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '2,9Km')
                obj.travels[i].distance = '-';
        }
    if (obj.title == 'Costa do Sauípe - Premium')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '3,2Km')
                obj.travels[i].distance = '-';
        }
    if (obj.title == 'Costa do Sauípe - Ala Água')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '3,7Km')
                obj.travels[i].distance = '-';
        }
    if (obj.title == 'Costa do Sauípe - Vila Nova Praia')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].distance == '2,7Km')
                obj.travels[i].distance = '-';
        }

    return obj;
}

function getDate(){
    var data = new Date();
    var dataNow = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
    var options = {
        year: 'numeric', month: 'numeric', day: 'numeric' , hour: 'numeric' , minute: 'numeric' , second: 'numeric',
    };

    return dataNow.toLocaleDateString('pt-br', options);
}

function scraping(dom) {
 
    var dataNow = getDate();
    console.log(dataNow);
    var panel = {
        title: dom.window.document.body.querySelector('#LabelNomePonto').textContent,
        infoDate: dataNow,
        travels: []
    };

    if (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length <= 1) {
        return panel;
    } else {
        for (var i = 1; i < (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length); i++) {
            if (!dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[3].textContent.includes('hoje')) {
                panel.travels.push({
                    road: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[0].textContent,
                    // road: "-",
                    destiny: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[1].textContent,
                    distance: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[2].textContent,
                    preview: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[3].textContent
                });
            }
        }
        panel = defaultvalues(panel);
        console.log(panel);
        return panel;
    }
}