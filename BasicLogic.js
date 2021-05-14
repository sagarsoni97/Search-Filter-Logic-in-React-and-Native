import React, {useState, useEffect} from 'react'
import fetchData from './Actions/vaccineAction'
import { useDispatch, useSelector } from 'react-redux';

const Vaccine = () => {

    const [pincode, setPincode] = useState(452001)
    const [date, setDate] = useState("15-05-2021");
    const [data, setData] = useState([])
    const [arr, setArr] = useState([])
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    
    //Search filter Logic is here -----------------------------------------------
    
       const searchFilterFunction = (text) => {
        setValue(text)
        const newData = arr.filter(item => {
           const itemData =  `${item.name.toUpperCase()}, 
           ${item.address.toUpperCase()}, 
           ${item.fee_type.toUpperCase()} `
           const textData = text.toUpperCase()
           return itemData.indexOf(textData) > -1
        }); 
        setData(newData)
    };
    
    return (
    
             <input className="InputField"
                    type="text"
                    value={value}
                    placeholder="Search Details"
                    onChange={({ target }) => searchFilterFunction(target.value)}
              />
    
    )
    
    }
    
    export default Vaccine;
