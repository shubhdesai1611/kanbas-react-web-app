import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import JsonStringify from "./JsonStringify";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";


function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;

    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,
        blockScoped,
        constant1,
        numberArray1,
        stringArray1
    ];

    // Using console.log() as per the instructions:
    console.log("2.2.7 Working with Arrays");
    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1);
    console.log("stringArray1:", stringArray1);
    console.log("variableArray1:", variableArray1);

    return (
        <div>
            <h3>Working with Arrays</h3>
        
            <p>numberArray1 = {numberArray1}</p>
            <p>stringArray1 = {stringArray1}</p>
            <p>variableArray1 = {variableArray1}</p>
            <p><ArrayIndexAndLength/></p>
            <p><AddingAndRemovingDataToFromArrays/></p>
            <p><ForLoops/></p>
            <p><MapFunction/></p>
            <p><FindFunction/></p>
            <p><JsonStringify/></p>
            <p><FindIndex/></p>
            <p><FilterFunction/></p>
        </div>
    );
}

export default WorkingWithArrays;