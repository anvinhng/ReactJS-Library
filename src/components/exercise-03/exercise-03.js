import {React,Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './exercise-03.css';

export default class CurrencyExchange extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            value: '', 
            fromCurrency:'VND',
            toCurrency:'USD',
            rates: 1/23000,
            currecies: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFromCurrency = this.handleChangeFromCurrency.bind(this);
        this.handleChangeToCurrency = this.handleChangeToCurrency.bind(this);
        this.handleConvert = this.handleConvert.bind(this);
        this.setRates = this.setRates.bind(this);
        this.revertCurrency = this.revertCurrency.bind(this);
      }
      handleConvert(){
        
        this.setState({currecies: this.state.value*this.state.rates}, ()=>{
            console.log(this.state.value, this.state.currecies);
        });
        console.log(this.state.fromCurrency, this.state.toCurrency);
        console.log(this.state.rates)
      }

      handleChange(evt){
        this.setState({
            value: evt.target.value
          });

      }

      setRates(){
        if (this.state.fromCurrency==="VND" && this.state.toCurrency==="USD"){
            this.setState({rates: 1/22990.471})
        } else if (this.state.fromCurrency==="USD" && this.state.toCurrency==="VND") {
            this.setState({rates: 22990.471})
        } else if (this.state.fromCurrency==="USD" && this.state.toCurrency==="EUR") {
            this.setState({rates: 1/1.12721})
        } else if (this.state.fromCurrency==="EUR" && this.state.toCurrency==="USD") {
            this.setState({rates: 1.12721})
        } else if (this.state.fromCurrency==="EUR" && this.state.toCurrency==="VND") {
            this.setState({rates: 25937.387}) 
        } else if (this.state.fromCurrency==="VND" && this.state.toCurrency==="EUR") {
            this.setState({rates: 1/25937.387})
        };
        console.log(this.state.rates);
      }

      handleChangeFromCurrency(evt){
        this.setState({ fromCurrency: evt.target.value }, ()=> {
            console.log(this.state.fromCurrency);
            this.setRates();
        });
        
      };
      handleChangeToCurrency(evt){
        this.setState({ toCurrency: evt.target.value }, () =>{
            console.log(this.state.toCurrency);
            this.setRates();
        }); 
      }

      revertCurrency(){
          let tempCurrency = this.state.fromCurrency;
          this.setState({fromCurrency: this.state.toCurrency}, () => {
              this.setState({toCurrency: tempCurrency}, () => {
                  this.setRates();
              })
          })
      }

    render(){
        return (
            <>
               <form className="currency-row-outer container" >
                    <div className="currency-converter">
                        <h2>Currency Converter</h2>
                        <div className="field row">
                            <div>
                                <div className="values">
                                    <input className="input form-input text-primary" type="number"  id="number" placeholder="00000"  
                                        value={this.state.value} onChange={this.handleChange} /> 
                                    <span>{this.state.fromCurrency}</span> 
                                    <i onClick={this.revertCurrency} className="fas fa-sync-alt"></i> 
                                    <input className="text-primary output" placeholder="00000" 
                                        value={this.state.currecies}/> 
                                    <span>{this.state.toCurrency}</span>   
                                </div>
                                <div className="rates">Exchange Rates: {(1/this.state.rates).toFixed(8)} {this.state.fromCurrency} per {this.state.toCurrency}</div>

                                <label className="form-label">From</label>
                                <select className="form-select form-select-sm mb-3" value={this.state.fromCurrency} onChange={this.handleChangeFromCurrency}>
                                    <option value="VND">VND - Vietnamese Dong</option>
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="EUR">EUR - Euro</option>
                                </select>
                            </div>
                           <div>
                                <label className="form-label">To</label>
                                <select className="form-select form-select-sm mb-3" value={this.state.toCurrency} onChange={this.handleChangeToCurrency}>
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="VND">VND - Vietnamese Dong</option>
                                    <option value="EUR">EUR - Euro</option>
                                </select>
                           </div>
                            
                        </div>
                        <div className="convert-btn">
                            <button type="button" className="btn-dark" 
                                onClick={this.handleConvert}
                                disabled={this.state.fromCurrency===this.state.toCurrency}>
                                    Convert
                            </button>
                        </div>
                      
                    </div>
                </form>
            </>
        )
    }
}