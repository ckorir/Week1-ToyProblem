
function taxCalculator (basicSalary){
    const salary = parseInt(basicSalary);
    const contributionBenefit = 1080;
    const taxiblePay = salary - contributionBenefit;

    // A function to calculate the payeRates
    function payeeRates(salary){

        // Array of tax rates based on income brackets
        const taxRates = [
            { min: 0, max: 24000, rate: 0.1 },
            { min: 2401, max: 32333, rate: 0.25 },
            { min: 32334, max: 500000, rate: 0.3 },
            { min: 500001, max: 800000, rate: 0.32 },
            { min: 800001, max: Infinity, rate: 0.35 },
        ];

        // Checks which range the salary falls
        for (const rate of taxRates) {
            if (salary >= rate.min && salary <= rate.max) {
            return salary * rate.rate; // Return the tax rate when the income falls within the specified range
            }
        }
    
    }
    const payee = payeeRates(salary); // Allows us to use the variables in the global scope
    //return taxRate;

    // function for finding NHIF Deductions
    function nhifRates(salary){

        // Array of rates including the min value, max value and the deductions for each range
        const nhifRates = [
            { min: 0, max: 5999, deduction: 150 },
            { min: 6000, max: 7999, deduction: 300 },
            { min: 8000, max: 11999, deduction: 400 },
            { min: 12000, max: 14999, deduction: 500 },
            { min: 15000, max: 19999, deduction: 600 },
            { min: 20000, max: 24999, deduction: 750 },
            { min: 25000, max: 29999, deduction: 850 },
            { min: 30000, max: 34999, deduction: 900 },
            { min: 35000, max: 39999, deduction: 950 },
            { min: 40000, max: 44999, deduction: 1000 },
            { min: 45000, max: 49999, deduction: 1100 },
            { min: 50000, max: 59999, deduction: 1200 },
            { min: 60000, max: 69999, deduction: 1300 },
            { min: 70000, max: 79999, deduction: 1400 },
            { min: 80000, max: 89999, deduction: 1500 },
            { min: 90000, max: 99999, deduction: 1600 },
            { min: 100000, max: Infinity, deduction: 1700 },
        ];

        for (const rate of nhifRates) {
            if (salary >= rate.min && salary <= rate.max) {
            return rate.deduction; // Return the tax rate when the income falls within the specified range
            }
        }
    }
    const nhif = nhifRates(salary); // Allows us to use the variables in the global scope

    //function to get NSSF Deductions
    function nssfRates(salary){

        const nssfRate = 0.06;
        return salary * nssfRate;

    }
    const nssf = nssfRates(salary);

    const netSalary = salary - (payee + nhif + nssf);

    return `\n  Contribution Benefit: ${contributionBenefit}\n   Taxible Pay: ${taxiblePay}\n   Payee: ${payee}\n   NetSalary: ${netSalary}\n`;

}

module.exports = taxCalculator;
