module.exports.home = (req, res, next) => {
    renderPanelHome(req,res);
};

var renderPanelHome = (req,res) => {
    res.render('index', { 
        title:'segsat Panel test',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=2&HC=j$fT71@e'
        }
 
    });
};

module.exports.alaSol = (req, res, next) => {
    renderPanelAlaSol(req,res);
};

var renderPanelAlaSol = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Ala Sol',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=11&HC=j%24fT71@e'
        }
 
    });
};

module.exports.alaMar = (req, res, next) => {
    renderPanelAlaMar(req,res);
};

var renderPanelAlaMar = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Ala Mar',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=5&HC=j%24fT71@e'
        }
 
    });
};

module.exports.vilaNova = (req, res, next) => {
    renderPanelVilaNova(req,res);
};

var renderPanelVilaNova = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Vila Nova',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=6&HC=j%24fT71@e'
        }
 
    });
};
module.exports.alaTerra = (req, res, next) => {
    renderPanelAlaTerra(req,res);
};

var renderPanelAlaTerra = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Ala Terra',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=7&HC=j%24fT71@e'
        }
 
    });
};

module.exports.sauipePremium = (req, res, next) => {
    renderPanelSauipePremium(req,res);
};

var renderPanelSauipePremium = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Premium',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=8&HC=j%24fT71@e'
        }
 
    });
};
module.exports.alaAgua = (req, res, next) => {
    renderPanelAlaAgua(req,res);
};

var renderPanelAlaAgua = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Ala Água',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=9&HC=j%24fT71@e'
        }
 
    });
};

module.exports.centroNautico = (req, res, next) => {
    renderPanelCentroNautico(req,res);
};

var renderPanelCentroNautico = (req,res) => {
    res.render('panel', { 
        title:'Costa do Sauipe Centro Náutico',
        panel: {
            link: 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=10&HC=j%24fT71@e'
        }
 
    });
};


