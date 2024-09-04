export interface InvestmentInput {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}

// 두개의 기능은 똑같다.

// type InvestmentInput = {
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// } 