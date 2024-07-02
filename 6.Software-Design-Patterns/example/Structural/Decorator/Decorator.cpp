#include <iostream>
#include <string>
using namespace std;
class Beverage {
public:
  virtual string getDescription() const = 0;
  virtual double getCost() const = 0;
};

class Coffee : public Beverage{
    public:
        Coffee(){}
        string getDescription() const override{
            return "Coffee";
        };
        double getCost() const override{
            return 1.50;
        };
};
class CondimentDecorator : public Beverage{
    protected:
        Beverage *beverage;
    public:
        CondimentDecorator(Beverage * beverage) : beverage(beverage){}
        virtual string  getDescription() const override{
            return beverage->getDescription()+",";
        };
        virtual double getCost() const override{
            return beverage -> getCost();
        };
};
class Milk : public CondimentDecorator {
public:
  Milk(Beverage* beverage) : CondimentDecorator(beverage) {}
  string getDescription() const override {
    return CondimentDecorator::getDescription() + "Milk";
  };
  double getCost() const override {
    return CondimentDecorator::getCost() + 0.50;
  };
};

class Sugar : public CondimentDecorator {
public:
  Sugar(Beverage* beverage) : CondimentDecorator(beverage) {}
  string getDescription() const override {
    return CondimentDecorator::getDescription() + "Sugar";
  };
  double getCost() const override {
    return CondimentDecorator::getCost() + 0.25;
  };
};

int main() {
  Beverage* beverage = new Coffee();
  cout << beverage->getDescription() << " $" << beverage->getCost() << endl;

  // Add Milk decorator
  beverage = new Milk(beverage);
  cout << beverage->getDescription() << " $" << beverage->getCost() << endl;

  // Add Sugar decorator to the Milk-decorated beverage
  beverage = new Sugar(beverage);
  cout << beverage->getDescription() << " $" << beverage->getCost() << endl;

  return 0;
}