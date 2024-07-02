import java.util.ArrayList;
public class CompositeExample {
    abstract class Component{
    protected String name;
    Component(String name) { 
      this.name = name;
    }
    abstract void operation();
}
class Leaf extends Component{
    @Override
    void operation(){
        System.out.println("Leaf"+this.name+"- Performing operation" );
    }
}
class Composite extends Component{
    private List<Component>  children;
    Composite(String name) {
      super(name);
      this.children = new ArrayList<>(); 
    }
    void add(Component child){
        this.children.add(child);
    }
    void remove(Component child) {
        int index = this.children.indexOf(child);
        if (index != -1) {
          this.children.remove(index);
        }
    }
    @Override
    void operation() {
      System.out.println("Composite " + this.name + " - Performing operation");
      for (Component child : children) {
        child.operation(); 
      }
    }
}
 public static void main(String[] args) { 
    Leaf leaf1 = new Leaf("Leaf 1");
    Leaf leaf2 = new Leaf("Leaf 2");

    Composite composite1 = new Composite("Composite 1");
    composite1.add(leaf1);

    Composite composite2 = new Composite("Composite 2");
    composite2.add(leaf2);
    composite2.add(composite1);

    composite2.operation();
  }
}