# These are the droids we're looking for

Practice creating classes that inherit from other classes!

Can you write code to accomplish the following?
Create a Ruby file called `droids.rb`

```
c3po = ProtocolDroid.new('C3PO')
r2d2 = AstromechDroid.new('R2D2')

c3po.is_a? Droid #=> true
r2d2.is_a? Droid #=> true

c3po.status #=> "Protocol Droid C3PO is currently powered off"
r2d2.status #=> "Astromech Droid R2D2 is currently powered off"

c3po.on!    #=> true
r2d2.on!    #=> true

c3po.status #=> "Hello Sir! Protocol Droid C3PO at your service."
r2d2.status #=> "Beep Bop Boop"
```
# Bonus

Create a new type of String class called ExcitedString.
It should have a method called "excited" that returns the string with an 
exclamation point. 

```
str = ExcitedString.new "Okay"
str.is_a? String #=> true
str.excited #=> "Okay!"
```

Create a new type of Array called UniqueArray.

It should be initialized with a data_type for that array.
We should only be able to push in objects of that data type.

```
numbers_array = UniqueArray.new Fixnum
numbers_array.push 'a'
numbers_array.push 5
numbers_array.include? 'a' #=> false
numbers_array.count #=> 1
```

# Bonuses

HTML DOM nodes all have similar properties.

```rb
class Node
    def initialize
        @children = []
    end
    def children
        @children
    end
    def appendChild(node)
        node.parent = self
        children.push(node)
    end
    def parent
        @parent
    end
    def parent=(node)
        @parent = node
    end
end
```

Using the above as a start, can you create the following classes that
inherit from Node?

A TextNode with a render method that returns a string

```
t = TextNode.new "Hello"
t.render #=> "Hello"
```

A Paragraph tag with a render method that returns a string formatted as HTML

```
p = PTag.new
p.innerText = "Hello"
p.render #=> "<p>Hello</p>"
```

An Anchor tag with a render method that returns a string formatted as HTML

```
a = ATag.new
a.innerText = "Google"
a.href = "http://www.google.com"
a.render #=> '<a href="http://www.google.com">Google</a>'
```

# Bonusers

Once the classes are set up, can you append them as children and render
a full string of HTML?

```
p.appendChild(a)
p.render #=> '<p><a href="http://www.google.com">Google</a></p>'
```

Can you create a `siblings` method on Node that returns all other nodes
that are children of that node's parent?

Can you ensure that it returns __just__ siblings of that node, and doesn't include
the original node?

```
n1 = Node.new
n2 = Node.new
n3 = Node.new
n4 = Node.new
n1.appendChild(n2)
n1.appendChild(n3)
n1.appendChild(n4)
n2.siblings.count #=> 2
```
