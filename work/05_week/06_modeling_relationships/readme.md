# Modeling Relationships

### Objectives
*After this lesson, SWBAT:*

- Identify types of model relationships
- Build ERDs for app ideas to translate real world situations into code

### Preparation
*Before this lesson, students should already be able to:*

- Create models that inherit from ActiveRecord
- Describe a relational database

## Why are relationships important? Intro

A hefty part of designing a relational database is dividing the data elements into related tables. Normalizing data helps you to build more efficient apps and keep your data DRY, just like your code.

![Normalization](https://w3.cs.jmu.edu/mayfiecs/cs474_12sp/notes/normposter.jpg)

Once you're ready to start working with the data, you rely on relationships between the tables to pull the data together in meaningful ways. For instance, order information is useless unless you know which customer placed a particular order.

When you normalize data you don't store customer and order information in the same table; instead, you store order and customer data in two related tables and then use a *relationship* between the two tables to view each order and its corresponding customer information at the same time. If normalized tables are a relational database's foundation, then relationships are the cornerstone.

####Relationship types

An association, in this context, is a connection between two ActiveRecord models. Associations are implemented using macro-style calls, so that you can declaratively add features to your models. For example, by declaring that one model belongs_to another, you instruct your application to maintain Primary Key-Foreign Key information between instances of the two models, and you also get a number of utility methods added to your model. Basically, it writes your SQL for you!

There are 3 different kinds:

### One to One
- not frequently used, but important to know it's an option
- imagine a Library table `has_one` location, and a location `belongs_to` a specific library - that lets us look up solely by location, and see the connected library
- often, in situations like that, you can make the location an attribute of the library, but when a location has, for example, multiple fields (address 1, address 2, state, zip, etc.), it might make sense to create another table for addresses and set up a `has_one` relationship

### One to Many
- the most common type of database relationship
- an author `has_many` books, but a book `belongs_to` only one author

### Many to Many
- also very frequent
- a book probably `has_many` categories, and a category also probably `has_many` books

There are a couple of different ways to define a many to many relationship. Let's check out [the docs](http://guides.rubyonrails.org/association_basics.html) together.

Keep in mind, the `belongs_to` part always goes on the opposite side of the `has_many` or `has_one`. And the way it's stored is that the ID of the model that "has" something is stored in a field on the child, like "customer_id" or "author_id".  In our example with authors and books, the Book model `belongs_to` the Author model, while the Author, as mentioned, `has_many` books.

## Add Another Model to Our Buffy App

Last week, we built an app called `buffy_was_here_app` with one model: `Vampire`. Let's talk about how we would add another model for `Victim`, and draw an ERD.

#### What is an ERD?

ERD stands for Entity Relationship Diagram. It is a way for us to visualize our database structure and relationships before we create them. Since everything is based on data, it's important to start with a good domain model. **It's a lot easier to redo an ERD sketch than to drop a database and start over.**

## Practice Modeling Relationships

In the next module, you will be turning these relationships into code. Before that, we need to be able to model the domain.

## Domain Modeling

In groups of 3 (or 4) do the following:

For each of the following, read the domain description, then model the domain.
Identify classes, attributes and associations.  Draw out all entities and 
relationships. You will begin by drawing an ERD diagram and critically 
examining it.

Steps for Modeling

1. Write out how a system functions
  - vampires can attack victims
1. Identify Nouns and verbs
  - nouns: vampires, victims
  - verbs: attack
1. Turn nouns into entities or attributes on entities
1. Identify relationships between entities
1. Identify if relationships are actions or associations

Steps for Drawing ERDS

1. Draw boxes for classes.
1. Label boxes with singular names.
1. Write attributes in the boxes.
1. Draw lines for relationships.
1. Identify the type of relationship
1. Label lines with crosses and crows feet or 1s and asterisks for ownership.


#### Travel Log

A world travler would like you to build an app to replace their hand written 
journals.  When they explores various cities they like to record their findings 
in a travel journal.  Upon entering a city they record the date and time and 
their thoughts and feelings about the new city. Later they like to browse their 
journal by date or city and relive their time abroad.  They like to include 
pictures in their entries.

#### Photo Management App

A professional photographer needs a web app to help share her photographs with 
her clients. She often takes wedding photos, but also does couples and family 
photos. She keeps photos in an album for each event and shares the event with 
the appropriate client. She has many repeat clients.

#### Figure Skating

You are building an app to help with the Winter Olympics, specifically the 
figure skating event. Your app will keep track of the skaters from different 
countries and the scores they receive from each of the judges for each event.

#### National Parks

You are building an app for the National Parks department to reserve camp sites
at their different campgrounds around the country.  Users can make reservations
for up to three days at RV camp sites or tent camp sites. The parks department
would like users to login so that they can keep their emails on file.

#### Petndr

A start up would like to create a pet playdate app. Users will create pet profiles 
to view and like other pets. When two pets both like eachother they can
message eachother. A pet can create a play date for multiple animals
that all like eachother.

#### Wikipedia

Users can create new articles.  Users can edit articles to make updates. 
Different users can leave comments about edits to an article.  Users can 
browse a history of edits. 

## Conclusion (5 mins)

- What is normalization?
- List the three different types of relationships we've talked about today.
- What is one example of a relationship we could describe with the terms `has_many` and `belongs_to`?
- If an Author has many Books, which of those tables would contain a foreign key? What would that foreign key be?