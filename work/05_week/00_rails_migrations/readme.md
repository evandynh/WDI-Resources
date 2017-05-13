# Rails Migrations

## Objectives

*After this lesson, SWBAT:*

- Understand what a migration is and how to generate one
- Practice generating migrations in a Ruby on Rails app

## What is a Rails Migration?

They aren't actually called Rails Migrations, they're called Active Record Migrations, but we're calling them Rails Migrations today because we're only talking about migrations in the context of Rails, not Sinatra or any other Ruby framework which also uses Active Record.

![migrating birds](https://media4.giphy.com/media/SUtPZfyDenHoY/200.gif)

From the [Rails Guides](http://guides.rubyonrails.org/v3.2/migrations.html):

> Migrations are a convenient way for you to alter your database in a structured and organized manner. You could edit fragments of SQL by hand, but you would then be responsible for telling other developers that they need to go and run them. You’d also have to keep track of which changes need to be run against the production machines next time you deploy.

> Active Record tracks which migrations have already been run so all you have to do is update your source and run `rake db:migrate`. Active Record will work out which migrations should be run. It will also update your `db/schema.rb` file to match the structure of your database.

Remember, you must *NEVER* type in or otherwise make manual changes to your schema.

![](https://media1.giphy.com/media/RZlKCwX2P8m9a/200.gif#32)  
   

The only way you can change the schema is with migrations.

In a nutshell: migrations alter your database. Migration files are generated when you generate a model and when you generate a migration to alter a model.

## Let's Check Out Some Migration Files!

Go to your workspace. Let's create a new Rails app.

`rails new good_migrations -T -d postgresql && cd good_migrations`

Since we're using a postgreSQL database, what command do we need to run to set it up initially?

### Migration Generated when Adding a Model

Now let's do a quick scaffold.

`rails g scaffold Song title`

Check in `/db/migrations`. There's a new migration file in there that looks like this:

```ruby
class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title

      t.timestamps
    end
  end
end
```

In order to make this change (creating the songs table) in our database, what command do we need to run?

### Migration Generated when Altering a Table

So far our songs table only has a column for title. Let's add another column for lyrics. Should we do that with SQL?  

![Arrested Development No](https://media4.giphy.com/media/js3SsYYvMiWLC/200.gif)  

Let's generate a migration!

*There are a few different ways we could do this, so we're going to create a few different migration files and delete them.* **Do not** *run `rake db:migrate` until I say to do so, or you'll end up with a messy database and/or errors.*

![](https://media2.giphy.com/media/l0MYSSCIrv8aUaBsQ/200.gif#17) 

#### The Basics

The basic command to generate a migration is `rails g migration` followed by the name of the migration. Theoretically, you could name it anything. Let's do that.

`rails g migration some_change_or_whatever`

Every migration file is named in the following format:
`YYYYMMDDHHMMSS_the_migration_name.rb`

That command will create a migration file that looks like this:

```ruby
class SomeChangeOrWhatever < ActiveRecord::Migration[5.0]
  def change
  end
end
```

That's not very useful! What is it doing? Nothing. Let's not write our migrations like that - delete that migration file.

**Note:** Don't delete a migration file after you run `rake db:migrate`. It could cause you a terrible headache.

![](https://media3.giphy.com/media/l2JehDjEHXkYkGiAg/200.gif#33)

#### Naming Conventions

The best way to name a migration is with what it's doing. For example, we want to add lyrics to our songs table, so a good name for our migration file would include that information.

`rails g migration AddLyricsToSongs`

That command creates a migration file that looks like this:

```ruby
class AddLyricsToSongs < ActiveRecord::Migration[5.0]
  def change
  end
end
```

Not much better than the last one as far as usefulness is concerned, but at least we know what we want it to do. Delete that one, too!

![](https://media0.giphy.com/media/vohOR29F78sGk/200.gif#8)

#### Adding Column Names

From the [Rails Guides](http://guides.rubyonrails.org/v3.2/migrations.html):

> If the migration name is of the form “AddXXXToYYY” or “RemoveXXXFromYYY” and is followed by a list of column names and types then a migration containing the appropriate add_column and remove_column statements will be created.

Sweet! Let's run that same command we just did, but with a column name, too.

`rails g migration AddLyricsToSongs lyrics`

That command creates a migration file that looks like this:

```ruby
class AddLyricsToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :lyrics, :string
  end
end
```

Now we're cooking with gas!  

![Training Day](https://media3.giphy.com/media/yzaQd2rY5HgPK/200.gif)

But, wait! I made lyrics as a string data type, I want it to be text. I can either delete my migration file and do it again, remembering to specify the data type this time, or I can just edit my migration file.

**Important note:** You can only edit a migration file *before* you run `rake db:migrate`. Once you run that command, the migration file should not be touched again. Forget it ever existed and move on with your life.

![](https://media0.giphy.com/media/IL7hXX77O5OIU/200.gif#3)

In this case, we haven't migrated yet, so let's edit the migration file. Simply change `:string` to `:text`. Let's go crazy! Let's add another column for `artist`.

Now the migration file should look like this:

```ruby
class AddLyricsToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :lyrics, :text
    add_column :songs, :artist, :string
  end
end
```

NOW we run `rake db:migrate`.

Go into the Rails console and type `Song.new`. You will see that songs have lyrics and artist attributes.

#### Removing a Column

Let's write a migration to remove the artist column from songs.

`rails g migration RemoveArtistFromSongs artist`

That command creates a migration file that looks like this:

```ruby
class RemoveArtistFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :artist, :string
  end
end
```

Run `rake db:migrate`. Go into your Rails console again. Do songs have an artist now?

#### Other Cool Tricks

What if you want to make a change to your database, but there's already data in it? Let's do that!

##### Your Task in Pairs:

- Make the necessary changes to your songs controller and form partial so that you can add songs with lyrics in the browser
- Add a few songs to your database

##### As a Class

Now that you have some songs, if we add another column to the songs table, you will have some songs with `nil` for the value of the new column. Let's take a look.

Add a released column to the songs table:

`rails g migration AddReleasedToSongs released:integer`

That command creates a migration file that looks like this:
	
```ruby
class AddReleasedToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :released, :integer
  end
end
```

Next, run `rake db:migrate`.

Now, go into your Rails console and look at the songs in your database. `released: nil` :(

Can we add a column without creating a `nil` value on every existing record in our database?

YES WE CAN!

![pokemon party hat](https://media2.giphy.com/media/lxyYQcCdOhV2E/200.gif)

First, let's get rid of the release date. How do we do that?

Now, let's add a new column for album and set the value for all previously created records in the song database.

`rails g migration AddAlbumToSongs album`

That command creates a migration file that looks like this:

```ruby
class AddAlbumToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :album, :string
  end
end
```

Before we migrate, let's add some sweet Ruby to the migration file.

```ruby
class AddAlbumToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :album, :string
    Song.all.each do |song|
      song.update_attributes! :album => 'Greatest Hits of Some Kind!'
    end
  end
end
```

Now, migrate. Go check your Rails console. This will be on every song you already had in your database: `album: "Greatest Hits of Some Kind!"`

![Hermione](https://media1.giphy.com/media/gT8F4peUvNYUo/200.gif)

Yes, we are, Hermione!

### What Else Can We Do?!

We've already gotten some practice adding and removing columns; now it's time to figure out how to rename columns and tables. Research `rename_column` and `rename_table` with a partner. 

- rename the songs table to tunes
- rename the title column to ditty

**Make sure whatever you find is relevant to Rails 5.0, since that's the version we're using.**

*Don't worry about references or foreign keys right now. We'll get into that later this week.*

What did you learn?

Renaming tables is a nightmare.

![](https://media.giphy.com/media/kUo4mBl85jDos/giphy.gif)

Just one more reason to plan your project *before* you start coding.

## Conclusion

- When is it okay to type in a migration file?
- When is it okay to type in your schema?
- When is it okay to delete a migration file?
- What command will create a migration file which removes the `album` column from the `tunes` table?
- What command will create a migration file which adds a column called `length` with data type `float` to the `tunes` table?
- What can we add to the migration file from the previous question that will add a default length of `3.5` to all songs that already existed in our database before we added the `length` column?