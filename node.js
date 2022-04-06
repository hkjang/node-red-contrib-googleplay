const gplay  = require('google-play-scraper');
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);

        var node = this;
        this.name = n.name;
        for (var key in n) {
            node[key] = n[key] || "";
        }

        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = msg[i] || node[i];
                }
            }
            try{
                if(!node.func){
                    node.func = 'reviews';
                }

                gplay[node.func](node)
                    .then(res,res);

                function res(results){
                    msg.payload = results;
                    node.send(msg);
                }
            }catch (e){
                node.error(e);
            }
        });
    }
    RED.nodes.registerType("googleplay", FunctionNode, {});
};

