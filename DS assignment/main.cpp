#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <ctime>
#include <chrono>
#include <algorithm>

using namespace std;

// Student class definition
class Student {
public:
    string name;
    int id;
    float GPA;

    // Constructor
    Student(int i, string n, float g) : id(i), name(n), GPA(g) {}

    Student() : id(0), name(""), GPA(0.0) {}

    // Overloading < operator to compare names
    bool operator<(const Student& other) const {
        return name < other.name;
    }

    // Overloading > operator to compare names
    bool operator>(const Student& other) const {
        return name > other.name;
    }

    // Overloading <= operator to compare names
    bool operator<=(const Student& other) const {
        return name <= other.name;
    }

    bool operator>=(const Student& other) const {
        return name >= other.name;
    }

    bool operator==(const Student& other) const {
        return name == other.name;
    }

    Student& operator=(const Student& other) {
        if (this != &other) { // Check for self-assignment
            id = other.id;
            name = other.name;
            GPA = other.GPA;
        }
        return *this;
    }

    Student& operator+=(const Student& other) {
        id += other.id;
        name += other.name;
        GPA += other.GPA;
        return *this;
    }

    // Function to print student information
    friend ostream& operator<<(ostream& os, const Student& student) {
        os << "ID: " << student.id << ", Name: " << student.name << ", GPA: " << student.GPA;
        return os;
    }
};

// Insertion Sort function template
template<typename T>
void insertionSort(vector<T>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        T key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// Selection Sort function template
template<typename T>
void selectionSort(vector<T>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int min_idx = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx != i) {
            swap(arr[i], arr[min_idx]);
        }
    }
}

// Bubble Sort function template
template<typename T>
void bubbleSort(vector<T>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

// Shell Sort function template
template<typename T>
void shellSort(vector<T>& arr) {
    int n = arr.size();
    for (int gap = n / 2; gap > 0; gap /= 2) {
        for (int i = gap; i < n; ++i) {
            T temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}

// Merge Sort function template
template<typename T>
void merge(vector<T>& arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    vector<T> L(arr.begin() + l, arr.begin() + m + 1); // Initialize with a copy of elements from arr
    vector<T> R(arr.begin() + m + 1, arr.begin() + r + 1); // Initialize with a copy of elements from arr

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            ++i;
        } else {
            arr[k] = R[j];
            ++j;
        }
        ++k;
    }

    while (i < n1) {
        arr[k] = L[i];
        ++i;
        ++k;
    }

    while (j < n2) {
        arr[k] = R[j];
        ++j;
        ++k;
    }
}



template<typename T>
void mergeSortUtil(vector<T>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSortUtil(arr, l, m);
        mergeSortUtil(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

template<typename T>
void mergeSort(vector<T>& arr) {
    mergeSortUtil(arr, 0, arr.size() - 1);
}

// Quick Sort function template
template<typename T>
int partition(vector<T>& arr, int low, int high) {
    T pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; ++j) {
        if (arr[j] <= pivot) {
            ++i;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

template<typename T>
void quickSortUtil(vector<T>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSortUtil(arr, low, pi - 1);
        quickSortUtil(arr, pi + 1, high);
    }
}

template<typename T>
void quickSort(vector<T>& arr) {
    quickSortUtil(arr, 0, arr.size() - 1);
}

// Count Sort function template
#include <algorithm> // Include the <algorithm> header for max_element and min_element

// Count Sort function template
template<typename T>
void countSort(vector<T>& arr) {
    // Find the maximum and minimum elements in the array
    auto max_iter = std::max_element(arr.begin(), arr.end(), [](const T& a, const T& b) {
        return a.name < b.name; // Use the overloaded < operator for comparison
    });
    auto min_iter = std::min_element(arr.begin(), arr.end(), [](const T& a, const T& b) {
        return a.name < b.name; // Use the overloaded < operator for comparison
    });

    // Calculate the range of elements
    int range = static_cast<int>(max_iter->name.length()) - static_cast<int>(min_iter->name.length()) + 1;

    // Create a count array to store the frequency of each element
    vector<int> count(range, 0);

    // Count the frequency of each element in the input array
    for (const T& element : arr) {
        ++count[element.name.length() - min_iter->name.length()];
    }

    // Modify count array to contain actual positions of elements
    for (int i = 1; i < range; ++i) {
        count[i] += count[i - 1];
    }

    // Create an output array to store the sorted elements
    vector<T> output(arr.size());

    // Populate the output array with sorted elements
    for (int i = arr.size() - 1; i >= 0; --i) {
        output[count[arr[i].name.length() - min_iter->name.length()] - 1] = arr[i];
        --count[arr[i].name.length() - min_iter->name.length()];
    }

    // Assign the sorted elements back to the input array
    arr = output;
}




// Function to read student objects from a file
vector<Student> readStudentsFromFile(const string& filename) {
    ifstream file(filename);
    if (!file.is_open()) {
        cerr << "Error: Unable to open file: " << filename << endl;
        exit(1);
    }

    int numStudents;
    file >> numStudents;
    file.ignore(); // Ignore the newline character after reading the number of students

    vector<Student> students;
    for (int i = 0; i < numStudents; ++i) {
        int id;
        string name;
        float GPA;

        file >> id; // Read ID
        file.ignore(); // Ignore the newline character after reading ID
        getline(file, name); // Read name
        file >> GPA; // Read GPA
        file.ignore(); // Ignore the newline character after reading GPA
        file.ignore(); // Ignore the newline character after reading the GPA

        students.push_back(Student(id, name, GPA));
    }

    file.close();
    return students;
}


// Function to write student objects to a file
void writeStudentsToFile(const string& filename, const vector<Student>& students, const string& algorithmName, int numComparisons, double runTime) {
    ofstream file(filename);
    if (!file.is_open()) {
        cerr << "Error: Unable to open file: " << filename << endl;
        exit(1);
    }

    file << "Algorithm: " << algorithmName << endl;
    file << "Number of Comparisons: " << numComparisons << endl;
    file << "Running Time (ms): " << runTime << endl;
    file << "Sorted Students:" << endl;
    for (const Student& student : students) {
        file << student << endl;
    }

    file.close();
}

// Function to calculate the running time of sorting algorithms
template<typename T>
double calculateRunningTime(void (*sortingAlgorithm)(vector<T>&), vector<T>& arr) {
    auto start = chrono::high_resolution_clock::now();
    sortingAlgorithm(arr);
    auto end = chrono::high_resolution_clock::now();
    return chrono::duration_cast<chrono::milliseconds>(end - start).count();
}

int main() {
    // Read student objects from the file
    vector<Student> students = readStudentsFromFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\students.txt");

    // Sort the array of students' objects with each sorting algorithm
    vector<Student> sortedStudentsByName(students.size());
    vector<Student> sortedStudentsByGPA(students.size());

    // Sort by Name
    int numComparisons;
    double runTime;

// Sort by Name
// Insertion Sort
    numComparisons = 0;
    runTime = calculateRunningTime(insertionSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_InsertionSort.txt", sortedStudentsByName, "Insertion Sort", numComparisons, runTime);

// Selection Sort
    numComparisons = 0;
    runTime = calculateRunningTime(selectionSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_SelectionSort.txt", sortedStudentsByName, "Selection Sort", numComparisons, runTime);

// Bubble Sort
    numComparisons = 0;
    runTime = calculateRunningTime(bubbleSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_BubbleSort.txt", sortedStudentsByName, "Bubble Sort", numComparisons, runTime);

// Shell Sort
    numComparisons = 0;
    runTime = calculateRunningTime(shellSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_ShellSort.txt", sortedStudentsByName, "Shell Sort", numComparisons, runTime);

// Merge Sort
    numComparisons = 0;
    runTime = calculateRunningTime(mergeSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_mergeSort.txt", sortedStudentsByName, "Merge Sort", numComparisons, runTime);

// Quick Sort
    numComparisons = 0;
    runTime = calculateRunningTime(quickSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_QuickSort.txt", sortedStudentsByName, "Quick Sort", numComparisons, runTime);

// Count Sort
    numComparisons = 0;
    runTime = calculateRunningTime(countSort, sortedStudentsByName);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByName_CountSort.txt", sortedStudentsByName, "Count Sort", numComparisons, runTime);


// Sort by GPA
// Insertion Sort
    numComparisons = 0;
    runTime = calculateRunningTime(insertionSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_InsertionSort.txt", sortedStudentsByGPA, "Insertion Sort", numComparisons, runTime);

// Selection Sort
    numComparisons = 0;
    runTime = calculateRunningTime(selectionSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_SelectionSort.txt", sortedStudentsByGPA, "Selection Sort", numComparisons, runTime);

// Bubble Sort
    numComparisons = 0;
    runTime = calculateRunningTime(bubbleSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_BubbleSort.txt", sortedStudentsByGPA, "Bubble Sort", numComparisons, runTime);

// Shell Sort
    numComparisons = 0;
    runTime = calculateRunningTime(shellSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_ShellSort.txt", sortedStudentsByGPA, "Shell Sort", numComparisons, runTime);

// Merge Sort
    numComparisons = 0;
    runTime = calculateRunningTime(mergeSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_MergeSort.txt", sortedStudentsByGPA, "Merge Sort", numComparisons, runTime);

// Quick Sort
    numComparisons = 0;
    runTime = calculateRunningTime(quickSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_QuickSort.txt", sortedStudentsByGPA, "Quick Sort", numComparisons, runTime);

// Count Sort
    numComparisons = 0;
    runTime = calculateRunningTime(countSort, sortedStudentsByGPA);
    writeStudentsToFile("C:\\Users\\Yousof\\CLionProjects\\DS assignment\\SortedByGPA_CountSort.txt", sortedStudentsByGPA, "Count Sort", numComparisons, runTime);


    return 0;
}
