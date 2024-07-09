abstract class Beverage{
public abstract String getDescription();
public abstract double getCost();
}
class Coffee extends Beverage{
    @Override
    public double getCost(){
        return 1.5;
    };
    @Override
    public String getDescription(){
        return "Coffee";
    };
};
class CondimentDecorator extends Beverage{
    protected Beverage beverage;
    public CondimentDecorator(Beverage beverage){
        super();
        this.beverage = beverage;
    };
    @Override
    public String getDescription(){
        return this.beverage.getDescription() + ",";
    };
    @Override
    public double getCost(){
        return this.beverage.getCost();
    };
};
class Milk extends CondimentDecorator{
    public Milk(Beverage beverage){
        super(beverage);
    };
    @Override
    public double getCost(){
        return this.beverage.getCost()+0.5;
    };
    @Override
    public String getDescription(){
        return this.beverage.getDescription()+"Milk";
    };
}
class Sugar extends CondimentDecorator{
    public Sugar(Beverage beverage){
        super(beverage);
    }
    public double getCost(){
        return this.beverage.getCost()+0.25;
    };
    public String getDescription(){
        return this.beverage.getDescription()+"Sugar";
    };
}
public class Main {

  public static void main(String[] args) {
    Beverage beverage = new Coffee();
    System.out.println(beverage.getDescription() + "$" + beverage.getCost());

    beverage = new Milk(beverage);
    System.out.println(beverage.getDescription() + "$" + beverage.getCost());

    beverage = new Sugar(beverage);
    System.out.println(beverage.getDescription() + "$" + beverage.getCost());
  }
}