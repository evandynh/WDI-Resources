# Sort Algorithms

### Objectives

*SWBAT:*

- Identify different types of sort algorithms

[YouTube](https://www.youtube.com/watch?v=k4RRi_ntQc8)

[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

In groups, research the following sort algorithms:

- Insertion Sort
- Bubble Sort
- Merge Sort
- Selection Sort

For each algorithm, prepare and present the following:

- **The Gist** -- a paragraph or two describing what the algorithm is about and how it works.

- **Real-World Analogy** -- something to help us understand how the algorithm works by mirroring an activity or implementation we'd be familiar with.

- **Is It Good?** -- tell us about the pros and cons of this sort, its Big O performance, and when we might want to use it (or why we might not).

- **Sample** -- find (or write) a sample implementation in Ruby or JavaScript, and share it with the group.


*Make sure to write these down so you can slack them to the class and we can compile a shared reference!*

Activity time will follow -- you'll get to direct your classmates through the sorts you learned about in a real-life example.



## Insertion Sort


#### The Gist
With insertion sort, each item in an array steps out of its order, and inspects every element before it. Once it finds its place (before elements of greater value, after elements of lesser value), it stays, and it’s the next element’s turn. At the end of the sort, all elements are in ascending order.


#### Real-World Analogy
Sorting people into alphabetical order from a mixed list -- you’ll probably start at the top, then check each next name against a sorted “bank” made from already-used names, finally placing the name where it belongs in the order.


#### Is it good?

| Case | Performance |
| ------ | ----- |
| Worst case: |	O(n<sup>2</sup>) |
| Best case:	| O(n) |
| Average case:	| O(n<sup>2</sup>) |

It’s “expensive,” meaning that it takes no shortcuts, and -- in some cases, like a fully-reversed array -- every value must be moved/placed. On the plus side, it is more efficient than some other classic sorts (like bubble sort).

#### Javascript Sample
```javascript
/**
 * An insertion sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section
    
    for (i=0; i < len; i++) {
    
        // store the current value because it may shift later
        value = items[i];
        
        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }
    
    return items;
}
```

#### Ruby Sample

```ruby
class Array
 def insertionsort!
   1.upto(length - 1) do |i|
     value = self[i]
     j = i - 1
     while j >= 0 and self[j] > value
       self[j+1] = self[j]
       j -= 1
     end
     self[j+1] = value
   end
   self
 end
end


ary = [6, 1, 0, 8, 9, 3, 2, 5, 4, 7] # sample array (not part of insertionsort, just a validation)
p ary # prints the original array 
p ary.insertionsort! # prints the sorted array
```

## Merge Sort

#### The Gist

Merge-sort is based on the divide-and-conquer paradigm. It involves the following three steps:

1. Divide the array into two (or more) subarrays
2. Sort each subarray (Conquer)
3. Merge them into one (in a smart way!)

#### Real-World Analogy

Organizing a pile of comic books sequentially. Break into single issues, then start stacking those issues in order, then start stacking smaller piles into one big (sorted) pile.

#### Is it good?

| Case | Performance |
| ------ | ----- |
| Worst case: |	O(n log n) |
| Best case:	| O(n log n) |
| Average case:	| O(n log n) |

It generally performs faster (better) than the other sorts listed here. Great for working with slow media.

#### Javascript Sample
```javascript
/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param {Array} left The first array to merge.
 * @param {Array} right The second array to merge.
 * @return {Array} The merged array.
 */
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {Array} items The array to sort.
 * @return {Array} The sorted array.
 */
function mergeSort(items){

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    
    // Add the arguments to replace everything between 0 and last item in the array
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
}
```

#### Ruby Sample

```ruby
def mergesort(array)
    if array.count <= 1
        # Array of length 1 or less is always sorted
        return array
    end
 
    # Apply "Divide & Conquer" strategy
 
    # 1. Divide
    mid = array.count / 2
    part_a = mergesort array.slice(0, mid)
    part_b = mergesort array.slice(mid, array.count - mid)
 
    # 2. Conquer
    array = []
    offset_a = 0
    offset_b = 0
    while offset_a < part_a.count && offset_b < part_b.count
        a = part_a[offset_a]
        b = part_b[offset_b]
 
        # Take the smallest of the two, and push it on our array
        if a <= b
            array << a
            offset_a += 1
        else
            array << b
            offset_b += 1
        end
    end
 
    # There is at least one element left in either part_a or part_b (not both)
    while offset_a < part_a.count
        array << part_a[offset_a]
        offset_a += 1
    end
 
    while offset_b < part_b.count
        array << part_b[offset_b]
        offset_b += 1
    end
 
    return array
end
```


## Bubble Sort

#### The Gist
Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. 

#### Real-World Analogy/Is it good?

| Case | Performance |
| ------ | ----- |
| Worst case: |	O(n<sup>2</sup>) |
| Best case:	| O(n) |
| Average case:	| O(n<sup>2</sup>) |

There is no scenario in which a bubble sort is the most efficient way to sort (and, more often than not, it's much less efficient). In fact, many very influential people feel that it shouldn't be taught given how useless (and horrible) an algorithm it is.

BubbleSort is faster than InsertionSort on an array of 3 elements.
It is important to remember that Bubble Sort is not a 100% useless algorithm - if you have a sequence of objects that you would like to keep ordered that is occasionally perturbed by having the value of one or two objects increase or decrease, bubble sorting is a good thing.

#### Javascript Sample
```javascript
/**
 * Swaps two values in an array.
 * @param {Array} items The array containing the items.
 * @param {int} firstIndex Index of first item to swap.
 * @param {int} secondIndex Index of second item to swap.
 * @return {void}
 */
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
 
/**
 * A bubble sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function bubbleSort(items){

    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (items[j] > items[j+1]){
                swap(items, j, j+1);
            }
        }
    }
    
    return items;
}
```

#### Ruby Sample

```ruby
def bubble_sort(list)
    list.each_index do |i|
        swapped = false
        (list.length - i - 1).times do |job|
            if list[job] > list[job + 1]
                list[job], list[job + 1] = list[job + 1], list[job]
                swapped = true
            end
        end

        break if not swapped
    end
    list
end

list = [9, 0, 45, 3, 6, 7, 20, 19, 5]
p list
p bubble_sort(list)
```

## Selection Sort

#### The Gist

You sort through the entire array and find the smallest element before moving it to the front of the array. You then start at the second element and sort through the rest of the array until you find the next smallest element, which you move to the second spot in the array. You keep doing this until the array is sorted from smallest to largest.

#### Real-World Analogy
Sorting flashcards in alphabetical order. You go through the entire pile to find the card that comes first, and then you place it at the front of the pile. You then start at the second card and cycle through the entire pile looking for the card that comes next alphabetically. You place that behind the first card and then continue, cycling through the entire remaining pile each time as you look for the card that comes next alphabetically.

#### Is it good?

| Case | Performance |
| ------ | ----- |
| Worst case: |	O(n<sup>2</sup>) |
| Best case:	| O(n<sup>2</sup>) |
| Average case:	| O(n<sup>2</sup>) |

It is generally advised that you avoid the selection sort method because it is incredibly slow. However, it works well for very small arrays of 10 elements or less, and it is faster than the bubble sort.

#### Javascript Sample
```javascript
/**
 * Swaps two values in an array.
 * @param {Array} items The array containing the items.
 * @param {int} firstIndex Index of first item to swap.
 * @param {int} secondIndex Index of second item to swap.
 * @return {void}
 */
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
 
/**
 * A selection sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function selectionSort(items){

    var len = items.length,
        min, i, j;

    for (i=0; i < len; i++){
    
        // set minimum to this position
        min = i;
        
        // check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }
        
        // if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }
    
    return items;
}
```

#### Ruby Sample
```ruby
a = [9,8,6,1,2,5,4,3,9,50,12,11]
n = a.size - 1

n.times do |i|
  index_min = i

  (i + 1).upto(n) do |j|
    index_min = j if a[j] < a[index_min]
  end
  
  a[i], a[index_min] = a[index_min], a[i] if index_min != i
end
```