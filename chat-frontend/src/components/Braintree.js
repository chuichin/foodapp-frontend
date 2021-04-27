import axios from "axios";
import {useHistory} from "react-router-dom";
import React, {useEffect,useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BrainTree = () => {
    const [brainTreeKey,setbrainTreeKey] = useState("")
    const [dropin, setDropIn] = useState()
    window.braintree = window.braintree || [];
    const braintree = window.braintree
    const history = useHistory()

    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/payments/purchase")
        .then(result =>{
            setbrainTreeKey(result.data.client_token)
        })
        .catch(error =>{
            console.log("Error", error)
        })
    },[])

    useEffect(()=>{
        setTimeout(() => {
            key()
        }, 1000);
 
    },[brainTreeKey])

    const key = () => {
        if (braintree.dropin){
            braintree.dropin.create({
                container: "#payment",
                authorization: brainTreeKey,
            }, (error, instance) => {
                setDropIn(instance)
            })
        }
        else{
            setTimeout(() => {
                key()
            }, 500);
        }
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dropin.requestPaymentMethod((error, payload) => {
            if (error) console.error(error);
            axios({
                method: 'POST',
                url: 'http://localhost:5000/api/v1/payments/purchase/process',
                data: {
                  nonce_payment: payload.nonce,
                  service: 33 
                //   hardcoded service
                }
              })
            .then(response =>{
                // console.log(response.data.messages)
                console.log(response.data.messages)
                if (response.data.messages == "Unsuccessful"){
                    
                    history.go(0)
                    //add toastify
                }
                // if successful go to successful page, if not toastify them to redo the payment.
                // create a route for unsuccessful payment
            })
        });
    }
    

    return (
        <form id="payment_form" onSubmit={handleSubmit}>
            <div id="payment"></div>
            {/* <div id="service" value='133'></div> */}
            <input type="submit"/>
        </form>
    )
}

export default BrainTree;