import { CheeseOption } from "./Cheese";
import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Sauce } from "./Sauce";
import { Topping } from "./Topping";

export class PizzaBuilder{
    setCrust(Crust:Crust){

    } 
    setSauce(sauce:Sauce){

    } 
    setCheese(cheese:CheeseOption){

    }
    addTopping(topping : Topping){
        
    }
    private totalPrice():number{
        return 2
    }
    build():Pizza{
        return {}
    }
}