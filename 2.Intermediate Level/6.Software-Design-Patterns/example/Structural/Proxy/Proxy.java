interface Subject {
  public void request();
}

class RealSubject implements Subject {
  @Override
  public void request() {
    System.out.println("RealSubject: Handling Request");
  }
}

class Proxy implements Subject {

  private RealSubject realSubject;

  public Proxy(RealSubject realSubject) {
    this.realSubject = realSubject;
  }

  @Override
  public void request() {
    // Access control or additional logic can be implemented here
    System.out.println("Proxy: Checking access...");
    // Replace with real access control logic

    System.out.println("Proxy: Forwarding request to RealSubject");
    realSubject.request();
  }
}

public class Client {

  public static void main(String[] args) {
    System.out.println("Client: Executing the client code with a real subject:");
    Subject realSubject = new RealSubject();
    clientCode(realSubject);

    System.out.println("\nClient: Executing the same client code with a proxy:");
    Subject proxy = new Proxy(new RealSubject());
    clientCode(proxy);
  }

  public static void clientCode(Subject subject) {
    subject.request();
  }
}
