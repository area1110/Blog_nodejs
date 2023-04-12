class InputParam{
    /**
     * @type {string}
     */
    name;
    /**
     * @type {import("tedious").TediousType}
     */
    type;
    /**
     * @type {any}
     */
    value;

    /**
     * 
     * @param {string} name 
     * @param {import("tedious").TediousType} type 
     * @param {any} value 
     */
    constructor(name, type, value){
        this.name = name;
        this.type = type;
        this.value = value;
    };
}

module.exports = InputParam;