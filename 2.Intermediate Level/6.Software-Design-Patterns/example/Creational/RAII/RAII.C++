#include <fstream>
#include <iostream>
using namespace std;
class File {
public:
  explicit File(const string& filename) : file_(filename, ios::out) {
    if (!file_.is_open()) {
      throw runtime_error("Failed to open file: " + filename);
    }
  }
  // Destructor closes the file (resource cleanup)
  ~File() {
    if (file_.is_open()) {
      file_.close();
    }
  }
  void write(const string& content) {
    file_ << content << endl;
  }

private:
  ofstream file_;
};
int main() {
  try {
    File myFile("example.txt"); // Opens the file
    myFile.write("This is some content for the file.\n");
    // The file is automatically closed when myFile goes out of scope
  } catch (const exception& e) {
    cerr << "Error: " << e.what() << endl;
  }

  return 0;
}