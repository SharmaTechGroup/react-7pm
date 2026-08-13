import { useEffect, useState } from "react"

export function EMICalculator(){

    const [loanAmount, setLoanAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);

    function CalculateEMI(){
        let P = parseInt(loanAmount);
        let R = parseFloat(rate)/12/100;
        let N = parseInt(years) * 12;       
        let EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);
        setEmi(EMI);
    }

    function handleAmountChange(e){
        setLoanAmount(e.target.value);
        
    }
    function handleYearChange(e){
        if(e.target.value===""){
            setYears(1);
        } else {
            setYears(e.target.value);
        }  
    }


    function handleRateChange(e){
        setRate(e.target.value);
        
    }
    useEffect(()=>{
        CalculateEMI();
    },[years, loanAmount, rate])

    return(
        <div className="bg-secondary row p-4" style={{height:'100vh'}}>
            <div className="card col-7 p-4" style={{height:'500px'}}>
                <div>
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="fw-bold">Loan Amount</label>
                    </div>
                    <div>
                        <div className="position-relative">
                           <span style={{left:'10px'}} className="position-absolute">&#8377;</span>  <input onChange={handleAmountChange} value={loanAmount} style={{paddingLeft:'20px'}} type="text" />
                        </div>
                    </div>
                    </div>
                    <div className="mt-4">
                        <input type="range" onChange={handleAmountChange} min={100000} max={1000000} step={10000} value={loanAmount}  className="form-range" />
                        <span>&#8377; 1,00,000/-</span>
                        <span className="float-end">&#8377; 10,00,000/-</span>
                    </div>
                </div>


                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="fw-bold">Loan Tenure</label>
                    </div>
                    <div>
                        <input type="number" size={2} min="1" max="5" value={years} onChange={handleYearChange} />
                    </div>
                    </div>
                    <div className="mt-4">
                        <input type="range" min={1} max={5} step={1} onChange={handleYearChange} value={years}  className="form-range" />
                        <span>1 Year</span>
                        <span className="float-end">5 Years</span>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <div>
                        <label className="fw-bold">Interest Rate</label>
                    </div>
                    <div>
                        <input type="text" size={4} value={rate} onChange={handleRateChange} /> %
                    </div>
                    </div>
                    <div className="mt-4">
                        <input type="range" min={10.45} value={rate} onChange={handleRateChange} max={18.45} step={0.01}  className="form-range" />
                        <span>10.45%</span>
                        <span className="float-end">18.45%</span>
                    </div>
                </div>
            </div>


            <div className="card p-4 col-5" style={{height:'200px'}}>
                <div className="card-header">
                    <div className="text-center text-primary">Your Monthly EMI will be</div>
                </div>
                <div className="card-body text-center">
                    <div className="fs-1 fw-bold text-primary">{emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}</div>
                </div>
            </div>
        </div>
    )
}