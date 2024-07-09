class Subject {
    request(){}
}
class RealSubject extends Subject {
    request(){
        console.log('RealSubject: Handling request.');
    }
}

class ProxyExample extends Subject {
    constructor(realSubject) {
        super()
        this.realSubject = realSubject;
    }

    request(){
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    checkAccess(){
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    logAccess(){
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject) {
    subject.request();
}
console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);
console.log('Client: Executing the same client code with a proxy:');
const proxy = new ProxyExample(realSubject);
clientCode(proxy);