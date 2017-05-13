# Big O in Action! Answers

Your answers might be different than these, but here are some answers for reference, in both ruby and javascript.

## log the first item in an array
```ruby
def log_first(arr)
	p arr[0]
end
```

```javascript
function logFirst(arr) {
    console.log(arr[0])
}
```

Big O Notation: O(1)

## log the last item in an array

```ruby
def log_last(arr)
	p arr[arr.length-1]
end
```

```javascript
function logLast(arr) {
    console.log(arr[arr.length -1])
}
```

Big O Notation: O(1)

## print out every item in an array

```ruby
def log_each(arr)
	arr.each do |item|
	    p item
	end
end
```

```javascript
function logEach(arr) {
    for (i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

Big O Notation: O(n)

## repeatedly halve an input until it is less than 1

```ruby
def halve_it(val)
	until val < 1 do
	    val /= 2
	end
	p val
end
```

```javascript
function halveIt(val) {
    while (val >= 1) {
        val /= 2
    }
    console.log(val)
}
```

Big O Notation: O(log n)

## multiply input by itself

```ruby
def square_it(n)
	n*n
end
```

```javascript
function squareIt(n) {
	return n*n
}
```

Big O Notation: O(1)

## my_turn_to_be_uppercase(arr) or myTurnToBeUppercase(arr)

```ruby
def my_turn_to_be_uppercase(arr)
   arr.each do |outside_item|
        arr.each do |inside_item|
           if inside_item == outside_item
               inside_item = inside_item.upcase
           end
           p "#{inside_item}"
        end
        p "------"
   end
end
```

```javascript
function myTurnToBeUppercase(arr) {
    for(i=0; i<arr.length; i++) {
        for(j=0; j<arr.length; j++) {
            if (j==i) {
                arr[j] = arr[j].toUpperCase()
            } else {
                arr[j] = arr[j].toLowerCase()
            }
            console.log(arr[j])
        }
        console.log("------")
    }
}
```

Big O Notation: O(n<sup>2</sup>)

## `count_up_to(n)` or `countUpTo(n)`

#### This is an O(n^2) - pretty slooooow. You won't get the job with this :(
#### Actually, it's such a super freaky deaky way to solve the problem they'd probably hire you because your crazy little mind is so insane. 

#### ...But they'd only give you little bucks `$`

```ruby
def count_up_to(n)
    result = 0
    (1..n).each do |outer_num|
        (outer_num..n).each do |inner_num|
            result += 1
        end
    end
    result
end
```

```javascript
function countUpTo(n) {
    var result = 0
    for(i=1; i<= n; i++) {
        for(j=i; j<=n; j++) {
            result +=1
        }
    }
    return result
}
```

#### This is an O(n) solution. Not bad at all. If you did it this way, you should be proud of yourself. 
#### Good enough to get you the job, but only the medium bucks job `$$$`

```ruby
def count_up_to(n)
    result = 0
    (1..n).each do |num|
        result += num
    end
    result
end
```

```javascript
function countUpTo(n) {
    var result = 0
    for(i=1; i<= n; i++) {
        result +=i
    }
    return result
}
```

#### This is the O(1) solution. Only for straight up stone-cold time-travelling NASA geniuses from the future. 
#### You will DEFINITELY get the big bucks with this `$$$$$`

```ruby
def count_up_to(n)
    result = n*(n+1)/2
end

```

```javascript
function countUpTo(n) {
    return n*(n+1)/2
}
```
