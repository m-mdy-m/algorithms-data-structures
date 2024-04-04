#include <iostream>
using namespace std;
 
class Test {
public:
    // User-Defined Constructor
    Test() { cout << "\n Constructor executed"; }
 
    // User-Defined Destructor
    ~Test() { cout << "\nDestructor executed"; }
};
main()
{
    Test t;
 
    return 0;
}