class OutputParam{
    /**
     * @type {string}
     */
    name;
    /**
     * @type {import("tedious").TediousType}
     */
    type;

    /**
     * 
     * @param {string} name 
     * @param {import("tedious").TediousType} type 
     */
    constructor(name, type){
        this.name = name;
        this.type = type;
    };
}

module.exports = OutputParam;