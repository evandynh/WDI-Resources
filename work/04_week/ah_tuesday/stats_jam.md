# Stats Jam!

![](https://consequenceofsound.files.wordpress.com/2015/10/michael-jordan-space-jam.png?w%5Cu003d1200)

It's time to learn more about the illustrious 2011-12 NBA season! It's
going to be a Stats Jam!

### Setup

Copy the lab in to your working folder for the day. Then, **download the 
file [nba_season_2011-2012.sql](nba_season_2011-2012.sql) and save it there as well.**

Run your `nba_season_2011-2012.sql` file with the following commands to 
get the data you need for this lab:

```
createdb nba_stats_db
psql -d nba_stats_db -f nba_season_2011-2012.sql
```

### Answer the Questions

Create a new file `stats.sql` and use it as your answer sheet.

Keeping track of your answers in a file called `stats.sql`, figure 
out the appropriate SQL commands to return the following:

1.  All columns for all players from the New York Knicks (NYK).
2.  All columns for all players from the Indiana Pacers (IND) who are 
    under 26 years old.
3.  All columns for all players, ordered from least points scored to 
    most points scored.
4.  Name and Points per game (points/games), for the players with the 
    top 20 points per game.
5.  The average age for all players.
6.  The average age for all players on the Oklahoma City Thunder (OKC).
7.  The average age for all players who played more than 40 games.

### Bonus

Once you finish the above, you can try to add the following to your 
`stats.sql` file:

1.  The team and total points scored from all players on that team 
    (team points), ordered from most team points to least.
2.  The age and the average points per game for that age, ordered from 
    youngest to oldest for all ages.
3.  The team and the the number of players who score above 12 points per
    game on that team, ordered from the most number of players to the 
    least number of players.
