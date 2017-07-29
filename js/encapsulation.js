function Test() {
var Person = function (config) {
    var SSN = config.SSN;

    function getPrivateValue() { return SSN; }
    function setPrivateValue(value) { SSN = value; }

    return {
        name : config.name,
        age  : config.age,

        get  : function() { return getPrivateValue(); },
        set  : function(newValue) { setPrivateValue(newValue); }
    };
};

var David = Person({
    name : 'David',
    age  : 30,
    SSN  : '123-456-7890'
});

}