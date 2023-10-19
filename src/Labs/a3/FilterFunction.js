function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    
    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
            <h1>Filter Function</h1>
            <p>Numbers greater than 2: {numbersGreaterThan2}</p>
            <p>Even Numbers: {evenNumbers}</p>
            <p>Odd Numbers: {oddNumbers}</p>
        </div>
    );
}

export default FilterFunction;