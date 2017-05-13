# Modeling Relationships Lab

### Objectives
*After this lab, SWBAT:*

- Build ERDs for app ideas to translate real world situations into code

### Preparation
*Before this lab, students should already be able to:*

- Understand data normalization
- Describe model relationships:
  - one to one
  - one to many
  - many to many

## Practice Modeling Relationships

Choose one app idea below. Complete domain modeling (directions below), then create a rails app with the models you defined in your ERD. Define relationships in the models and test that they are working in the `rails console`.

## Domain Modeling

In groups of 3 (or 4) do the following:

Choose one of the following, read the domain description, then model the domain.
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
