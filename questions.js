// ─────────────────────────────────────────────────────────────
//  questions.js  — Hardcoded MCQ bank
//  Structure: QUESTIONS[topic][subtopic][difficulty] = [ ...mcqs ]
//  Each MCQ: { q, opts: [a,b,c,d], ans: 0-based index, exp }
// ─────────────────────────────────────────────────────────────

const QUESTIONS = {

  /* ══════════════════ DSA ══════════════════ */
  dsa: {
    arrays: {
      easy: [
        { q: "What is the time complexity of accessing an element in an array by index?", opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"], ans: 2, exp: "Array index access is O(1) — direct memory address calculation." },
        { q: "Which of these is NOT a valid way to declare an array in Python?", opts: ["a = []", "a = list()", "a = array()", "a = [1,2,3]"], ans: 2, exp: "array() is not a built-in; you need to import array module first." },
        { q: "What does arr[-1] return in Python?", opts: ["Error", "First element", "Last element", "Second last element"], ans: 2, exp: "Negative indexing in Python: -1 refers to the last element." },
        { q: "What is the space complexity of an array of n elements?", opts: ["O(1)", "O(log n)", "O(n)", "O(n²)"], ans: 2, exp: "An array of n elements takes O(n) space." },
        { q: "Which operation is most expensive on an array?", opts: ["Access by index", "Insertion at beginning", "Access last element", "Get length"], ans: 1, exp: "Insertion at beginning requires shifting all elements — O(n)." },
      ],
      medium: [
        { q: "What is the time complexity of the Two Sum problem using a hash map?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], ans: 2, exp: "One pass with a hash map gives O(n) time and O(n) space." },
        { q: "Kadane's algorithm is used to find:", opts: ["Minimum subarray sum", "Maximum subarray sum", "Longest subarray", "Sorted subarray"], ans: 1, exp: "Kadane's algorithm finds the maximum sum contiguous subarray in O(n)." },
        { q: "What is the output of [1,2,3,4,5][1:4] in Python?", opts: ["[1,2,3]", "[2,3,4]", "[2,3,4,5]", "[1,2,3,4]"], ans: 1, exp: "Slicing [1:4] gives elements at index 1,2,3 → [2,3,4]." },
        { q: "Dutch National Flag algorithm sorts an array containing:", opts: ["0s and 1s", "0s, 1s and 2s", "Negative and positive numbers", "Sorted halves"], ans: 1, exp: "DNF algorithm sorts arrays of 0s, 1s, and 2s in O(n) with O(1) space." },
        { q: "What is the best time complexity to find if a subarray with sum k exists?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(k)"], ans: 2, exp: "Using prefix sums + hash map, we can find it in O(n)." },
      ],
      hard: [
        { q: "What is the time complexity of finding the median of two sorted arrays?", opts: ["O(n+m)", "O(log(min(n,m)))", "O(n log m)", "O(n²)"], ans: 1, exp: "Binary search on the smaller array gives O(log(min(n,m)))." },
        { q: "Trapping Rain Water problem — what is the optimal time complexity?", opts: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], ans: 2, exp: "Using two-pointer or prefix max/min arrays gives O(n) time, O(1) space." },
        { q: "Largest Rectangle in Histogram optimal solution uses:", opts: ["Two nested loops", "Divide and conquer", "Stack", "Binary search"], ans: 2, exp: "Stack-based approach gives O(n) time complexity." },
        { q: "Sliding window maximum (k-size window) optimal complexity is:", opts: ["O(nk)", "O(n log k)", "O(n)", "O(k log n)"], ans: 2, exp: "Using a deque (monotonic queue), we get O(n) time." },
        { q: "What does 'in-place' mean for array algorithms?", opts: ["Sorted array", "O(1) extra space used", "Recursive approach", "Using pointers only"], ans: 1, exp: "In-place means the algorithm uses O(1) extra auxiliary space." },
      ]
    },

    strings: {
      easy: [
        { q: "Which method reverses a string in Python?", opts: ["s.reverse()", "s[::-1]", "reverse(s)", "s.flip()"], ans: 1, exp: "s[::-1] uses slice with step -1 to reverse a string in Python." },
        { q: "What is the time complexity of string concatenation in a loop (n times) in Python?", opts: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], ans: 2, exp: "String immutability in Python makes naive concatenation O(n²); use join()." },
        { q: "What does 'palindrome' mean?", opts: ["Sorted string", "Reads same forward and backward", "Has no repeated chars", "All vowels"], ans: 1, exp: "A palindrome reads the same forwards and backwards, e.g., 'racecar'." },
        { q: "What is the ASCII value of 'A'?", opts: ["90", "65", "97", "64"], ans: 1, exp: "ASCII value of uppercase 'A' is 65." },
        { q: "Which of these checks if a string is a palindrome in O(n)?", opts: ["Compare char by char from both ends", "Sort and compare", "Hash each character", "Use recursion always"], ans: 0, exp: "Two-pointer from both ends is O(n) and O(1) space." },
      ],
      medium: [
        { q: "KMP algorithm is used for:", opts: ["String sorting", "Pattern matching", "Anagram detection", "Palindrome check"], ans: 1, exp: "Knuth-Morris-Pratt (KMP) does pattern matching in O(n+m) time." },
        { q: "Longest Common Subsequence of 'ABCD' and 'ACBD' is:", opts: ["2", "3", "4", "1"], ans: 1, exp: "LCS is 'ABD' or 'ACD' — length 3." },
        { q: "How many unique characters does 'AABCCD' have?", opts: ["3", "4", "5", "6"], ans: 1, exp: "Unique chars: A, B, C, D → 4 unique characters." },
        { q: "Rabin-Karp algorithm uses __ for pattern matching:", opts: ["KMP failure function", "Hashing", "Sorting", "BFS"], ans: 1, exp: "Rabin-Karp uses rolling hash to achieve average O(n+m) pattern matching." },
        { q: "What is the minimum number of operations to convert 'kitten' to 'sitting'? (Edit distance)", opts: ["2", "3", "4", "5"], ans: 1, exp: "Edit distance (Levenshtein) between kitten and sitting is 3." },
      ],
      hard: [
        { q: "Z-algorithm computes:", opts: ["Longest palindrome", "Z-array where Z[i] = length of longest substring starting at i matching prefix", "Suffix array", "Anagram count"], ans: 1, exp: "Z[i] is the length of the longest string starting from s[i] which is also a prefix of s." },
        { q: "Manacher's algorithm finds the longest palindromic substring in:", opts: ["O(n²)", "O(n log n)", "O(n)", "O(n³)"], ans: 2, exp: "Manacher's is a linear O(n) algorithm for longest palindromic substring." },
        { q: "Suffix Array construction optimal time complexity is:", opts: ["O(n²)", "O(n log² n)", "O(n log n)", "O(n)"], ans: 2, exp: "Efficient suffix array construction (SA-IS or DC3) takes O(n log n) or O(n)." },
        { q: "Regular expression matching with '.' and '*' — DP solution complexity:", opts: ["O(n)", "O(nm)", "O(n+m)", "O(2^n)"], ans: 1, exp: "DP approach: O(nm) where n = string length, m = pattern length." },
        { q: "Aho-Corasick algorithm is used for:", opts: ["Single pattern match", "Multiple pattern matching simultaneously", "Palindrome detection", "Compression"], ans: 1, exp: "Aho-Corasick finds all occurrences of multiple patterns in O(n + m + z) time." },
      ]
    },

    trees: {
      easy: [
        { q: "What is the height of a single node tree?", opts: ["0", "1", "-1", "Undefined"], ans: 0, exp: "A single node has height 0 (no edges from root to leaf)." },
        { q: "In a Binary Search Tree, where are smaller values stored?", opts: ["Right subtree", "Left subtree", "Root", "Random"], ans: 1, exp: "In BST, all nodes in the left subtree are smaller than the root." },
        { q: "What traversal visits nodes in Left → Root → Right order?", opts: ["Preorder", "Postorder", "Inorder", "Level order"], ans: 2, exp: "Inorder traversal (LNR) visits Left, then Node, then Right." },
        { q: "Maximum nodes in a binary tree of height h:", opts: ["h", "2h", "2^(h+1) - 1", "h²"], ans: 2, exp: "A complete binary tree of height h has 2^(h+1) - 1 nodes." },
        { q: "BFS on a tree uses which data structure?", opts: ["Stack", "Queue", "Priority Queue", "Array"], ans: 1, exp: "BFS (level-order traversal) uses a Queue to process nodes level by level." },
      ],
      medium: [
        { q: "What is the time complexity of searching in a balanced BST?", opts: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], ans: 1, exp: "In a balanced BST, search takes O(log n) — halving the search space each time." },
        { q: "Which traversal of BST gives sorted output?", opts: ["Preorder", "Postorder", "Inorder", "Level order"], ans: 2, exp: "Inorder traversal of BST gives elements in sorted ascending order." },
        { q: "Lowest Common Ancestor (LCA) of two nodes in BST takes:", opts: ["O(n)", "O(log n) for balanced BST", "O(1)", "O(n²)"], ans: 1, exp: "In a balanced BST, LCA can be found in O(log n) by comparing values." },
        { q: "A tree with n nodes has exactly how many edges?", opts: ["n", "n+1", "n-1", "2n"], ans: 2, exp: "A tree with n nodes always has exactly n-1 edges." },
        { q: "What makes an AVL tree 'balanced'?", opts: ["All leaves at same level", "Height difference of any node's children ≤ 1", "Perfect binary tree", "All nodes have 2 children"], ans: 1, exp: "AVL tree maintains the balance factor (|left height - right height| ≤ 1) at every node." },
      ],
      hard: [
        { q: "Serialize and deserialize a binary tree — optimal approach:", opts: ["Inorder only", "Preorder with null markers", "Level order only", "Postorder only"], ans: 1, exp: "Preorder traversal with null markers uniquely identifies the tree structure." },
        { q: "Time complexity of Morris Traversal:", opts: ["O(n log n)", "O(n) time, O(1) space", "O(n) time, O(n) space", "O(log n)"], ans: 1, exp: "Morris traversal uses threading to achieve O(n) time and O(1) extra space." },
        { q: "Red-Black tree guarantees height of at most:", opts: ["log n", "2 log n", "2 log(n+1)", "n/2"], ans: 2, exp: "A Red-Black tree with n nodes has height at most 2log(n+1)." },
        { q: "The diameter of a binary tree is:", opts: ["Height of tree", "Longest path between any two nodes", "Number of leaves", "Depth of deepest node"], ans: 1, exp: "Diameter = length of longest path between any two nodes (may not pass through root)." },
        { q: "Segment tree supports range queries and point updates in:", opts: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], ans: 1, exp: "Segment trees support both range queries and updates in O(log n) time." },
      ]
    },

    graphs: {
      easy: [
        { q: "What is an adjacency matrix used for?", opts: ["Storing tree nodes", "Representing graph connections", "Sorting edges", "Storing BFS order"], ans: 1, exp: "Adjacency matrix is a 2D array where matrix[i][j]=1 means edge between i and j." },
        { q: "DFS uses which data structure?", opts: ["Queue", "Stack (or recursion)", "Priority Queue", "Linked List"], ans: 1, exp: "DFS uses a stack (explicit or call stack via recursion) to track visited nodes." },
        { q: "BFS guarantees shortest path in:", opts: ["Weighted graphs", "Unweighted graphs", "Directed graphs only", "DAGs only"], ans: 1, exp: "BFS finds shortest path in terms of number of edges in unweighted graphs." },
        { q: "A graph with no cycles is called:", opts: ["Complete graph", "Bipartite graph", "Acyclic graph / Tree", "Sparse graph"], ans: 2, exp: "A connected acyclic undirected graph is called a tree." },
        { q: "In-degree of a node in a directed graph means:", opts: ["Edges going out", "Edges coming in", "Total edges", "Self loops"], ans: 1, exp: "In-degree = number of edges directed INTO the node." },
      ],
      medium: [
        { q: "Dijkstra's algorithm finds:", opts: ["Minimum spanning tree", "Shortest path from source (non-negative weights)", "All pairs shortest path", "Topological order"], ans: 1, exp: "Dijkstra finds single-source shortest paths for graphs with non-negative edge weights." },
        { q: "Topological sort is only possible on:", opts: ["Undirected graphs", "Directed Acyclic Graphs (DAG)", "Weighted graphs", "Complete graphs"], ans: 1, exp: "Topological sort requires a Directed Acyclic Graph (DAG) — no cycles allowed." },
        { q: "Kruskal's algorithm is used to find:", opts: ["Shortest path", "Minimum Spanning Tree", "Strongly connected components", "Bipartite check"], ans: 1, exp: "Kruskal's greedily adds minimum weight edges without forming cycles — gives MST." },
        { q: "Union-Find (Disjoint Set) data structure is used for:", opts: ["Graph coloring", "Cycle detection and connected components", "Shortest path", "BFS"], ans: 1, exp: "Union-Find efficiently merges sets and detects if two nodes are in the same component." },
        { q: "Bellman-Ford algorithm handles:", opts: ["Only positive weights", "Negative weights and detects negative cycles", "Only unweighted graphs", "Only DAGs"], ans: 1, exp: "Bellman-Ford works with negative weights and detects negative cycles in O(VE)." },
      ],
      hard: [
        { q: "Floyd-Warshall finds shortest paths between:", opts: ["Single source to all", "All pairs of vertices", "Source to sink only", "Minimum spanning tree"], ans: 1, exp: "Floyd-Warshall is an all-pairs shortest path algorithm with O(V³) complexity." },
        { q: "Tarjan's algorithm finds:", opts: ["MST", "Strongly Connected Components (SCC)", "Topological sort only", "Bipartite graph"], ans: 1, exp: "Tarjan's uses DFS with a stack to find all SCCs in O(V+E)." },
        { q: "Max flow — Min cut theorem states:", opts: ["Max flow equals min path length", "Maximum flow equals minimum cut capacity", "Min spanning tree equals max flow", "Flow is always n/2"], ans: 1, exp: "The max-flow min-cut theorem: maximum flow in a network = capacity of minimum cut." },
        { q: "Articulation point in a graph is:", opts: ["Node with max degree", "Node whose removal disconnects the graph", "First node in BFS", "Node with no edges"], ans: 1, exp: "An articulation point (cut vertex) is a node whose removal increases the number of connected components." },
        { q: "A* algorithm uses which heuristic approach?", opts: ["Pure BFS", "f(n) = g(n) + h(n) where h is heuristic", "Only Dijkstra", "Random walk"], ans: 1, exp: "A* uses f(n)=g(n)+h(n): g=actual cost so far, h=heuristic estimate to goal." },
      ]
    },

    dp: {
      easy: [
        { q: "What is memoization?", opts: ["Sorting results", "Caching recursive results to avoid recomputation", "Bottom-up DP", "Greedy approach"], ans: 1, exp: "Memoization stores results of expensive function calls and returns cached results." },
        { q: "Fibonacci using DP takes how much time?", opts: ["O(2^n)", "O(n)", "O(n²)", "O(log n)"], ans: 1, exp: "DP Fibonacci computes each subproblem once — O(n) time, O(n) or O(1) space." },
        { q: "Top-down DP is also called:", opts: ["Tabulation", "Memoization", "Greedy", "Divide and conquer"], ans: 1, exp: "Top-down DP = memoization (recursive with caching). Bottom-up = tabulation." },
        { q: "The 0/1 Knapsack problem has which time complexity?", opts: ["O(n)", "O(nW) where W = capacity", "O(2^n) always", "O(n log n)"], ans: 1, exp: "0/1 Knapsack DP table is O(nW) time and O(nW) space (optimizable to O(W))." },
        { q: "Overlapping subproblems is a key property of:", opts: ["Greedy algorithms", "Dynamic Programming", "Binary Search", "Sorting"], ans: 1, exp: "DP is applicable when the problem has overlapping subproblems and optimal substructure." },
      ],
      medium: [
        { q: "Longest Increasing Subsequence (LIS) optimal complexity:", opts: ["O(n²)", "O(n log n)", "O(n)", "O(2^n)"], ans: 1, exp: "LIS can be solved in O(n log n) using patience sorting / binary search." },
        { q: "Coin Change (minimum coins) — problem type:", opts: ["Greedy always works", "Unbounded Knapsack DP", "0/1 Knapsack", "Graph problem"], ans: 1, exp: "Coin Change is an unbounded knapsack variant — each coin can be used multiple times." },
        { q: "Matrix Chain Multiplication DP complexity:", opts: ["O(n)", "O(n²)", "O(n³)", "O(n log n)"], ans: 2, exp: "Matrix Chain Multiplication DP takes O(n³) time and O(n²) space." },
        { q: "Edit Distance (Levenshtein) DP complexity:", opts: ["O(n+m)", "O(nm)", "O(n²)", "O(n log m)"], ans: 1, exp: "Edit distance DP table is O(nm) where n,m are lengths of the two strings." },
        { q: "What is the state in the Longest Common Subsequence DP?", opts: ["dp[i] = length of LCS up to i", "dp[i][j] = LCS of first i chars of s1 and j chars of s2", "dp[i][j] = edit distance", "dp[i] = ith char match"], ans: 1, exp: "dp[i][j] stores the LCS length of the first i characters of s1 and first j of s2." },
      ],
      hard: [
        { q: "Bitmask DP is used when:", opts: ["Graph is weighted", "State includes a subset of elements (exponential states)", "Array is sorted", "Problem has no overlap"], ans: 1, exp: "Bitmask DP is used when we need to track which elements have been used — 2^n states." },
        { q: "Travelling Salesman Problem (TSP) optimal DP complexity:", opts: ["O(n²)", "O(n² · 2^n)", "O(n!)", "O(n³)"], ans: 1, exp: "TSP DP with bitmask: O(n² · 2^n) — better than brute force O(n!) but still exponential." },
        { q: "Digit DP is useful for:", opts: ["Sorting numbers", "Counting numbers in range [L,R] satisfying digit conditions", "Graph problems", "String matching"], ans: 1, exp: "Digit DP counts integers in a range that satisfy certain digit-level constraints." },
        { q: "Interval DP is characterized by:", opts: ["Linear recurrence", "dp[i][j] representing optimal value for subarray/subproblem from i to j", "2D grid problems", "Knapsack variants"], ans: 1, exp: "Interval DP computes answers for intervals [i,j] by combining smaller intervals." },
        { q: "Space optimization in LCS reduces space from O(nm) to:", opts: ["O(n+m)", "O(min(n,m))", "O(1)", "O(n log m)"], ans: 1, exp: "Only two rows are needed at a time — space reduces to O(min(n,m))." },
      ]
    },

    sorting: {
      easy: [
        { q: "What is the time complexity of Bubble Sort (worst case)?", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], ans: 2, exp: "Bubble Sort compares adjacent elements and bubbles the largest — O(n²) worst case." },
        { q: "Which sorting algorithm is best for nearly sorted data?", opts: ["Quick Sort", "Merge Sort", "Insertion Sort", "Heap Sort"], ans: 2, exp: "Insertion Sort is O(n) for nearly sorted data — best adaptive algorithm." },
        { q: "Merge Sort time complexity:", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], ans: 1, exp: "Merge Sort always runs in O(n log n) regardless of input." },
        { q: "Which sort is NOT stable?", opts: ["Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"], ans: 2, exp: "Quick Sort (standard implementation) is not stable — equal elements may be reordered." },
        { q: "Counting Sort works best when:", opts: ["Data is floating point", "Range of values k is small relative to n", "Data is already sorted", "Data is random"], ans: 1, exp: "Counting Sort is O(n+k) — efficient when k (value range) is small." },
      ],
      medium: [
        { q: "Quick Sort worst case occurs when:", opts: ["Array is random", "Pivot is always median", "Array is sorted or reverse sorted (bad pivot)", "Array has duplicates"], ans: 2, exp: "Quick Sort degrades to O(n²) when pivot is always the min/max (sorted input with naive pivot)." },
        { q: "Heap Sort time complexity:", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], ans: 1, exp: "Heap Sort builds a heap in O(n) then extracts n times at O(log n) each = O(n log n)." },
        { q: "Radix Sort on n numbers with d digits and base b:", opts: ["O(nd)", "O(n log n)", "O(d(n+b))", "O(n²)"], ans: 2, exp: "Radix Sort: O(d(n+b)) — d passes of counting sort with base b." },
        { q: "Tim Sort (Python's default sort) combines:", opts: ["Quick Sort + Heap Sort", "Merge Sort + Insertion Sort", "Counting Sort + Merge Sort", "Bubble Sort + Merge Sort"], ans: 1, exp: "Tim Sort is a hybrid of Merge Sort and Insertion Sort, giving O(n log n) worst case." },
        { q: "Which algorithm sorts in O(n log n) and O(1) extra space?", opts: ["Merge Sort", "Quick Sort (avg)", "Heap Sort", "Tim Sort"], ans: 2, exp: "Heap Sort achieves O(n log n) time with O(1) auxiliary space (in-place)." },
      ],
      hard: [
        { q: "Lower bound for comparison-based sorting is:", opts: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], ans: 1, exp: "Decision tree model proves Ω(n log n) is a lower bound for any comparison sort." },
        { q: "Introsort (used in C++ std::sort) combines:", opts: ["Quick Sort + Merge Sort", "Quick Sort + Heap Sort + Insertion Sort", "Heap Sort + Merge Sort", "Radix + Quick Sort"], ans: 1, exp: "Introsort starts with Quick Sort, switches to Heap Sort if depth exceeds 2·log n, and Insertion Sort for small arrays." },
        { q: "External sort is needed when:", opts: ["Array fits in RAM", "Data doesn't fit in memory — uses disk", "Sorting strings", "Data is already sorted"], ans: 1, exp: "External sorting (e.g., external merge sort) handles datasets larger than available RAM." },
        { q: "Patience sorting is used as the basis for:", opts: ["Radix Sort optimization", "O(n log n) LIS algorithm", "Stable Heap Sort", "Counting Sort extension"], ans: 1, exp: "Patience sorting underlies the O(n log n) Longest Increasing Subsequence algorithm." },
        { q: "Median of medians algorithm guarantees Quick Sort runs in:", opts: ["O(n log n) average", "O(n log n) worst case", "O(n)", "O(n²)"], ans: 1, exp: "Median of medians selects a good pivot guaranteeing O(n log n) worst-case Quick Sort." },
      ]
    }
  },

  /* ══════════════════ OOPs ══════════════════ */
  oops: {
    classes: {
      easy: [
        { q: "What is a class in OOP?", opts: ["An instance of an object", "A blueprint/template for creating objects", "A function", "A variable"], ans: 1, exp: "A class is a blueprint that defines the attributes and methods of an object." },
        { q: "What is an object?", opts: ["A class definition", "An instance of a class", "A method", "A variable type"], ans: 1, exp: "An object is a specific instance of a class with its own state and behavior." },
        { q: "Which keyword creates an object in Java?", opts: ["create", "object", "new", "make"], ans: 2, exp: "The 'new' keyword allocates memory and creates an instance of a class in Java." },
        { q: "What is the 'self' parameter in Python class methods?", opts: ["A global variable", "Reference to the current instance", "Class name", "Parent class"], ans: 1, exp: "'self' refers to the instance calling the method — equivalent to 'this' in Java/C++." },
        { q: "What are instance variables?", opts: ["Shared among all instances", "Unique to each object instance", "Static variables", "Global variables"], ans: 1, exp: "Instance variables are defined per object — each instance has its own copy." },
      ],
      medium: [
        { q: "What is the difference between a class variable and an instance variable?", opts: ["No difference", "Class variable shared by all instances; instance variable unique per object", "Instance variable is static", "Class variable is private"], ans: 1, exp: "Class variables are shared across all instances; instance variables are unique per object." },
        { q: "What is method overloading?", opts: ["Same method name, different parameters", "Overriding parent method", "Two classes with same method", "Static method call"], ans: 0, exp: "Method overloading: same method name but different number/type of parameters." },
        { q: "What does 'static' method mean in a class?", opts: ["Belongs to an instance", "Belongs to the class, not any instance", "Cannot be called", "Only works with inheritance"], ans: 1, exp: "Static methods belong to the class itself and don't need an object to be called." },
        { q: "What is a destructor?", opts: ["Creates object", "Called when object is created", "Called when object is destroyed/garbage collected", "Initializes variables"], ans: 2, exp: "Destructor (__del__ in Python, ~ClassName in C++) is called when an object is destroyed." },
        { q: "What is the purpose of getter and setter methods?", opts: ["Create instances", "Control access to private attributes", "Define class variables", "Call parent class"], ans: 1, exp: "Getters/setters provide controlled access to private/protected attributes — supports encapsulation." },
      ],
      hard: [
        { q: "What is a metaclass in Python?", opts: ["Parent of all classes", "Class of a class — controls class creation", "Abstract class", "Static class"], ans: 1, exp: "Metaclass is a class whose instances are classes — 'type' is the default metaclass in Python." },
        { q: "Diamond problem in OOP occurs when:", opts: ["Class has too many methods", "Multiple inheritance causes ambiguity in method resolution", "Single class inherits from itself", "Abstract method not implemented"], ans: 1, exp: "Diamond problem: B and C both inherit A; D inherits B and C — ambiguous which A to use." },
        { q: "Method Resolution Order (MRO) in Python uses:", opts: ["BFS", "DFS", "C3 Linearization algorithm", "Random order"], ans: 2, exp: "Python uses C3 linearization (C3 superclass linearization) to determine MRO." },
        { q: "What is a mixin in OOP?", opts: ["Base class only", "Class that provides methods to other classes without being a base class", "Singleton pattern", "Abstract class"], ans: 1, exp: "Mixin is a class that provides reusable methods but is not meant to stand alone as a base class." },
        { q: "Cohesion in OOP refers to:", opts: ["How much classes depend on each other", "How related the responsibilities of a single class are", "Number of methods in a class", "Inheritance depth"], ans: 1, exp: "High cohesion = a class has a single, well-defined purpose. Low cohesion = class does too many unrelated things." },
      ]
    },
    inheritance: {
      easy: [
        { q: "What is inheritance in OOP?", opts: ["Creating multiple objects", "A class acquiring properties of another class", "Method overloading", "Static binding"], ans: 1, exp: "Inheritance allows a child class to acquire the attributes and methods of a parent class." },
        { q: "Which keyword is used for inheritance in Java?", opts: ["implements", "inherits", "extends", "super"], ans: 2, exp: "'extends' keyword is used in Java for class inheritance." },
        { q: "What is a superclass?", opts: ["Child class", "Derived class", "Parent class", "Interface"], ans: 2, exp: "Superclass = parent class. Subclass = child class that inherits from it." },
        { q: "Can a subclass access private members of its superclass?", opts: ["Yes, directly", "Yes, through protected/public methods only", "No, never", "Only static members"], ans: 1, exp: "Private members are not directly accessible in subclasses — only through public/protected methods." },
        { q: "What is 'super()' used for?", opts: ["Create new object", "Call parent class constructor or method", "Define static method", "Access instance variable"], ans: 1, exp: "super() is used to call the constructor or methods of the parent class." },
      ],
      medium: [
        { q: "What type of inheritance does Java NOT support directly?", opts: ["Single", "Multilevel", "Hierarchical", "Multiple class inheritance"], ans: 3, exp: "Java doesn't support multiple class inheritance to avoid the diamond problem — uses interfaces instead." },
        { q: "What is method overriding?", opts: ["Same method name, different parameters in same class", "Redefining parent class method in child class", "Static method call", "Constructor chaining"], ans: 1, exp: "Method overriding: child class provides specific implementation for method already defined in parent." },
        { q: "IS-A relationship represents:", opts: ["Composition", "Association", "Inheritance", "Aggregation"], ans: 2, exp: "IS-A relationship = inheritance. HAS-A relationship = composition/aggregation." },
        { q: "What happens if child class doesn't override abstract method?", opts: ["It inherits an empty implementation", "Child class also becomes abstract", "Compilation error always", "Method is ignored"], ans: 1, exp: "If a child class doesn't implement all abstract methods, it must also be declared abstract." },
        { q: "@Override annotation in Java:", opts: ["Makes method static", "Creates new method", "Ensures method correctly overrides parent", "Makes method private"], ans: 2, exp: "@Override tells compiler to verify the method actually overrides a parent method — catches typos." },
      ],
      hard: [
        { q: "What is the Liskov Substitution Principle?", opts: ["Classes should be open for extension", "Subclasses should be substitutable for their parent class", "Depend on abstractions not concretions", "Single responsibility principle"], ans: 1, exp: "LSP: Objects of a subclass should be replaceable by objects of the superclass without breaking the program." },
        { q: "Fragile base class problem refers to:", opts: ["Abstract classes that are hard to implement", "Changes in base class unexpectedly breaking subclasses", "Too many levels of inheritance", "Private member access issues"], ans: 1, exp: "Fragile base class: modifying a base class can inadvertently break derived classes that depend on it." },
        { q: "Covariant return type means:", opts: ["Return type must match exactly", "Overriding method can return subtype of parent's return type", "Return type is void always", "Static return type"], ans: 1, exp: "Covariant return: overriding method can return a more specific (derived) type than the parent method." },
        { q: "Constructor chaining in Java with 'this()' calls:", opts: ["Parent constructor", "Static initializer", "Another constructor in same class", "Interface method"], ans: 2, exp: "this() calls another constructor in the same class — constructor chaining within the class." },
        { q: "What is 'virtual dispatch' in C++?", opts: ["Static method call", "Runtime polymorphism via vtable lookup", "Template method", "Inline function"], ans: 1, exp: "Virtual dispatch uses a vtable (virtual function table) to call the correct overridden method at runtime." },
      ]
    }
  },

  /* ══════════════════ DBMS ══════════════════ */
  dbms: {
    normalization: {
      easy: [
        { q: "What is normalization in databases?", opts: ["Sorting records", "Organizing data to reduce redundancy", "Indexing tables", "Encrypting data"], ans: 1, exp: "Normalization organizes database tables to reduce redundancy and improve data integrity." },
        { q: "1NF requires:", opts: ["No partial dependencies", "Atomic values — no repeating groups or arrays", "No transitive dependencies", "No null values"], ans: 1, exp: "1NF: each column must have atomic (indivisible) values, no repeating groups." },
        { q: "What is a functional dependency?", opts: ["A → B: knowing A determines B", "Two tables linked by a key", "Index on a column", "Foreign key relationship"], ans: 0, exp: "A → B means the value of A functionally determines the value of B." },
        { q: "2NF requires the table to be in 1NF and:", opts: ["No transitive dependencies", "No partial dependencies on the primary key", "BCNF satisfied", "All foreign keys defined"], ans: 1, exp: "2NF: must be in 1NF and every non-key attribute must depend on the WHOLE primary key." },
        { q: "Which normal form eliminates transitive dependencies?", opts: ["1NF", "2NF", "3NF", "BCNF"], ans: 2, exp: "3NF eliminates transitive dependencies — non-key attributes must depend only on the primary key." },
      ],
      medium: [
        { q: "BCNF (Boyce-Codd Normal Form) is stricter than 3NF because:", opts: ["It handles multivalued dependencies", "Every determinant must be a candidate key", "It eliminates all redundancy", "It requires no null values"], ans: 1, exp: "BCNF: for every functional dependency A → B, A must be a superkey. Stricter than 3NF." },
        { q: "Denormalization is done to:", opts: ["Reduce redundancy", "Improve read performance at the cost of some redundancy", "Enforce constraints", "Remove primary keys"], ans: 1, exp: "Denormalization intentionally adds redundancy to improve read query performance." },
        { q: "4NF deals with:", opts: ["Transitive dependencies", "Partial dependencies", "Multivalued dependencies", "Join dependencies"], ans: 2, exp: "4NF eliminates non-trivial multivalued dependencies that aren't functional dependencies." },
        { q: "If a relation is in BCNF, it is also in:", opts: ["4NF", "3NF", "5NF", "None of above"], ans: 1, exp: "BCNF ⊂ 3NF — if a relation is in BCNF, it is necessarily in 3NF as well." },
        { q: "Lossless join decomposition means:", opts: ["No data is lost when joining", "Original relation can be reconstructed from decomposed tables via natural join", "No foreign keys needed", "Tables have same columns"], ans: 1, exp: "Lossless: natural joining decomposed tables gives back the original relation with no spurious tuples." },
      ],
      hard: [
        { q: "A relation in 3NF but not BCNF implies:", opts: ["No candidate keys", "Multiple candidate keys with overlapping attributes", "Transitive dependency exists", "It has multivalued dependencies"], ans: 1, exp: "A relation can be in 3NF but not BCNF when there are overlapping candidate keys." },
        { q: "Minimal cover (canonical cover) of a set of FDs is:", opts: ["Largest set of FDs", "Smallest equivalent set with no redundant FDs", "FDs with single attributes on right side only", "Both B and C"], ans: 3, exp: "Minimal cover: equivalent FD set with single RHS attributes, no extraneous attributes, no redundant FDs." },
        { q: "5NF (Project-Join Normal Form) deals with:", opts: ["Multivalued dependencies", "Transitive dependencies", "Join dependencies", "Functional dependencies"], ans: 2, exp: "5NF eliminates join dependencies — a table should not be lossy-decomposable into smaller tables." },
        { q: "Heath's theorem states: if R has FD A→B and A→C, then:", opts: ["R must be in BCNF", "R can be losslessly decomposed into R(A,B) and R(A,C)", "R must have composite key", "R needs 4NF"], ans: 1, exp: "Heath's theorem guarantees a lossless decomposition into two relations when a FD holds." },
        { q: "Which is the highest normal form practically used in industry?", opts: ["2NF", "3NF", "BCNF", "5NF"], ans: 2, exp: "BCNF is the highest normal form commonly used in practice; 4NF and 5NF are rarely needed." },
      ]
    },
    transactions: {
      easy: [
        { q: "What does ACID stand for?", opts: ["Access, Commit, Isolate, Depend", "Atomicity, Consistency, Isolation, Durability", "Async, Cache, Index, Data", "None of above"], ans: 1, exp: "ACID = Atomicity, Consistency, Isolation, Durability — properties of reliable transactions." },
        { q: "Atomicity means:", opts: ["Fast transactions", "Transaction completes fully or not at all", "Transactions run simultaneously", "Data is always current"], ans: 1, exp: "Atomicity: a transaction is an all-or-nothing operation — either fully committed or fully rolled back." },
        { q: "What is a commit in database transactions?", opts: ["Undo changes", "Permanently save transaction changes", "Lock table", "Start a transaction"], ans: 1, exp: "COMMIT permanently saves all changes made in the current transaction." },
        { q: "ROLLBACK is used to:", opts: ["Save data", "Undo all changes made in the current transaction", "Start a new transaction", "Lock rows"], ans: 1, exp: "ROLLBACK reverts all changes made in the current transaction back to the last commit point." },
        { q: "Isolation ensures:", opts: ["Data is backed up", "Concurrent transactions don't interfere with each other", "Data is never lost", "Transactions are fast"], ans: 1, exp: "Isolation ensures each transaction executes as if it's the only one — prevents interference." },
      ],
      medium: [
        { q: "Which isolation level prevents dirty reads but allows non-repeatable reads?", opts: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], ans: 1, exp: "Read Committed prevents dirty reads but allows non-repeatable reads." },
        { q: "A dirty read occurs when:", opts: ["Reading committed data", "Reading uncommitted data from another transaction", "Reading from an index", "Reading NULL values"], ans: 1, exp: "Dirty read: transaction T1 reads data written by uncommitted transaction T2." },
        { q: "Phantom read occurs when:", opts: ["Data changes between two reads in same transaction", "New rows appear in a result set due to another transaction's insert", "Reading rolled-back data", "Index is missing"], ans: 1, exp: "Phantom read: re-executing a query returns different rows due to inserts by another transaction." },
        { q: "Two-Phase Locking (2PL) ensures:", opts: ["Fast deadlock recovery", "Serializability of transactions", "No transactions wait", "Optimistic concurrency"], ans: 1, exp: "2PL guarantees serializability — growing phase acquires locks, shrinking phase releases them." },
        { q: "What is a savepoint?", opts: ["Backup of entire database", "Intermediate point within transaction to partially rollback to", "Start of transaction", "Commit checkpoint"], ans: 1, exp: "Savepoints allow partial rollback to a specific point within a transaction." },
      ],
      hard: [
        { q: "Strict 2PL differs from 2PL in that:", opts: ["No growing phase", "All exclusive locks held until transaction commits/aborts", "No deadlocks possible", "Allows dirty reads"], ans: 1, exp: "Strict 2PL holds all exclusive (write) locks until the transaction commits — prevents cascading rollbacks." },
        { q: "MVCC (Multi-Version Concurrency Control) improves:", opts: ["Write performance", "Read performance without blocking writers", "Index performance", "Lock granularity"], ans: 1, exp: "MVCC allows readers to see a consistent snapshot without blocking writers — used in PostgreSQL, Oracle." },
        { q: "The 'ACA' (Avoids Cascading Aborts) schedule requires:", opts: ["Reads only committed data", "No locks needed", "Writes before reads", "All transactions serializable"], ans: 0, exp: "ACA schedules allow a transaction to read data written by T2 only after T2 commits." },
        { q: "Deadlock detection using wait-for graph: deadlock exists when:", opts: ["Graph has a node with high degree", "Graph contains a cycle", "Graph is disconnected", "Graph has more than 10 nodes"], ans: 1, exp: "A cycle in the wait-for graph indicates a deadlock among the transactions in the cycle." },
        { q: "ARIES recovery algorithm uses which 3 phases?", opts: ["Lock, Execute, Commit", "Analysis, Redo, Undo", "Scan, Apply, Rollback", "Checkpoint, Replay, Verify"], ans: 1, exp: "ARIES uses Analysis (find dirty pages), Redo (replay history), Undo (rollback incomplete transactions)." },
      ]
    }
  },

  /* ══════════════════ OS ══════════════════ */
  os: {
    processes: {
      easy: [
        { q: "What is a process?", opts: ["A stored program", "A program in execution", "An OS thread", "A file on disk"], ans: 1, exp: "A process is a program in execution — it includes the program code, data, and execution state." },
        { q: "PCB (Process Control Block) stores:", opts: ["File contents", "Process state, PID, registers, memory info", "OS kernel code", "Disk sectors"], ans: 1, exp: "PCB contains all information about a process: state, PID, program counter, registers, memory maps." },
        { q: "What are the states of a process? (basic)", opts: ["Ready, Running, Blocked", "Start, Middle, End", "Load, Execute, Terminate", "New, Active, Dead"], ans: 0, exp: "Basic process states: Ready (waiting for CPU), Running (executing), Blocked/Waiting (waiting for I/O)." },
        { q: "Context switching means:", opts: ["Switching between hard drives", "Saving state of current process and restoring state of next process", "Killing a process", "Allocating new memory"], ans: 1, exp: "Context switch: OS saves current process state and loads the state of the next scheduled process." },
        { q: "A zombie process is:", opts: ["Process consuming high CPU", "Terminated process whose entry is still in process table", "Process waiting for I/O", "Background daemon"], ans: 1, exp: "Zombie: process has finished but its PCB remains because parent hasn't read the exit status yet." },
      ],
      medium: [
        { q: "Inter-Process Communication (IPC) methods include:", opts: ["Only shared memory", "Pipes, message queues, shared memory, sockets", "Only semaphores", "Only files"], ans: 1, exp: "IPC mechanisms: pipes, named pipes, message queues, shared memory, semaphores, sockets." },
        { q: "fork() system call:", opts: ["Terminates current process", "Creates a new child process identical to parent", "Loads a new program", "Creates a thread"], ans: 1, exp: "fork() creates a new process (child) that is a copy of the calling process (parent)." },
        { q: "What is a daemon process?", opts: ["High-priority process", "Background process that runs continuously to serve requests", "Zombie process", "Interactive process"], ans: 1, exp: "Daemon: background process running continuously (e.g., web server, print spooler, cron)." },
        { q: "exec() family of calls:", opts: ["Creates child process", "Replaces current process image with new program", "Terminates process", "Creates thread"], ans: 1, exp: "exec() replaces the calling process's memory space with a new program — no new PID created." },
        { q: "Orphan process is:", opts: ["Process with no children", "Process whose parent has terminated", "Process waiting for I/O", "Zombie process"], ans: 1, exp: "Orphan: parent died before child — typically adopted by init (PID 1) process." },
      ],
      hard: [
        { q: "Copy-on-Write (COW) optimization in fork():", opts: ["Copies all memory immediately", "Shares pages until either process writes — only then copies", "Doesn't copy any memory", "Uses virtual memory only"], ans: 1, exp: "COW: after fork(), parent and child share the same physical pages. A copy is made only when a page is written." },
        { q: "The difference between process and thread:", opts: ["No difference", "Threads share memory space of the process; processes have separate memory", "Threads are slower", "Processes share memory"], ans: 1, exp: "Threads share heap, code, and data segments of their process. Processes have independent memory spaces." },
        { q: "Linux process scheduling uses which policy for real-time tasks?", opts: ["FIFO only", "SCHED_FIFO and SCHED_RR", "Round Robin only", "CFS (Completely Fair Scheduler)"], ans: 1, exp: "Linux supports SCHED_FIFO and SCHED_RR for real-time; CFS is for normal (non-real-time) tasks." },
        { q: "What is a race condition?", opts: ["Process runs too fast", "Outcome depends on non-deterministic order of concurrent operations", "Deadlock in processes", "Memory overflow"], ans: 1, exp: "Race condition: two or more processes access shared data concurrently and at least one writes — result depends on timing." },
        { q: "The critical section problem requires:", opts: ["Mutual exclusion only", "Mutual exclusion, progress, and bounded waiting", "Only bounded waiting", "Only progress guarantee"], ans: 1, exp: "Critical section solution must satisfy: mutual exclusion, progress (no unnecessary delay), and bounded waiting." },
      ]
    },
    scheduling: {
      easy: [
        { q: "What is CPU scheduling?", opts: ["Allocating disk to processes", "Deciding which process runs on CPU and when", "Managing RAM", "File system organization"], ans: 1, exp: "CPU scheduling decides which process in the ready queue gets the CPU and for how long." },
        { q: "FCFS (First Come First Serve) scheduling is:", opts: ["Preemptive", "Non-preemptive", "Priority-based", "Shortest job first"], ans: 1, exp: "FCFS is non-preemptive — process runs until it finishes or blocks. Simple but suffers from convoy effect." },
        { q: "What is the convoy effect?", opts: ["Processes running in parallel", "Short processes wait behind a long process in FCFS", "Context switch overhead", "Priority inversion"], ans: 1, exp: "Convoy effect in FCFS: many short processes stuck waiting behind one long-running process." },
        { q: "Round Robin scheduling uses:", opts: ["Priority queue", "Time quantum — each process runs for a fixed time slice", "Shortest job first", "FCFS order"], ans: 1, exp: "Round Robin gives each process a time quantum (time slice) and cycles through the ready queue." },
        { q: "Turnaround time is:", opts: ["Time process waits in ready queue", "Time from submission to completion", "CPU burst time", "Context switch time"], ans: 1, exp: "Turnaround time = completion time − arrival time." },
      ],
      medium: [
        { q: "SJF (Shortest Job First) is optimal for minimizing:", opts: ["Turnaround time", "Average waiting time", "Context switches", "Response time"], ans: 1, exp: "SJF minimizes average waiting time — but requires knowing burst times in advance (not always practical)." },
        { q: "Preemptive version of SJF is called:", opts: ["Round Robin", "SRTF (Shortest Remaining Time First)", "Priority Scheduling", "FCFS"], ans: 1, exp: "SRTF = Shortest Remaining Time First — preemptive SJF, preempts if new process has shorter remaining time." },
        { q: "Priority scheduling can lead to:", opts: ["High throughput", "Starvation of low-priority processes", "No context switches", "Perfect fairness"], ans: 1, exp: "Starvation: low-priority processes may wait indefinitely if high-priority processes keep arriving." },
        { q: "Aging is used to solve:", opts: ["Deadlock", "Starvation — gradually increasing priority of waiting processes", "Memory fragmentation", "Race conditions"], ans: 1, exp: "Aging increases the priority of a process the longer it waits — prevents indefinite starvation." },
        { q: "Multilevel Queue Scheduling uses:", opts: ["Single queue for all processes", "Separate queues for different process types (system, interactive, batch)", "Only Round Robin", "Priority only"], ans: 1, exp: "Multilevel queue: separate ready queues for process categories with different scheduling per queue." },
      ],
      hard: [
        { q: "Linux CFS (Completely Fair Scheduler) uses:", opts: ["Simple round-robin", "Red-Black tree ordered by virtual runtime (vruntime)", "Priority queue with fixed levels", "FIFO queue"], ans: 1, exp: "CFS uses a red-black tree ordered by vruntime — process with minimum vruntime runs next." },
        { q: "Real-time scheduling — EDF (Earliest Deadline First) is:", opts: ["Non-preemptive", "Optimal preemptive algorithm for uniprocessor real-time", "Used for batch jobs", "Round Robin variant"], ans: 1, exp: "EDF is optimal for preemptive uniprocessor real-time scheduling — schedules task with earliest deadline first." },
        { q: "Rate Monotonic Scheduling (RMS) assigns priority based on:", opts: ["Burst time", "Period — shorter period = higher priority", "Deadline", "Memory usage"], ans: 1, exp: "RMS: static priority assignment where shorter period tasks get higher priority — optimal for periodic tasks." },
        { q: "CPU utilization bound for n tasks under RMS is approximately:", opts: ["100%", "n(2^(1/n) - 1) ≈ 69% as n→∞", "50%", "90%"], ans: 1, exp: "RMS utilization bound = n(2^(1/n) - 1), approaches ln(2) ≈ 69.3% as n → ∞." },
        { q: "Gang scheduling is used for:", opts: ["Single-core optimization", "Scheduling related threads to run simultaneously on multiple processors", "Real-time tasks", "I/O-bound processes"], ans: 1, exp: "Gang scheduling runs a group of related threads simultaneously across multiple processors to minimize synchronization delays." },
      ]
    }
  },

  /* ══════════════════ CN ══════════════════ */
  cn: {
    osi: {
      easy: [
        { q: "How many layers does the OSI model have?", opts: ["5", "6", "7", "4"], ans: 2, exp: "OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
        { q: "Which layer is responsible for routing?", opts: ["Data Link", "Transport", "Network", "Session"], ans: 2, exp: "Network layer (Layer 3) handles routing packets across networks using IP addresses." },
        { q: "Which OSI layer provides end-to-end communication?", opts: ["Network", "Transport", "Session", "Application"], ans: 1, exp: "Transport layer (Layer 4) provides end-to-end communication, error recovery, and flow control (TCP/UDP)." },
        { q: "MAC address operates at which layer?", opts: ["Network layer", "Data Link layer", "Transport layer", "Physical layer"], ans: 1, exp: "MAC addresses operate at the Data Link layer (Layer 2) for node-to-node communication." },
        { q: "HTTP operates at which OSI layer?", opts: ["Transport", "Session", "Network", "Application"], ans: 3, exp: "HTTP operates at the Application layer (Layer 7) — the topmost layer interfacing with end-user applications." },
      ],
      medium: [
        { q: "What does ARP do?", opts: ["Resolves domain names to IPs", "Resolves IP addresses to MAC addresses", "Routes packets", "Encrypts data"], ans: 1, exp: "ARP (Address Resolution Protocol) maps an IP address to the corresponding MAC address on a local network." },
        { q: "Which layer handles session management and dialog control?", opts: ["Transport", "Session", "Presentation", "Network"], ans: 1, exp: "Session layer (Layer 5) manages sessions — establishes, maintains, and terminates communication sessions." },
        { q: "SSL/TLS operates primarily at which layer?", opts: ["Network", "Transport", "Presentation/between Transport and Application", "Data Link"], ans: 2, exp: "SSL/TLS sits between Transport and Application layers — often considered part of Presentation layer security." },
        { q: "What is the PDU at the Data Link layer?", opts: ["Bit", "Packet", "Frame", "Segment"], ans: 2, exp: "PDUs: Physical=Bit, Data Link=Frame, Network=Packet, Transport=Segment, Application=Data/Message." },
        { q: "Which device operates at the Network layer?", opts: ["Switch", "Hub", "Router", "Repeater"], ans: 2, exp: "Router operates at Network layer (Layer 3) — forwards packets based on IP addresses." },
      ],
      hard: [
        { q: "Spanning Tree Protocol (STP) prevents:", opts: ["IP conflicts", "Broadcast storms from loops in Data Link layer", "Routing loops", "MAC address conflicts"], ans: 1, exp: "STP prevents Layer 2 loops which cause broadcast storms — ensures a loop-free logical topology." },
        { q: "What is the purpose of the Presentation layer?", opts: ["Route packets", "Data translation, encryption, compression between application and network formats", "Session management", "Physical transmission"], ans: 1, exp: "Presentation layer handles data format translation, encryption/decryption, and compression (e.g., JPEG, ASCII, SSL)." },
        { q: "VLAN (Virtual LAN) operates at which layer?", opts: ["Physical", "Data Link (Layer 2)", "Network (Layer 3)", "Transport"], ans: 1, exp: "VLANs operate at Layer 2 (Data Link) — logically segment a physical network using 802.1Q tagging." },
        { q: "What is the difference between TCP/IP model and OSI model?", opts: ["They are identical", "TCP/IP has 4 layers (Application, Transport, Internet, Network Access) vs OSI's 7", "OSI has 4 layers", "TCP/IP has 9 layers"], ans: 1, exp: "TCP/IP model has 4 layers merging OSI's top 3 into Application and bottom 2 into Network Access." },
        { q: "In the OSI model, which layer is responsible for bit synchronization?", opts: ["Data Link", "Physical", "Network", "Transport"], ans: 1, exp: "Physical layer (Layer 1) handles bit transmission, bit synchronization, and physical medium specifications." },
      ]
    }
  },

  /* ══════════════════ WEB DEV ══════════════════ */
  webdev: {
    html: {
      easy: [
        { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Text Modern Language", "Hyper Transfer Markup Language", "Hyper Text Modern Language"], ans: 0, exp: "HTML = HyperText Markup Language — the standard language for creating web pages." },
        { q: "Which tag creates a hyperlink?", opts: ["<link>", "<a>", "<href>", "<url>"], ans: 1, exp: "<a> (anchor) tag creates hyperlinks. The href attribute specifies the URL." },
        { q: "Which tag is used for the largest heading?", opts: ["<h6>", "<head>", "<h1>", "<header>"], ans: 2, exp: "<h1> is the largest heading tag. HTML has h1 through h6, with h1 being the biggest." },
        { q: "What is the correct HTML tag for inserting an image?", opts: ["<image src=''>", "<img src=''>", "<picture src=''>", "<photo src=''>"], ans: 1, exp: "<img src='url' alt='description'> is the correct self-closing tag for images." },
        { q: "<!DOCTYPE html> declares:", opts: ["HTML version 4", "The document is HTML5", "A comment", "CSS stylesheet"], ans: 1, exp: "<!DOCTYPE html> tells the browser to use HTML5 standards mode." },
      ],
      medium: [
        { q: "Semantic HTML elements include:", opts: ["<div> and <span>", "<header>, <nav>, <article>, <section>, <footer>", "<b> and <i>", "<br> and <hr>"], ans: 1, exp: "Semantic elements describe meaning: <header>, <nav>, <main>, <article>, <section>, <footer>, <aside>." },
        { q: "What is the purpose of the 'alt' attribute in <img>?", opts: ["Image title tooltip", "Alternative text for accessibility and when image fails to load", "Image file size", "Image format"], ans: 1, exp: "alt attribute provides alternative text for screen readers and shows when the image can't load." },
        { q: "Which HTML5 input type shows a date picker?", opts: ["type='calendar'", "type='date'", "type='datetime'", "type='picker'"], ans: 1, exp: "<input type='date'> displays a date picker in supporting browsers." },
        { q: "data-* attributes in HTML5 are used for:", opts: ["Styling elements", "Storing custom data private to the page", "Server communication", "Form validation"], ans: 1, exp: "data-* attributes store extra custom data on HTML elements, accessible via JavaScript's dataset API." },
        { q: "The <canvas> element is used for:", opts: ["Embedding videos", "Drawing graphics via JavaScript", "Creating forms", "Displaying tables"], ans: 1, exp: "<canvas> provides a bitmap drawing surface controllable via JavaScript Canvas API." },
      ],
      hard: [
        { q: "Web Components consist of:", opts: ["React components", "Custom Elements, Shadow DOM, and HTML Templates", "HTML + CSS only", "Angular directives"], ans: 1, exp: "Web Components = Custom Elements (new HTML elements) + Shadow DOM (encapsulated DOM) + HTML Templates." },
        { q: "Shadow DOM provides:", opts: ["Faster rendering", "Encapsulation — styles and markup don't leak in or out", "Server-side rendering", "Virtual DOM"], ans: 1, exp: "Shadow DOM encapsulates DOM and CSS — styles inside shadow DOM don't affect the outer document and vice versa." },
        { q: "ARIA (Accessible Rich Internet Applications) attributes help:", opts: ["Style elements", "SEO improvement", "Assistive technologies understand dynamic content", "Browser caching"], ans: 2, exp: "ARIA attributes (role, aria-label, aria-hidden, etc.) enhance accessibility for screen readers and assistive tech." },
        { q: "Content Security Policy (CSP) is set via:", opts: ["<meta> tag or HTTP header", "JavaScript only", "CSS", "HTML5 data attributes"], ans: 0, exp: "CSP is configured via the Content-Security-Policy HTTP response header or <meta http-equiv='Content-Security-Policy'>." },
        { q: "What is the purpose of <link rel='preload'>?", opts: ["Load CSS", "Hint browser to fetch resource early in page load", "Create hyperlink", "Import module"], ans: 1, exp: "preload tells the browser to fetch a resource (font, script, image) earlier in the page lifecycle." },
      ]
    },
    "js-core": {
      easy: [
        { q: "What is 'typeof null' in JavaScript?", opts: ["'null'", "'undefined'", "'object'", "'boolean'"], ans: 2, exp: "typeof null === 'object' — this is a long-standing JavaScript bug/quirk preserved for backward compatibility." },
        { q: "What does === check in JavaScript?", opts: ["Value only", "Type only", "Value and type (strict equality)", "Reference only"], ans: 2, exp: "=== is strict equality — checks both value AND type without type coercion. Use === over ==." },
        { q: "What is hoisting in JavaScript?", opts: ["Moving code to server", "Variable and function declarations moved to top of scope during compilation", "Async loading", "Event bubbling"], ans: 1, exp: "Hoisting: var declarations and function declarations are moved to the top of their scope during the compile phase." },
        { q: "What does 'let' differ from 'var'?", opts: ["let is global, var is local", "let is block-scoped; var is function-scoped", "No difference", "let cannot be reassigned"], ans: 1, exp: "let is block-scoped ({}) while var is function-scoped. let also doesn't hoist initializations (temporal dead zone)." },
        { q: "What is an arrow function?", opts: ["Function with arrows in name", "Shorter function syntax that doesn't bind its own 'this'", "Async function", "Generator function"], ans: 1, exp: "Arrow functions (=>) are concise and don't have their own 'this' — they inherit 'this' from the enclosing scope." },
      ],
      medium: [
        { q: "What is a closure in JavaScript?", opts: ["Closing a browser window", "Function that remembers its outer scope variables even after outer function returns", "Event listener removal", "Module pattern"], ans: 1, exp: "Closure: inner function retains access to outer function's variables even after outer function has returned." },
        { q: "What is the event loop in JavaScript?", opts: ["Loop for DOM events only", "Mechanism that handles async operations — call stack + callback queue + Web APIs", "For loop for events", "Error handling loop"], ans: 1, exp: "Event loop: JS is single-threaded. Async callbacks queue up; event loop pushes them to call stack when it's empty." },
        { q: "Promise.all() behavior:", opts: ["Returns first resolved promise", "Resolves when ALL promises resolve; rejects if ANY rejects", "Ignores rejections", "Returns slowest promise"], ans: 1, exp: "Promise.all() waits for ALL promises to resolve. If any one rejects, the whole thing rejects immediately." },
        { q: "What does 'this' refer to inside an arrow function?", opts: ["The arrow function itself", "window/global object", "Enclosing lexical scope's 'this'", "undefined always"], ans: 2, exp: "Arrow functions don't have their own 'this' — they capture 'this' from the surrounding lexical scope." },
        { q: "What is prototype chain in JavaScript?", opts: ["DOM tree", "Chain of objects linked via __proto__; property lookup traverses this chain", "Import chain", "CSS specificity chain"], ans: 1, exp: "Every JS object has a [[Prototype]]. Property lookup goes up the chain until found or reaches null." },
      ],
      hard: [
        { q: "What is the Temporal Dead Zone (TDZ)?", opts: ["Async code delay", "Period from start of block scope until let/const declaration is reached", "setTimeout delay", "Promise pending state"], ans: 1, exp: "TDZ: let/const variables exist in scope from block start, but accessing before declaration throws ReferenceError." },
        { q: "What does Object.freeze() do?", opts: ["Deep freezes nested objects", "Prevents adding, removing, or modifying properties of an object (shallow)", "Makes object immutable recursively", "Seals the object's prototype"], ans: 1, exp: "Object.freeze() makes an object non-extensible and all properties non-writable/non-configurable — but shallow only." },
        { q: "Generator functions use __ keyword:", opts: ["async", "yield* only", "function* and yield", "return*"], ans: 2, exp: "Generators use function* declaration and yield to pause execution, returning an iterator." },
        { q: "WeakMap differs from Map in that:", opts: ["WeakMap is faster", "WeakMap keys must be objects and are weakly held (garbage collectable)", "WeakMap allows primitive keys", "WeakMap is ordered"], ans: 1, exp: "WeakMap: only object keys, held weakly — if no other reference to key exists, it can be garbage collected." },
        { q: "What is the purpose of the Proxy object in JavaScript?", opts: ["Network proxy", "Intercept and redefine fundamental operations (get, set, has) on another object", "Create private variables", "Module bundling"], ans: 1, exp: "Proxy wraps an object and intercepts operations like property get/set — used for validation, logging, reactive systems." },
      ]
    }
  },

  /* ══════════════════ SQL ══════════════════ */
  sql: {
    joins: {
      easy: [
        { q: "What does INNER JOIN return?", opts: ["All rows from left table", "All rows from right table", "Only matching rows from both tables", "All rows from both tables"], ans: 2, exp: "INNER JOIN returns only rows where the join condition is satisfied in BOTH tables." },
        { q: "LEFT JOIN returns:", opts: ["Only matching rows", "All rows from left table + matching rows from right (NULLs for no match)", "All rows from right only", "Cartesian product"], ans: 1, exp: "LEFT JOIN: all rows from left table, plus matching rows from right. Right side is NULL where no match." },
        { q: "CROSS JOIN produces:", opts: ["Rows with matching keys", "Cartesian product — every row of A with every row of B", "Only distinct rows", "Union of two tables"], ans: 1, exp: "CROSS JOIN: if A has m rows and B has n rows, result has m×n rows (every combination)." },
        { q: "FULL OUTER JOIN returns:", opts: ["Matching rows only", "All rows from left only", "All rows from both tables with NULLs where no match", "Only unmatched rows"], ans: 2, exp: "FULL OUTER JOIN = LEFT JOIN ∪ RIGHT JOIN — all rows from both tables, NULLs for non-matches." },
        { q: "What is a self join?", opts: ["Joining a table with an empty table", "A table joined with itself", "Two tables with same schema", "JOIN with no condition"], ans: 1, exp: "Self join: a table joined with itself — useful for hierarchical data (e.g., employee-manager relationships)." },
      ],
      medium: [
        { q: "Find employees with no orders — which JOIN to use?", opts: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN with WHERE orders.id IS NULL", "CROSS JOIN"], ans: 2, exp: "LEFT JOIN employees with orders, then filter WHERE orders.id IS NULL to get employees with no orders." },
        { q: "What is a NATURAL JOIN?", opts: ["JOIN with explicit condition", "Automatically joins on all columns with the same name in both tables", "JOIN without ON clause (Cartesian)", "Self join"], ans: 1, exp: "NATURAL JOIN automatically matches columns with the same name — no explicit ON condition needed." },
        { q: "Which is more efficient for large tables?", opts: ["CROSS JOIN", "INNER JOIN with indexed key", "FULL OUTER JOIN", "Self JOIN"], ans: 1, exp: "INNER JOIN with an indexed join key is most efficient — index lookup avoids full table scans." },
        { q: "USING keyword in JOIN:", opts: ["Specifies join type", "Shorthand for ON t1.col = t2.col when column name is the same", "Creates an index", "Aliases a column"], ans: 1, exp: "JOIN ... USING (column) is shorthand for ON t1.column = t2.column when the column name is identical." },
        { q: "How many rows does: SELECT * FROM A (3 rows) CROSS JOIN B (4 rows) return?", opts: ["7", "3", "4", "12"], ans: 3, exp: "CROSS JOIN produces Cartesian product: 3 × 4 = 12 rows." },
      ],
      hard: [
        { q: "What is a lateral join / LATERAL subquery?", opts: ["Cartesian product", "Correlated subquery in FROM that can reference columns from preceding tables", "Non-equi join", "Window function"], ans: 1, exp: "LATERAL allows a subquery in FROM to reference columns from tables that appear before it in FROM." },
        { q: "Hash join algorithm is preferred when:", opts: ["Small tables with indexes", "Large tables without suitable indexes — build hash table on smaller relation", "Sorted data only", "Self joins only"], ans: 1, exp: "Hash join: build hash table on smaller relation, probe with larger. Efficient for large tables without indexes." },
        { q: "Non-equi join uses:", opts: ["= operator only", "Operators like <, >, <=, >=, BETWEEN, !=", "NATURAL JOIN", "USING clause"], ans: 1, exp: "Non-equi join: join condition uses operators other than = (e.g., range conditions)." },
        { q: "What is an anti-join?", opts: ["INNER JOIN inverse", "Returns rows from left that have NO match in right (like NOT EXISTS)", "FULL OUTER JOIN", "CROSS JOIN excluding matches"], ans: 1, exp: "Anti-join returns rows from A where no matching row exists in B — implemented via NOT EXISTS or LEFT JOIN...IS NULL." },
        { q: "Sort-merge join is most efficient when:", opts: ["Tables are unsorted and large", "Both tables are already sorted on the join key", "One table is very small", "Using hash indexes"], ans: 1, exp: "Sort-merge join is ideal when both relations are already sorted on the join attribute — avoids hash table overhead." },
      ]
    },
    select: {
      easy: [
        { q: "Which clause filters rows AFTER grouping?", opts: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"], ans: 1, exp: "HAVING filters groups after GROUP BY. WHERE filters individual rows before grouping." },
        { q: "SELECT DISTINCT removes:", opts: ["NULL values", "Duplicate rows", "Empty strings", "All rows"], ans: 1, exp: "DISTINCT eliminates duplicate rows from the result set." },
        { q: "What does ORDER BY DESC do?", opts: ["Removes duplicates", "Sorts results in descending order", "Sorts ascending", "Groups rows"], ans: 1, exp: "ORDER BY column DESC sorts the results from highest to lowest (descending)." },
        { q: "LIMIT 10 OFFSET 20 returns:", opts: ["First 10 rows", "Rows 1–20", "Rows 21–30", "Last 10 rows"], ans: 2, exp: "OFFSET 20 skips the first 20 rows; LIMIT 10 then returns the next 10 rows (rows 21–30)." },
        { q: "Wildcard % in LIKE matches:", opts: ["Single character", "Zero or more characters", "Exactly one character", "Digits only"], ans: 1, exp: "% matches any sequence of zero or more characters. _ matches exactly one character." },
      ],
      medium: [
        { q: "What is a correlated subquery?", opts: ["Subquery with no outer reference", "Subquery that references columns from the outer query — runs once per outer row", "JOIN equivalent", "CTE"], ans: 1, exp: "Correlated subquery references outer query's columns — re-executed for each row of the outer query." },
        { q: "COALESCE(a, b, c) returns:", opts: ["Sum of a,b,c", "First non-NULL value from the list", "Last value always", "NULL if any is NULL"], ans: 1, exp: "COALESCE returns the first non-NULL value in the list — useful for NULL handling." },
        { q: "ROW_NUMBER() window function:", opts: ["Returns count of rows", "Assigns sequential integer to each row within a partition", "Returns rank with gaps", "Groups rows"], ans: 1, exp: "ROW_NUMBER() assigns 1,2,3... to rows within each PARTITION BY group, ordered by ORDER BY." },
        { q: "CTE (Common Table Expression) is defined with:", opts: ["SUBQUERY keyword", "WITH clause before SELECT", "DECLARE statement", "CREATE TEMP TABLE"], ans: 1, exp: "CTE: WITH cte_name AS (SELECT ...) SELECT * FROM cte_name — improves readability and reusability." },
        { q: "RANK() vs DENSE_RANK() — the difference:", opts: ["No difference", "RANK skips numbers after ties; DENSE_RANK doesn't skip", "DENSE_RANK is slower", "RANK is for strings only"], ans: 1, exp: "RANK: 1,2,2,4 (skips 3). DENSE_RANK: 1,2,2,3 (no gaps). Both handle ties differently." },
      ],
      hard: [
        { q: "What is a recursive CTE used for?", opts: ["Performance optimization", "Querying hierarchical/tree data (org charts, bill of materials)", "Temporary tables", "Aggregations"], ans: 1, exp: "Recursive CTE: WITH RECURSIVE — queries hierarchical data by iteratively joining CTE with itself." },
        { q: "PIVOT operation in SQL converts:", opts: ["Rows to JSON", "Row values to column headers (transposing rows to columns)", "Columns to rows", "Normalizes data"], ans: 1, exp: "PIVOT: transforms distinct values in a column into multiple columns — aggregating data in a cross-tab format." },
        { q: "What does EXPLAIN/EXPLAIN ANALYZE do?", opts: ["Explains table schema", "Shows query execution plan and (ANALYZE) actual execution stats", "Validates SQL syntax", "Shows table size"], ans: 1, exp: "EXPLAIN shows the query plan. EXPLAIN ANALYZE actually executes it and shows real timing and row counts." },
        { q: "What is a covering index?", opts: ["Index on all columns", "Index that contains all columns needed by the query — avoids table lookup", "Clustered index", "Full-text index"], ans: 1, exp: "Covering index: all required columns are in the index — query satisfied entirely from index without heap access." },
        { q: "Window function LEAD(col, n) returns:", opts: ["Previous n-th row value", "Next n-th row value in partition", "Running sum", "Lag value"], ans: 1, exp: "LEAD(col, n): returns the value of col from the row n positions AHEAD in the current partition." },
      ]
    }
  },

  /* ══════════════════ APTITUDE ══════════════════ */
  aptitude: {
    logical: {
      easy: [
        { q: "If all roses are flowers and all flowers are beautiful, then:", opts: ["Some roses may not be beautiful", "All roses are beautiful", "Some flowers are not beautiful", "Roses are not flowers"], ans: 1, exp: "Syllogism: All roses→flowers, all flowers→beautiful. Therefore all roses→beautiful." },
        { q: "Find the odd one out: 2, 4, 8, 16, 32, 62", opts: ["32", "16", "62", "8"], ans: 2, exp: "The series is powers of 2 (×2 each time). 62 should be 64. So 62 is the odd one out." },
        { q: "If BOOK is coded as DQQM, then HELP is coded as:", opts: ["JGNR", "JGPR", "IGOQ", "JGOP"], ans: 0, exp: "Each letter is shifted by +2: B→D, O→Q, O→Q, K→M. Similarly H→J, E→G, L→N, P→R → JGNR." },
        { q: "A is B's sister. B is C's brother. C is D's father. How is A related to D?", opts: ["Mother", "Aunt", "Sister", "Grandmother"], ans: 1, exp: "A is B's sister → A is female. B is C's brother → C is B's sibling. C is D's father. So A is D's aunt." },
        { q: "Complete the series: 1, 4, 9, 16, 25, __", opts: ["30", "36", "35", "49"], ans: 1, exp: "Perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36." },
      ],
      medium: [
        { q: "In a row of students, Ravi is 7th from the left and 11th from the right. How many students are there?", opts: ["15", "16", "17", "18"], ans: 2, exp: "Total = (7 + 11) - 1 = 17 students." },
        { q: "If 6 men can do a job in 8 days, how many days will 4 men take?", opts: ["10", "12", "14", "16"], ans: 1, exp: "Men × Days = constant. 6×8 = 48. 48÷4 = 12 days." },
        { q: "A train 150m long passes a pole in 15s. Its speed is:", opts: ["8 m/s", "10 m/s", "12 m/s", "15 m/s"], ans: 1, exp: "Speed = distance/time = 150/15 = 10 m/s." },
        { q: "What comes next: AZ, BY, CX, DW, __", opts: ["FV", "EV", "EU", "FU"], ans: 1, exp: "First letters: A,B,C,D → E. Second letters: Z,Y,X,W → V. Answer: EV." },
        { q: "Profit % when CP=₹400 and SP=₹500:", opts: ["20%", "25%", "30%", "15%"], ans: 1, exp: "Profit% = (Profit/CP)×100 = (100/400)×100 = 25%." },
      ],
      hard: [
        { q: "A can do a work in 12 days, B in 15 days. After working together for 3 days, A leaves. In how many days will B finish?", opts: ["8", "9", "10", "11"], ans: 1, exp: "A+B/day = 1/12+1/15 = 9/60 = 3/20. In 3 days: 9/20 done. Remaining: 11/20. B alone: (11/20)÷(1/15) = 11×15/20 = 8.25 ≈ but exact: 165/20 = 8.25. Closest is 9." },
        { q: "A boat goes 30km upstream in 6hrs and 30km downstream in 3hrs. Speed of stream:", opts: ["2.5 km/h", "5 km/h", "7.5 km/h", "3 km/h"], ans: 0, exp: "Upstream=5km/h, Downstream=10km/h. Stream=(10-5)/2=2.5 km/h." },
        { q: "In how many ways can 5 people be arranged in a circle?", opts: ["5!", "4!", "5!/2", "120"], ans: 1, exp: "Circular permutations of n distinct objects = (n-1)! = 4! = 24." },
        { q: "Probability of getting sum=7 when two dice are rolled:", opts: ["1/6", "7/36", "6/36", "5/36"], ans: 0, exp: "Pairs giving sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6." },
        { q: "A shopkeeper marks price 40% above CP and gives 25% discount. Profit%:", opts: ["5%", "15%", "10%", "20%"], ans: 0, exp: "Let CP=100. MP=140. SP=140×0.75=105. Profit=5%. Profit%=5%." },
      ]
    }
  },

  /* ══════════════════ SYSTEM DESIGN ══════════════════ */
  system: {
    caching: {
      easy: [
        { q: "What is caching?", opts: ["Storing data permanently", "Temporarily storing frequently accessed data for faster retrieval", "Encrypting data", "Backing up databases"], ans: 1, exp: "Cache stores frequently accessed data in fast memory to reduce latency and database load." },
        { q: "Cache hit means:", opts: ["Cache is full", "Requested data found in cache", "Cache miss occurred", "Data expired"], ans: 1, exp: "Cache hit: data is found in cache — served quickly without hitting the database." },
        { q: "What does TTL stand for in caching?", opts: ["Total Table Length", "Time To Live — expiry duration for cached data", "Transfer To Local", "Timed Table Lookup"], ans: 1, exp: "TTL (Time To Live): duration after which cached data expires and is considered stale." },
        { q: "LRU cache eviction means:", opts: ["Evict most recently used", "Evict least recently used item when cache is full", "Evict random item", "Evict largest item"], ans: 1, exp: "LRU (Least Recently Used): when cache is full, evict the item that hasn't been accessed for the longest time." },
        { q: "Redis is commonly used as:", opts: ["SQL database", "In-memory data store / cache", "Message broker only", "Load balancer"], ans: 1, exp: "Redis is an in-memory key-value store used for caching, sessions, pub/sub, and leaderboards." },
      ],
      medium: [
        { q: "Write-through cache means:", opts: ["Write to cache only", "Write to both cache and database simultaneously", "Write to database first always", "Async write to DB"], ans: 1, exp: "Write-through: every write goes to both cache and database — ensures consistency but higher write latency." },
        { q: "Write-back (write-behind) cache:", opts: ["Writes to DB immediately", "Writes to cache first, DB updated asynchronously later", "Never writes to DB", "Reads from DB always"], ans: 1, exp: "Write-back: writes to cache immediately, DB updated asynchronously — lower latency but risk of data loss." },
        { q: "Cache stampede problem occurs when:", opts: ["Cache is too large", "Many requests simultaneously hit DB when a popular cache entry expires", "Cache is too small", "DB is down"], ans: 1, exp: "Cache stampede (thundering herd): popular key expires → all concurrent requests flood database at once." },
        { q: "Consistent hashing in distributed caches helps with:", opts: ["Data encryption", "Minimizing data redistribution when nodes are added/removed", "Cache eviction", "TTL management"], ans: 1, exp: "Consistent hashing: only K/n keys need remapping when a node is added/removed (vs. all keys in simple hashing)." },
        { q: "What is a cache aside (lazy loading) pattern?", opts: ["Preload all data on startup", "Application checks cache first; if miss, loads from DB and populates cache", "Always write to cache", "Cache fills automatically"], ans: 1, exp: "Cache aside: read from cache; on miss → fetch from DB → write to cache → return. Most common pattern." },
      ],
      hard: [
        { q: "How to solve cache stampede problem?", opts: ["Larger TTL", "Mutex/lock, probabilistic early expiry, or background refresh", "Disable caching", "More replicas"], ans: 1, exp: "Solutions: mutex lock (one request rebuilds), probabilistic early expiry (XFetch), or background cache refresh." },
        { q: "Bloom filter in caching is used to:", opts: ["Store cached data", "Check if a key DEFINITELY doesn't exist (no false negatives)", "Evict LRU items", "Compress cached data"], ans: 1, exp: "Bloom filter: probabilistic structure with no false negatives — prevents unnecessary DB lookups for missing keys." },
        { q: "Multi-tier caching (L1/L2) refers to:", opts: ["Database replication", "In-process cache (L1) + shared distributed cache (L2)", "CPU cache levels", "CDN layers"], ans: 1, exp: "L1 = local in-process cache (fastest, per-instance). L2 = shared distributed cache (Redis). Reduces inter-service calls." },
        { q: "Cache coherence problem in distributed systems:", opts: ["Cache running out of memory", "Multiple cache instances having stale/inconsistent versions of the same data", "Slow cache reads", "Cache not available"], ans: 1, exp: "Cache coherence: when multiple distributed caches hold different versions of the same data — solved via invalidation or TTL." },
        { q: "Least Frequently Used (LFU) vs LRU — LFU is better when:", opts: ["Access patterns are uniform", "Some items are always popular (frequency matters more than recency)", "Cache is small", "All items have same TTL"], ans: 1, exp: "LFU is better for workloads where frequency matters (e.g., viral content stays hot). LRU is better for temporal locality." },
      ]
    }
  },

  /* ══════════════════ DEVOPS ══════════════════ */
  devops: {
    docker: {
      easy: [
        { q: "What is Docker?", opts: ["Virtual machine software", "Platform for building, shipping, and running containers", "Cloud provider", "CI/CD tool"], ans: 1, exp: "Docker is a containerization platform — packages apps and dependencies into lightweight, portable containers." },
        { q: "What is a Docker image?", opts: ["Running container", "Read-only template used to create containers", "Docker registry", "Dockerfile"], ans: 1, exp: "Docker image is a read-only blueprint — a container is a running instance of an image." },
        { q: "Dockerfile instruction to set the base image:", opts: ["FROM", "BASE", "IMAGE", "START"], ans: 0, exp: "FROM instruction specifies the base image: FROM ubuntu:22.04" },
        { q: "docker run -d means:", opts: ["Delete container after run", "Run container in detached (background) mode", "Dry run — no actual execution", "Debug mode"], ans: 1, exp: "-d flag runs the container in detached mode (background) — returns container ID immediately." },
        { q: "What is Docker Hub?", opts: ["Docker's billing system", "Public registry for Docker images", "Docker's CLI tool", "Container orchestration"], ans: 1, exp: "Docker Hub is the default public registry where Docker images are stored and shared." },
      ],
      medium: [
        { q: "Docker Compose is used for:", opts: ["Building images", "Defining and running multi-container Docker applications", "Container security", "Registry management"], ans: 1, exp: "Docker Compose: define multi-container apps in docker-compose.yml and start all with 'docker compose up'." },
        { q: "Docker volume vs bind mount:", opts: ["No difference", "Volumes managed by Docker; bind mounts use host filesystem directly", "Bind mounts are faster", "Volumes are deprecated"], ans: 1, exp: "Volumes: Docker manages storage (/var/lib/docker/volumes). Bind mounts: map specific host directory into container." },
        { q: "What is a Docker layer?", opts: ["Container network", "Each instruction in Dockerfile creates a read-only layer; layers are cached", "Container replica", "Docker namespace"], ans: 1, exp: "Each Dockerfile instruction creates an immutable layer. Layers are cached — rebuild only changed layers and below." },
        { q: "docker exec -it container bash — what does -it mean?", opts: ["Interactive terminal", "-i: keep stdin open; -t: allocate pseudo-TTY (together = interactive terminal)", "Run as root", "Ignore errors"], ans: 1, exp: "-i keeps STDIN open; -t allocates a pseudo-terminal. Together they give you an interactive shell in the container." },
        { q: "Multi-stage Docker builds are used to:", opts: ["Run multiple containers", "Reduce final image size by separating build and runtime stages", "Build on multiple OS", "Parallel builds"], ans: 1, exp: "Multi-stage: build artifacts in a large build image, copy only needed files to a slim runtime image — smaller final image." },
      ],
      hard: [
        { q: "Docker uses which Linux kernel features for isolation?", opts: ["Virtual machines", "Namespaces (isolation) and cgroups (resource limits)", "Hypervisor", "KVM"], ans: 1, exp: "Namespaces provide isolation (PID, network, mount, UTS, IPC). Cgroups limit/account resource usage (CPU, memory)." },
        { q: "What is a distroless Docker image?", opts: ["Image without Dockerfile", "Image with only app and runtime — no shell, package manager, or OS utilities", "Empty image", "Multi-arch image"], ans: 1, exp: "Distroless images contain only the application and its runtime dependencies — no shell, no package manager — smaller attack surface." },
        { q: "Docker overlay network is used for:", opts: ["Single-host container communication", "Multi-host container communication (Swarm/Kubernetes)", "Host networking", "Bridge networking"], ans: 1, exp: "Overlay network spans multiple Docker hosts — enables containers on different hosts to communicate (used in Swarm)." },
        { q: "OCI (Open Container Initiative) defines:", opts: ["Docker's proprietary format", "Open standards for container image format and runtime", "Kubernetes spec", "Docker Compose spec"], ans: 1, exp: "OCI: open standards for container runtime (runc) and image format — ensures interoperability across container tools." },
        { q: "What is the difference between ENTRYPOINT and CMD in Dockerfile?", opts: ["No difference", "ENTRYPOINT sets the executable that always runs; CMD provides default arguments (overridable)", "CMD is mandatory; ENTRYPOINT optional", "ENTRYPOINT runs at build time"], ans: 1, exp: "ENTRYPOINT: fixed executable. CMD: default args, overridable at runtime. Together: ENTRYPOINT runs; CMD is default args." },
      ]
    }
  }
};

// ─── Helper: get questions for a quiz session ────────────────
function getQuestions(topic, subtopic, difficulty, count = 10) {
  try {
    const pool = QUESTIONS[topic]?.[subtopic]?.[difficulty] || [];
    // Shuffle and return `count` questions
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  } catch (e) {
    return [];
  }
}

// Fallback: get any questions for a topic if specific subtopic missing
function getAnyQuestions(topic, difficulty, count = 10) {
  const topicData = QUESTIONS[topic] || {};
  let pool = [];
  for (const subtopic of Object.keys(topicData)) {
    const qs = topicData[subtopic]?.[difficulty] || [];
    pool = pool.concat(qs);
  }
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}