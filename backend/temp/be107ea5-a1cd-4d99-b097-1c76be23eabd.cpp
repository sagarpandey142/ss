#include <iostream>
#include <string>
#include <limits>

int main() {
    int number;
    std::string text;

    // Taking integer input
    std::cout << "Enter a number: " << std::flush;
    std::cin >> number;

    // Clearing the input buffer before taking string input
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

    // Taking string input
    std::cout << "Enter a string: " << std::flush;
    std::getline(std::cin, text);

    // Printing the inputs
    std::cout << "You entered number: " << number << std::endl;
    std::cout << "You entered string: " << text << std::endl;

    return 0;
}
