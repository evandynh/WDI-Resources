# Student Answers

## Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It only compares two numbers at a time, starting at the beginning of a list. Each time it finds a number less than the previous number, it swaps those numbers and compares each number before it to find it’s correct postion.

Example:

```let's say we have the numbers 1, 3, 4, 2
1. we compare 1 and 3. 1 is less than three so they are in the correct position and we move to the next pair.
2. we compare 3, and 4. 3 is less than 4 so we move to the next comparison.
3. we compare 4 and 2. 2 is less than 4, so 2 is moved in front of 4 like so 1, 3, 2, 4. We then go back to check if two is in the right position.
4. we compare 3 and 2. 2 is still less than 3 so we move 2 in front of 3 like so 1, 2, 3, 4. 
5. we compare 1 and 2. 1 is less than 2 so we have found the correct spot. 
```
javascript example:

```
function sort(values) {
 var length = values.length;
 for(var i = 1; i < length; ++i) {
   var temp = values[i];
   var j = i - 1;
   for(; j >= 0 && values[j] > temp; --j) {
     values[j+1] = values[j];
   }
   values[j+1] = temp;
 }
};
sort([7, 4, 5, 2, 9, 1]);
```

Pros

```
1. uses O(1) or O(n) comparisons
2. sorts lists as it receives them.
3. sorts pre-sorted lists quickly
4. only requires a constant amount of additional memory space.
```
Cons

```
1. can't handle large data list efficiently
2. doesn't handle reverse sorting well.
```

## Bubble Sort

What it is:
Bubble sort is a sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.  It is 1/5 slower than an Insertion Sort, and its O Notation performance is listed as O(n<sup>2</sup>). However, in computer graphics bubble sort is popular for its capability to detect a very small error.

Pros:

* memory efficient
* stable (order of identical items doesn't change)
* easy to implement

Cons: 

* time inefficient (VERY slow)
* doesn't deal well with large data sets
* average sort time almost increases exponentially as number of table elements increase

Example Code:

```
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(a)
{
    var swapped;
    // do-while loop will loop until you make a loop without swapping any values
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                // Using a temp value to swap a[i] and a[i+1]
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log(a);
```

More info:
http://interactivepython.org/courselib/static/pythonds/SortSearch/TheBubbleSort.html

## Merge Sort

* The Gist: 
    * Divide and Conquer to sort
    * Step 1 − if it is only one element in the list it is already sorted, return.
    * Step 2 − divide the list into two halves until it can no longer be divided.
    * Step 3 − merge the smaller lists into new list in sorted order.

* Real-World Analogy:
    * Sort people by age
* Is it good?
    * Very respected
    * O(log n)
    * Pros
        * Finite number of times you have to split it.  Not going to have to double it if there's twice as many numbers. 
        * Worst case run time is same as it's average run time
    * Cons
        * If a list is almost sorted, it will still take the same amount of steps to sort no matter what. 
* Sample
    * [5][1][2][7][9][3][15][6]
        * [1][5][2][7]      [9][3][15][6]
            * [1][5]     [2][7]    [9][3]    [15][6]
                * [1]    [5]   [2]    [7]    [9]   [3]   [15]   [6]
                    * [1][5]  [2][7]  [3][9]  [6][15]
                        * [1][2][5][7]  [3][6][9][15]
                            * [1][2][3][5][6][7][9][15]

```
function mergeSort (arr) {    
    if (arr.length < 2) return arr
    
    var mid = Math.floor(arr.length /2)
    var subLeft = mergeSort(arr.slice(0,mid))
    var subRight = mergeSort(arr.slice(mid))
    
    return merge(subLeft, subRight)
}

function merge (a,b) {
    var result = []
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift())
    return result.concat(a.length? a : b)
}

var test = [5,1,2,7,9,3,15,6]
console.log(mergeSort(test))
```

## Selection Sort

Gist: Sorting algorithm is an in-place comparison sort. It is designed to find the minimum element and puts it at the beginning and maintains 2 subarrays. One that holds sorted items left to right and another that holds the unsorted items. Initially, the sorted subarry is empty and the unsorted sublist is the entire list of items to be sorted. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the subarry boundaries one element to the right.

Real World Analogy: Find the smallest card and swap it with the first card. Find the second smallest card, swap it with the second card. Find the third-smallest card and swap it with the thrid card. Repeat finding the next-smallest card and swapping it into the correct position until the array is sorted.

Pros: does not depend on the initial arragement of the data, good when data moves are costly but comparisons are not.

Cons: comparisons required is an O(n2) and is only appropriate for a small n.

Time Complexity: o(n<sup>2</sup>), inefficient for large lists.