class Islands {
    constructor() {
        this.amountOfIslands = 0;//count of islands
        this.core11 = {
            row: 1,
            column: 1,
            num: 11,
            core: null,
            links: [
                [12, null],
                [21, null]
            ]
        };//each object core corresponds to each element of the array, objects contain links to neighboring elements
        this.core12 = {
            row: 1,
            column: 2,
            num: 12,
            core: null,
            links: [
                [11, null],
                [13, null],
                [22, null]
            ]
        };
        this.core13 = {
            row: 1,
            column: 3,
            num: 13,
            core: null,
            links: [
                [12, null],
                [23, null]
            ]
        };
        this.core21 = {
            row: 2,
            column: 1,
            num: 21,
            core: null,
            links: [
                [11, null],
                [22, null],
                [31, null]
            ]
        };
        this.core22 = {
            row: 2,
            column: 2,
            num: 22,
            core: null,
            links: [
                [12, null],
                [21, null],
                [23, null],
                [32, null]
            ]
        };
        this.core23 = {
            row: 2,
            column: 3,
            num: 23,
            core: null,
            links: [
                [13, null],
                [33, null],
                [22, null]
            ]
        };
        this.core31 = {
            row: 3,
            column: 1,
            num: 31,
            core: null,
            links: [
                [21, null],
                [32, null],
            ]
        };
        this.core32 = {
            row: 3,
            column: 2,
            num: 32,
            core: null,
            links: [
                [22, null],
                [31, null],
                [33, null],
            ]
        };
        this.core33 = {
            row: 3,
            column: 3,
            num: 33,
            core: null,
            links: [
                [32, null],
                [23, null]
            ]
        };
        this.draftMap = [];
        this.island = {
            num: [],
            links: []
        };
        this.arrayOfIslands = [];
    };

    setCore11(el11) { //at the same time as changing the value of the core, we change the values of links to this core
        this.core11.core = el11;
        this.core21.links[0][1] = el11;
        this.core12.links[0][1] = el11;
    };//   with setting the core value, set the values to other links that reference this core

    setCore12(el12) {
        this.core12.core = el12;
        this.core13.links[0][1] = el12;
        this.core11.links[0][1] = el12;
        this.core22.links[0][1] = el12;
    };

    setCore13(el13) {
        this.core13.core = el13;
        this.core12.links[1][1] = el13;
        this.core23.links[0][1] = el13;
    };

    setCore21(el21) {
        this.core21.core = el21;
        this.core11.links[1][1] = el21;
        this.core22.links[1][1] = el21;
        this.core31.links[0][1] = el21;
    };

    setCore22(el22) {
        this.core22.core = el22;
        this.core12.links[2][1] = el22;
        this.core32.links[0][1] = el22;
        this.core21.links[1][1] = el22;
        this.core23.links[2][1] = el22;
    };

    setCore23(el23) {
        this.core23.core = el23;
        this.core13.links[1][1] = el23;
        this.core22.links[2][1] = el23;
        this.core33.links[1][1] = el23;
    };

    setCore31(el31) {
        this.core31.core = el31;
        this.core32.links[1[1]] = el31;
        this.core21.links[2][1] = el31;
    };

    setCore32(el32) {
        this.core32.core = el32;
        this.core31.links[1][1] = el32;
        this.core33.links[0][1] = el32;
        this.core22.links[3][1] = el32;
    };

    setCore33(el33) {
        this.core33.core = el33;
        this.core32.links[2][1] = el33;
        this.core23.links[1][1] = el33;
    };

    isCoreTrue(el) {
        if (el === 1) {
            return true;
        }
        return false
    };

    addCoreToDraftMap(core) { //for the convenience of iterating elements, add them to the array
        this.draftMap.push(core);
    }; //each core here add to the array

    addIslandToArray(core) { //for the convenience of iterating elements, add them to the array
        this.arrayOfIslands.push(core);
    }; //here we add the resulting island to the array

    setAmountPlusOne() {
        this.amountOfIslands++;
    };//increase of islands number

    isAllLinksFalse(core) { //check if the core is separate
        for (let i = 0; i < core.links.length; i++) {
            if (core.links[i][1] === true) {
                return true;
            }
            return false;
        }
    };// check if all links are empty

    searchCoreWithOnes(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].core === true) {
                return arr[i].core;
            }
            return false;
        }
        ;
    };//check if some link refer to one

    deleteAllLinksByNum(arr, num) {
        for (let i = 0; i < arr.length; i++) {// iterates array of objects and removes all references to an element num
            if (arr[i].links.length > 0) {//iterate every link in array of links
                for (let l = 0; l < arr[i].links.length; l++) {
                    if (arr[i].links[l][0] === num) {//if link refers to element num
                        arr[i].links.splice(l, 1);// delete it
                    }
                }
            }
        }
        return arr;
    };// after delete core witch core===0, delete all links witch refer to this core

    getCoreByNum(num){
        for(let i = 0; i<this.draftMap.length; i++){
            if(this.draftMap[i].num===num){
                return this.draftMap[i]
            }
        }
        return null;
    };// method return core from array of core by number of core

    deleteAllCoreWitchAreIsland(){
        this.addIslandToArray(this.island);
        this.island = {
            num: [],
            links: []
        };

    }; //reset the values of the island object which is separate

    deleteCoreWitchAddedToIsland(core){
        for(let i = 0; i<this.draftMap.length; i++){
            if(this.draftMap[i].num===core.num){
                this.draftMap.splice(i,1);
            }
        }
    };//delete core witch we added to island

    isIslandSeparate(){
        for(let i = 0; i<this.island.links.length; i++){
            if(this.island.links[i][1]===true){

if(this.getCoreByNum(this.island.links[i][0])!==null) {
    this.addCoreToIsland(this.getCoreByNum(this.island.links[i][0]));
}
            }
        }

        this.deleteAllCoreWitchAreIsland();
    };// check is this island separate

    addCoreToIsland(core) {
        if(this.island.num.length===0){
            this.setAmountPlusOne();
        }
        this.island.num.push(core.num);
        for (let i = 0; i < core.links.length; i++) {
            this.island.links.push(core.links[i]);
        }
        this.deleteCoreWitchAddedToIsland(core);
        this.isIslandSeparate();
        return this.island;
    };// add core witch contein one "1" to island

    loopCheckAllCore(arr) {// check all elements od array of core, if core!==1 then delete all link with refer to this core
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].core !== true) {
                this.deleteAllLinksByNum(arr, arr[i].num);
            }
            if (arr[i].core === true){//if core contain "1" add this core to island
                this.addCoreToIsland(arr[i]);
                this.loopCheckAllCore(this.draftMap);
            }
        }
    };

    arrayElementsToArrayObjects(arr) {// main method where create objects from elements and after that create islands witch contain "1" a nd delete core witch core !==1

        this.setCore11(this.isCoreTrue(arr[0][0])); //create an object model, fill in the values (1 or not) to core
        this.setCore12(this.isCoreTrue(arr[0][1]));
        this.setCore13(this.isCoreTrue(arr[0][2]));
        this.setCore21(this.isCoreTrue(arr[1][0]));
        this.setCore22(this.isCoreTrue(arr[1][1]));
        this.setCore23(this.isCoreTrue(arr[1][2]));
        this.setCore31(this.isCoreTrue(arr[2][0]));
        this.setCore32(this.isCoreTrue(arr[2][1]));
        this.setCore33(this.isCoreTrue(arr[2][2]));

        this.addCoreToDraftMap(this.core11);//for the convenience of iterating elements, add them to the array
        this.addCoreToDraftMap(this.core12);
        this.addCoreToDraftMap(this.core13);
        this.addCoreToDraftMap(this.core21);
        this.addCoreToDraftMap(this.core22);
        this.addCoreToDraftMap(this.core23);
        this.addCoreToDraftMap(this.core31);
        this.addCoreToDraftMap(this.core32);
        this.addCoreToDraftMap(this.core33);

        this.loopCheckAllCore(this.draftMap);
        return this.amountOfIslands;

    }
}
