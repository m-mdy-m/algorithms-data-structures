// Public Access
#include <iostream>
using namespace std;
class MyClass {
public:
    int publichVar; // Public member variable
    void publicFunction() { // Public member function
        cout << "This is a public function." << endl;
    }
};

int main() {
    MyClass obj;
    obj.publichVar = 5; // Accessing public member variable
    obj.publicFunction(); // Calling public member function
    return 0;
}
// =================================================
// Private Access
#include <iostream>
using namespace std;
class MyClass {
private:
    int privateVar; // Private member variable
    void privateFunction() { // Private member function
        cout << "This is a private function." << endl;
    }
public:
    void setPrivateVar(int value) { // Public member function to set privateVar
        privateVar = value;
    }
    void accessPrivate() { // Public member function to access privateVar and privateFunction
        privateVar = 10; // Accessing private member variable
        privateFunction(); // Calling private member function
    }
};

int main() {
    MyClass obj;
    // obj.privateVar = 5; // Error
    // obj.privateFunction(); // Error
    obj.setPrivateVar(5); // Using public member function to set privateVar
    obj.accessPrivate(); // Using public member function to access privateVar and privateFunction
    return 0;
}
// =================================================
// Protected:
#include <iostream>
using namespace std;
class BaseClass {
protected:
    int protectedVar; // Protected member variable
    void protectedFunction() { // Protected member function
        cout << "This is a protected function." << endl;
    }
};

class DerivedClass : public BaseClass {
public:
    void accessProtected() { // Public member function to access protectedVar and protectedFunction
        protectedVar = 10; // Accessing protected member variable
        protectedFunction(); // Calling protected member function
    }
};

int main() {
    DerivedClass obj;
    // obj.protectedVar = 5; // Error
    // obj.protectedFunction(); // Error
    obj.accessProtected(); // Using public member function to access protectedVar and protectedFunction
    return 0;
}
