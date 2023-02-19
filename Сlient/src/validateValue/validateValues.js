
export default class Cheker {


    static emailCheck(value) {


        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            return false
        } else {

            return true
        }

    }

    static passwordChek(value) {

        if (!value) {
            return false
        }

        if (value.length < 3 || value.length > 8 ) {
            return false

        } else {
            return true
        }

    }

    static brandCheck(value) {
        let re = /[a-zA-Z]/
        if (!re.test(value) || value.length < 0 || !/[A-Z]/.test(value.charAt(0))) {
            return false

        } else {
            return true

        }


    }
    static AllComponents(value){

        if(!value){
            return false

        }else{
            return true

        }


    }


    static PriceCheck(value){


        if(Number.isInteger(value) && value >= 0){
            return true


        }else{
            return false

        }


    }



}